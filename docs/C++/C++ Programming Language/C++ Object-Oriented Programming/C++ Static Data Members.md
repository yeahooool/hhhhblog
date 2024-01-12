---
sidebar_position: 11
---

# C++ 静态数据成员

静态数据成员是使用 `static` 关键字声明的类成员。静态成员具有以下某些特性：

- 整个类只创建一个成员副本。无论创建了多少个对象，该类的所有对象都将共享该成员副本。
- 在创建该类的任何对象之前，甚至在主程序启动之前，它都会被初始化。
- 只在类中可见，但其生命周期是整个程序。

**语法：**

```cpp
static data_type data_member_name;
```

下面的 C++ 程序演示了静态数据成员的工作原理：

```cpp
// C++ Program to demonstrate
// the working of static data member
#include <iostream>
using namespace std;

class A {
public:
	A()
	{
	cout << "A's Constructor Called " <<
			endl;
	}
};

class B {
	static A a;

public:
	B()
	{
	cout << "B's Constructor Called " <<
			endl;
	}
};

// Driver code
int main()
{
	B b;
	return 0;
}
```

**输出：**

```cpp
B's Constructor Called
```

**解释：** 上面的程序只调用 B 的构造函数，不调用 A 的构造函数。原因是

静态成员只能在类声明中声明，而不能定义。它们必须使用作用域解析运算符在类外部显式定义。

## 访问静态成员

如前所述，静态成员只在类声明中声明。如果我们在没有显式定义的情况下尝试访问它们，编译器将引发错误。

下面的 C++ 程序显示了静态成员 "a "在没有明确定义的情况下被访问的情况：

```cpp
// C++ Program to demonstrate
// the Compilation Error occurred
// due to violation of Static
// Data Memeber Rule
#include <iostream>
using namespace std;

class A {
	int x;

public:
	A()
	{
	cout << "A's constructor called " <<
			endl;
	}
};

class B {
	static A a;

public:
	B()
	{
	cout << "B's constructor called " <<
			endl;
	}
	static A getA()
	{
	return a;
	}
};

// Driver code
int main()
{
	B b;
	A a = b.getA();
	return 0;
}
```

**输出：**

```cpp
Compiler Error: undefined reference to `B::a'
```

**解释：** 上面的程序尝试访问静态成员 "a"，但没有明确定义它。因此，编译器引发错误。如果我们添加了定义，程序就能正常运行，并调用 A 的构造函数。

## 定义静态数据成员

为了访问任何类的静态数据成员，我们必须首先定义它。下面的 C++ 程序演示了如何解决上面的编译错误：

```cpp
// C++ program to access static data
// member with explicit definition
#include <iostream>
using namespace std;

class A {
	int x;

public:
	A()
	{
	cout << "A's constructor called " <<
			endl;
	}
};

class B {
	static A a;

public:
	B()
	{
	cout << "B's constructor called " <<
			endl;
	}
	static A getA()
	{
	return a;
	}
};

// Definition of a
A B::a;

// Driver code
int main()
{
B b1, b2, b3;
A a = b1.getA();

return 0;
}
```

**输出：**

```cpp
A's constructor called
B's constructor called
B's constructor called
B's constructor called
```

**解释：** 上面的程序对 3 个对象（b1, b2 和 b3）调用了 B 的构造函数 3 次，但只调用了 A 的构造函数 1 次。这是因为静态成员在所有对象之间共享。因此，它们也被称为类成员或类字段。

另外，静态成员也可以在没有任何对象的情况下访问。

:::note
静态数据成员只能在 C++ 中全局定义。唯一的例外是整型静态常量数据成员，它们可以在类声明中初始化。
:::

### 局部类中的静态成员

在 C++ 中，不能再局部类中声明静态数据成员。

## 访问没有对象的静态成员

我们可以直接通过类名的作用域解析运算符来访问任何不带对象的静态成员。下面的 C++ 程序演示了这一点：

```cpp
// C++ Program to demonstrate
// static members can be accessed
// without any object
#include <iostream>
using namespace std;

class A {
	int x;

public:
	A()
	{
	cout << "A's constructor called " <<
			endl;
	}
};

class B {
	static A a;

public:
	B()
	{
	cout << "B's constructor called " <<
			endl;
	}
	static A getA()
	{
	return a;
	}
};

// Definition of a
A B::a;

// Driver code
int main()
{
// static member 'a' is accessed
// without any object of B
A a = B::getA();

return 0;
}
```

**输出：**

```cpp
A's constructor called
```

## 静态成员访问方式

1. 通过作用域运算符`::`直接访问静态成员 类名`::`静态成员
2. 通过对象`.`静态成员
3. 通过指针`->`静态成员

```cpp
//访问静态数据成员
#include<iostream>
using namespace std;
class A
{
	public:
		static int i;
};
int A::i = 5;    // ::表示i是属于A这个类的
int main()
{
	A a;
	std::cout << A::i << std::endl;    // 通过类名加作用域运算符直接访问
	std::cout << a.i << std::endl;    // 通过对象访问
	A *a1 = &a;
	std::cout << a1->i;     // 通过对象指针访问数据成员
	return 0;
 }
```

```cpp
//访问静态成员函数
#include <iostream>
using namespace std;
class Box{
    public:
    	static int c;
    	int a, b;
    	Box(int x,int y){
    		a = x;
            b = y;
		}
        static void fun(){
        	std::cout << c << std::endl;
        	std::cout << "static fun----" << std::endl;
		}
};
int Box::c = 8;

int main(){
    Box box(2,3);
    Box::fun();    //  使用作用域运算符直接访问静态成员
    box.fun();    //  通过对象.引用名
    Box* box2 = &box;
	box2->fun();     //  通过类Box对象的指针
    return 0;
}
```

[静态成员函数](./Static%20Member%20Function%20in%20C++)是为了能够处理静态数据成员,只能访问 `static` 成员,包括数据成员和成员函数。

示例中`std::cout << c << std::endl;`,而不能是`std::cout << a << std::endl;`。
