---
title: Intro to Registers
tags: 20
---

In x86, we cannot use our variables in order to perform operations.
Variables serve to read and write to, but not to do things such as addition and subtraction.

Instead, we use [[registers]]. You can ignore the "Function Usage" column for now.
There are 16 different registers you can choose from.
As you can see, each row of registers has 4 columns. This does not mean there are 64 registers, instead, it means that you can choose which part of each register you would like to access.

Consider we set `rax` = `0x1111 2222 3333 5444`
then `eax` = `0x3333 4544`
then `ax` = `0x5444`
then `al` = `0x44`
then `ah` = `0x54`
If we set `al` = `0x00` then rax becomes `0x1111222233334500`

Technically, almost everything *can* be done in the largest register (64-bit), however it is more efficent to use the lower registers if you do not need all that space.

Some registers are unique and should not be used in normal circumstances:
- `rsp`: points to the top of the stack 
- `rip`: points to the next instruction

Additionally, some registers are used in certain operations, such as multiplication and division:
- `rax`
- `rdx`

You can ignore these four for now, just know that they are special.
