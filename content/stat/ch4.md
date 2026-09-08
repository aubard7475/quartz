---
title: Chapter 4
order: 4
---

> [!abstract] The majority of the content on this page is copy-pasted from the textbook.

# $4.1$ Measures of Location

Attributes for summarizing data:

- Location: Where is the center of the data?

- Dispersion: Is the data widely scattered or tightly grouped around the central point?

- Shape: Is the data spread symmetrically about the central value? Is the data unbalanced (e.g., are the values much larger than the mean, but not much smaller)?

- Does the data tend to cluster in several groups?

**Numerical descriptive statistics** are numerical summaries of quantitative data.

A **parameter** is a numerical measure that describes a characteristic of a population.

A **statistic** is a numerical measure that describes a characteristic of a sample.

**Inferential Statistics** is concerned with making conclusions or inferences about population parameters using sample statistics.

## Mean

Suppose there are $n$ observations in a data set, consisting of the observations $x_1, x_2, \dots, x_n$; then the **arithmetic mean** is defined to be:
$$
\frac{1}{n} (x_1 + x_2 + \dots + x_n)
= \frac{\sum x_i}{n}
$$

Given some point $A$ and a data point $x$, then $𝑥−𝐴$ represents how far $x$ deviates from $A$. This difference is also called a **deviation**.

An **outlier** is a data value that is extremely different from other measurements in the data set. Statistical measures which are not affected by outliers are said to be **resistant**.

The **weighted mean** of a data set with values $x_1, x_2, \dots, x_n$ is given by:
$$
\bar{x} = \frac{w_1x_1+w_2x_2+\dots+w_nx_n}{w_1+w_2+\dots+w_n} 
= \frac{\sum (w_ix_i)}{\sum w_i}
$$
where $w_i$ is the weight observation $x_i$.

The **trimmed mean** is a modification of the arithmetical mean which ignores an equal percentage of the highest and lowest data values in calculating the mean.

## Median

The **median** of a set of observations is the measure of center that is the middle value of the data when it is arranged in ascending order. The same number of data values lie on either side of the median.

Finding the mean:
1. Arrange the data in ascending order.

2. Determine the number of values in the data.

3. Find the data value in the middle of the data set.

4. If the number of data values is odd, then the median is the data value that is exactly in the middle of the data set.

5. If the number of data values is even, then the median is the mean of the two middle observations in the data set.

## Mode

The **mode** of a data set is the most frequently occurring value.

- Unimodal: only one mode exists

- Bimodal: two modes exist

- Multimodal: more than two modes exist

- No mode: if no value repeats or all values repeat the same number of times

|         | Mean | Median | Mode |
|---------|:----:|:------:|:----:|
| Ratio   | ✔    | ✔     | ✔   |
| Interval| ✔    | ✔     | ✔   |
| Ordinal |      | ✔     |      |
| Nominal |      |        | ✔   |

A **moving average** is obtained by adding consecutive observations for a number of periods and dividing the result by the number of periods included in the average.

# $4.2$ Measures of Dispersion

The distance that a point is from its mean is called a **deviation from the mean**.

The **range** is the difference between the largest and smallest data values.

The **sample mean absolute deviation** (MAD) is the average distance from the mean and is given by:
$$
\frac{\sum | x_i - x |}{n}
$$

The **variance** of a data set containing the complete set of *population* data is given by:
$$
a^2 = \frac{\sum (x_i - 𝜇)^2}{N}
$$
where $μ$ is the population mean of the data set, $N$ is the size of the population, and $x_i$ is a particular value in the data set. $a^2$ is pronounced *sigma squared*, and is called the **population variance**.

The **variance** of a data set containing *sample* data is given by:
$$
s^2 = \frac{\sum (x_i - x)^2}{n-1}
$$
where $𝑥$ is the mean of the sample data, $n$ is the size of the sample, and $𝑥_i$ is a particular value in the sample. $𝑠^2$ is called the sample variance.

The **standard deviation** is also a measure of how much the data varies around the mean. It is found by taking the square root of the variance.

If the distribution of the data is bell-shaped, then

- About 68% of the data should lie within 1 standard deviation of the mean.

- About 95% of the data should lie within 2 standard deviations of the mean.

- About 99.7% of the data should lie within 3 standard deviations of the mean.

## Chebyshev's Theorem

The proportion of any data set lying within $k$ standard deviations of the mean is at least:
$$
1 - \frac{1}{k^2}, \text{ for } k>1 \\
k = \t{mean} - \t{bound} \\
\t{You may need to work bardwards if given the answer.}
$$
If $k=2$, at least $1-\frac{1}{2^2}-\frac{3}{4}$ of the data values lie within 2 standard deviations of the mean, for any data set.
If $k=3$, at least $1-\frac{1}{3^2}-\frac{8}{9}$ of the data values lie within 3 standard deviations of the mean, for any data set.

## Coefficient of Variation

The lower the coefficent of variation, the closer the data is.

For population data, the measure is defined as:
$$
\\[0.5em]
(\frac{𝜎}{𝜇}\cdot 100)%
$$
where $𝜎$ is the standard deviation and $𝜇$ is the mean.

For population data, the measure is defined as:
$$
(\frac{𝑠}{\bar{x}}\cdot 100)%
$$
where $𝑠$ is the standard deviation and $\bar{x}$ is the mean.