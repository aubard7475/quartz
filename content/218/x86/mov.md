---
title: Move
order: 40
---
Consider the following code:
```cpp
int x =5;
int y;
y=x; // This is our movement command
```
We use the `mov <dest> <src>` command to do this, think of it as the replacement to the `=` sign.

This command [[deep copies]] the value from `<src>` into `<dest>`
> I am not sure if "deep copy" is the proper term for this, but I mean to say that it doesn't change the data in `<src>`

Consider the following code:
```asm
section .data
    five  dd 56
    fiveW dw 56
    fiveQ dq 56
    ; assume constants are defined
section .bss
    ; empty
section .text
    global _start
_start:
    mov rax, rdx          ; register to register
    mov rax, 56           ; immediate to register
    mov rax, fiveQ        ; address to register
    mov rax, qword[fiveQ] ; memory location to register
    ; exit program
    mov rax, SYS_exit
    mov rdi, EXIT_GOOD
    syscall
```
Notice the four different types of movement, this is important to remember.

You also cannot move between two places in memory.
The following code will NOT work:
```asm
mov word[cyrene], word[alice]
```
You must instead have a register in between:
```asm
mov ax, word[alice]
mov word[cyrene], ax
```
The above code will move the value in `alice` to `ax`, and then move the value from `ax` to `cyrene`.

# Pseudo-Casting
You cannot move between 2 different data sizes.

There are some instructions that will help you cast your data:
```asm
movzx rdx, word[fiveW] ; converts 16-bit value to a 64-bit value (unsigned)
movsx rdx, word[fiveW] ; converts 16-bit value to a 64-bit value (signed)
```
However, this cannot always convert a 32-bit value into a 64-bit value, depending on your operating system, so you might have to do the following:
```asm
movsxd rdx, dword[fiveD] ; converts a 32-bit value to a 64-bit value (signed)
```