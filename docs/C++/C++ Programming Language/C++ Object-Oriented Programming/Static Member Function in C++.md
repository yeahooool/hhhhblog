---
sidebar_position: 12
---

# C++ 静态成员函数

`static`关键词与变量一起使用，使变量的内存变成静态，一旦静态变量被声明，它的内存不能再改变。想要了解更多关于静态关键词的内容，请参考[C++ 静态变量](./)。

## C++ 静态成员

类的静态成员与类的对象无关。就像静态变量一经声明就分配了不可更改的内存一样，每个对象都指向相同的内存。想要了解更多关于静态成员的内容，请参考[C++ 静态成员](./C++%20Static%20Data%20Members)。

**语法**

```cpp
class Person{
     static int index_number;
};
```

一旦声明了静态成员，它将被与类关联的所有对象视为同一个成员。

**示例**

```cpp
// C++ Program to demonstrate
// Static member in a class
#include <iostream>
using namespace std;

class Student {
public:
	// static member
	static int total;

	// Constructor called
	Student() { total += 1; }
};

int Student::total = 0;

int main()
{
	// Student 1 declared
	Student s1;
	cout << "Number of students:" << s1.total << endl;

	// Student 2 declared
	Student s2;
	cout << "Number of students:" << s2.total << endl;

	// Student 3 declared
	Student s3;
	cout << "Number of students:" << s3.total << endl;
	return 0;
}
```

**输出**

```bash
Number of students:1
Number of students:2
Number of students:3
```

## C++ 静态成员函数

类中的静态成员函数是被声明为静态的函数，因为该函数具有如下所定义的某些属性：

- 一个静态成员函数不依赖于类的任何对象。
- 一个静态成员函数即便在类对象不存在的情况下也可以被调用。
- 一个静态成员函数也可以通过作用域解析操作符使用类名访问。
- 一个静态成员函数可以访问类内部或外部的静态数据成员和静态成员函数。
- 还可以使用静态成员函数来确定创建了多少个类对象。

### 使用静态成员函数的原因：

- 静态成员经常用于存储类中所有对象共享的信息。
- 例如，可以使用静态数据成员作为计数器来跟踪特定类类型的新生成对象的数量。可以在每次生成对象时增加此静态数据成员，以跟踪对象的总数。

**示例**

```cpp
// C++ Program to show the working of
// static member functions
#include <iostream>
using namespace std;

class Box
{
	private:
	static int length;
	static int breadth;
	static int height;

	public:

	static void print()
	{
		cout << "The value of the length is: " << length << endl;
		cout << "The value of the breadth is: " << breadth << endl;
		cout << "The value of the height is: " << height << endl;
	}
};

// initialize the static data members

int Box :: length = 10;
int Box :: breadth = 20;
int Box :: height = 30;

// Driver Code

int main()
{

	Box b;

	cout << "Static member function is called through Object name: \n" << endl;
	b.print();

	cout << "\nStatic member function is called through Class name: \n" << endl;
	Box::print();

	return 0;
}
```

**输出**

```bash
Static member function is called through Object name:

The value of the length is: 10
The value of the breadth is: 20
The value of the height is: 30

Static member function is called through Class name:

The value of the length is: 10
The value of the breadth is: 20
The value of the height is: 30
```
