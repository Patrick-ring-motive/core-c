# A JavaScript library that implements the C standard library

This library is intended to help people learn JavaScript that have a background in C

## Contents and Differences

This will not behave *exactly* like the C standard library as it is mainly a learning tool. JavaScript is not strict in typings and in general errors will not be thrown if you input the wrong type into a function. The behavior of what happens is often unpredictable but that is the nature of writing code in JavaScript(and why we have TypeScript).

# assert.h
Resuses js console.assert();

# ctype.h
Can either take a number for the character code or an integer for most functions and outputs a 1 or 0 as you would expect in C. toupper() and tolower() output a String instead of a number to reduce the need for type conversions as you write code.

# math.h
Reuses js Math functions where possible which is in almost every instance.

 
PS 

I'm doing these as a personal coding challenge to become more familiar with languages that I don't use every day. (My day job is mostly JS on frontend and Java on backend)

Atwood's Law: “Any application that can be written in JavaScript, will eventually be written in JavaScript.”

Languages whose standard libraries I intend to implement:

C - this repository

C++

C#

Java

Rust

Python

Solidity

ActionScript

[TypeScript](https://github.com/zloirock/core-js) - or I would do TypeScript but JavaScript *is* the core library for TypeScript. I'll just refer to core-js which was the inspiration for all of this.

AssemblyScript

GLSL

Apex
