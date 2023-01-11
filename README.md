# ips-disassembler

A repo to disassemble Kasada.io's virtual machine into an assembly like language.

## Get Started

```sh
git clone git@github.com:umasii/ips-disassembler.git
npm i
npm run start
```

The bytecode you'd like to disassemble should be placed in `bytecode/bytecode.txt`.

The resulting disassemblies are placed in `output`. Functions are found in `functions.json`, a linear sweep in `scan.json`, and the main function in `main.json`.

Lastly, all opcode ranges not found by recursive traversal can be seen in `unscanned.json`, and branches can be found in `branches.json`, where the `branch.name` field corresponds to the branch pointer.
