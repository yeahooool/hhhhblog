---
sidebar_position: 7
---

# C++ 中的析构函数

析构函数是一个实例成员函数，每当一个对象被销毁时，析构函数就会被调用。即，析构函数是对象被销毁之前要调用的最后一个函数。

- 析构函数也是一种特殊的成员函数，类似于构造函数。析构函数销毁构造函数创建的类对象。
- 析构函数的名称与类的名称相同，只是在前面加上一个波浪号（~）作为前缀。
- 不能定义多个析构函数。
- 析构函数只是一种销毁构造函数创建的对象的方法。因此不能重载析构函数。
- 析构函数没有返回类型，也不接受任何参数。
- 当对象超出作用域时，析构函数会被自动调用。
- 析构函数释放构造函数创建的对象占用的内存空间。
- 析构函数中，对象的销毁与对象的创建顺序相反。

**需要注意的是，如果对象是通过`new`运算符创建的，或者构造函数中使用了`new`运算符来分配 `heap memory`或者`free store`中的内存，那么在对象被销毁之前，析构函数必须使用`delete`运算符来释放内存。**

## 析构函数的语法

1. 在类中定义析构函数

```cpp
~ <class-name>() {
    // some instructions
}
```

2. 在类外定义析构函数

```cpp
<class-name> :: ~<class-name>() {
    // some instructions
}
```

### 示例

1. 下述代码分别演示了当对象创建和销毁时，构造函数和析构函数的自动调用。

```cpp
// C++ program to demonstrate the execution of constructor
// and destructor

#include <iostream>
using namespace std;

class Test {
public:
	// User-Defined Constructor
	Test() { cout << "\n Constructor executed"; }

	// User-Defined Destructor
	~Test() { cout << "\nDestructor executed"; }
};
main()
{
	Test t;

	return 0;
}
```

**Output:**

```bash

 Constructor executed
Destructor executed
```

2. 下述代码分别演示了当多个对象创建和销毁时，构造函数和析构函数的自动调用。

```cpp
// C++ program to demonstrate the execution of constructor
// and destructor when multiple objects are created

#include <iostream>
using namespace std;
class Test {
public:
	// User-Defined Constructor
	Test() { cout << "\n Constructor executed"; }

	// User-Defined Destructor
	~Test() { cout << "\n Destructor executed"; }
};

main()
{
	// Create multiple objects of the Test class
	Test t, t1, t2, t3;
	return 0;
}
```

**Output:**

```bash

 Constructor executed
 Constructor executed
 Constructor executed
 Constructor executed
 Destructor executed
 Destructor executed
 Destructor executed
 Destructor executed
```

3. 下述代码演示了构造函数和析构函数的调用次序。

```cpp
// C++ program to demonstrate the number of times
// constructor and destructors are called

#include <iostream>
using namespace std;
static int Count = 0;	 //It is static so that every class object has the same value
class Test {
public:
	// User-Defined Constructor
	Test()
	{

		// Number of times constructor is called
		Count++;
		cout << "No. of Object created: " << Count
			<< endl;
	}

	// User-Defined Destructor
	~Test()
	{

		cout << "No. of Object destroyed: " << Count //It will print count in
			<< endl;								 //decending order
		Count--;
		// Number of times destructor is called
	}
};

// driver code
int main()
{
	Test t, t1, t2, t3;

	return 0;
}
```

**Output:**

```bash
No. of Object created: 1
No. of Object created: 2
No. of Object created: 3
No. of Object created: 4
No. of Object destroyed: 4
No. of Object destroyed: 3
No. of Object destroyed: 2
No. of Object destroyed: 1
```

:::note
_注意:对象的销毁顺序与创建顺序相反。在这种情况下，t3 是第一个被销毁的，而 t 是最后一个。_
:::

## 析构函数的特性

下面是析构函数的主要特性：

