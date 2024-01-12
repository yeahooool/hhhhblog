---
sidebar_position: 0
---

# C++ 中的面向对象编程

面向对象的编程 - 顾名思义，在编程中使用对象。面向对象编程的目的是在编程中实现继承、隐藏、多态性等现实世界的实体。OOP 的主要目的是将数据和对其进行操作的函数绑定在一起，以便除了该函数之外，代码的其他部分都无法访问该数据。

关于 OOPs 的一些重要概念：

1. Class 类
2. Object 对象
3. Encapsulation 封装
4. Abstraction 抽象
5. PolyMorphism 多态
6. Inheritance 继承
7. Dynamic Binding 动态绑定
8. Message Passing 消息传递

## 面向对象的编程语言的特点

<center><img src={require("./imgs/OOPs-Concepts.jpg").default} width='50%'/></center>

## 类

- 类是用户定义的数据类型，它具有数据成员和成员函数。
- 数据成员是数据变量，成员函数是用于操作这些变量的函数。这些数据成员和成员函数定义了类中对象的属性和行为。
- 汽车类示例中，数据成员是限速、里程等，成员函数是加速、刹车等。

## 对象

- 对象是类的实例。当一个类被定义时，没有任何内存被分配，只有当它被实例化(即创建一个对象)时，内存才被分配。

```cpp
// C++ Program to show the syntax/working of Objects as a
// part of Object Oriented PProgramming
#include <iostream>
using namespace std;

class person {
	char name[20];
	int id;

public:
	void getdetails() {}
};

int main()
{

	person p1; // p1 is a object
	return 0;
}

```

对象占用内存空间，并具有一个关联的地址，类似于结构体(strcuture)或联合(union)或 Pascal 中的记录(record)。当一个程序被执行，对象被创建。每个对象都包含数据和操作数据的代码。对象可以在不知道数据或代码彼此间的细节的情况下进行交互，只需要知道对象接收的消息类型以及对象返回的响应类型。

要了解有关 C ++对象和类的更多信息，请参阅本文 - [C ++类和对象](./C++%20Classes%20and%20Objects)

## 封装

通常，封装定义为在一个单元下包裹数据和信息。在面向对象编程中，封装定义为将数据和操作数据的函数绑定在一起。考虑一个现实生活中的封装例子，在一家公司中，有不同的部门，如会计部门、财务部门、销售部门等。财政部门处理所有财务事务，以及保留所有与财务相关的数据的记录。相似地，销售部门处理所有销售相关的活动，以及保留所有销售的记录。而现在可能会出现这样一种情况：出于某种原因，财政部门部门的一位工作人员需要某月份的所有销售数据。在这种情况下，他不被允许直接访问销售数据。他必须先联系销售部门的其他工作人员，然后请求他们提供所需的数据。这就是封装的概念。在这里，销售部门的数据和可以操纵它们的员工包裹在一个名称“销售部门”下。

<center><img src={require("./imgs/Encapsulation-in-C-1.jpg").default} width='40%'/></center>

封装还导致数据抽象或数据隐藏(data abstraction or data hiding)。使用封装也隐藏了数据。在上面的示例中，任何部门(如销售、财务或会计)的数据对任何其他部门都是隐藏的。

要了解有关封装的更多信息，请参阅这篇文章 - [c++中的封装](./)

## 抽象

数据抽象是 C++面向对象编程最基本、最重要的特性之一。抽象表示仅显示必要的信息，并隐藏实现细节。数据抽象指的是只向外界提供有关数据的基本信息，隐藏其后台实现细节。例如，现实生活中一个人开车。这个人仅知道踩油门会增加车的速度，或者踩刹车会使汽车停下来，但他不知道踩油门速度实际上是如何增加的，也不知道汽车的内部机制或汽车中油门、刹车等的实施。这就是抽象。

- 通过类中的访问修饰符实现数据抽象：我们可以使用类来实现抽象。该类帮助我们通过可用的访问修饰符对数据成员和成员函数进行分组。一个类能决定哪个数据成员对外部可见，那些不可见。访问修饰符是`private`、`protected`和`public`。默认情况下，类的所有成员都是私有的。
- 在头文件中的抽象：C++中的另一种抽象类型是头文件。例如，在`math.h`头文件中的`pow()`方法。无论何时我们需要计算一个数的幂，我们只需要在程序中包含`math.h`头文件，并调用`pow()`函数，然后传递所需的参数。但是我们不知道`pow()`函数实际计算数字的幂的底层算法。

要了解有关抽象的更多信息，请参阅本文 - [c++中的抽象](./)

## 多态

