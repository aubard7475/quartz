---
title: Efficency of a Program
order: 10
---

What is an algorithm?
- A step by step process that solves a problem
- Gives the correct output for all inputs
- Complete the process in finite time

# Measuring the efficiency of a program

**Real time:** Can be measured by having a virtual stopwatch to count how long a program takes to run.
Will get different results on different machines.

**Scale/Growth Rate:** Count the amount of iterations the loops take.
Will get same results on different machines.
Construct a function that models the amount of iterations.
We then categorize `f(n)` into an asymptotic complexity class.

**Remark:** Recursion is magic, no one knows how it works.

Consider the asymptotic complexity classes:
- Constant (Code is not scaling and will yield the same number of iterations no matter the input)
- Logarithmic
- Linear
- Poly-logarithmic
- Quadratic
- Cubic
- Exponential 

As you go down that list, the growth rate increases, which implies a slower algorithm.

# Big O notation

Consider the equation:
g(n) = O(f(n))
The equals means the same thing as the set operator.
Sees if g(n) fits in the set:
g(n) <= C * f(n)
Where C>0 and n>0

BIg O notation uses the most simplified version (so n not 5n+3)

# Examples:

n = O(n)

n <= C * n
Suppose C = 1 and n(0) = 1


5n = O(n)

5n <= C * n
Suppose C = 5 and n(0) = 1


10n + 3 = O(n)

10n + 3 <= C * n
Suppose C = 13 and n(0) = 1
10n + 3 <= 13n
10n + 3 <= 10n + 3n
3 <= 3n
