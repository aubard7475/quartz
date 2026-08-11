---
title: MIPS Intro
order: 300
---

MIPS (Microprocessor without Interlocked Pipeline Stages) is a language like x86.
It uses the RISC architecture (Reduced instruction set of computing).
It is primarily used on Apple devices.

It is sortof a simplified version of x86, but with slightly different syntax and names.

# Registers
Unlike x86 where every register has its own name, MIPS just adds a number to the end.
Additionally, each register can hold any size in it.

Saved:
`$s0 - $s7`

Temp:
`$t0 - $t9`

Argument:
`$a0 - $a3`

Return:
`$v0` for lower 32 bits
`$v1` for upper 32 bits
but still only one register

Floating point:
`$f0 - $f31`

Stack
`$sp`

Frame
`$fp`

Return address
`$ra`

Contains the value 0:
`$zero`


# Terminology Change
| x86 | MIPS |
|-----|------|
|byte|byte|
|word|half-world|
|dword|word|