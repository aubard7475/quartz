---
title: Lanugage of the Computer
order: 09032026
---

Different number systems:
- Decimal
- Octal
- Hexadecimal
- Binary

The range of an `int` in C++ is $-2^31 \to 2^31 - 1$. This is because the leftmost bit is assigned for negative values.

Design principles:
1. Simplicity favors regularity
2. Smaller is faster
3. Make the common case fast
4. Good design demands good comprimise

# Simplicity favors regularity

MIPS/RISC commands use 3-register operands:
```asm
mov $s0, $s1
; is translated into
add $s0, $s1, $zero
```
```asm
$t0 = $t1 + $t2 + $t3
; this will not work
add $t0, $t1, $t2, $t3 
; this will work
add $t0, $t1, $t2
add $t0, $t0, $t3
```

# Smaller is faster

Should there be a lot of registers? Or few?
> [!abstract] Recall
> MIPS has 32 general purpose [[mipsintro|registers]].

If there are many registers, it takes more time to access those registers.

The registers in MIPS require 5 bits to store, since you need 5 bits to store the numbers 0 -> 31:
| Register | Register # | Binary |
| - | - | - |
| $t0 | 8 | 1000 |
| 2 | 31 |  1 0000 |

Thus, the less registers, the less space they take up and the faster they are to access.

## Instruction formats

MIPS has 3 different instruction formats:

### Register  (R-format) 

Deals with arithmetic and logic.

`Opcode - rs - rt - rd - Shift amount - Function`
The `Opcode` is always 0.
The `Function` determines which function it is (`add`, `sub`, etc)

Requires 32-bits

### Immediate (I-format)

Deals with arithmetic and logic.

`Opcode - rs - rt - Immediate`
The `Opcode` is always 0.
The `Function` determines which function it is (`add`, `sub`, etc)

Requires 32-bits

### Jump      (J-format)



# Make the Common Case Fast