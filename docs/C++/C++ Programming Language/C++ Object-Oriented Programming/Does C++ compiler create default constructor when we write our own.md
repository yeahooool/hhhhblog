---
sidebar_position: 10
---

# 当我们编写自定义构造函数时，C++ 编译器会创建默认构造函数吗？

不，当我们初始化自己的构造函数时，C++编译器不会创建默认构造函数，编译器默认为每个类创建一个默认构造函数; 但是，如果定义自己的构造函数，编译器不会创建默认构造函数。这是因为默认构造函数不接受任何参数，如果创建了两个默认构造函数，编译器很难调用哪个默认构造函数。

示例 1 编译没有任何错误，但示例 2 的编译失败，错误是`no matching function for call to ‘myInteger::myInteger()’`.

**example 1:**

```cpp
// C++ program to demonstrate a program without any error
#include <iostream>

using namespace std;

class myInteger {
private:
	int value;

	//...other things in class
};

int main()
{
	myInteger I1;
	getchar();
	return 0;
}
```

**example 2:**

```cpp
// C++ program to demonstrate a program which will throw an
// error
#include <iostream>

using namespace std;

class myInteger {
private:
	int value;

public:
	myInteger(int v) // parameterized constructor
	{
		value = v;
	}

	//...other things in class
};

int main()
{
	myInteger I1;
	getchar();
	return 0;
}
```

```bash
./Solution.cpp: In function 'int main()':
./Solution.cpp:22:12: error: no matching function for call to 'myInteger::myInteger()'
  myInteger I1;
            ^
./Solution.cpp:12:2: note: candidate: myInteger::myInteger(int)
  myInteger(int v) // parameterized constructor
  ^
./Solution.cpp:12:2: note:   candidate expects 1 argument, 0 provided
./Solution.cpp:7:7: note: candidate: constexpr myInteger::myInteger(const myInteger&)
 class myInteger {
       ^
./Solution.cpp:7:7: note:   candidate ...
```

这个错误是因为试图使用默认构造函数（没有参数的构造函数）来创建 `myInteger` 类的实例，但是类中并没有定义默认构造函数。类中只定义了一个带有一个参数的构造函数 `myInteger(int v)`。

在 C++ 中，如果没有定义任何构造函数，编译器会提供一个默认构造函数。但是，如果定义了一个或多个构造函数，编译器就不会再提供默认构造函数。因此，需要自己定义一个默认构造函数。

```cpp
// C++ program to demonstrate a program which will throw an
// error
#include <iostream>

using namespace std;

class myInteger {
private:
	int value;

public:
    myInteger() : value(0) {} // default constructor
	myInteger(int v) // parameterized constructor
	{
		value = v;
	}

	//...other things in class
};

int main()
{
	myInteger I1;
	getchar();
	return 0;
}
```

添加了一个默认构造函数 `myInteger()`，它将 `value` 初始化为 `0`。现在，可以使用默认构造函数来创建 `myInteger` 类的实例了。
