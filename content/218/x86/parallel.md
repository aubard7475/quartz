---
title: Parallel Programming
order: 200
---

You know what a core is.

Parallel programming is using multiple cores/threads for the same program.

Functionally, your code splits off into multiple cores/threads and once they are all done with their assigned task they meet back up.

The maximum speed up of parallel programming is shown by Andalh’s Law:
```math
S(N) = \frac{1}{(1 - P) + \frac{P}{N}}
```
P = The proportion of the program that can be parallelized.
1-P = The serial proportion of the program that cannot be parallelized.
N = The number of processors. 

In the context of assembly, each thread has its own unique set of registers (rax, rdx, etc), but they all share the same variables. If you change `myVar` in one thread, then it is changed for all threads.

A race condition is when 2 or more threads change the same variable at the same time. This can be resolved by locking the code until certain actions are preformed.