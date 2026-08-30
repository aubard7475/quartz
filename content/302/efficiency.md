---
title: Efficiency of a Program
order: 10
---

What is an algorithm?
- A step by step process that solves a problem
- Gives the correct output for all inputs
- Complete the process in finite time

**Real time:** Can be measured by having a virtual stopwatch to count how long a program takes to run. Will get different results on different machines.

**Scale/Growth Rate:** Count the amount of iterations the loops take. Will get same results on different machines.


We can categorize the growth rate into an **asymptotic complexity class**:
| Name              | Function  |                     |
| -                 | -         | -                   |
| Constant          | $n^2$     | Slower growth rate  |
| Logarithmic       | $\log n$  |                     |
| Linear            | $n$       |                     |
| Poly-logarithmic  | $log^kn$  |                     |
| Quadratic         | $n^2$     |                     |
| Cubic             | $n^3$     |                     |
| Exponential       | $C^n$     | Higher growth rate  |

***

# Big O notation

Consider the equation:
$g(n) = O(f(n))$
In this case, $=$ has the meaning of $\in$.
Thus, it translates to: 

$g(n)$ is in the set of all functions whose growth rate is at most $f(n)$.

In order to determine the validity of that statement, prove that:
$$
g(n) \leq C \cdot f(n) \\
\text{Where } C>0 \text{ and } n_0>0 \\
\text{For all } n
$$

$f(n)$ can be any function, but it is proper to use one of the **asymptotic complexity classes**.

## Examples

Prove or disprove the following statements.

> [!blank]- (a) $n = O(n)$
> $$
> n \leq C \cdot n
> \\
> \text{Suppose } C = 1 \text{ and } n_0 = 1
> \\
> n \leq 1 \cdot n
> \implies n \leq n
> \\
> \text{Thus, the statement is true.}
> $$

> [!blank]- (b) $5n = O(n)$
> $$
> 5n \leq C \cdot n 
> \\
> \text{Suppose } C = 5 \text{ and } n_0 = 1
> \\
> 5n \leq 5 \cdot n \implies 5n \leq 5n
> \\
> \text{Thus, the statement is true.}
> $$

> [!blank]- (c) $10n + 3 = O(n)$
> $$
> 10n + 3 \leq C \cdot n
> \\
> \text{Suppose } C = 13 \text{ and } n_0 = 1
> \\
> 10n + 3 \leq 13n
> \\
> \implies 10n + 3 \leq 10n + 3n
> \\
> \implies 3 \leq 3n
> \\
> \text{Thus, the statement is true.}
> $$

> [!blank]- (d) $\sqrt{n} = O(n)$
> $$
> \sqrt{n} \leq C \cdot n
> \\
> \text{Suppose } C = 1 \text{ and } n_0 = 1
> \\
> \sqrt{n} \leq \sqrt{n} \cdot \sqrt{n}
> \\
> \implies 1 \leq \sqrt{n}
> \\
> \text{Thus, the statement is true.}
> $$

> [!blank]- (e) $2n^2 + 7 = O(n^3)$
> $$
> 2n^2 + 7 \leq C \cdot n^3 \\
> \text{Suppose } C = 9 \text{ and } n_0 = 1 \\
> 2n^2 + 7 \leq 9n^3 \\
> \text{Thus, the statement is true.}
> $$

> [!blank]- (f) $2n^2 + 7 = O(n^2)$
> $$
> 2n^2 + 7 \leq C \cdot n^2 \\
> \text{Suppose } C = 9 \text{ and } n_0 = 1 \\
> 2n^2 + 7 \leq 9 \cdot n^2 \implies 2n^2 + 7 \leq 9n^2 \\
> \text{Thus, the statement is true.}
> $$

***

# Big Ω Notation

Recall that $O(f(n))$ represents an upper bound.

$\Omega(f(n))$ represents a lower bound.

In order to prove if $g(n) = \Omega(f(n))$: 
$$
g(n) \geq C \cdot f(n) \\
\text{Where } C>0 \text{ and } n_0>0 \\
\text{For all } n
$$

## Examples

Prove or disprove the following statements.

> [!blank]- (h) $3n + 2 = \Omega(n)$
> $$
> 3n + 2 \geq C \cdot n \\
> \text{Suppose } C = 3 \text{ and } n_0 = 1 \\
> 3n + 2 \geq 3n \\
> \text{Thus, the statement is true.}
> $$

> [!blank]- (i) $n^2  + 13n = \Omega(n)$
> $$
> n^2 + 13n \geq C \cdot n \\
> \text{Suppose } C = 1 \text{ and } n_0 = 1 \\
> n^2 + 13n \geq n \\
> \text{Thus, the statement is true.} \\
> $$

> [!blank]- (j) $n^2  + 13n = \Omega(n^3)$
> $$
> n^2 + 13n \geq C \cdot n^3 \\
> \text{Suppose } C = 1,000,000 \text{ and } n_0 = 1 \\
> n^2 + 13n \geq 1,000,000n \\
> \text{Thus, the statement is false.} \\
> $$

