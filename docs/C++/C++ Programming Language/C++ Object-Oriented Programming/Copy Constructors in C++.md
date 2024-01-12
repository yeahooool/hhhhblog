---
sidebar_position: 6
---

# C++ 中的拷贝构造函数

前置教程：[C++中的构造函数](./Constructors%20in%20C++)

**拷贝构造函数**是使用同一类的另一个对象初始化对象的成员函数。简单来说，通过初始化同一个类的对象来创建一个新的对象的构造函数就是拷贝构造函数。

**拷贝构造函数**通过拷贝已存在对象的成员来初始化一个新创建对象的成员。

**拷贝构造函数**接受同一类对象的引用作为参数。

```cpp
Sample(Sample &t)
{
    id=t.id;
}
```

通过拷贝构造函数初始化对象成员的过程称为拷贝初始化。

它也被称为逐成员初始化 (member-wise initialization)，因为拷贝构造函数通过现有对象初始化一个新对象，这两个对象在逐个成员复制的基础上属于同一个类。

拷贝构造函数可以显式定义。如果没有定义，编译器会自动创建。

例如,拷贝构造函数的语法：

<center><img src={require("./imgs/CopyConstructor-660x262.png").default} width='50%' /></center>

```cpp
#include<iostream>
#include<string.h>
using namespace std;
class student
{
	int rno;
	char name[50];
	double fee;
	public:
	student(int,char[],double);
	student(student &t)	 //copy constructor
	{
		rno=t.rno;
		strcpy(name,t.name);
		fee=t.fee;
	}
	void display();

};




	student::student(int no,char n[],double f)
	{
		rno=no;
		strcpy(name,n);
		fee=f;
	}

void student::display()
	{
		cout<<endl<<rno<<"\t"<<name<<"\t"<<fee;
	}

int main()
{
	student s(1001,"Manjeet",10000);
	s.display();

	student manjeet(s); //copy constructor called
	manjeet.display();

	return 0;
}
```

**输出：**

```cpp

1001	Manjeet	10000
1001	Manjeet	10000
```

```cpp
#include<iostream>
#include<string.h>
using namespace std;
class student
{
	int rno;
	char name[50];
	double fee;
	public:
	student(int,char[],double);
	student(student &t)	 //copy constructor (member wise initialization)
	{
		rno=t.rno;
		strcpy(name,t.name);

	}
	void display();
	void disp()
	{
		cout<<endl<<rno<<"\t"<<name;
	}

};
	student::student(int no, char n[],double f)
	{
		rno=no;
		strcpy(name,n);
		fee=f;
	}

void student::display()
	{
		cout<<endl<<rno<<"\t"<<name<<"\t"<<fee;
	}



int main()
{
	student s(1001,"Manjeet",10000);
	s.display();

	student manjeet(s); //copy constructor called
	manjeet.disp();

	return 0;
}
```

**输出：**

```cpp

1001	Manjeet	10000
1001	Manjeet
```

## 拷贝构造函数的特点

1. 拷贝构造函数通过拷贝已存在对象的成员来初始化一个新创建对象的成员。
2. 拷贝构造函数接受同一类对象的引用作为参数。
   - ```cpp
       Sample(Sample &t)
       {
           id=t.id;
       }
     ```
3. 通过拷贝构造函数初始化对象成员的过程称为拷贝初始化。
4. 它也被称为逐成员初始化 (member-wise initialization)，因为拷贝构造函数通过现有对象初始化一个新对象，这两个对象在逐个成员复制的基础上属于同一个类。
5. 拷贝构造函数可以显式定义。如果没有定义，编译器会自动创建。

示例：

```cpp
// C++ program to demonstrate the working
// of a COPY CONSTRUCTOR
#include <iostream>
using namespace std;

class Point {
private:
	int x, y;

public:
	Point(int x1, int y1)
	{
		x = x1;
		y = y1;
	}

	// Copy constructor
	Point(const Point& p1)
	{
		x = p1.x;
		y = p1.y;
	}

	int getX() { return x; }
	int getY() { return y; }
};

int main()
{
	Point p1(10, 15); // Normal constructor is called here
	Point p2 = p1; // Copy constructor is called here

	// Let us access values assigned by constructors
	cout << "p1.x = " << p1.getX()
		<< ", p1.y = " << p1.getY();
	cout << "\np2.x = " << p2.getX()
		<< ", p2.y = " << p2.getY();
	return 0;
}
```

**输出：**

```cpp
p1.x = 10, p1.y = 15
p2.x = 10, p2.y = 15
```

## 拷贝构造函数的类型

