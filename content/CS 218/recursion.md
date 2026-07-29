---
title: Recursion 
order: 150
---

> [!abstract] Recall
> Recursion is when a function calls itself.
> ```cpp / sum(length, arr, index+1); /
> int sum(int length, int [] arr, int index){
>     if (index==length) return 0;
>     return arr[index] +  sum(length, arr, index+1); 
> }
> ```

In x86, it follows the same idea, however you need to consider the aspects of a function.

First, remember which variables are preserved and which are temporary. If you use `rax` in your function, and it calls itself, it will overwrite your previous `rax`. Thus, you may need to preserve certain registers before calling.

Additionally, you must preserve the

# Example

> Caution: The following example is unchecked and may be incorrect. Verify important info.

```asm
global sum
	sum:
	push rbp
	mov rbp, rsi
	push r12
	;  if (index == length)
	cmp edx, edi
	jne nonBaseCase
	; return 0
	mov eax, 0 
	jmp prologue
	nonBaseCase:
	; return arr[index] + sum(length, arr, index+1)
	push rdx
	inc edx
	call sum
	pop rdx
	mov r10, eax
	mov eax, dword[rdi+rax*8]
	add eax, 10
	prologue:
	pop r12
	pop rbp
	ret
```