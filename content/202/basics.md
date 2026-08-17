---
title: Creating a C++ File
order: 1
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
    return 0;
}
```
