---
title: Reading From a File
tags: ["20"]
---

1. Include the `fstream` library.
2. Create an `ifstream` object.
3. Open the file with `.open()`
4. Read the file
    a. Use `getline()` to read line by line
    b. Use `>>` to read word by word
5. Close the file with `.close()`

Example:
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // Opens the file
    ifstream inFile;
    inFile.open("data.txt");
    // Varifies the file exists
    if (!inFile.is_open())
        return 0;
    // Iterates through every line in the file
    string line;
    while (getline(inFile, line)){
        // Do something here, such as printing the line:
        cout << line << endl;
    }
    // Closes the file
    inFile.close();
    return 0;
}
```