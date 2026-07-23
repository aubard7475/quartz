---
title: Copying
tags: ["60"]
aliases:
- deep copies
---

Shallow copying copies addresses, not values:
```cpp
int *ptr = nullptr; 
int x = 43; 
ptr = &x; 
```
Deep copying copies values, not addresses, and is safer:
```cpp
int *ptr = nullptr; 
int x = 43; 
*ptr = x; 
```