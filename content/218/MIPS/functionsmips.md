---
title: Functions
order: 330
---

Functions are very simmilar to x86.
Remember to use the calling convention in [[Instruction Set]].
Floating point `$f12` goes in `$a0` and `$a1`.
so if you use `$f12` then you skip to `$a2`.

Creating a function:
```asm
.globl funcName
funcName:
    # some code here
jr $ra # jumps to $ra, which is where your code was before
```

Calling a function:
```asm
jal funcName
```