---
sidebar_position: 4
---

# C++ 中的构造函数

C++ 中的构造函数是一种在对象创建时自动调用的特殊方法。它通常用于初始化新对象的数据成员。在 C++中，构造函数与类或结构具有相同的名称。它构造值，即为对象提供数据，这就是为什么它被称为构造函数。

- 构造函数的名称与类的名称相同，是一个类的成员函数。
- 构造函数是一种特殊类型的成员函数，用于在创建同一类的对象时自动初始化类的数据成员。
- 构造函数在对象创建时调用。它构造值，即为对象提供数据，这就是为什么它被称为构造函数。
- 构造函数不返回任何值，因此它们没有返回类型。

构造函数的原型看起来像：

```cpp
    <class-name> (list-of-parameters);
```

构造函数可以在类声明内部或外部定义。

1. 在类中定义构造函数的语法

```cpp
    <class-name>(list-of-parameters)
    {
                //constructor definition
    }
```

2. 在类外定义构造函数的语法

```cpp
    <class-name>::<class-name>(list-of-parameters)
    {
            //constructor definition
    }
```

## 构造函数的例子

```cpp
// Example: defining the constructor within the class

#include<iostream>
using namespace std;
class student
{
	int rno;
	char name[50];
	double fee;
	public:
	student()
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
	student s; //constructor gets called automatically when we create the object of the class
	s.display();
	return 0;

}
```

```cpp
// Example: defining the constructor outside the class

#include<iostream>
using namespace std;
class student
{
	int rno;
	char name[50];
	double fee;
	public:
	student();
	void display();

};

	student::student()
	{
		cout<<"Enter the RollNo:";
		cin>>rno;
		cout<<"Enter the Name:";
		cin>>name;
		cout<<"Enter the Fee:";
		cin>>fee;
	}

void student::display()
	{
		cout<<endl<<rno<<"\t"<<name<<"\t"<<fee;
	}

int main()
{
	student s;
	s.display();
	return 0;
}

```

## 构造函数的特性

- 构造函数的名称与类的名称相同
- 构造函数大多在类的`public`部分声明，但也可以在`private`部分声明。
- 构造函数没有返回值；因此它们没有返回类型。
- 构造函数在对象创建时自动调用。
- 构造函数可以重载。
- 构造函数不能被声明为`virtual`。
- 构造函数不能被继承。
- 构造函数的地址不能被引用。
- 构造函数在内存分配期间，对`new`和`delete`运算符隐式调用。

## 构造函数与普通成员函数有何不同？

```cpp
#include <iostream>
using namespace std;

class Line {
public:
	void setLength( double len );
	double getLength( void );
	Line( double len ); //This is the constructor
private:
	double length;
};
//Member function definition including constructor
Line::Line( double len ) {
cout<<"Object is being created , length ="<< len <<endl;
length = len;
}
void Line::setLength( double len ) {
length = len;
}
double Line::getLength( void ) {
return length;
}
//Main function for the program
int main() {
Line line(10.0);
//get initially set length
cout<<"Length of line :" << line.getLength() << endl;
//set line length again
line.setLength(6.0);
cout<<"Length of line :" << line.getLength() << endl;

return 0;
}
```

**输出**：

```cpp
Object is being created , length =10
Length of line :10
Length of line :6
```

构造函数在以下方面不同于普通函数：

- 构造函数的名称与类的名称相同
- 默认构造函数没有输入参数，但是，拷贝构造函数和参数化构造函数具有输入参数
- 构造函数没有返回类型
- 当对象被创建时，构造函数被自动调用
- 如果没有定义构造函数，C++编译器会自动创建一个默认构造函数（无参数以及无函数体）

<center><img src={require("./imgs/CPP-Constructors.png").default} width='70%'/></center>

