---
title: Operator Overloading
order: 8
---

Types of operators:
| Name | Symbols |
| :--- | :---: |
| Relational | <, >, ==, != |
| Unary | ++, -–, !, +, - |
| Arithmetic | +, -, *, /, % |
| Logical | &&, \|\|, <<, >> |
The 5 operators you cannot overload are:
`.`, `.*`, `::`, `?:`, `sizeOf()`
In function header:
```cpp
void operator<operator_symbol>();
```
In Implementation:
```cpp
void <class_name>::operator<operator_symbol>(){
    //some code
}
```
Shape example:
```cpp
Shape &Shape::operator=(Shape const &obj){ . . . }
bool operator<(Shape const &obj){
	if(this->length<obj.length) return true;
	else return false;
}
```
Non member functions or friend functions:
```cpp
friend &ostream operator<<(ostream &, Shape const &);
ostream &operator<<(ostream &osObj, Shape const &obj){
	osObj<<"Insertion operator"<<endl;
    return osObj;
}
```