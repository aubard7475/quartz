---
title: R Studio
order: 0
---

First, download [R](https://cran.r-project.org) and [R Studio](https://posit.co/products/open-source/rstudio).

After opening it, click the green plus icon in the top left and select "R Script"

You can use ctrl+s to save your file.

# Running your Code

Highlight the code you would like to run from your file and click the "Run" button in the top right corner of the file menu OR use ctrl+enter.

You can also directly type code in the console to run it, although it will not be saved in your file.

You can clear the console by clicking the broom icon.

## Enviroment Panel

The panel in the top right is the enviroment.

This panel will show you the values of all your variables.

You can clear it by clicking the broom icon.

# Code glossary

Creating variables:
```r
x <- 5
y <- 1:100 # all values from 1 to 100
z <- scan() # this is for copy pasting from hawkes
1
2
3
4
5

# ^ you must leave one line empty with no comments after
```
Useful operations:
```r
cumsum(z)
mean(z)
median(z)
names(table(z))[table(z) == max(table(z))] # mode
sum(z)
mean(z, trim = 0.10) # trimmed mean
zoo::rollmean(z, 2) # moving average
a * 6 - sum(z) # missing value where a is the mean and b is the amount of data
```