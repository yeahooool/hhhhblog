---
sidebar_position: 3
---

# C++中的友元类和函数

友类可以访问声明为友类的其他类的私有或受保护成员。有时，允许特定类访问其他类的私有和受保护成员是有用的。例如，可以允许 LinkedList 类访问 Node 类的私有成员。

在 C++ 中，我们可以使用 `friend` 关键字来声明一个友类。

**语法**：

```cpp
friend class class_name;    // declared in the base class
```

<center><img src={require("./imgs/friend_class.png").default} width='50%'/></center>

## 友元类的示例

```cpp
// C++ Program to demonstrate the
// functioning of a friend class
#include <iostream>
using namespace std;

class GFG {
private:
	int private_variable;

protected:
	int protected_variable;

public:
	GFG()
	{
		private_variable = 10;
		protected_variable = 99;
	}

	// friend class declaration
	friend class F;
};

// Here, class F is declared as a
// friend inside class GFG. Therefore,
// F is a friend of class GFG. Class F
// can access the private members of
// class GFG.
class F {
public:
	void display(GFG& t)
	{
		cout << "The value of Private Variable = "
			<< t.private_variable << endl;
		cout << "The value of Protected Variable = "
			<< t.protected_variable;
	}
};

// Driver code
int main()
{
	GFG g;
	F fri;
	fri.display(g);
	return 0;
}
```

**输出**：

```cpp
The value of Private Variable = 10
The value of Protected Variable = 99
```

:::note
我们可以在基类主体的任何地方声明友类或函数，无论是它的公共部分、私有部分还是受保护部分。都同样适用。
:::

## 友元函数

类似于友类，在 C++中，友元函数可以被授予对类的私有和受保护成员的特殊访问权限。它们是非成员函数，可以访问和操作类的私有和受保护成员，因为它们被声明为友元。

一个友元函数可以是：

1. 一个全局函数
2. 另一个类的成员函数

<center><img src={require("./imgs/FriendFunctioninC-660x328.png").default} width='60%'/></center>

**语法**：

```cpp
friend return_type function_name (arguments);    // for a global function
            or
friend return_type class_name::function_name (arguments);    // for a member function of another class
```

<center><img src={require("./imgs/friend_function_syntax.png").default} width='60%'/></center>

### 全局友元函数

我们可以声明任一全局函数为友元函数。以下例子展示了如何在 C++中声明全局函数为友元函数。

```cpp
// C++ program to create a global function as a friend
// function of some class
#include <iostream>
using namespace std;

class base {
private:
	int private_variable;

protected:
	int protected_variable;

public:
	base()
	{
		private_variable = 10;
		protected_variable = 99;
	}

	// friend function declaration
	friend void friendFunction(base& obj);
};


// friend function definition
void friendFunction(base& obj)
{
	cout << "Private Variable: " << obj.private_variable
		<< endl;
	cout << "Protected Variable: " << obj.protected_variable;
}

// driver code
int main()
{
	base object1;
	friendFunction(object1);

	return 0;
}
```

**输出**：

```cpp
Private Variable: 10
Protected Variable: 99
```

上述例子中，我们声明了一个全局函数`friendFunction()`作为类`base`的友元函数。随后的例子中，我们将使用另一个类的成员函数作为友元函数。

### 另一个类的成员函数作为友元函数

我们可以将另一个类的成员函数声明为友元函数。以下例子展示了如何在 C++中声明另一个类的成员函数为友元函数。

```cpp
// C++ program to create a member function of another class
// as a friend function
#include <iostream>
using namespace std;

class base; // forward definition needed
// another class in which function is declared
class anotherClass {
public:
	void memberFunction(base& obj);
};

// base class for which friend is declared
class base {
private:
	int private_variable;

protected:
	int protected_variable;

public:
	base()
	{
		private_variable = 10;
		protected_variable = 99;
	}

	// friend function declaration
	friend void anotherClass::memberFunction(base&);
};

// friend function definition
void anotherClass::memberFunction(base& obj)
{
	cout << "Private Variable: " << obj.private_variable
		<< endl;
	cout << "Protected Variable: " << obj.protected_variable;
}

// driver code
int main()
{
	base object1;
	anotherClass object2;
	object2.memberFunction(object1);

	return 0;
}
```

**输出**：

```cpp
Private Variable: 10
Protected Variable: 99
```

:::note
我们定义的另一个类的友元函数的顺序很重要，应加以注意。我们必须先定义两个类，然后再定义函数。这就是我们使用类外成员函数定义的原因。
:::

## 友元函数的特点

1. 友元函数是 C++中的一种特殊函数，即便它不是类的成员函数，也可以访问类的私有和受保护成员。
2. 友元函数是类的非成员函数或普通函数，在类的内部使用`friend`关键字声明。
3. 关键字`friend`只能出现在友元函数的函数声明中，而不能出现在函数定义或调用中。
4. 友元函数像普通函数一样被调用。不能使用对象名称和点操作符来调用它。但是，它可以接收对象作为它想要访问的值的参数。
5. 友元函数可以在类的任何部分声明，无论是公共部分、私有部分还是受保护部分。

下面是一些不同场景下的友元函数的示例：

## 多个类的友元函数

```cpp
// C++ Program to demonstrate
// how friend functions work as
// a bridge between the classes
#include <iostream>
using namespace std;

// Forward declaration
class ABC;

class XYZ {
	int x;

public:
	void set_data(int a)
	{
	x = a;
	}

	friend void max(XYZ, ABC);
};

class ABC {
	int y;

public:
	void set_data(int a)
	{
	y = a;
	}

	friend void max(XYZ, ABC);
};

void max(XYZ t1, ABC t2)
{
	if (t1.x > t2.y)
		cout << t1.x;
	else
		cout << t2.y;
}

// Driver code
int main()
{
	ABC _abc;
	XYZ _xyz;
	_xyz.set_data(20);
	_abc.set_data(35);

	// calling friend function
	max(_xyz, _abc);
	return 0;
}
```

**输出**：

```cpp
35
```

友元函数为我们提供了一种访问私有数据的方法，但它也有其缺点。下面是C++中友元函数的优缺点：

## 友元函数的优点

1. 友元函数可以访问类的成员，而不需要继承类。
2. 友元函数通过访问两个类的私有数据充当它们之间的桥梁。
3. 可用于增加重载操作符的通用性。
4. 它可以在类的公共部分、私有部分或受保护部分声明。

## 友元函数的缺点

1. 从类的外部访问类的私有成员，这违反了数据隐藏的原则。
2. 不能再其成员中执行任何运行时多态性。

## 关于友元函数和友元类的一些重要点

1. Friends 应该只用于特别需要的情况。将太多函数或外部类声明为具有受保护或私有数据访问的类的友类，会降低面向对象编程种单独类封装的价值。
2. 友元函数间不是相互的？如果类 A 是类 B 的友元，那么类 B 不会自动成为类 A 的友元。
3. 友元不能继承。（更多信息请参阅[友元类和继承](./)）
4. Java 不支持友元。