让我们通过一个真实的例子来理解 c++中构造函数的类型。假设你去商店买一支马克笔。当你想买马克笔时，有哪些选择?第一个是你去商店说给我一支马克笔。所以说给我一个马克笔意味着你没有设定品牌名称和颜色，你没有提到任何东西，只是说你想要一个马克笔。所以当我们说我想要一支马克笔的时候不管市场上或者他的店里有什么常用的马克笔他都会把它交给我。这就是默认构造函数! 第二种情况是你去商店说我想要一支红色的马克笔，并且是 XYZ 品牌的。所以这里你指定了颜色和品牌。这就是参数化构造函数。第三种情况是你去商店说我想要一只像这样的马克笔（你手上拿着一支马克笔）。这样，店主就会看到这样的马克笔，然后他会给你一支新的马克笔，这就是拷贝构造函数。

## 构造函数的类型

- 默认构造函数 (Default Constructor)
- 参数化构造函数 (Parameterized Constructor)
- 重载构造函数 (Overloaded Constructor)
- 带有默认值的构造函数 (Constructor with Default Values)
- 拷贝构造函数 (Copy Constructor)
- 内联构造函数 (Inline Constructor)

### 默认构造函数 (Default Constructor)

默认构造函数是没有任何参数的构造函数。它也被称为无参构造函数。

```cpp
// Cpp program to illustrate the
// concept of Constructors
#include <iostream>
using namespace std;

class construct {
public:
	int a, b;

	// Default Constructor
	construct()
	{
		a = 10;
		b = 20;
	}
};

int main()
{
	// Default constructor called automatically
	// when the object is created
	construct c;
	cout << "a: " << c.a << endl << "b: " << c.b;
	return 1;
}
```

**输出**：

```cpp
a: 10
b: 20
```

:::note
即使没有显式定义任何构造函数，编译器也会自动隐式地提供默认构造函数。

:::

### 参数化构造函数 (Parameterized Constructor)

可以将参数传递给构造函数。通常，这些参数有助于在创建对象时初始化对象。要创建参数化的构造函数，只需向它添加参数，就像向任何其他函数添加参数一样。定义构造函数体时，使用参数初始化对象。

:::note
定义参数化构造函数时，如果没有显式定义默认构造函数，则编译器不会隐式调用默认构造函数，从而创建一个简单的对象

```cpp
Student s;
Will flash an error
```

:::

```cpp
// CPP program to illustrate
// parameterized constructors
#include <iostream>
using namespace std;

class Point {
private:
	int x, y;

public:
	// Parameterized Constructor
	Point(int x1, int y1)
	{
		x = x1;
		y = y1;
	}

	int getX() { return x; }
	int getY() { return y; }
};

int main()
{
	// Constructor called
	Point p1(10, 15);

	// Access values assigned by constructor
	cout << "p1.x = " << p1.getX()
		<< ", p1.y = " << p1.getY();

	return 0;
}
```

**输出**：

```cpp
p1.x = 10, p1.y = 15
```

```cpp
// Example

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
	student s(1001,"Ram",10000);
	s.display();
	return 0;
}
```

**输出**：

```cpp
1001    Ram     10000
```

在参数化构造函数中声明对象时，初始值作为参数传递给构造函数。正常的对象声明方式可能不起作用。可以显式或隐式调用构造函数。

```cpp
 Example e = Example(0, 50); // Explicit call
 Example e(0, 50);           // Implicit call
```

- 参数化构造函数的用法：

  1. 用于在创建不同对象时初始化具有不同值的各种数据元素
  2. 用于重载构造函数

- 在一个类中可以有多个构造函数吗？

  可以有多个构造函数。也称为[构造函数的重载](./)

### 拷贝构造函数 (Copy Constructor)

拷贝构造函数是使用同一类的另一个对象初始化对象的成员函数。

每当我们为类定义一个或多个非默认构造函数(带参数)时，也应该显式定义默认构造函数(不带参数)，因为在这种情况下编译器不会提供默认构造函数。然而，这并不是必需的，但始终定义默认构造函数被认为是最佳实践。

拷贝构造函数接受对同一类对象的引用作为参数。

```cpp
Sample(Sample &t)
          {
                     id=t.id;
          }
```

