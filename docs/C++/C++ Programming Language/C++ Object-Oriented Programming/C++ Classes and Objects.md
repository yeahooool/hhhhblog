---
sidebar_position: 1
---

# C++ 类和对象

类是通向面向对象编程的构建块。它是用户定义的数据类型，包含自己的数据成员和成员函数，可以通过创建该类的实例来访问和使用。C++类就像对象的蓝图。例如:考虑一下汽车的类别。可能有很多汽车有不同的名字和品牌，但它们都有一些共同的属性，比如它们都有 4 个轮子，限速，里程范围等。这里，车是类，轮子，限速和里程是它们的属性。

- 类是用户定义的数据类型，它具有数据成员和成员函数。
- 数据成员是类的变量，成员函数是用于操作这些变量的函数。这些数据成员和成员函数定义了类中对象的属性和行为。
- 上述车类的示例中，数据成员是限速，里程等，成员函数是加速，刹车等。

一个对象(Object)是类的实例。当一个类被定义时，没有任何内存被分配，只有当它被实例化(即创建一个对象)时，内存才被分配。

## 定义类和声明对象

### 定义类

类定义是以关键字 `class` 开始的，后跟类的名称。类的主体是包含在花括号内的。类定义后必须跟着一个分号或一个声明列表。

<center><img src={require("./imgs/Classes-and-Objects-in-C.png").default} width='70%'/></center>

### 声明对象

定义类时，只定义对象的规范；没有分配任何内存或存储。要使用类中定义的数据和访问函数，需要创建类的对象。对象是类的实例。

语法:

```cpp
ClassName ObjectName;
```

访问数据成员和成员函数：类的数据成员和成员函数能够使用点运算符`.`访问。例如一个 object 的名称是`obj`，而想要访问名称为`printName()`的成员函数，那么可以编写`obj.printName()`。

### 访问数据成员

公共数据成员也可以以相同的方式访问，但是私有数据成员不允许被对象直接访问。访问数据成员仅取决于该数据成员的访问控制。这种访问控制由[C++中的访问修饰符](./Access%20Modifiers%20in%20C++)来实现。有三种访问修饰符，分别是`public`、`private`和`protected`。

```cpp
// C++ program to demonstrate accessing of data members
#include <bits/stdc++.h>
using namespace std;
class Geeks {
    // Access specifier
public:
    // Data  Members
    string geekname;
    // Member Functions()
    void printname() { cout << "Geekname is:" << geekname; }
};
int main()
{
    // Declare an object of class geeks
    Geeks obj1;
    // accessing data member
    obj1.geekname = "Abhi";
    // accessing member function
    obj1.printname();
    return 0;
}
```

输出：

```cpp
Geekname is:Abhi
```

### 类中的成员函数

有两种方式定义类中的成员函数：

1. 在类定义内部定义成员函数
2. 在类定义外部定义成员函数

为了在类的外部定义一个成员函数，我们必须使用作用域解析操作符(scope resolution)`::`，以及类名称和函数名。在

```cpp
// C++ program to demonstrate function
// declaration outside class

#include <bits/stdc++.h>
using namespace std;
class Geeks
{
	public:
	string geekname;
	int id;

	// printname is not defined inside class definition
	void printname();

	// printid is defined inside class definition
	void printid()
	{
		cout <<"Geek id is: "<<id;
	}
};

// Definition of printname using scope resolution operator ::
void Geeks::printname()
{
	cout <<"Geekname is: "<<geekname;
}
int main() {

	Geeks obj1;
	obj1.geekname = "xyz";
	obj1.id=15;

	// call printname()
	obj1.printname();
	cout << endl;

	// call printid()
	obj1.printid();
	return 0;
}
```

输出：

```cpp
Geekname is: xyz
Geek id is: 15
```

在类定义内部定义成员函数时，所有成员函数都被默认为`inline`函数，但是也可以通过关键字`inline`显式声明使任何非类函数成为`inline`函数。`inline`函数是实际的函数，它们在编译过程随处可以负值，就像预处理器宏一样，因此减少了函数调用的开销。

**注意**：声明[`friend`函数](./Friend%20Class%20and%20Function%20in%20C++.md)是为非成员函数提供私有访问的一种方式。

### 类中的构造函数 Constructors

[构造函数](./Constructors%20in%20C++)是一种特殊的成员函数，每次实例化该类的对象时，编译器都会调用它。构造函数拥有与类相同的名称，可以在类定义的内部或外部定义。有三种类型的构造函数：

1. 默认构造函数 Default Constructors
2. 带参数的构造函数 Parameterized Constructors
3. 拷贝构造函数 Copy Constructors

```cpp
// C++ program to demonstrate constructors
#include <bits/stdc++.h>
using namespace std;
class Geeks
{
    public:
    int id;

    //Default Constructor
    Geeks()
    {
        cout << "Default Constructor called" << endl;
        id=-1;
    }

    //Parameterized Constructor
    Geeks(int x)
    {
        cout <<"Parameterized Constructor called "<< endl;
        id=x;
    }
};
int main() {

    // obj1 will call Default Constructor
    Geeks obj1;
    cout <<"Geek id is: "<<obj1.id << endl;

    // obj2 will call Parameterized Constructor
    Geeks obj2(21);
    cout <<"Geek id is: " <<obj2.id << endl;
    return 0;
}
```

输出：

```cpp
Default Constructor called
Geek id is: -1
Parameterized Constructor called
Geek id is: 21
```

拷贝构造函数创建一个新对象，该对象是已存在对象的额外副本。编译器为所有类提供了一个默认的拷贝构造函数。

**语法**：

```cpp
class-name (class-name &){}

```

### 类中的析构函数 Destructors

[析构函数](./)是一种特殊的成员函数，每当一个对象超出范围时，编译器都会调用它。析构函数拥有与类相同的名称，但前面有一个波浪号`~`。它不能带有任何参数，也不能返回任何值。析构函数在类定义的内部或外部定义。

```cpp
// C++ program to explain destructors
#include <bits/stdc++.h>
using namespace std;
class Geeks
{
    public:
    int id;

    //Definition for Destructor
    ~Geeks()
    {
        cout << "Destructor called for id: " << id <<endl;
    }
};

int main()
  {
    Geeks obj1;
    obj1.id=7;
    int i = 0;
    while ( i < 5 )
    {
        Geeks obj2;
        obj2.id=i;
        i++;
    } // Scope for obj2 ends here

    return 0;
  } // Scope for obj1 ends here
```

输出：

```cpp
Destructor called for id: 0
Destructor called for id: 1
Destructor called for id: 2
Destructor called for id: 3
Destructor called for id: 4
Destructor called for id: 7
```
