---
title: Writing a program in MIPS
order: 320
---

No bss section
Still has .data and .text

Creating a variable
```asm
varName: .size value
length: .byte 5
```

Creating a string
`.ascii` is not null terminated, `.asciiz` is
```asm
varName: .ascii "Hello World"
varName: .asciiz "Hello World"
```

Creating an array
```asm
varName: .byte 5,6,3,4,7,3,4,3
varName: .space 8 (8 bytes)
varName: .float 0.0
```
