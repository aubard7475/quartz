---
title: Addition & Subtraction
order: 50
---

Adding and subtracting works almost the same as moving.

`add <dest>, <src>`
Reads from `<dest>` and `<src>` and writes the sum of the two to `<dest>`

`sub <dest>, <src>`
Reads from `<dest>` and `<src>` and writes `<dest> - <sub>` to `<dest>`

Example:
```asm
add dword[y], 5 ; i.e.t. y+=5
add rax, 12     ; i.e.t. rax+=12
add rax, rdx    ; i.e.t. rax+=rdx
```

In order to do more advanced operations, such as `y=x+z`, you need to split it up into the most basic steps:
```asm
mov r10d, dword[z]
add dword[x], r10d ; i.e.t. x += z
mov r11d, dword[x]
mov dword[y], r11d ; i.e.t. y + x + z
```
Notice how registers are being used to store the inbetween steps.

That is all there is to know for addition and subtraction.

# Examples

> [!bug] The following examples are unchecked and may be wrong.

x = y + 5
```asm
add dword[y], 5 i.e.t. y += 5
mov r11d, dword[y]
mov dword[x], r11d i.e.t. x = y + 5
```
y++;
```asm
inc dword[y] or inc rax
```
x--;
```asm
dec dword[y] or dec rax
```
y = x + (z + 32)
```asm
add dword[z], 32 i.e.t. z + 32
mov r14d, dword[z]
add dword[x], r14d i.e.t. x + (z + 32)
mov r15d, dword[x]
mov dword[y], r15d i.e.t. y = x + (z + 32)
```
y = x - (z + 32)
```asm
add dword[z], 32 i.e.t. z + 32
mov r14d, dword[z]
sub dword[x], r14d
mov r15d, dword[x]
mov dword[y], r15d
```
z = x++ + (y - 32)
```asm
sub dword[y], 32 i.e.t. y - 32
mov r13d, dword[x]
add r13d, dword[y] i.e.t. y + (y - 32)
mov dword[z], r13d i.e.t. x++
```
z = ++x + (y - 32)
```asm
sub dword[y], 32 i.e.t. y - 32
mov dword[z], r13d i.e.t. ++x
mov r13d, dword[x]
add r13d, dword[y] i.e.t. y + (y - 32)
```
a = b + c
```asm
mov r8d, dword[c]
add r8d, dword[b] i.e.t. b + c
mov dword[a], r8d i.e.t. a = b + c
```
a = c + b
```asm
mov r8d, dword[b]
add r8d, dword[c] i.e.t. c + b
mov dword[a], r8d i.e.t. a = c + b
```
a = b - c
```asm
mov r8d, dword[b]
sub r8d, dword[c] i.e.t. b - c
mov dword[a], r8d i.e.t. a = b - c
```