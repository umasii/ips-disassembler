const opcodes = require('./opcodes.js')

const decodeConstants = {
    "B": {
        "q": 4,
        "D": 6,
        "G": 8,
        "H": 10,
        "J": 12,
        "K": 14
    },
    "P": {
        "V": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        "W": 50
    }
}

module.exports = class Disassembler {
    constructor(bytecodeArr, decodedString) {
        this.bytecodeArr = bytecodeArr;
        this.decodedString = decodedString;

        this.branches = new Set();
        this.branchTraces = {};
        this.scannedBranches = new Set()

        this.functionPointers = new Set();
        this.scannedFunctions = new Set();
        this.functionTraces = {};

        this.scanned = {
            "step": new Set(),
            "scan": new Set()
        };
    }

    getRegister() {
        this.scanned[this.mode].add(this.state.ptr)
        return this.bytecodeArr[this.state.ptr++] >> 5
    }

    getValue() {
        var i, o, u, e
        this.scanned[this.mode].add(this.state.ptr)
        let f = this.bytecodeArr[this.state.ptr++]
        if (1 & f)
            // case if f is an odd number
            return f >> 1;
        if (f === decodeConstants.B.q)
            // case to retrieve float value
            return this.scanned[this.mode].add(this.state.ptr),
                this.scanned[this.mode].add(this.state.ptr + 1),
                e = this.bytecodeArr[this.state.ptr++],
                i = this.bytecodeArr[this.state.ptr++],
                o = 2147483648 & e ? -1 : 1,
                u = (2146435072 & e) >> 20,
                e = (1048575 & e) * Math.pow(2, 32) + (i < 0 ? i + Math.pow(2, 32) : i),
                2047 === u ? e ? NaN : 1 / 0 * o : (0 !== u ? e += Math.pow(2, 52) : u++,
                    o * e * Math.pow(2, u - 1075));
        if (f !== decodeConstants.B.D)
            // case to retrieve register value
            return f === decodeConstants.B.G || f !== decodeConstants.B.H && (f === decodeConstants.B.J ? null : f !== decodeConstants.B.K ? "reg" + (f >> 5) : void 0);
        // case to retrieve constant value
        this.scanned[this.mode].add(this.state.ptr)
        this.scanned[this.mode].add(this.state.ptr + 1)
        let n = this.bytecodeArr[this.state.ptr++]
        return this.decodedString.slice(n, n + this.bytecodeArr[this.state.ptr++]);
    }

    // creates a conditional branch given instruction pointer value to jump to, and adds it to the branches array for later disassembly.
    branch(ptr) {
        if (this.scannedBranches.has(ptr)) {
            return;
        }
        this.branches.add(ptr);
    }

    // creates a function given instruction pointer value to jump to, and adds it to the functionPointers array for later disassembly.
    function(ptr) {
        if (this.scannedFunctions.has(ptr)) {
            return;
        }
        this.functionPointers.add(ptr);
    }

    // Traverses the bytecode by following the instruction pointer, either linearly or recursively depending on this.mode
    // The current value of the instruction pointer is stored in this.state, along with the trace currently being built
    step(mode, ptr) {
        this.mode = mode;
        this.shouldStop = false;
        this.state = {
            ptr: ptr,
            trace: []
        }

        while (!this.shouldStop) {
            let ptr = this.state.ptr++;
            // records that we have scanned this ptr value
            this.scanned[mode].add(ptr);

            let opcode = opcodes[this.bytecodeArr[ptr]];

            if (!opcode || null === opcode.do) {
                this.state.trace.push("TERM");
                this.shouldStop = true;
            } else {
                opcode.do(this);
            }

            // reformat opcode trace to have the pointer value in front
            let op = this.state.trace[this.state.trace.length - 1];
            let newOp = ptr + " " + op;
            this.state.trace[this.state.trace.length - 1] = newOp;
        }

        return this.state.trace
    }

    // Calls step() on all functions and branches defined in the main trace, until no new functions or branches have been discovered
    // May make improvements to the branching logic later to reduce repeated non starting pointer instructions in branch traces
    scanPointers() {
        if (this.functionPointers.size > 0) {
            let fptr = this.functionPointers.values().next().value;
            this.functionPointers.delete(fptr);
            this.scannedFunctions.add(fptr);

            let ftrace = this.step("step", fptr);

            this.functionTraces[fptr] = ftrace;
            this.scanPointers();
        } else if (this.branches.size > 0) {

            let bptr = this.branches.values().next().value;
            this.branches.delete(bptr);
            this.scannedBranches.add(bptr);

            let btrace = this.step("step", bptr);

            this.branchTraces[bptr] = btrace;

            this.scanPointers();
        }
        if (this.functionPointers.size === 0 && this.branches.size === 0) {
            return { funcTraces: this.functionTraces, branchTraces: this.branchTraces }
        }
    }
}