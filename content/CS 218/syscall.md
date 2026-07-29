---
title: System Calls
order: 130
---

System calls (or syscalls) are basic operations that your device's system does for you. This includes things such as reading/writing from a file and taking user input.

System calls work exactly the same as functions, except instead of passing the functions name, you need to put its corosponding code into `rax`.

For instance, to print to the terminal:
```asm
mov rax, 1      ; code to determine which syscall to use
mov rdi, 1      ; code to tell it to print to the terminal
mov rsi, msg    ; address of string to print
mov rdx, 10     ; length of string
syscall	        ; calling the syscall
```


## SYS_WRITE (i.e.t. cout)
```asm
mov rax, SYS_WRITE 	; or mov rax, 1 if consts not defined
mov rdi, STDOUT 	; console
mov rsi, msg 		; address of string to print
mov rdx, 10 		; length of string
syscall			    ; calling the syscall
```
The length does not have to be the actual length, for example, if your msg is “Hello World,” then mov rdx, 5 will only print “Hello”
Returns a positive number if printed
Returns a negative number if errored

## SYS_IN i.e.t. cin 
(kinda, although you need to specify max length of input)
```asm
mov rax, SYS_READ	; or mov rax, 0 if consts not defined
mov rdi, STDIN 		; or mov rdi, 0 if consts not defined
mov rsi, msg 		; address of string to save to
mov rdx, 10 		; length of input
syscall			    ; calling the syscall
```
Returns a positive number of the number of characters actually read
Returns a negative number if errored

## SYS_OPEN 
Opens a file
Returns a positive number where the file is located
Returns a negative number if errored 
Compare to 0 to see if its a good file or not
```asm
mov rax, SYS_OPEN	; or mov rax, 2 if consts not defined
mov rdi, filename	; null terminated address of file
mov rsi, file_status; how to read the file
mov rdx, 10 		; length of input
syscall			    ; calling the syscall
```
Types of file status that we will use in class:
0 - read only
1 - write only
2 - simultaneous writing
## SYS_CREATE
Same as SYS_OPEN, but will create the file if it does not exist
Numerical code: 85 instead of 2
Same return value and everything else
SYS_CLOSE
Closes a file
```asm
mov rax, SYS_CLOSE	; or mov rax, 3 if consts not defined
mov rdi, qword[fileDescriptor]
syscall			; calling the syscall
```
Returns a negative number if errored 

There are many more system calls but these are the only ones you need to know right now.