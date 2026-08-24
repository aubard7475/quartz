---
title: C++ Connections
order: 220
---

> [!bug] The following information is unchecked and may be wrong.

The following will compile your `cpp` code but will not link it:
```bash
g++ -c x2.o
```

The following will assemble your `asm` code but will not link it:
```bash
yasm -f elf64 x1.asm -o x1.o
```

Then, you need to link them:
```bash
g++ -g -o execName x1.o x2.o
```

Calling assembly from C++:
```cpp
extern "C" void stats(int* x, bool* y);
```
Notice how you need to specify amount of parameters, return type, and type of parameters, unlike when you code in assemble.

Calling assembly from assembly:
```asm
extern stats
; some code
call stats
```