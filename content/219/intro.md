---
title: Computer Abstractions & Technology
order: 10
---

Pseudo Format for an instruction:
```asm
add $t0, $t1, $t2 
add rd, rs, rt

lw $t0, 4($s1) 
lw rt, imm(rs) ; imm stands for immediate
```

What part of your body gives you intructions?
> Your brain.

# Key Components of a Computer
Input (Keyboard, Mouse)
Output (Monitor, Printer)
Memory(Primary, Split)
Datapath
Control Unit

Datapath + Control Unit = Processor

<img src="https://cookies-notes.pages.dev/images/cpu-example.png" class="home-image">

# Classes of Computers
| Class  | Description |
| :- | :- |
| Personal | General purpose, variety of software |
| Server | Network based, high capacity, reliable, ranges from small servers to building sized |
| Supercomputer | Type of server, scientific/engineering calculations, highest capability |
| Embedded | Hidden as components, stringent power/performance/cost constraints |
| Mobile devices | Smartphones, tablets, rely on battery |

# Understanding Performance

| | What it determines |
| - | - |
| Algorithm | Number of operations executed |
| Programming language | Number of machine instructions per operation |
| Processor & Memory System | How fast instructions are executed |
| I/O System | How fast I/O operations are executed |

# Eight Great Ideas
- Design for Moore's Law
- Use abstraction to simplify design
- Make the common case fast
- Performance via parallelism
- Performance via pipelining
- Performance via prediction
- Hierarchy of memories
- Dependability via redundancy

Tip: Make the common case fast.
Thus, MIPS has 32 general purpose registers.

Consider the following code:
| CISC | RISC |
| :-: | :-: |
| `mov $t0, 0` | `add $t0, $0, $0`|

Both codes do the same thing (storing `0` in `$t0`), but RISC tries to reuse existing instructions.

Another example:
```asm
add $t0, $t1, $t2 ; requires 2 lw instructions
addi $t0, %t1, 69 ; requires 1 lw instruction
```

> [!missing] To be continued...