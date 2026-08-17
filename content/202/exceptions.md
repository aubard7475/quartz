---
title: Try-Catch Blocks
order: 210
---

Try-catch blocks work similarly to if-else statements, but are intended for code that might throw an error.

Consider the following code:
```cpp
try {
    cin >> dividend;
    cin >> divisor;
    if (divisor==0)  throw 0;
    quotient = dividend / divisor;
    cout << quotient << endl;
} catch(...){
    cout << "Divisor is 0" << endl;
} 
```

The code in the `try` block is the code you always want to run, that might throw an error.
The code in the `catch` block is the code to run when there is an error.
The "`...`" tells the `catch` block to catch all errors, however you can also specify which errors you want to catch.

Another example:
```cpp
try{
    cin >> dividend;
    cin >> divisor;
    if (divisor==0) throw 0;
    quotient = dividend / divisor;
    cout << quotient << endl;
}catch(int x){
    cout<<"Divisor is 0"<<endl;
}catch(double y){
    //This does not run because throw is an int
    cout<<"Divisor is 0"<<endl;
}
```
