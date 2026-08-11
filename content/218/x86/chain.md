---
title: Tool Chain
order: 210
---

The assembler has two passes.

On the first pass:
- Create a symbol table
    Holds variable names, function names, macro names, functions, and labels
    This is why we cannot have multiple things with the same name
- Evaluate constants
    When you do cmp byte[x], NULL, it gets turned into cmp byte[x], 0
- Expand the macros

On the second pass:
- Final code evaluation
- Generate the list file
    A debugging file
    Holds machine code?
- Generate object file
    Code that is given to the executable

How to call the assembler:
```bash
yasm -g dwarf2 -f elf64 potato.asm -l potato.asm

-g dwarf2 		# generate debugging information
-f elf64 		# make sure the debugging information is in 64 bit
potato.asm 		# file name
-l potato.asm 	# generate the list file
```

The linker handles all external references in the code and generates the executable.

The loader moves the position from secondary memory to RAM.