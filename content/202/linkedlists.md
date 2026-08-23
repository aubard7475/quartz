---
title: Linked Lists
order: 300
---

Linked lists are basically custom arrays.
They include a `Node` (which stores an element) and a class to store the list itself.


Creating a linked list:
```cpp
struct Node{
    int data;   // this is your data you are storing
    Node *next; // this points to the next Node
};

class singlyLL{
private:
    Node *head; // the start of the list
    Node *tail; // the end of the list
    int nodeCount; // the amount of values in your list
public:
    singlyLL();
    void insert_at_head(int value);
    void insert_at_tail(int value);
    void insert_at_position(int position, int value);
    void printSLL();
    ~singlyLL();
};
```

When a linked list is created, there are no values, so both the `head` and `tail` are `nullptr`:
```cpp
singlyLL::singlyLL(){
    head=nullptr;
    tail=nullptr;
}
```

In order to add a value to a linked list, you need to make sure that it is inserted at the right position:
```cpp
void singlyLL::insert_at_head(int value){
	Node *temp=new Node; // creates the new node
	temp->data=value; // puts the paramter of the function as the value
	temp->next=nullptr;
	//If there are no Nodes, the head and tail are the same thing since there will only be one value
	if(head==nullptr){
		head=temp;
		tail=temp;
    //If there are Nodes
	} else{
		temp->next=head; // the previous head becomes the next head, since this node we have just created will be the new head
		head=temp;
	}
}

```

In order to print the list, you need to traverse it:
```cpp
void singlyLL::printSLL(){
	if(head==nullptr){
		cout<<"Linked List is Empty"<<endl;
		return;
	}
	Node *ptr=head;
	while(ptr!=nullptr){
		cout << ptr->data << " ";
		ptr = ptr->next; // this is our i++
	}
	cout<<endl;
}
```

## Double Linked List

A double linked list is the same as above except the `Node` struct will contain both a `next` and `prev` pointer:
```cpp
struct Node{
    int data;
    Node *next;
    Node *prev;
};
```

This allows you to traverse the list forwards and backwards.