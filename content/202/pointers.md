---
title: Pointers
order: 5
---

Recall that an `int` stores a number.
Unlike primative types, pointers store addresses, not values.
For instance, in the following code, `x` will store the value `5`:
```cpp
int x = 5;
```
Whereas, in this next code, `ptr` will store an address in memory:
```cpp
int *ptr = nullptr;
```
`nullptr` means it is not pointing to anything right now, because we havent assigned it any data.

Creating a pointer on the stack:
```cpp
int x = 5;
int *ptr = nullptr // Points to nothing at the moment
ptr = &x; // Sets the address stored in ptr to the address of x
cout << *ptr // Print the value (5) stored in ptr
ptr = nullptr // Disconnects the pointer
```
Creating a pointer on the heap:
```cpp
int *ptr = new int; // Creates a pointer to a new int
*ptr = 5; // Sets the value of ptr to 5
delete ptr; // Deleting does NOT remove data, it just disconnects the stack and heap
ptr = nullptr; // This is optional but makes sure you dont access weird data
```
Anytime the `new` keyword is used, something is being created on the stack. The data might be on the heap but the pointer itself is on the stack.
# Pointers to arrays
Consider we declare a pointer:
```cpp
int *arr = new int[5];
```
The stack contains the pointer's address itself.
The heap contains the values in the array.

Deleting the pointer (required):
```cpp
delete [] score;
```
Multidimentional arrays are important but I think I understand them enough to omit them from here, they are basically the same.
Although, make sure to dealocate in the reverse order that you allocated. So, for instance, deallocate the arrays holding the values, then the arrays holding the arrays.
# Pointers to classes
If you create a pointer that stores a class, you must use `->` instead of `.` when calling a function.

Example:
```cpp
Student *s1 = nullptr;
Student s2( /* some parameters */ );
s1 = &s2;
s1->somefunc():
```
