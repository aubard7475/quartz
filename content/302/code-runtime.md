---
title: Identifying Code Runtime
order: 09022026
---

# Linear

If we are adding or subtracting by some constant, it is linear.

```cpp
for (int i=0; i<n; i++)
  cout << "wow";
```
$$
\sum_{i=0}^{n-1} = n = \Theta(n)
$$

```cpp
for (int i=2; i<n; i++) 
  cout << "wow";
```
$$
\sum_{i=2}^{n-1} \Theta(1) = n - 2 = \Theta(n)  \\
$$

```cpp
for (int i=0; i<n/2; i++)
  cout << "wow";
```
$$
\sum_{n/2 - 1}^{i=0} \Theta(1) = \frac{n}{2} = \Theta(n)
$$

```cpp
for (int i=0; i<n; i=i+3)
  cout << "wow";
```
$$
\sum_{n-1}^{i=0} \Theta(1) = \frac{n}{3} = \Theta(n)
$$

```cpp
for (int i=n; i>0; i--)
  cout << "wow";
```
$$
\text{Missing answer} = \Theta(n)
$$

# Logarithmic

If we are multiplying or dividing by some constant, it is logarithmic.

```cpp
for (int i=n; i>0; i=i/2)
  cout << "wow";
```
$$
\log_{2} n = \Theta(\log n)
$$

```cpp
for (int i=1; i<n; i=i*2)
  cout << "wow";
```
$$
\log_{2} n = \Theta(\log n)
$$

```cpp
for (int i=m; i>0; i=i/10)
  cout << "wow";
```
$$
\log_{10} n - \Theta(\log n)
$$

# Quadratic

If there are nested loops, multiply the runtime of each loop.

```cpp
for (int i=0; i<n; i++)
  for (int j=0; j<n; j++)
    cout << "wow";
```
$$
\sum_{i=0}^{n-1} \sum_{j=0}^{n-1} \Theta(1) = \sum_{i=0}^{m-1} n = n^2 = \Theta(n^2)
$$

```cpp
for (int i=0; i<n; i++)
  for (int j=0; j<i; j++)
    cout << "wow";
```
$$
\sum_{i=0}^{n-1} \sum_{j=0}^{i-1} \Theta(1) = \sum_{i=0}^{n-1} i = 0+1+2+3+\dots+n-1 = ?
$$ 
## Gauss' Formula
$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$
$$
\sum_{i=1}^{n-1} i = \frac{(n-1)(n-1+1)}{2} = \frac{n(n-1)}{2} = \frac{n^2-n}{2} = \Theta(n^2)
$$

# Weird ones

```cpp
for (int i=0; i<n; i++)
  for (int j=1; j<n; j=j*2)
    cout << "wow";
```
$$
n \cdot \log_{2} n = \Theta(n \log n)
$$

```cpp
for (int i=0; i<n; i++)
  for (int j=1; j<i; j=j*2)
    cout << "wow";
```
$$
\sum_{i=0}^{n-1} \log_{2} i \\ \implies
\sum_{i=1}^{n} \log_{2} i = \log_{2} 1 + \log_{2} 2 + \log_{2} 3 + \dots + \log_{2} n = \log_{2} (1\cdot 2\cdot \dots \cdot n) = \log_{2} (n!)\\
\sum_{i=1}^{n} \log_{2} i \approx \sum_{i=1}^{n} \ln i \approx \int_{1}^{n} \ln x \,dx = x \ln x - x + C \text{REQUIRES LINE FROM 1 to n} = (n \ln n - n + C) - (1 \ln 1 - 1 + C) = n \ln n - n + 1 = \Theta(n \log n)
$$

$\log_{a}(n!) = \Theta(n \log n)$

# Non nested

Just add them instead of multiply

```cpp
for (int i=0; i<n; i++)
  cout << "wow";

for (int i=0; i<n; i++)
  cout << "wow";
```
$$
\Theta(n) + \Theta(\log n) = \Theta(n)
$$
