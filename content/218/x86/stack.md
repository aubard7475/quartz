---
title: Stack & Heap
order: 100
---

The stack grows downward.
Uses the `rsp` register which always points to the top of the stack (which is at the bottom since it grows downward).

The heap grows upward.

How to interact with the stack?
`push <op64>` pushes `<op64>` on the stack.
`pop <op64>` pops `<op64>` from the stack and puts the popped data in op64.
