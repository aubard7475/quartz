---
title: Jumps
order: 80
---

In C++, we often use boolean statements in things such as `if` statements and loops.

In x86, there is no direct version of those. However, there is, of course, a differnt way.

`cmp <op1> <op2>` compares both of its operands to be used when jumping. 
Alone, `cmp` does nothing, it must be followed by a jump command.

Unconditional jump:
```asm
jmp <dest>	; always jumps
```
Conditional jumps (Signed):
```asm
jg <dest> 	; >
jge <dest>  ; >=
jl <dest> 	; <
jle <dest>  ; <=
```
Conditional Jumps (Unsigned)
```asm
ja <dest> 	; >
jae <dest>  ; >=
jb <dest> 	; <
jbe <dest>	; <=
Conditional Jumps (Equality)
```asm
je <dest>   ; ==
jne <dest>  ; !=
```
Where do the jump commands jump to? (In other words, what do you put as the \<dest\>?)
Any label.
Remember the `_start:` at the start of our program? That is a label, and you can have as many as you want.
Examples:
```asm
loopStart:
loopEnd:
potato:
```
The jump commands moves the imaginary cursor of the program to that point.


Consider the following code:
```asm
mov r11d, dword[y]
cmp dword[x], r11d
jle else ; jump if x<=y
	; some code here, this runs when x>y
	jmp skipElse
else:
	; some code here, this runs when x<=y
skipElse:
    ; the rest of the program goes here
```
Line 1, as we know, moves the value of `y` into `r11d`
Line 2 compares the value of `x` to the value of `r11d`

Line 3 asks: 
- Is `x` less than or equal to `y`? If yes, jump to the line that says `else:`
- Otherwise, continue.
This is why the code right after the jump (`jle`) is for when `x>y`. 
Think of it as the reverse of an `if` statement, the first block is when the condition is false

Then, why do we need the `jmp skipElse`? Because otherwise it would continue and run both blocks even if the statment is false.

This same concept can be used for making loops.

While loop:
```asm
whileLoop:
	mov r11d, dword[y]
	cmp dword[x], rlld
	je exitWhileLoop
    ; code here
	jmp whileLoop
exitWhileLoop:
```
For loop:
```asm
mov dword[i], 0
forLoop:
	mov r11d, dword[y]
	cmp dword[i], r11d
	jge exitForLoop
    ; code here
	inc dword[i]
	jmp forLoop
exitForLoop:
```
Do while loop:
```asm
doWhile:
    ; code here
	mov r11d, dword[y]
	cmp dword[x], r11d
	je exitDoWhile
	jmp doWhile
exitDoWhile:
```

These are not the only ways to do loops, as long as there is some value that is changing, and some exit condition, it can be a loop.

> In my experience, x86 gets a lot more mad than C++ in terms of infinite loops. If I had a nickel for every time my entire PC has crashed presumably to a segmentation fault, I would have at least two nickels...
