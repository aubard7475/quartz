---
title: x86 Commands
unlisted: true
---

# Commands
`mov  <dest>,  <src> `
- Moves src into dest, replacing old data

`movsx  <dest>,  <src> `
- Moves src into dest, replacing old data
- Extends bits to fit dest’s size
- Destination must be a register
(Signed)

`movsxd  <dest>,  <src> `
- Moves src into dest, replacing old data
- Extends bits to fit dest’s size
- Destination must be a register
- Converts 32-bit to 64-bit
(Signed)

`movzx  <dest>,  <src> `
- Moves src into dest, replacing old data
- Extends bits to fit dest’s size
- Destination must be a register
(Unsigned)

`inc  <dest>`
- i.e.t. dest++

`dec  <dest>`
- i.e.t. dest--

`add  <dest>,  <src>`
- i.e.t. dest = dest + src 

`sub  <dest>,  <src>`
- i.e.t. dest = dest - src 

`mul  <src>`
- first register * src (Unsigned)
- Result is stored in both registers
- Cannot be multiplied by itself

`imul  <src>`
- first register * src (Signed)
- Result is stored in both registers
- Cannot be multiplied by itself

`div  <src>`
- first register / src (Unsigned)
- Quotient is stored in the first register
- Remainder is stored in the second register

`idiv  <src>`
- first register / src (Signed)
- Quotient is stored in the first register
- Remainder is stored in the second register

Conversion commands (for signed division):
- `cbw` - Converts a byte to a word
- `cwd` - Converts a word to a dword
- `cdq` - Converts a dword to a qword
- `cqo` - Converts a qword into a dqword (i.e.t. oword)
`
cmp  <op1>,  <op2>`
- Compares op1 and op2, to be used with jumps

Always jumps to dest (label):
- `jmp  <dest>- `

Signed, jumps to dest (label):
- `jg  <dest>  ; >`
- `jge  <dest> ; >=`
- `jl  <dest>  ;  <`
- `jle  <dest> ;  <=`

Unsigned, jumps to dest (label):
- `ja  <dest>  ; >`
- `jae  <dest> ; >=`
- `jb  <dest>  ;  <`
- `jbe  <dest>- ;  <=`

Equalities, jumps to dest (label):
- `je  <dest>  ; ==`
- `jne  <dest> ; !=`

`%macro  <macroName>  <numOfParams>`
- When in the macro, each parameter is % <numOfParam>
- Make sure you know if its a variable like max or a value like byte[max]
When creating labels in macros: %% <labelName>: 
to make the label names unique

`%endmacro`
- Ends the macro (i.e.t. closing bracket of a function)

`call  <functionName>`
- Calls a function, uses Standard Calling Convention (see table above)

`ret`
- Returns from a function
`
syscall`
- Calls a system function, rax holds call code, uses calling convention

`movss  <dest>,  <src>`
 - Move single precision value (float)

`movsd  <dest>,  <src>`
- Move double precision value (double)

`addss and addsd  <dest>,  <src>`
- Same as add but for floating point

`subss and subsd  <dest>,  <src>`
- Same as sub but for floating point

`divss and divsd  <dest>,  <src>`
- Same as add/sub but for floating point division

`mulss and mulsd  <dest>,  <src>`
- Same as add/sub but for floating point multiplication

`sqrtss  <dest>,  <src>`
- Square roots  <src> and stores in  <dest>

`ucomiss  <op1>,  <op2>`
- Same as cmp but for floating point

`ucomisd  <op1>,  <op2>`
- Same as cmp but for floating point

`cvtsi2ss  <dest>,  <src>`
- Converts an int to a float

`cvtss2si  <dest>,  <src>`
- Converts a float to an int

`cvtss2sd  <dest>,  <src>`
- Converts a float to a double

`cvtsi2sd  <dest>,  <src>`
- Converts an int to a double

`cvtsd2si  <dest>,  <src>- `
- Converts a double to an int

`cvtsd2ss  <dest>,  <src>`
- Converts a double to a float
