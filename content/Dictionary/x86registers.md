---
title: x86 Registers
tags: 0
aliases:
- register
- registers
---
| Function Usage | 64-bit (Qword) | 32-bit (Dword) | 16-bit (Word) | 8-bit (Byte) |
| -------------- | -------------- | -------------- | ------------- | ------------ |
| Return Value | rax | eax | ax | al |
| Callee Saved | rbx | ebx | bx | bl |
| 4th arg | rcx | ecx | cx | cl |
| 3rd arg | rdx | edx | dx | dl |
| 2nd arg | rsi | esi | si | sil |
| 1st arg | rdi | edi | di | dil |
| Callee Saved | rbp | ebp | bp | bpl |
| Stack Pointer | rsp | esp | sp | spl |
| 5th arg | r8 | r8d | r8w | r8b |
| 6th arg | r9 | r9d | r9w | r9b |
| temp | r10 | r10d | r10w | r10b |
| temp | r11 | r11d | r11w | r11b |
| Callee Saved | r12 | r12d | r12w | r12b |
| Callee Saved | r13 | r13d | r13w | r13b |
| Callee Saved | r14 | r14d | r14w | r14b |
| Callee Saved | r15 | r15d | r15w | r15b |
| Instruction Pointer | rip | - | - | - |

> Turns out, making a table in markdown is pretty easy, although I *do* miss the colors...

> [Here](https://aubard7475.github.io/quartz/images/registerimg.png) is the original version, which is probably easier to read.
