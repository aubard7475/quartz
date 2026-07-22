---
title: Basics
order: 0
---

In order to create a C++ file, you need a few things.

First, put all your `#include` statements at the top, outside of any classes or functions:
```cpp
#include <iostream>
#include <string>
#include "pikachu.h"

using namespace std
```
Second, put your `class` headers (if in the same file):
```cpp
class Player {
private:
    /* some variables */
public:
    /* some functions */
};
```
Third, put your function definitions:
```cpp
int main(){
    /* some code */
}
```

Data sizes of variables:
| Type       |  Size |
| ---------- | ----: |
| `bool`     |1 byte |
| `char`     |1 byte |
| `short`    |2 bytes|
| `int`      |4 bytes|
| `float`    |4 bytes|
| `long long`|8 bytes|
| `double`   |8 bytes|
