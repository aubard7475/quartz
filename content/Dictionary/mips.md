---
title: MIPS
---
Saved:
- $s0 -\> $s7

Temp:
- $t0 -\> $t9

Arg:
- $a0 -\> $a3

Return:
- $v0 for lower 32
- $v1 for upper 32 but still only one register

Floating point:
- $f0 -\> $f31

Stack
- $sp

Frame
- $fp

Return address
- $ra

8-bit = byte (b)
16-bit = half-world (h)
32-bit = word (w)
64-bit = does not exist

lb/lh/lw \<dest\>, \<src\>
- Reads from \<src\> and writes to \<dest\> where \<src\> is a var

li \<dest\>, \<src\>
- Reads from \<src\> and writes to \<dest\> where \<src\> is an immediate

la \<dest\>, \<src\>
- Reads from \<src\> and writes to \<dest\> where \<src\> is an address

move \<dest\>, \<src\>
- Same as load, but for reg to reg

sb/sh/sw \<src\>, \<dest\>
- Reads from \<src\> and writes to \<dest\> where \<dest\> is a var

add \<dest\>, \<src1\>, \<src2\>
- \<dest\> = \<src1\> + \<src2\>
- sub, mul, div, rem are the same

Branch commands:
- b \<src1\>, \<src2\>, \<dest\>
- bgt, bge, blt, ble
- beq, bne
- Compares to zero: bgtz, bgez, bltz, blez

Declaring .data:
- \<varName\>: .\<size\> \<value\>
- ex: length: .byte 5
- \<varName\>: .space \<value\>
- ex: length: .space 5 (in bytes)

.globl \<label\>
label:
some code
jr $ra

jal \<funcName\>