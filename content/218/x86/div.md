---
title: Division
order: 70
---

Works very simmilar to multiplcation, except for where the answer goes.

> [!abstract] Recall
> ```asm
> mov rax, 5
> mov r10, 5
> mul r10
> ```
> The answer will be stored in `rax` and `rdx` (well, not really, cause its not large enough, but you get the idea)

Division is different because:
`rax` holds the answer
`rdx` holds the remainer

Thus, there is no difference between the `/` and `%` operators, they are both `div` and `idiv`

Furthermore, you must assure that while the second register is not needed for the operation, it must be cleared.
For unsigned division, you can set the second register to 0.
For signed division, use the following commands:
```asm
cbw ; converts a byte to a word
cwd ; converts a word to a dword
cdq ; converts a dword to a qword
cqo ; converts a qword into a dqword
```

# Examples

> [!bug] The following examples are unchecked and may be wrong.

`byte = word/byte`
```asm
mov dx, 0
mov ax, word[x]
movzx, byte[y]
div cx moves frmo word/byte to word/word
result is still a byte
mov byte[answer], al
mov byte[remained], dl
```
`word = word / word`
```asm
mov dx, 0
mov ax, word[x]
div word[y]
mov word[answer], ax
mov word[remainder], dx
```
`word = dword/word`
```asm
mov dx, word[x+2] upper 16 bits
mov ax, word[x] lower 16 bits
div word[y]
mov word[answer], ax
mov word[remainder]. dx
```
`word = dword/byte`
```asm
mov dx, word[x+2] upper 16 bits
mov ax, word[x] lower 16 bits
movzx cx, byte[y]
div cx
mov word[answer], ax
mov word[remainder]. dx
```
`byte = byte/ byte`
```asm
mov al, byte[x]
cbw (this will properly sign extend al into ah, only used when you dont know the value of ah? check this)
idiv byte[y]
mov byte[answer], al
mov byte[remainder], ah
```