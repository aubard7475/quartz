---
title: Linked Lists
order: 0
draft: true
---

Linked lists are basically custom arrays.
They include a `Node` which stores an element and a class to store the list itself.

Example:
```cpp
struct Node{
    int data;
    Node *next;
};

class singlyLL{
private:
    Node *head;
    Node *tail;
    int nodeCount;
public:
    singlyLL();
    void insert_at_head(int value);
    void insert_at_tail(int value);
    void insert_at_position(int position, int value);
    void printSLL();
    ~singlyLL();
};
```