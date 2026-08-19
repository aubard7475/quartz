---
title: Functions
order: 120
---

Written in `section .text`, outside of the `_start:` block.

This is simmilar to C++, where we write our functions in the same part of the code as our `int main() { }`, but not actually inside!

They are even made in a simmilar way to the main:
```asm
global myFunction
funcName:
; some code here
ret
```

However, unlike C++, there are no parameters for functions, instead you just call it:
```asm
call myFunction
```

Then, how do you give it parameters?
By using certain [[registers]]! 
If you take a look at the "Function Usage" column, each register has a specific purpose.
Consider the following code:
```asm 
mov rdi, array ; pass by reference
mov sil, byte[length] ; pass by value
mov rdx, sum
mov rcx, max
call myFunction
; the return value will be in rax
```

The main four types of registers for functions are:
- Preserved/Saved: Registers should maintain their value by the end of the function. If possible, try to not use them. If you do, you must preserve them somehow (usually by pushing/popping them in the stack)
- Temporary: You can do whatever you want with them
- Argument: The arguments/paramters of the function
- Return: The return value

In order to preserve those registers, you can do the following:
```asm
global stats
stats:
	; prologue
	push rbp		; Preserves stack pointer 
	mov rbp, rsp		; Create new stack pointer
	push r12		; Callee saved variable
	push r13		; Callee saved variable
	push r14		; Callee saved variable
	push r15		; Callee saved variable
	push rbx		; Callee saved variable
    ; some code here
	; epilogue
	pop rbx		; Callee saved variables
	pop r15		; Callee saved variables
	pop r14		; Callee saved variables
	pop r13		; Callee saved variables
	pop r12		; Callee saved variables
	pop rbp		; Preserves stack pointer 
ret
```
You do not need to push/pop registers you dont use.
Also, make sure you pop in the reverse order that you push.