---
title: Conversions
order: -5
---

> [!abstract] Recall
> A number in decimal is represented with `0` through `9`
> A number in binary is represented with `0` and `1`

A number in hexadecimal is represented with `0` through `F` where:
|A |B |C |D |E |F |
|- |- |- |- |- |- |
|10|11|12|13|14|15|

All binary numbers must start with `0b`.
Ex: `0b0010 0010`

All hexadecimal numbers must start with `0x`.
Ex: `0x0D`

## Decimal > Binary
1. Divide the number by 2 until you get 0 as result
13 / 2 = 6 (Remainder 1)
6  / 2 = 3 (Remainder 0)
3  / 2 = 1 (Remainder 1)
1  / 2 = 0 (Remainder 1)
2. Write remainders in reverse order
`0b0000 1101` = 13

## Binary > Hexadecimal
1. Group your binary into groups of four starting from the right
2. Each group of 4 can be assigned a value in hexadecimal

# Two's Complement
This is how we represent signed integers.
It is read simmilarly to standard binary, but the leftmost bit is negative instead of positive.

Ex: `0b1010`
| 1 | 0 | 1 | 0 |
|---|---|---|---|
|-8 | 4 | 2 | 1 |

Thus, `0b1010` = 2 + -8 = 2 - 8 = -6

## Decimal > Two's Complement
1. Get absolute value of number (if starting with decimal)
2. Convert to binary (if not already in binary)
3. Add a “0” in front
4. Flip 0s and 1s
5. Add 1 (in Binary)
6. Get rid of leading 1s

Ex: -34
1. **|-76| = 76**
2. `0b0100 1100`
3. `0b 0 0100 1100`
4. `0b 1 1011 0011`
5. `0b 1 1011 0100`
6. `0b 1011 0100`

## Two's Complement > Decimal
1. If the number is in hexadecimal, convert to binary
2. Take away all leading 1s except one
3. Convert back to decimal, with the leftmost bit subtracted instead of added

# Floating Point
This is how we represent decimals.

There are three sections in a floating point number:
1. Sign bit (1 bit)
2. Exponent (8 bits)
3. Fraction (23 bits)

## Decimal > Floating Point
1. Get absolute value of number
2. Convert to binary (if not already)
3. Move the decimal point to the most significant 1 
4. Add to the Mantissa constant (127) the number of jumps done in step 3
5. Convert result from step 4 to binary
6. Setup the 3 sections
a. Sign (0 if positive, 1 if negative)
b. Exponent (Answer from step 5)
c. Fraction (Decimal part from step 3)

Ex: 11.75
1. |11.75| = 11.75
2. `0b1011.110`
3. `0b1.011110`
4. 127 + 3 = 130
5. `0b1000 0010`
6. `0b0 1000 0010 0111 1000 0000....`

This can be converted into hexadecimal if needed.

If decimal number has a leading zero (like 0.5), then make sure you go backwards when moving the decimal point and doing subtraction instead of addition in step 4.

## Floating Point > Decimal
1. Convert to binary (if not already)
2. Split the three fields
3. First field indicates the sign is positive or negative (1 bit)
4. Second field indicates the exponent (8 bits)
a. Convert it into decimal and subtract 127.
5. Last field indicates the fractional part (the rest of the bits)
6. Compute `0b1.<answer from step 5> * 2^<answer from step 4>`
