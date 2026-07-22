---
title: Header files
order: 4
---

Header files are formated as: `<className>.h`.
They can be used to hold the class structure but not the definitions.
Header files require some implemention file such as `<className>Imp.cpp` to create the definitions.

If including your own class:
```cpp
#include " . . . "
```
If including a standard library:
```cpp
#include < . . . >
```