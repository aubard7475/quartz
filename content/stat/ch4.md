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