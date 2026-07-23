---
title: Static Functions & Variables
order: 1
tags: ["70"]
---

Static functions only allow static [[variables]]
Static variables are the same for EVERY object in the class.

Consider the following code:
```cpp
class Crabulon{
private:
	static int legs;
public:
	Crabulon();
    static void incLegs();
    static void printLegs();
};
int Crabulon::legs = 0;
void Crabulon::incLegs(){
    legs++;
}
void Crabulon::printLegs(){
    cout << legs << endl;
}
int main(){
    Crabulon c1;
    Crabulon c2;
    c1.incLegs();
    c2.incLegs();
    c2.incLegs();
    c1.printLegs(); // will print "3"
    c2.printLegs(); // will print "3"
    Crabulon::printLegs(); // will print "3"
}
```
Since `legs` is **static**, both objects (`c1` and `c2`) will print the same value for `legs`.