- 析构函数是一种特殊的成员函数，它在对象被销毁时自动调用。
- 不能声明为静态（static）或常量（const）。
- 析构函数不能有参数。
- 不返回任何值，也不返回 void。
- 具有析构函数的类的对象不能作为联合(union)的成员。
- 析构函数应该在类的公有部分（public）声明。
- 程序不能访问析构函数的地址。

## 什么时候调用析构函数？

当一个对象超出作用域时，析构函数会被自动调用。下面是一些调用析构函数的常见情况：

1. 函数结束时，函数中的局部对象的生命周期结束，析构函数被调用。
2. 程序结束时，全局对象的生命周期结束，析构函数被调用。
3. 包含局部变量的块（block）结束时，局部变量的生命周期结束，析构函数被调用。
4. 调用`delete`运算符时，析构函数被调用。

:::note
_注意:析构函数也可以显式地调用。_
:::

## 怎样显式地调用析构函数？

我们可以使用以下语句显式地调用析构函数：

```cpp
object_name.~class_name()
```

## 析构函数与普通成员函数的区别

- 析构函数的名称与类的名称相同，只是在前面加上一个波浪号（~）作为前缀。
- 析构函数没有返回类型，也不接受任何参数。

```cpp
#include <bits/stdc++.h>
using namespace std;

class String {
private:
	char* s;
	int size;

public:
	String(char*); // constructor
	~String(); // destructor
};

String::String(char* c)
{
	size = strlen(c);
	s = new char[size + 1];
	strcpy(s, c);
}
String::~String() { delete[] s; }

int main()
{
	String str = "Hello, World!";
	String myString(str);
	cout << "String: " << myString.s << endl;
	return 0;
}
```

上述代码运行报错，原因是在类的外部访问一个私有成员变量 `s`。在 C++ 中，类的私有成员只能通过类的成员函数进行访问，并且释放了两次内存。在代码中，创建了一个 `String` 对象 `str`，然后用它来初始化另一个 `String` 对象 `myString`。这两个对象都有一个指向同一块内存的指针 `s`。当这两个对象被销毁时，它们都会试图删除这块内存，导致了这个错误。
```bash
./Solution.cpp: In function 'int main()': ./Solution.cpp:6:8: error: 'char* String::s' is private char* s; ^ ./Solution.cpp:26:33: error: within this context cout << "String: " << myString.s << endl; ^
```

```bash
Abort signal from abort(3) (SIGABRT) *** Error in `./Solution': double free or corruption (fasttop): 0x0000000001a3ec20 *** timeout: the monitored command dumped core /bin/bash: line 1: 31 Aborted
```

为了解决这个问题，我们首先需要添加一个公有成员函数来获取私有成员变量 `s` 的值。然后，我们需要[自定义拷贝构造函数](./Copy%20Constructors%20in%20C++)，以便在创建新对象时，为新对象分配新的内存。

```cpp
#include <bits/stdc++.h>
using namespace std;

class String {
private:
	char* s;
	int size;

public:
	String(char*); // constructor
	~String(); // destructor
    String(const String&); // copy constructor
    char* get_s(); // getter function
};

String::String(char* c)
{
	size = strlen(c);
	s = new char[size + 1];
	strcpy(s, c);
}

String::String(const String& old_str)
{
  size = old_str.size;
    s = new char[size +1];
  strcpy(s,old_str.s);
  }

String::~String() { delete[] s; }

char* String::get_s() { return s; } // implementation of getter function

int main()
{
	String str = "Hello, World!";
	String myString(str);
	cout << "String: " << myString.get_s() << endl;
	return 0;
}
```

## 什么时候需要编写自定义析构函数？

如果不在类中编写析构函数，编译器会自动生成一个默认的析构函数。默认析构函数正常执行，除非在类中动态分配内存或使用指针变量。当类包含指向在类中分配的内存的指针时，需要编写自定义析构函数，以便在实例被销毁之前释放内存。必须这样做，否则会导致内存泄漏。
