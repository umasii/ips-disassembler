const fs = require("fs");
const decoder = require('./bytecode.js');
const disassembler = require('./disassembler.js');

const bytecode = fs.readFileSync("./bytecode/bytecode.txt", "utf8");

let decodedBytecode = decoder.decryptBytecode(bytecode);

// splices the string section of the bytecode
let stringIndex = decodedBytecode[decodedBytecode.length - 1] ^ decodedBytecode.length;
let bytecodeStrings = decodedBytecode.splice(stringIndex, decodedBytecode[stringIndex + 1] + 2);

let decodedStrings = decoder.decodeString(bytecodeStrings, [0]);

let MainDisassembler = new disassembler(decodedBytecode, decodedStrings);

console.log("Performing linear scan...");
let scan = MainDisassembler.step("scan", 1);
fs.writeFileSync("./output/" + "scan" + ".json", JSON.stringify(scan));
console.log("Linear scanning has recovered " + (MainDisassembler.scanned["scan"].size) + " out of " + decodedBytecode.length + " instructions.");

console.log("Starting recursive traversal");
console.log("Disassembling main function...");
let trace = MainDisassembler.step("step", 1);
fs.writeFileSync("./output/main.json", JSON.stringify(trace));

console.log("Disassembling functions and branches...");
let { funcTraces, branchTraces } = MainDisassembler.scanPointers();
fs.writeFileSync("./output/functions" + ".json", JSON.stringify(funcTraces));
fs.writeFileSync("./output/branches" + ".json", JSON.stringify(branchTraces));

console.log("Recursive traversal has recovered " + (MainDisassembler.scanned["step"].size) + " out of " + decodedBytecode.length + " instructions.");