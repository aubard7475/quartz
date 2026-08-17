---
title: Virtual Functions
order: 10
---

Converts function to be run-time instead of compile-time.

By default, if a member is upcasted, it will prioritize the base class class functions, unless the base class function is set as virtual.

If you upcast in the context of pointers then always use virtual functions so it calls the destructor in the derived class.

Virtual functions become useful in the context of pointers.

# Slicing Problem
When you cast a derived class object as a base class object,
it loses the derived class variables.

# Pure virtual functions
Does not require implementation in base class.
- Only implement in derived class.
- Do not use virtual keyword in implementations.

Makes a class an abstract class.
- Gives more privacy.
- Only allows derived classes can access members, not outsiders
- You can no longer declare an object of this type

In base class:
```cpp
virtual void calculateVolume() = 0;
```
In derived class:
```cpp
void calculateVolume();
```
In implementation:
```cpp
void Parrallogram::calculateVolume(){ . . . }
```
You must implement the function in EVERY DERIVED CLASS

# Pure virtual destructor
If destructor is pure virtual, all derived classes MUST have a destructer:
```cpp
virtual ~Shape()=0; 
```