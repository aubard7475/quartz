---
title: Instruction Set
order: 310
---

> Note: I think the thingy that colors the code doesn't really understand MIPS, so the coloring might be a little weird. I appologize for the inconvience.

# Reading & Writing

lw -> load word
lh -> load half-word
lb -> load byte
```asm
lw $s0, len # read from len and write to $s0
```

li -> load immediate
```asm
li $s0, 5 # set $s0 to 5
```

la -> load address
```asm
la $s0, arr # get the address of array and give it to $s0
```

move -> moves values between registers
```asm
move $t0, $s0 # read from $s0 and write to $t0
```

sw -> store word
sh -> store half-word
sb -> store byte
```asm
sw $s0, max # read from $s0 and write to max
```

# Math
ALl basic operations work the same, but with a different first word
`add, sub, mul, div, rem, abs`
```asm
add $s0, $t0, 5 # $s0 = $t0 + 5
```
Note: `rem` is its own command
subu, addu, etc are unsigned

# Jumping (called branching)
```asm
bge $t0, $t5, label
```
Note: all branch commands are 3 letters, so it is `bgt` instead of just `bg`

