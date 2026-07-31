---
title: Program Organization
order: 30
---

There are three parts to an x86 program.

# section .data
Contains initialized variables and constants (such as `int x = 5;`).
Consider the following:
```asm
section .data
    bVar db  0 ; initializes a byte
    wVar dw  0 ; initializes a word
    dVar dd  0 ; initializes a dword (i.e.t. int dVar = 0)
    qVar dq  0 ; initializes a qword
    NULL equ 0 ; initializes a constant (i.e.t. const int NULL = 0)
```
The names on the left (ex: `bVar`) are the names of your variables. These can be whatever you would like. However, it is standard to name constants in ALL_UPPERCASE and normal variables in lowerCamelCase.

The letters in the second column (ex: `db`) are the data type. The "d" stands for "define" and the letter after corosponds to the type.

The values in the third column are what the initial values of your variables are, and can be changed throughout the program (unless a constant).

Also, you may notice we use `;` instead of `//` to comment.

# section .bss
Contains uninitilized data (such as `int x;`).
Consider the following:
```asm
bVar resb  1 ; reserves 1 byte of data
bVar resb  4 ; reserves 4 bytes of data
wVar resw  1 ; reserves 1 word of data
wVar resw 10 ; reserves 10 words of data
```
The names on the left (ex: `bVar`) are the names of your variables. These can be whatever you would like.

The letters in the second column (ex: `resb`) are the data type. The "res" stands for "reserve" and the letter after corosponds to the type.

The values in the third column are how many of that type you would like to reserve. To determine how much data is being used, multiply the data type and how many spots you are reserving. 

# section .text
Contains code.

In C++, we do:
```cpp
int main(){
    /* some code*/
    return 0;
}
```

In x86, we do:
```asm
global _start
_start:
    ; some code
mov rax, SYS_exit
mov rdi, EXIT_GOOD
syscall
```

# Running your program
Unlike C++, you do not "compile" our code, we "assemble" it.
You will be provided a make file, so you can run 
```bash
make ast01
```
Then, to run your program:
```bash
./ast01
```