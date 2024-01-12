---
sidebar_position: 8
---

# C++ 中的私有析构函数

访问修饰符为 [`private`](./Access%20Modifiers%20in%20C++) 的析构函数称为私有析构函数。无论何时，只要我们想要阻止对象的销毁，就可以将析构函数声明为私有的。

**私有析构函数的作用**

每当我们要控制一个类中对象的销毁时，我们都会将析构函数设置为私有的。对于动态创建的对象，可能会将指向对象的指针传递给函数，而函数可能会删除该对象。如果对象在函数调用之后被引用，那么引用将是无效的。

**私有析构函数的示例**

```cpp
// CPP program to illustrate
// Private Destructor
#include <iostream>
using namespace std;

class Test {
private:
	~Test() {}
};
int main() {}
```

上面的程序编译和运行良好。因此，我们可以说:创建私有析构函数不是编译器错误。

如果是下述情况，编译器将生成错误:

```cpp
// CPP program to illustrate
// Private Destructor
#include <iostream>
using namespace std;

class Test {
private:
	~Test() {}
};
int main() { Test t; }
```

**Output:**

```bash
prog.cpp: In function ‘int main()’:
prog.cpp:8:5: error: ‘Test::~Test()’ is private
    ~Test() {}
    ^
prog.cpp:10:19: error: within this context
int main() { Test t; }
```

上述程序在编译时会生成错误。编译器认为局部变量 `t` 不能被销毁，因为它的析构函数是私有的。

**如果是下述情况：**

```cpp
// CPP program to illustrate
// Private Destructor
#include <iostream>
using namespace std;

class Test {
private:
	~Test() {}
};
int main() { Test* t = new Test; }
```

上述程序编译和运行正常。当可以动态内存分配创建对象时，删除对象的责任在程序员身上。因此，编译器不会生成错误。使用`new`运算符创建的对象的生存期是动态的，因此，它们不会在程序的任何其他地方被销毁，如果我们不显式地删除它们。

:::info
在这个例子中，使用指针创建对象是因为类的析构函数是私有的。如果我们试图在栈上创建对象（例如，`Test t;`），编译器将在离开作用域时尝试调用析构函数来清理对象，但由于析构函数是私有的，这将导致编译错误。

然而，当我们使用指针在堆上创建对象时（例如，`Test* t = new Test;`），编译器不会自动调用析构函数。这样，我们就可以创建对象，而不会因为无法访问私有析构函数而导致编译错误。

但是，这样做有一个问题，那就是我们无法删除这个对象，因为删除对象需要调用析构函数，而析构函数是私有的。这将导致内存泄漏。所以，通常我们不会将析构函数设置为私有，除非我们有特殊的理由。（下面会介绍析构函数私有时如何删除对象）
:::

**在将析构函数声明为私有的情况下，还可以使用`malloc()`函数创建类的实例**。下面的程序实现了同样的功能。

```cpp
// CPP program to illustrate
// Private Destructor

#include <bits/stdc++.h>
using namespace std;

class Test {
public:
	Test() // Constructor
	{
		cout << "Constructor called\n";
	}

private:
	~Test() // Private Destructor
	{
		cout << "Destructor called\n";
	}
};

int main()
{
	Test* t = (Test*)malloc(sizeof(Test));
	return 0;
}
```

上述程序编译和运行正常，No Output。

但是，以下程序在编译中失败。当调用 `delete` 时，将调用析构函数。

```cpp
// CPP program to illustrate
// Private Destructor
#include <iostream>
using namespace std;

class Test {
private:
	~Test() {}
};

// Driver Code
int main()
{
	Test* t = new Test;
	delete t;
}
```

**Output:**

```bash

./Solution.cpp: In function 'int main()':
./Solution.cpp:8:2: error: 'Test::~Test()' is private
  ~Test() {}
  ^
./Solution.cpp:15:9: error: within this context
  delete t;
         ^
```

在上面的程序中，当类具有私有析构函数时，只能创建该类的动态对象。

下面是一种**创建带有私有析构函数的类并将函数作为类的友元的方法**。该函数只能删除对象。

```cpp
// CPP program to illustrate
// Private Destructor
#include <iostream>

// A class with private destructor
class Test {
private:
	~Test() {}

public:
	friend void destructTest(Test*);
};

// Only this function can destruct objects of Test
void destructTest(Test* ptr) { delete ptr; }

int main()
{
	// create an object
	Test* ptr = new Test;

	// destruct the object
	destructTest(ptr);

	return 0;
}
```

另外一种使用私有析构函数的方法是**类实例方法**。在这种情况下，我们可以使用 `delete this` 语句来删除对象。

```cpp
#include <iostream>

using namespace std;

class parent {
	// private destructor
	~parent() { cout << "destructor called" << endl; }

public:
	parent() { cout << "constructor called" << endl; }
	void destruct() { delete this; }
};

int main()
{
	parent* p;
	p = new parent;
	// destructor called
	p->destruct();

	return 0;
}
```

**Output:**

```bash
constructor called
destructor called
```