```cpp
// Illustration
#include <iostream>
using namespace std;

class point {
private:
	double x, y;

public:
	// Non-default Constructor &
	// default Constructor
	point(double px, double py) { x = px, y = py; }
};

int main(void)
{

	// Define an array of size
	// 10 & of type point
	// This line will cause error
	point a[10];

	// Remove above line and program
	// will compile without error
	point b = point(5, 6);
}
```

**输出**：

```cpp
./Solution.cpp: In function 'int main()':
./Solution.cpp:21:12: error: no matching function for call to 'point::point()'
  point a[10];
            ^
./Solution.cpp:12:2: note: candidate: point::point(double, double)
  point(double px, double py) { x = px, y = py; }
  ^
./Solution.cpp:12:2: note:   candidate expects 2 arguments, 0 provided
./Solution.cpp:5:7: note: candidate: constexpr point::point(const point&)
 class point {
       ^
./Solution.cpp:5:7: note:   candidate expects 1 argument,...
```

```cpp
// Implicit copy constructor

#include<iostream>
using namespace std;

class Sample
{		 int id;
	public:
	void init(int x)
	{
		id=x;
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

	Sample obj2(obj1); //or obj2=obj1;
	obj2.display();
	return 0;
}
```

**输出**：

```cpp
ID=10
ID=10
```

```cpp
// Example: Explicit copy constructor

#include <iostream>
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

**输出**：

```cpp
ID=10
ID=10
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

**输出**：

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
    manjeet.display(); // garbage value for fee

	return 0;
}
```

**输出**：

```cpp
1001	Manjeet	10000
1001	Manjeet
1001	Manjeet	2.07362e-317
```

## 析构函数

析构函数也是作为构造函数的特殊成员函数。析构函数销毁构造函数创建的类对象。析构函数的名称与类的名称相同，但在名称前面加上波浪号（`~`）。不能定义多个析构函数。析构函数只是销毁构造函数创建的对象的一种方法。因此不能重载析构函数。析构函数既不需要任何参数，也不返回任何值。当对象超出作用域时自动调用它。析构函数释放由构造函数创建的对象占用的内存空间。在析构函数中，对象的销毁与对象的创建相反。

1. 在类中定义析构函数的语法

```cpp
    ~<class-name>()
    {
                //destructor definition
    }
```

2. 在类外定义析构函数的语法

```cpp
    <class-name>::~<class-name>()
    {
            //destructor definition
    }
```

```cpp
#include <iostream>
using namespace std;

class Test {
public:
	Test() { cout << "\n Constructor executed"; }

	~Test() { cout << "\n Destructor executed"; }
};
main()
{
	Test t;

	return 0;
}
```

**输出**：

```cpp
Constructor executed
Destructor executed
```

```cpp
#include <iostream>
using namespace std;
class Test {
public:
	Test() { cout << "\n Constructor executed"; }

	~Test() { cout << "\n Destructor executed"; }
};

main()
{
	Test t, t1, t2, t3;
	return 0;
}
```

**输出**：

```cpp
 Constructor executed
 Constructor executed
 Constructor executed
 Constructor executed
 Destructor executed
 Destructor executed
 Destructor executed
 Destructor executed
```

```cpp
#include <iostream>
using namespace std;
int count = 0;
class Test {
public:
	Test()
	{
		count++;
		cout << "\n No. of Object created:\t" << count;
	}

	~Test()
	{
		cout << "\n No. of Object destroyed:\t" << count;
		--count;
	}
};

main()
{
	Test t, t1, t2, t3;
	return 0;
}
```

**输出**：

```cpp
 No. of Object created:	1
 No. of Object created:	2
 No. of Object created:	3
 No. of Object created:	4
 No. of Object destroyed:	4
 No. of Object destroyed:	3
 No. of Object destroyed:	2
 No. of Obj...
```

### 析构函数的特性

1. 当析构函数的相应构造函数超出作用域并释放程序不再需要的内存空间时，编译器会自动调用析构函数。
2. 析构函数既不需要任何参数，也不返回任何值，因此不能重载。
3. 析构函数不能被声明为`static`或`const`。
4. 析构函数应该在`public`部分声明。
5. 按与其构造函数调用相反的顺序调用析构函数。
