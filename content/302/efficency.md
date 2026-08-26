---
title: Efficency of a Program
order: 10
---

What is an algorithm?
- A step by step process that solves a problem
- Gives the correct output for all inputs
- Complete the process in finite time

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

O(n) contains all linear functions and less than linear growth rate functions.

Consider the equation:
g(n) = O(f(n))
The equals means the same thing as the set operator.
Sees if g(n) fits in the set:
g(n) <= C * f(n)
Where C>0 and n>0

Big O notation uses the most simplified version (so n not 5n+3)

Ex: O(n) contains all functions that are linear.

## Examples:

Prove or disprove the following statements.

### n = O(n)
n <= C * n
Suppose C = 1 and n(0) = 1


### 5n = O(n)
5n <= C * n
Suppose C = 5 and n(0) = 1


### 10n + 3 = O(n)
10n + 3 <= C * n
Suppose C = 13 and n(0) = 1
10n + 3 <= 13n
10n + 3 <= 10n + 3n
3 <= 3n

### sqrt(n) = O(n)
sqrt(n) <= C * n
Suppose C = 1 and n(0) = 1
sqrt(n) <= sqrt(n) * sqrt(n)
1 <= sqrt(n)
Correct but a weak statement
Stronger statement: sqrt(n) = O(sqrt(n))

### 2n^2 + 7 = O(n^3)
2n^2 + 7 <= C * n^3
Suppose C = 9 and n(0) = 1
2n^2 + 7 <= 9n^3
2n^2 + 7 <= 2n^3 + 7n^3

### 2n^2 + 7 = O(n^2)
2n^2 + 7 <= C * n^2
Suppose C = 9 and n(0) = 1

### 2n^2 + 7 = O(n)
Suppose C = 1000000000000000 and n(0) = 1
> ![missing] Figure out how to put a graph here of y = 100000n and y = 2n^2 + 7
 Statement does not hold.

# Big Ω Notation

g(n) = Ω(f(n)) lower bound
g(n) >= C * f(n)
C > 0
n>=n(0)>0

## Examples

Prove or disprove the following statements.

### 3n + 2 = Ω(n)
3n + 2 >= C * n
Suppose C = 3 and n(0) = 1

### n^2  + 13n = Ω(n)
n^2 + 13n >= C * n
Suppose C = 1 and n(0) = 1
Correct but a weak statement

### n^2  + 13n = Ω(n^3)
n^2 + 13n >= C * n^3
Suppose C = 1/1,000,000 and n(0) = 1
Statement does not hold

### n^2 + 13n = Ω(n^2)
n^2 + 13n >= C * n^2
Suppose C = 1 and n(0) = 1
Correct and a strong statement

# Big θ Notation

g(n) = θ(f(n))
g(n) = O(f(n)) and g(n) = Ω(f(n))

Exact Bound

> ![missing] Add a graph of O(f(n)) and Ω(f(n)) with θ(f(n)) in-between them.

## Examples

Prove or disprove the following statements.

### 13n + 2 = θ(n)
13n + 2 = O(n)
13n + 2 = Ω(n)
Thus, the statement is valid.

### 13n + 2 = θ(n^2)
13n + 2 = O(n^2)
13n + 2 = Ω(n^2) fails.
Thus, the statement does not hold.

### 13n + 2 = θ(sqrt(n))
13n + 2 = O(sqrt(n)) fails.
13n + 2 = Ω(sqrt(n))
Thus, the statement does not hold.

# Comparing growth rates

> ![missing] figure out how to make limits nice with latex
```math
\[
\lim_{n \to \infty} \frac{g(n)}{f(n)} = \lim_{n \to \infty} \frac{g'(n)}{f'(n)} = \lim_{n \to \infty} \frac{g''(n)}{f''(n)} = L
\]
```

L when infinity = g(n) > f(n)
L when C>0 = g(n) = f(n)
L when zero g(n)<f(n)

## Examples

Prove or disprove the following statements.

### 2n^2 + 7 = O(n)
Consider the following equation:
```math
\[
\lim_{n \to \infty} \frac{2n^2+7)}{n} = \frac{\infty}{\infty} = 1
\]
```
This is incorrect, we require L'hopital's Rule:
```math
\[
\lim_{n \to \infty} \frac{2n^2+7)}{n} = \lim_{n \to \infty}\frac{n(2n+7/n}{n} = \lim_{n \to \infty}2n + 7/n = /infty
\]
```
Thus, 2n^2 + 7 is asymptotically larger than n.
Thus, the statement is not true.

### 2n^2 + 7 = O(n^3)
```math
\[
\lim_{n \to \infty} \frac{2n^2+7)}{n^3} = \lim_{n \to \infty}\frac{4n}{3n^2} = \lim_{n \to \infty}\frac{4}{3n} = \frac{4}{\infty} = 0
\]
```
Thus, n^3 is asymptotically larger than 2n^2 + 7.
Thus, the statement is true.

### 2n^2 + 7 = O(n^2)
```math
\[
\lim_{n \to \infty} \frac{2n^2+7)}{n^2} = \lim_{n \to \infty}\frac{4n}{2n} = 2
\]
```
Thus, 2n^2 + 7 and n^2 have the same growth rate.
Thus, the statement is true.
Therefore, 2n^2 + 7 = θ(n^2)

# Logarithms

Consider the equation:
θ(log(n))
Typically, log(n) implies a base of 10.
Is that still true?

log(basea)θ = θ(log(n))
log(basea)θ = C * log(basea)(n)
1 = C

log(basea)θ = θ(log(n))
log(basea)θ = C * log(baseb)(n)

> [!abstract] Recall
> The change of base formula for log

log(baseb)(n) / log(baseb)(n) = C * log(baseb)(n)
1/log(baseb)(n) = C

Therefore, θ(log(n)) contains all log functions of any base, since we can easily convert from one to another.

