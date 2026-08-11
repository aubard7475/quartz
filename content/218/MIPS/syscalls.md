---
title: System Calls
order: 340
---

`$v0` is where you store the code of the syscall you want.

## Print a number
Integer:
```asm
li $v0, 1 
li $a0, 151 # number to print
syscall
```
Single floating point:
```asm
li $v0, 1 
l.s $f12, floatTwo # number to print
syscall
```
Double floating point:
```asm
li $v0, 1 
l.d $f12, doubleTwo # number to print
syscall
```

## Print a string
Prints a null-termianted string
```asm
li $v0, 4
la $a0, stringToPrint # string to print
syscall
```
Print a character
```asm
li $v0, 11
li $a0, 48 # ascii charto print
syscall
```
Print a character
```asm
la $s0, charToPrint
li $v0, 11
lb $a0, ($s0) # char to print
syscall
```
## Read a number
Returns the number typed in terminal
Limit to 32-bits
Cannot read 64-bit integers
```asm
li $v0, 5
syscall
```
Read a float
```asm
li $v0, 6
syscall
```
Read a double
```asm
li $v0, 7
syscall
```
Read a string
```asm
li $v0, 8
la $a0, bufferToSaveInto
li $a1, 10 # length of buffer
syscall
```
## Terminate the program
```asm
li $v0, 10
syscall
```