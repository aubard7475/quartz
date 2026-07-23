---
title: Multiplication
tags: 60
---

Multiplication is weird because it only accepts one operand:
`mul <src>` (unsigned)
`imul <src>` (signed)

This operand will then be multiplied by `rax` (or any lower-bit version), with the result being stores in the two special registers:
`rax` (or any lower-bit version) will store the first half of the answer
`rdx` (or any lower-bit version) will store the second half of the answer (if applicable)

This is because multiplying two values together may exceed the limit of that data size, thus two registers are sometimes needed to store it.

# Examples

> Caution: The following examples are unchecked and may be incorrect. Verify important info.

Byte Multiplication
`al` => Number you are multiplying and lower 8 bits of result
`ah` => Upper 8 bits of result
`byte = byte * byte`
```asm
mov al, 10
mov bl, 9 ; bl can be any register
mul bl    ; this is the multiplication
; result lies in `al` and `ah`
; if you know my result does not overflow the 0-255 limit then you can ignore ah
; to save your value:
mov byte[answer], al
```
`word = Byte x Byte`
```asm
mov al, byte[x]
mul byte[y]
; first way to handle result:
mov byte[answer], al
mov byte[answer+1], ah
; (works because two bytes make up 1 word)
; second way to handle result:
mov word[answer], ax
```
Word Multiplication
`ax` => Number you are multiplying and lower 16 bits of result
`dx` => Upper 16 bits of result
`word = word * word`
```asm
mov ax, word[x]
mul word[y]
mov word[answer], ax
```
`dword = word * word`
```asm
mov r10, rdx ; preserving, unneeded i think
mov ax, word[x]
mul word[y]
mov word[answer], ax
mov word[answer+2], dx
mov rdx, r10 ; preserving, unneeded i think
```
`word = word * byte`
Need to extend the smallest size to the biggest available size in the equation
```asm
mov ax, word[x]
movzx cx, byte[y] ; extending
mul cx
mov word[answer], ax
```
`dword = word * byte`
```asm
movzx eax, word[x]
movzx ecx, byte[y]
mul ecx
mov dword[answer], eax ; will result 32 bit result
```
Dword Multiplication
`eax` => Number you are multiplying and lower 32 bits of result
`edx` => Upper 32 bits of result
`dword = dword * dword`
```asm
mov eax, dword[x]
mul dword[y]
mov dword[answer], eax
```
`qword = dword * dword`
```asm
mov eax, dword[x]
mul dword[y]
mov dword[answer], eax
mov dword[answer+4], edx
; or
mov rax, dword[x]
mov r11, dword[y]
mul r11
mov qword[answer], rax
```
Qword Multiplication
`rax` => Number you are multiplying and lower 64 bits of result
`rdx` => Upper 64 bits of result
```asm
qword = qword * qword
mov rax, qword[x]
mul qword[y]
mov qword[answer], rax
```
`dqword = qword * qword` (rare)
```asm
mov rax, qword[x]
mul qword[y]
mov qword[answer], rax
mov qword[answer+8], rdx
```
`qword = dword * byte`
```asm
movsxd rax, dword[x]
movsx r11, byte[y]
imul r11
mov qword[answer], rax
```
`qword = qword * byte`
```asm
mov rax, qword[x]
movzx r11, byte[y]
mul r11
mov qword[answer], rax
```
`qword = word * word`
```asm
movzx rax, word[x]
movzx rcx, word[y]
mul rcx
mov qword[answer], rax
```
`qword = qword * word`
```asm
mov rax, qword[x]
movzx rcx, word[y]
mul rcx
mov qword[answer], rax
```

