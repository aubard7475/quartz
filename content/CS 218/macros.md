---
title: Macros
order: 110
---

> They are like functions, but not functions!

Macros are defined in `section .data`
Calling a macro is called a “macro invocation”
Unlike functions, macros are basically just copy-pasted into the code 
To access a parameter, do `%<number of parameter>`
In order to create labels, do `%%<label name>`
Tips: code the macro in main and then convert to macro

Example of a macro:
```asm
%macro addArray 4
	mov rsi, 0
	Mov rdi, 0
	%%startLoop:
		cmp sil, %2
		jge %%endLoop
		add rdi, qword[%1]
		jmp %%startLoop
	%%endLoop:
	mov %3, rdi
%endmacro
```
Then to call it in section .text:
```asm
addArray arrayLabel, length, resultVar, unusedAr
```

Unlike functions in C++, if you give it the wrong data type it will not complain, as you are not actually setting what is what. Therefore, make sure you know what you are sending, is it an immediate or an address?


# One-line Macros

> Not checked, may be wrong, we never used these.

Syntax for one-line macro
`%define <function_name>(var) <command>`
Example for one-line macro
```asm
%define add4(x) add x, 4
add4(rax)
```