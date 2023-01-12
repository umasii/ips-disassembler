# ips-disassembler

A repo to disassemble Kasada.io's virtual machine into an assembly like language.

## Get Started

```sh
git clone git@github.com:umasii/ips-disassembler.git
npm i
npm run start
```

The bytecode you'd like to disassemble should be placed in `bytecode/bytecode.txt`.

The resulting disassemblies are placed in `output`. Functions are found in `functions.json`, a linear sweep in `scan.json`, and the main function in `main.json`. Branches can be found in `branches.json`.

I've also written a (messy) graph style explorer for functions. You can view it at the following URL.

https://github.com/umasii/disassembler-graph-view

I've also written a few blog posts on how this was written. You can read them at https://nullpt.rs.
