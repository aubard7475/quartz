---
title: CS 202 Review
order: 0
---

A "longer than i originally expected it to be" summary of the informatin from my CS 202 notes.

## Data types
| Type | Size |
| :--- | :---: |
| char | 1 byte |
| int/float | 4 bytes |
| double | 8 bytes |
| string | varies |
### Memory Padding
When a datatype is declared in an object, it is put into a set of 8 bytes.
If it cannot fit within those 8 bytes, it writes to a new one.
### Passing Parameters
Pass by value:
```cpp
void setStudentData(Student stdObj);
```
Pass by reference:
```cpp
void setStudentData(Student &stdObj);
```
### Static Variables
Static functions only allow static variables
Static variables are the same for EVERY object in the class.
In this example, both variables `s1` and `s2` have the same width even though `setWidth()` is only called for `s1`.
```cpp
Class Shape {
    private:
        int length;
        static int width;
    public:
        static void setWidth();
    // some other functions
}
int main(){
    Shape s1(15);
    s1.setWidth();
    Shape s2(30);
}
```
## Reading from a file
1. Include the `fstream` library.
2. Create an `ifstream` object.
3. Open the file with `.open()`
4. Read the file
a. Use `getline()` to read line by line
b. Use `>>` to read word by word
5. Close the file with `.close()`

Example:
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // Opens the file
    ifstream inFile;
    inFile.open("data.txt");
    // Varifies the file exists
    if (!inFile.is_open())
        return 0;
    // Iterates through every line in the file
    string line;
    while (getline(inFile, line)){
        // Do something here, such as printing the line:
        cout << line << endl;
    }
    // Closes the file
    inFile.close();
    return 0;
}
```
## Classes
When creating a class, you need to specify which members are public and which members are private.
Example of a class definition:
```cpp
class Student{
private:
    string name;
    int score;
    char grade;
public: 
    // Default constructor
    Student(); 
    // Parameterized constructor
    Student(string name, int score); 
    // Mutator functions / setter functions
    void setStudentData();
    void setStudentData(string name, int score);
    // Accessor functions / getter functions
    string getName() const;
    int getScore() const;
    // Other functions
    void calculateGrade();
    void printData();
    //Destructor
    ~Student(); //This invokes when the object goes out of scope
};
```
Default constructor:
```cpp
Student::Student(){
    cout<<"Default Constructor Called"<<endl;
    name = " ";
    score = 0;
    grade = ' ';
}
```
Parameterized constructor:
```cpp
Student::Student(string name, int score){
    cout<<"Parameterized Constructor Called"<<endl;
    this->name=name;
    this->score=score;
}
```
Destructor:
```cpp
Student::~Student(){
    cout<<"Destructor Called for "<<getName()<<endl;
}
```
## Inheritance
"Is a" relationship between classes.

Inheritance is when you have a class that inherits from another class.

For example, a `Car` class might inherit from a `Vehicle` class.

Child classes cannoy access private members of the parent class.

Ex:
```cpp
class iphone11 { . . . }
class iphone12::public iphone11 { . . .}
```
The `iphone12` class inherits from the `iphone11` class.

In other words, an `iphone12` is a `iphone11`.

(This is not the best example but it was from class)

## Composition
"Has  a" relationship between classes.

Composition is when a class has a member variable that is of another class.

For example, a `Car` class might have a `Engine` member variable.

Make sure to include the other class or it will be undefined.

## Header files
Header files are formated like `<className>.h`.

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
## Pointers
Unlike primative types, pointers store addresses, not values.

For instance, in the following code, x will store the value 5:
```cpp
int x = 5;
```
Whereas, in this next code, x will store an address in memory:
```cpp
int *ptr = nullptr;
```
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
Anytime the `new` keyword is used, something is being created on the stack.
### Pointers to 2D arrays
```cpp
int *ptr = new int[5];
// Some code here
delete [] ptr;
ptr = nullptr;
```
Multidimentional arrays are important but I think I understand them enough to omit them from here, they are basically the same.

Although, make sure to dealocate in the reverse order that you allocated. So for instance, deallocate the arrays holding the values, then the arrays holding the arrays.
### Pointers to classes
If you create a pointer that stores a class, you must use `->` instead of `.` when calling a function.

Example:
```cpp
Student *s1 = nullptr;
Student s2(/* some parameters */);
s1 = &s2;
s1->somefunc():
```

## Copying data
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
A copy constructor in a class:
```cpp
Shape::Shape(Shape const &obj){
    length=obj.length;
    width=new int(*obj.width);
}
```
## Upcasting (not checked)
Passing a derived class object to a base class object
Occurs during compile-time
You cannot access derived class members from the base class
Upcasting Example:
```cpp
Shape *shapeObj=&triangleObj;
```
## Downcasting (not checked)
Converting base class object to derived class object
Downcasting Example:
```cpp
Triangle *triangleObj=dynamic_cast<Triangle*>(shapeObj);
```
## Virtual Functions
Converts function to be run-time instead of compile-time.

By default, if a member is upcasted, it will prioritize the base class class functions, unless the base class function is set as virtual.

If you upcast in the context of pointers then always use virtual functions so it calls the destructor in the derived class.

Virtual functions become useful in the context of pointers

### Slicing Problem

When you cast a derived class object as a base class object,
it loses the derived class variables.

### Pure virtual functions
- Does not require implementation in base class.
a. Only implement in derived class.
b. Do not use virtual keyword in implementations.
- Makes a class an abstract class.
a. Gives more privacy.
b. Only allows derived classes can access members, not outsiders
c. You can no longer declare an object of this type

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

### Pure virtual destructor

If destructor is pure virtual, all derived classes MUST have a destructer:
```cpp
virtual ~Shape()=0; 
```

## Opperator Overloading
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
## Templates
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
## Omited information:
- Recursion
- Exceptions (try-catch blocks)
- Linked Lists
- Stacks
- Ques