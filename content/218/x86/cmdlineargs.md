---
title: Command Line Arguments
order: 230
---

> [!abstract] Recall
> In order to use command line arguments in C++, we add parameters to the main function:
> ```cpp
> int main(int argc, char* argv[]) { 
>     /* some code */
>     return 0;
> }
> ```

In x86, command line arguments require C++ connectivity.

First, you must use `global main` instead of `global _start` because as you know, C++ uses `main` as its starting function.

Thus, the parameters are the same as in c++, but with their register names:
- `edi` i.e.t. `argc`
- `rsi` i.e.t. `argv`
Since `argv` is an array of pointers, you must dereference them.