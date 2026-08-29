---
title: Efficiency of a Program - Practice
order: 10
unlisted: true
---



# Big O notation

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