---
title: Searching Algorithms
order: 20
---

There are many ways to find an item in an array.

# Linear Search

Consider a simple linear search algorithm:
```cpp
bool find(int a[], int n, int s) {
    for (int i=0; i<n; i++) {
        if (a[i] == s)
            return true;
    }
    return false;
}
```

The **worst case** is if `s` is not in `a` or if `s` is at `i = n-1`

$O(n)$
$\Theta(n)$
$\Omega(n)$


The **best case** is if `s` is at `i = 0`

$O(1)$
$\Theta(1)$
$\Omega(1)$


The **average case** is if `s` is somewhere in the middle of `a`

$O(n)$
$\Theta(n)$
$\Omega(n)$


# Binary Search

A binary search works like searching through a phone book.

Suppose you have a phone book and you want to find someone named Nicole. First, go to a random page. Then, if the names on that page are alphabetically less than Nicole, go to a random page between that page and the end of the book. Repeat this process until you find the page with Nicole.

Consider a simple binary search algorithm:
```cpp
bool find(int a[], int n, int s) {
    int l = 0;     // left  bound
    int r = n - 1; // right bound
    int m;         // midpoint

    while (l <= r) {
        m = l + (r-l) / 2;  // calculates the midpoint
        if (a[m] == s)
            return true;    // target found
        if (a[m] > s)
            r = m - 1;      // eliminates anything right of m
        else
            l = m + 1;      // eliminates anything left of m
    }
    return false;
}
```

The **worst case** is if `s` is not in `a` or if `s` is at `l == r`

$O(\log n)$
$\Theta(\log n)$
$\Omega(\log n)$ 
$\log_{2}8 = 3$
$\log_{10}x = 1037$


For a sorted array, linear search runs $O(n)$ and binary search runs $O(|log n)$, so therefore the binary search will be faster.

What if the array is not sorted? It depends on the size of the array.