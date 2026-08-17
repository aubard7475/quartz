---
title: Recursion
order: 200
---

Recursion is an alternative to iterative loops.

Direct recursion is when a function calls itself.
Indirect recursion is when a function calls another recursive function.

Advantages of recursion:
- Simplier and smaller code
- Splits complex problems into smaller problems

Disadvantages of recursion:
- Takes more space in memory
- Segmentation faults due to overloading memory

Example with a loop:
```cpp
int sumofNnaturalNumbers(int n){
    int sum = 0;
    for (int i=1;i<=n;i++)
        sum += i;
    return sum;
}
```

Example with head recursion:
```cpp
int sumofNnaturalNumbers(int n){
    if (n>0)
        return (n+sumofNnaturalNumbers(n-1));
    return 0;
}
```

Example with tail recursion:
```cpp
int sumofNnaturalNumbers(int n){
    if (n==1)
        return 0;
    return (n+sumofNnaturalNumbers(n-1));
}
```

In the examples above, recursion uses a lot more memory than a loop.
The loop functiononly initilizes two variables (`n` and `sum`), while the recursive function initilizes a new variables every recursion.

# Examples

> Caution: The following examples are unchecked and may be incorrect. Verify important info.

Factorial:
```cpp
int factorial(int n) {
    if (n==1) return 1;
    return (n*factorial(n-1));
}
```

Finding the largest element in an array:
```cpp
int findLargest(int arr[], int length, int max){
    if(length<0) return arr[max];
    else {
        if (arr[length-1]>arr[max]) max=length-1;
        return findLargest(arr,--length,max);
    }
}
```