### 1. 默认拷贝构造函数

隐式定义的拷贝构造函数将以与构造函数初始化对象的基类和成员相同的顺序复制对象的基类和成员。

```cpp
// Implicit copy constructor Calling
#include <iostream>
using namespace std;

class Sample {
	int id;

public:
	void init(int x) { id = x; }
	void display() { cout << endl << "ID=" << id; }
};

int main()
{
	Sample obj1;
	obj1.init(10);
	obj1.display();

	// Implicit Copy Constructor Calling
	Sample obj2(obj1); // or obj2=obj1;
	obj2.display();
	return 0;
}
```

**输出：**

```cpp
ID=10
ID=10
```

### 2. 自定义拷贝构造函数

当对象拥有指针或不可共享的引用（例如指向文件的引用）时，通常需要自定义拷贝构造函数，在这种情况下，还应编写析构函数和赋值运算符。

```cpp
// Explicitly copy constructor Calling
#include<iostream>
using namespace std;

class Sample
{
	int id;
	public:
	void init(int x)
	{
		id=x;
	}
	Sample(){} //default constructor with empty body

	Sample(Sample &t) //copy constructor
	{
		id=t.id;
	}
	void display()
	{
		cout<<endl<<"ID="<<id;
	}
};
int main()
{
	Sample obj1;
	obj1.init(10);
	obj1.display();

	Sample obj2(obj1); //or obj2=obj1; copy constructor called
	obj2.display();
	return 0;
}

```

**输出：**

```cpp
ID=10
ID=10
```

```cpp
// C++ Programt to demonstrate the student details
#include <iostream>
#include <string.h>
using namespace std;
class student {
	int rno;
	string name;
	double fee;

public:
	student(int, string, double);
	student(student& t) // copy constructor
	{
		rno = t.rno;
		name = t.name;
		fee = t.fee;
	}
	void display();
};
student::student(int no, string n, double f)
{
	rno = no;
	name = n;
	fee = f;
}
void student::display()
{
	cout << endl << rno << "\t" << name << "\t" << fee;
}
int main()
{
	student s(1001, "Ram", 10000);
	s.display();
	student ram(s); // copy constructor called
	ram.display();
	return 0;
}
```

**输出：**

```cpp
1001	Ram	10000
1001	Ram	10000
```

## 拷贝构造函数的调用

C++中，拷贝构造函数可以在以下情况调用：

1. 当类的对象按值返回时。
2. 当类的对象作为参数传递给函数时。
3. 当类的对象以另一个对象初始化时。
4. 当编译器生成临时对象时。

但是，不能保证在所有这些情况下都会调用拷贝构造函数，因为 C++标准允许编译器在某些情况下对拷贝进行优化，一个例子是**返回值优化**（return value optimization, 有时称为 RVO）。

### 编译器拷贝优化（Copy elision）

在[Copy elision](./)中，编译器防止产生额外的拷贝，从而节省空间并改善程序的复杂性(时间和空间)；从而使代码更加优化。

示例：

```cpp
// C++ program to demonstrate
// the working of copy elision
#include <iostream>
using namespace std;

class GFG {
public:
	void print() { cout << " GFG!"; }
};

int main()
{
	GFG G;
	for (int i = 0; i <= 2; i++) {
		G.print();
		cout<<"\n";
	}
	return 0;
}

```

**输出：**

```cpp
 GFG!
 GFG!
 GFG!
```

现在由编译器来决定要打印什么，它可以打印上面的输出，也可以打印下面的情况 1 或情况 2，这就是返回值优化（**Return Value Optimization**）。简而言之，**RVO**是一种赋予编译器一些额外功能以终止创建的临时对象，从而改变最终程序的可观察行为/特性。

#### 情况 1

```cpp
GFG!
GFG!
```

#### 情况 2

```cpp
GFG!
```

## 什么情况下需要自定义拷贝构造函数？

如果我们不定义拷贝构造函数，C++编译器会为每个类创建一个默认构造函数，该构造函数在对象之间进行逐个成员的复制。编译器创建的构造函数通常运行良好。只有当对象**拥有指针或资源的任何运行时分配**（例如文件句柄、网络连接等）时，才需要自定义拷贝构造函数。

默认拷贝构造函数仅执行浅拷贝。

<center><img src={require("./imgs/copy-constructor.png").default} width='35%' /></center>

只有自定义拷贝构造函数才能执行深拷贝。在自定义的拷贝构造函数中，确保拷贝对象的指针（或引用）指向新的内存位置。

<center><img src={require("./imgs/copy-constructor1.png").default} width='45%' /></center>

