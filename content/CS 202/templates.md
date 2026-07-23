---
title: Templates
order: 9
tags: ["90"]
---

Instead of having a bunch of functions like this:
```cpp
void printData(int x)    { cout<<x<<endl; }
void printData(double x) { cout<<x<<endl; }
void printData(char x)   { cout<<x<<endl; }
void printData(string x) { cout<<x<<endl; }
```
You can instead do:
```cpp
template<function Type>
void printData(Type x)   { cout<<x<<endl; }
```
If you use `Type` as multiple parameters, they must have the same datatype, otherwise you would need to do something like this:
```cpp
template<function S, function T>
int printData(S x, T y)   { cout<<x<<y<<endl }
```
Templates also work for classes:
```cpp
template<class T, class U>
class Shape {
	//Member variables
	T length;
	U width;
	//Member functions
	Shape(T l, U w);
	setShape(T l, U w);
	T getLength() const;
	//Friend Function
	template<class A, class B>
	friend bool operator>( . . . );
}
template<class T, class U>
Shape<T,U>::Shape(){
	length=0;
	width =0;
}
template<class T, class U>
Shape<T,U>::Shape(T l, U w){
	length=l;
	width =w;
}
```