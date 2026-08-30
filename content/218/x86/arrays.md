---
title: Arrays
order: 90
---

Creating an array is simmilar to normal variables, however you just add more values with commas.
In order to access an element in an array, use the formula: 
```math
[baseAddress + (index \cdot size)]
```
The following code will iterate through an array of dwords:
```asm
section .data
    lst dd 0, 1, 2, 3, 4, 5
    length dq 6
    ; assume constants are defined
section .bss
    ; empty
section .text
    global _start
_start:
    mov rsi, 0  ; i.e.t. int i = 0
    loopStart:
        mov eax, dword[lst+(rsi*4)] ; recall the formula from above
        ; some code here
        inc rsi ; i.e.t. i++
        cmp rsi, qword[length] ; i.e.t. i == length
        jne loopStart
    ; exit program
    mov rax, SYS_exit
    mov rdi, EXIT_GOOD
    syscall
```

# Strings
> [!abstract] Recall
> Strings are just arrays of characters that end in a NULL terminator
> ```cpp
> char myString1[] = { 'h','e','l','l','o','\0' }
> char myString2[] = "hello"
> ```

Creating and managing a string in x86 is almost identical.
```asm
message1 db "Hello"  , 0
message2 db "Goodbye", NULL ; if NULL constant is defined
```
Since a `char` is `1 byte`, strings will always use `db` to define them.

We know the loop is over when we reach the null terminator, therefore we don't always need a length variable
You can also use the strings address itself as the index, if you need to traverse it in order:
```asm
mov rax, message1
startCheck:
	cmp byte[rax], NULL 
	je doneChecking
	; some code here
	inc rax
	jmp startCheck
doneChecking:
```

You can also do math operations using strings, such as addition.
For instance, if you subtract `48` from a digit you get that digit as a number.
Reference an [[ascii.md|ASCII Table]] to see what you can do.
