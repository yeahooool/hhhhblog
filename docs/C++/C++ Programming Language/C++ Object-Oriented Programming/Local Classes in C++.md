---
sidebar_position: 15
---

# C++ 中的局部类

在函数内部声明的类称为该函数的局部类。

- 局部类名只在函数内部有效。
- 局部类的方法只能在类内部定义。
- 局部类可以有静态函数，但是不能有静态数据成员。

例如，下述程序中，Test 是 fun() 函数的局部类:

```cpp
// C++ program without any compilation error
// to demonstrate a Local Class
#include <iostream>
using namespace std;

// Creating the class
void fun()
{
	// local to fun
	class Test {
		// members of Test class
	};
}

// Driver Code
int main() { return 0; }
```

## 示例

### 1. 局部类类型名称只能在函数内部使用

例如，下述程序中，`t` 和 `tp` 的声明在 `fun()` 中是有效的，但是在 `main()` 中是无效的。

```cpp
// A program without any compilation error to demonstrate
// that a local class type name can only be used
// in the enclosing function

#include <iostream>
using namespace std;

void fun()
{
	// Local class
	class Test {
		// Body
	};

	Test t; // Fine
	Test* tp; // Fine
}

int main()
{
	Test t; // Error
	Test* tp; // Error
	return 0;
}

```

### 2. 局部类的方法只能在类内部定义

例如，下述程序中，`程序1` 是正确的，而 `程序2` 是错误的。

程序 1：

```cpp
// C++ program without any compilation error to demonstrate
// that all the methods of Local classes must be defined
// inside the class only
#include <iostream>
using namespace std;

void fun()
{
	class Test // local to fun
	{
	public:
		// Fine as the method is defined
		// inside the local class
		void method()
		{
			cout << "Local Class method() called";
		}
	};

	Test t;
	t.method();
}

int main()
{
	fun();
	return 0;
}

```

输出结果：

```cpp
Local Class method() called
```

程序 2：

```cpp
// C++ program with compilation error to demonstrate that
// all the methods of Local classes must be defined inside
// the class only
#include <iostream>
using namespace std;

void fun()
{
	class Test // local to fun
	{
	public:
		void method();
	};

	// Error as the method is defined outside the local
	// class
	void Test::method() { cout << "Local Class method()"; }
}

int main() { return 0; }
```

输出结果：

```bash
Compiler Error:
 In function 'void fun()':
 error: a function-definition is not allowed here before '{' token
```

### 3. 局部类不能包含静态数据成员。但是它可能包含静态函数

例如，下述程序中，`程序1` 是错误的，而 `程序2` 是正确的。

程序 1：

```cpp
// A program with compilation error to demonstrate that
// a Local class cannot contain static data members
#include <iostream>
using namespace std;

void fun()
{
	class Test // local to fun
	{
		static int i;
	};
}

int main() { return 0; }
```

输出结果：

```bash
Compiler Error:
 In function 'void fun()':
 error: local class 'class fun()::Test' shall not have static data member 'int fun()::Test::i'
```

程序 2：

```cpp
// C++ program without any compilation error to demonstrate
// that a Local class cannot contain static data members
#include <iostream>
using namespace std;

void fun()
{
	class Test // local to fun
	{
	public:
		static void method()
		{
			cout << "Local Class method() called";
		}
	};

	Test::method();
}

int main()
{
	fun();
	return 0;
}
```

输出结果：

```cpp
Local Class method() called
```

### 4. 局部类的成员方法只能访问封闭函数的静态和枚举变量。封闭函数的非静态变量不能在局部类中访问。

例如，下述程序中，`程序1` 编译及运行都没问题，而 `程序2` 编译时会报错。

程序 1：

```cpp
// C++ program without any compilation error to demonstrate
// that member methods of local class can only access static
// and enum variables of the enclosing function
#include <iostream>
using namespace std;

void fun()
{
	static int x;
	enum { i = 1, j = 2 };

	// Local class
	class Test {
	public:
		void method()
		{
			cout << "x = " << x
				<< endl; // fine as x is static
			cout << "i = " << i
				<< endl; // fine as i is enum
		}
	};

	Test t;
	t.method();
}

int main()
{
	fun();
	return 0;
}
```

输出结果：

```cpp
x = 0
i = 1
```

程序 2：

```cpp
// C++ program with compilation error to demonstrate that
// member methods of local class can only access static
// and enum variables of the enclosing function
#include <iostream>
using namespace std;

void fun()
{
	int x;

	// Local class
	class Test {
	public:
		void method() { cout << "x = " << x << endl; }
	};

	Test t;
	t.method();
}

int main()
{
	fun();
	return 0;
}
```

Error:

```bash
prog.cpp: In member function ‘void fun()::Test::method()’:

prog.cpp:14:43: error: use of local variable with automatic storage from containing function

         void method() { cout << “x = ” << x << endl; }

                                           ^

prog.cpp:9:9: note: ‘int x’ declared here

     int x;

         ^
```

### 5. 局部类可以访问全局类型，变量和函数。也可以访问相同函数中的其他局部类。

例如

```cpp
// C++ program without any compilation error to demonstrate
// that Local classes can access global types, variables and
// functions
#include <iostream>
using namespace std;

int x;

void fun()
{

	// First Local class
	class Test1 {
	public:
		Test1() { cout << "Test1::Test1()" << endl; }
	};

	// Second Local class
	class Test2 {
		// Fine: A local class can use other local classes
		// of same function
		Test1 t1;

	public:
		void method()
		{
			// Fine: Local class member methods can access
			// global variables.
			cout << "x = " << x << endl;
		}
	};

	Test2 t;
	t.method();
}

int main()
{
	fun();
	return 0;
}
```

输出结果：

```cpp
Test1::Test1()
x = 0
```