---
sidebar_position: 5
---

# C++ 中的默认构造函数

没有任何参数或每个参数都有默认值的构造函数称为**默认构造函数**。

没有参数列表的构造函数，或者从其他意义上说，不接受参数的构造函数称为零参数构造函数或默认构造函数。

如果没有定义任何构造函数，则编译器在编译过程中隐式定义默认构造函数。

**默认构造函数的意义是什么？**

它们用于创建没有任何特定初始值的对象。

**是否会自动提供默认的构造函数？**

如果在类中没有显式声明构造函数，则编译器会自动提供默认构造函数。

**默认构造函数可以包含默认参数吗？**

可以

**编译器是否会在后台向用户实现的默认构造函数插入任何代码？**

如果程序员没有提供默认构造函数，编译器将隐式声明它，在需要时定义它。编译器定义的默认构造函数需要对类内部进行某些初始化。它不会触及数据成员或普通的旧数据类型(如数组、结构等的聚合)。但是，编译器会根据这种情况为默认构造函数生成代码。

假设存在一个类，该类从另一个具有默认构造函数的类派生，或者该类包含另一个具有默认构造函数的类的对象作为其成员。编译器需要插入代码来调用基类/嵌入式对象的默认构造函数。

示例：

```cpp
// CPP program to demonstrate Default constructors
#include <iostream>
using namespace std;

class Base {
public:
	// compiler "declares" constructor
};

class A {
public:
	// User defined constructor
	A() { cout << "A Constructor" << endl; }

	// uninitialized
	int size;
};

class B : public A {
	// compiler defines default constructor of B, and
	// inserts stub to call A constructor

	// compiler won't initialize any data of A
};

class C : public A {
public:
	C()
	{
		// User defined default constructor of C
		// Compiler inserts stub to call A's constructor
		cout << "C Constructor" << endl;

		// compiler won't initialize any data of A
	}
};

class D {
public:
	D()
	{
		// User defined default constructor of D
		// a - constructor to be called, compiler inserts
		// stub to call A constructor
		cout << "D Constructor" << endl;

		// compiler won't initialize any data of 'a'
	}

private:
	A a;
};

// Driver Code
int main()
{
	Base base;

	B b;
  	cout << "" << endl;
	C c;
  	cout << "" << endl;
	D d;

	return 0;
}
```

输出：

```
A Constructor

A Constructor
C Constructor

A Constructor
D Constructor
```

```cpp
Example:
#include<iostream>
using namespace std;
class student
{
	int rno;
	char name[50];
	double fee;
	public:
	student()					 // Explicit Default constructor
	{
		cout<<"Enter the RollNo:";
		cin>>rno;
		cout<<"Enter the Name:";
		cin>>name;
		cout<<"Enter the Fee:";
		cin>>fee;
	}

	void display()
	{
		cout<<endl<<rno<<"\t"<<name<<"\t"<<fee;
	}
};

int main()
{
	student s;
	s.display();
	return 0;
}
```

在不同的情况下，编译器需要插入代码，以确保根据语言要求进行必要的初始化。我们将在接下来的文章中介绍它们。我们的目标是了解 c++内部机制，而不是错误地使用它们。

```cpp
// CPP code to demonstrate constructor can have default
// arguments
#include <iostream>
using namespace std;
class A {
public:
	int sum = 0;
	A(); // default constructor with no argument
	A(int a, int x = 0) // default constructor with one
						// default argument
	{
		sum = a + x;
	}
	void print() { cout << "Sum =" << sum << endl; }
};
int main()
{
	// This construct has two arguments. Second argument is
	// initialized with a value of 0 Now we can call the
	// constructor in two possible ways.
	A obj1(10, 20);
	A obj2(5);
	obj1.print();
	obj2.print();
	return 0;
}
```

输出：

```
Sum =30
Sum =5
```

**解释：** 上述代码中，我们有一个带有两个参数的构造函数——简单参数和一个默认参数。现在，有两种方法可以调用这个构造函数：

1. 我们可以为两个参数赋值，这些值将传递给构造函数，值为0的默认参数x将被调用时传递的值覆盖(在本例中为20)。因此，代码将给出30的输出(也就是, sum= a+x即10+20= 30)。
2. 第二种方法是不为默认参数传递任何值。如果这样做，x将把它的默认值0作为最终值，并计算出5的和(也就是, sum = a+x即5+0=5)。