## 拷贝构造函数 vs 赋值运算符

[拷贝构造函数和赋值运算符](./)之间的主要区别在于，每次调用拷贝构造函数时创建一个新的内存存储，而赋值运算符不创建新的内存存储。

_下面两个语句中哪一个调用复制构造函数，哪一个调用赋值操作符?_

```cpp
MyClass t1, t2;
MyClass t3 = t1;  // ----> (1)
t2 = t1;          // -----> (2)
```

当从现有对象创建新对象(作为现有对象的副本)时，调用拷贝构造函数。当一个已经初始化的对象从另一个现有对象赋值时，调用赋值操作符。在上面的例子中(1)调用拷贝构造函数，(2)调用赋值运算符。

## 示例 - 需要拷贝构造函数的类

以下是一个完整的 c++程序，演示了拷贝构造函数的用法。在下面的 String 类中，必须编写拷贝构造函数。

```cpp
// C++ program to demonstrate the
// Working of Copy constructor
#include <cstring>
#include <iostream>
using namespace std;

class String {
private:
	char* s;
	int size;

public:
	String(const char* str = NULL); // constructor
	~String() { delete[] s; } // destructor
	String(const String&); // copy constructor
	void print()
	{
		cout << s << endl;
	} // Function to print string
	void change(const char*); // Function to change
};

// In this the pointer returns the CHAR ARRAY
// in the same sequence of string object but
// with an additional null pointer '\0'
String::String(const char* str)
{
	size = strlen(str);
	s = new char[size + 1];
	strcpy(s, str);
}

void String::change(const char* str)
{
	delete[] s;
	size = strlen(str);
	s = new char[size + 1];
	strcpy(s, str);
}

String::String(const String& old_str)
{
	size = old_str.size;
	s = new char[size + 1];
	strcpy(s, old_str.s);
}

int main()
{
	String str1("GeeksQuiz");
	String str2 = str1;

	str1.print(); // what is printed ?
	str2.print();

	str2.change("GeeksforGeeks");

	str1.print(); // what is printed now ?
	str2.print();
	return 0;
}
```

**输出：**

```cpp
GeeksQuiz
GeeksQuiz
GeeksQuiz
GeeksforGeeks
```

**如果我们从上面的代码中删除拷贝构造函数，会出现什么问题?**

如果从上面的程序中删除拷贝构造函数，就不会得到预期的输出。对 str2 所做的更改也反映在 str1 中，因为它们共享相同的内存位置。

```cpp
#include <cstring>
#include <iostream>
using namespace std;

class String {
private:
	char* s;
	int size;

public:
	String(const char* str = NULL); // constructor
	~String() { delete[] s; } // destructor
	void print() { cout << s << endl; }
	void change(const char*); // Function to change
};

String::String(const char* str)
{
	size = strlen(str);
	s = new char[size + 1];
	strcpy(s, str);
}

// In this the pointer returns the CHAR ARRAY
// in the same sequence of string object but
// with an additional null pointer '\0'
void String::change(const char* str) { strcpy(s, str); }

int main()
{
	String str1("GeeksQuiz");
	String str2 = str1;

	str1.print(); // what is printed ?
	str2.print();

	str2.change("GeeksforGeeks");

	str1.print(); // what is printed now ?
	str2.print();
	return 0;
}
```

**输出：**

```cpp
GeeksQuiz
GeeksQuiz
GeeksforGeeks
GeeksforGeeks
```

## 可以将拷贝构造函数声明为私有的吗？

是的，拷贝构造函数可以设为私有。当我们在一个类中将拷贝构造函数设为私有时，该类的对象变成不可复制的。当我们的类具有指针或动态分配的资源时，这一点特别有用。在这种情况下，我们可以像上面的 String 示例那样编写自己的拷贝构造函数，或者创建一个私有的拷贝构造函数，以便用户得到编译器错误，而不是在运行时意料之外的错误。

## 为什么拷贝构造函数的参数必须作为引用传递？

当按值传递对象时，调用拷贝构造函数。拷贝构造函数本身是一个函数。因此，如果在拷贝构造函数中按值传递参数，则会调用拷贝构造函数来调用拷贝构造函数，从而形成一个不终止的调用链。因此，编译器不允许按值传递参数。

## 为什么拷贝构造函数的参数是常量引用？

传递 `const` 引用的一个原因是，我们应该尽可能在 C++ 中使用 `const`，这样对象就不会被意外修改。这是将引用作为 `const` 传递的一个很好的理由，但是[为什么拷贝构造函数的参数应该是 const?](./)