> [!blank]- (k) $n^2 + 13n = \Omega(n^2)$
> $$
> n^2 + 13n \geq C \cdot n^2 \\
> \text{Suppose } C = 1 \text{ and } n_0 = 1 \\
> n^2 + 13n \geq n^2 \\
> \text{Thus, the statement is true.} 
> $$

***

# Big Θ Notation

Recall that $O(f(n))$ represents an upper bound and $\Omega(f(n))$ represents a lower bound.

$\Theta(f(n))$ represents an exact bound. In other words, 
$$
g(n) = \Theta(f(n)) \\
\Leftrightarrow \\
g(n) = O(f(n)) \wedge g(n) = \Omega(f(n))
$$

## Examples

Prove or disprove the following statements.

> [!blank]- (l) $13n + 2 = \Theta(n)$
> $$
> 13n + 2 = O(n) \text{ is true} \\
> 13n + 2 = \Omega(n) \text{ is true} \\
> \text{Thus, the statement is true.}
> $$

> [!blank]- (m) $13n + 2 = \Theta(n^2)$
> $$
> 13n + 2 = O(n^2) \text{ is true}\\
> 13n + 2 = \Omega(n^2) \text{ is false}\\
> \text{Thus, the statement is false.}
> $$

> [!blank]- (n) $13n + 2 = \Theta(\sqrt{n})$
> $$
> 13n + 2 = O(\sqrt{n}) \text{ is false}\\
> 13n + 2 = \Omega(\sqrt{n}) \text{ is true}\\
> \text{Thus, the statement is false.}
> $$

***

# Comparing Growth Rates

In order to compare the growth rate of two functions, we can also use limits.
This is a more matematical and precise method.

```math
\lim_{n \to \infty} \frac{g(n)}{f(n)} 
= \lim_{n \to \infty} \frac{g'(n)}{f'(n)} 
= \lim_{n \to \infty} \frac{g''(n)}{f''(n)} 
= L
\\[1em]
L = \infty \implies g(n) > f(n)
\\[1em]
L = C > 0 \implies g(n) = f(n)
\\[1em]
L = 0 \implies g(n) < f(n)
```
> [!abstract] Recall
> If the limit of an expression results in an indeterminate form:
> ```math
> \lim_{n \to \infty} \frac{g(n)}{f(n)} = \frac{0}{0}
> \qquad 
> \text{or}
> \qquad 
> \lim_{n \to \infty} \frac{g(n)}{f(n)} = \frac{\infty}{\infty}
> ```
> Then you may take the derivative of the numerator and denominator and attempt to find the limit again:
> ```math
> \lim_{n \to \infty} \frac{g(n)}{f(n)} = \lim_{n \to \infty} \frac{g'(n)}{f'(n)}
> ```
## Examples

Prove or disprove the following statements.

> [!blank]- (o) $2n^2 + 7 = O(n)$
> $$
> L = 
> \lim_{n \to \infty} \frac{2n^2+7}{n} 
> = \lim_{n \to \infty}\frac{n(2n+\frac{7}{n})}{n} 
> = \lim_{n \to \infty}(2n + \frac{7}{n}) = \infty 
> \\[0.5em]
> \text{Since } L = \infty \implies g(n) > f(n) \text{,} \\
> 2n^2 + 7 \text{ is asymptotically larger than } n\\
> \text{Thus, the statement is false.}
> $$

> [!blank]- (p) $2n^2 + 7 = O(n^3)$
> ```math
> L =
> \lim_{n \to \infty} \frac{2n^2+7}{n^3} 
> = \lim_{n \to \infty}\frac{4n}{3n^2} 
> = \lim_{n \to \infty}\frac{4}{3n} 
> = \frac{4}{\infty} 
> = 0 \\[0.5em]
> \text{Since } L = 0 \implies g(n) < f(n) \text{,} \\
> n^3 \text{ is asymptotically larger than } 2n^2 + 7 \\
> \text{Thus, the statement is true.}
> ```

> [!blank]- (q) $2n^2 + 7 = O(n^2)$
> ```math
> L = \lim_{n \to \infty} \frac{2n^2+7)}{n^2} = \lim_{n \to \infty}\frac{4n}{2n} = 2 \\[0.5em]
> \text{Since } L = C = 2 > 0 \implies g(n) = f(n) \text{,} \\
> 2n^2 + 7 \text{ and } n^2 \text{ have the same growth rate }\\
> \text{Thus, the statement is true.}
> ```

***

# Logarithms

Consider the equation $\Theta(\log{n})$.
Typically, $\log{n}$ implies a base of $10$.

Is this still true?

> [!abstract] Recall
> The base of a log can be changed via the formula:
> $$
> \log_{b}a = \frac{\log_{x}a}{\log_{x}b}
> $$

Therefore, $\Theta(\log{n})$ contains all log functions of any base, since we can easily convert from one to another.