多态性是指具有多种形式的能力。简单来说，我们可用将多态定义为以多种形式显示消息的能力。一个人同时能有不同的特性。例如，一个男人同时是一个父亲，一个丈夫和一个员工。因此，同一个人在不同的情境下有不同的行为。这就是多态性的概念。在不同情况下，一个操作可能表现出不同的行为。该行为取决于操作中使用的数据类型。C++支持操作符重载和函数重载。多态性的两种形式是：

- 操作符重载：使操作符在不同实例中表现出不同行为的过程称为操作符重载。例如，`+`操作符可以用于两个整数(如`a + b`)，也可以用于两个浮点数或字符串(如`a + b`)。
- 函数重载：函数重载是指使用单个函数名称来执行不同类型的任务。多态性在实现继承时呗广泛使用。

**例子**：假设我们必须写一个函数实现来个一些整数的相加，有时是两个整数，有时是三个整数。我们可以编写具有相同名称但有不同参数的加法方法，相关方法将根据参数被调用。

<center><img src={require("./imgs/polymorphismexample-660x460.png").default} width='60%'/></center>

要了解有关多态性的更多信息，请参阅本文 - [c++中的多态性](./)

## 继承

一个类从另一个类派生属性和特征的能力称为继承。继承是面向对象编程的最重要的特征之一。

- Sub class(子类) - 从另一个类派生属性和特征的类称为子类(也称为派生类)。
- Super class(父类) - 其属性被子类继承的类称为父类(也称为基类)。
- Reusability(可重用性) - 继承支持可重用性。例如，当我们需要创建一个新类并且已经有一个类包含我们所需的一些功能时，我们可以从该类派生出新类。这样，我们可以重用现有类的功能。

**例如**：🐕，🐱，🐂 可以作为动物基类的派生类。

<center><img src={require("./imgs/inheritance-660x454.png").default} width='60%'/></center>

要了解有关继承的更多信息，请参阅本文 - [c++中的继承](./)

## 动态绑定

在动态绑定中，响应函数调用而执行的代码在运行时确定。C++中的动态绑定是通过[虚函数](./)实现的。因为动态绑定是灵活的，它避免了静态绑定的一些限制，静态绑定在构建时连接函数调用和定义。在动态绑定中，函数调用在运行时连接。

**例子**：

```cpp
// C++ Program to Demonstrate the Concept of Dynamic binding
// with the help of virtual function
#include <iostream>
using namespace std;

class GFG {
public:
    void call_Function() // function that call print
    {
        print();
    }
    void print() // the display function
    {
        cout << "Printing the Base class Content" << endl;
    }
};
class GFG2 : public GFG // GFG2 inherit a publicly
{
public:
    void print() // GFG2's display
    {
        cout << "Printing the Derived class Content"
            << endl;
    }
};
int main()
{
    GFG geeksforgeeks; // Creating GFG's object
    geeksforgeeks.call_Function(); // Calling call_Function
    GFG2 geeksforgeeks2; // creating GFG2 object
    geeksforgeeks2.call_Function(); // calling call_Function
                                    // for GFG2 object
    return 0;
}

```

**输出**：

```cpp
Printing the Base class Content
Printing the base class Content
```

正如我们所看到的，父类的`print()`函数甚至可以从派生类对象调用。为了解决这个问题，我们使用虚函数。虚函数是在基类中声明的函数，它在派生类中被重新定义。它允许在运行时动态绑定函数调用。

**例子**：

```cpp
// C++ Program to Demonstrate the Concept of Dynamic binding
// with the help of virtual function
#include <iostream>
using namespace std;

class GFG {
public:
    void call_Function() // function that call print
    {
        print();
    }
    virtual void print() // the display function
    {
        cout << "Printing the Base class Content" << endl;
    }
};
class GFG2 : public GFG // GFG2 inherit a publicly
{
public:
    void print() // GFG2's display
    {
        cout << "Printing the Derived class Content"
            << endl;
    }
};
int main()
{
    GFG geeksforgeeks; // Creating GFG's object
    geeksforgeeks.call_Function(); // Calling call_Function
    GFG2 geeksforgeeks2; // creating GFG2 object
    geeksforgeeks2.call_Function(); // calling call_Function
                                    // for GFG2 object
    return 0;
}

```

**输出**：

```cpp
Printing the Base class Content
Printing the Derived class Content
```

要了解有关动态绑定的更多信息，请参阅本文 - [c++中的动态绑定](./)

## 消息传递

消息传递是指对象之间通过发送和接收信息相互通信。对象的消息是执行过程的请求，因此将调用接收对象中的函数生成所需的结果。消息传递包括指定对象的名称，函数名称和要传递的参数。