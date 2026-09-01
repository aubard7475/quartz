---
title: Calculating Performance
order: 20
---

Performance and execution time have an inverse relationship.
Consider the following relation:
$$
\text{Performance} = \frac{1}{\text{Execution Time}}
$$
Thus, if the execution time of a program decreases (i.e. the program gets faster), then the performance increases.

The following relations can be used to determine the performance of a program:

$ET = CC \cdot CT = \frac{CC}{CR}$
$CC = ET \cdot CR = CPI \cdot IC$

$ET = \t{Execution Time}$
$CC = \t{Clock Tycles}$
$CT = \t{Clock cycle Time}$
$CPI = \t{average Clock cycles Per Instruciton}$
$IC = \t{Instruction Count}$



# Examples

> [!bug] The following examples are unchecked and may be wrong.

> [!blank]- (a) If computer A runs a program in 10 seconds and computer B runs the same program in 15 seconds, how much faster is A than B?
> $$
> P_A = \frac{1}{ET_A} = 0.1 \\[0.5em]
> P_B = \frac{1}{ET_B} = 0.067 \\[0.5em]
> \frac{P_A}{P_B} = \frac{0.1}{0.067} = 1.5 \\[0.5em]
> \text{Thus, computer A is 1.5 times faster than computer B.}
> $$

> [!blank]- (b) Our favorite program runs in 10 seconds on computer A, which has a 2 GHz clock. We are trying to help a compute rdesigned build a computer, B, which will run this program in 6 seconds. THe designed has determined that if computer B has 1.2 times as many clock cycles as computer A. > What clock rate shoud we tell the deigner to target?
> 
> $$
> ET_A = 10 s \\
> CR_A = 2 GHz \\
> CC_A = ? \\[2em]
> 
> ET_B = 6 s \\
> CR_B = ? \\
> CC_B = 1.2 CC_A \\[2em]
> 
> ET_A = \frac{CC_A}{CR_A} \\
> \implies CC_A = ET_A \cdot CR_A = 10 \cdot 2 \cdot 10^9 = 20 \cdot 10^9 cycles
> \\
> CC_B = 1.2 \cdot CC_A = 1.2 \cdot 20 \cdot 10^9 = 24 \cdot 10^9 cycles
> \\
> ET_B = \frac{CC_B}{CR_B} \\
> \implies CR_B = \frac{CC_B}{ET_B} = \frac{24 \cdot 10^9}{6} = 4 GHz
> \\
> \text{Thus, we are expecting a } 40\% { improvement.}
> $$

> [!blank]- (c)
> $$
> CT_A = 250 ps\\
> CPI_A = 2.0\\
> ET_A = CC_A \cdot CT_A = IC_A \cdot CPI_A \cdot CT_A = \frac{IC_A \cdot CPI_A}{CR_A} = 500 ps\\
> \\
> CT_B = 500 ps\\
> SPI_B = 1.2\\
> ET_B = IC_B \cdot CPI_B \cdot CT_B = 1.2 \cdot 500 = 600 ps \\
> \text{Thus, A is faster.}
> $$

> [!blank]- (d)
> Program 1 has 5 instructions
> Program 2 has 6 instructions
> $$
> ET = \frac{IC \cdot CPI}{CR} \\
> \text{We can ignore CR since they both have the same} \\
> \\
> CC_1 = (2 \cdot 1) + (1 \cdot 2) + (2 \cdot 3) = 2 + 2 + 6 = 10 cycles \\
> CC_2 = (4 \cdot 1) + (1 \cdot 2) + (1 \cdot 3) = 4 + 2 + 3 = 9 cycles \\
> $$

(e)
a.
$$
P = \frac{1}{ET}
ET_{P1} = \frac{CPI_{P1}}{CR_{P1}} = \frac{1.5}{3 \cdot 10^9} = \frac{1}{2 \cdot 10^9} = 0.5 nanoseconds
$$
b.