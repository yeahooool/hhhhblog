---
sidebar_position: 9
---

# C++ 中的浅拷贝和深拷贝

通常，创建对象的副本意味着创建具有相同文字值，数据类型和资源的对象的精确副本。

- [拷贝构造函数](./Copy%20Constructors%20in%20C++)
- [默认赋值运算符](./)

```cpp
// Copy Constructor
Geeks Obj1(Obj);
or
Geeks Obj1 = Obj;

// Default assignment operator
Geeks Obj2;
Obj2 = Obj1;
```

根据对象持有的[动态内存](./)等资源，我们需要执行浅拷贝或深拷贝来创建对象的副本。通常，如果对象的变量是动态分配的，则需要通过深拷贝来创建对象的副本。

## 浅拷贝

浅拷贝通过简单地复制原始对象的所有变量的数据来创建一个对象。如果对象的所有变量都没有在[内存的堆上](./)分配，则可以很好地工作。但是，如果对象的一些变量是从堆部分动态分布的，则拷贝对象变量也将引用相同的内存位置。

这将造成歧义和运行时错误，悬空指针(dangling pointer)。由于两个对象都将引用相同的内存位置，因此其中一个对象所做的更改也会在另一个对象中反映这些更改。因为我们想要创建一个对象的副本,所以这个行为是不可接受的。

:::note
C++ 编译器隐式创建拷贝构造函数和[重载赋值运算符](./)，以便在编译时执行浅拷贝。
:::

对象的浅拷贝，如果在堆内存中定义了一些变量，则:

<center><img src={require("./imgs/ShallowCopyHeapMemory.png").default} width='40%'/></center>

以下是上述方法的实现:

```cpp
// C++ program for the above approach
#include <iostream>
using namespace std;

// Box Class
class box {
private:
	int length;
	int breadth;
	int height;

public:
	// Function that sets the dimensions
	void set_dimensions(int length1, int breadth1,
						int height1)
	{
		length = length1;
		breadth = breadth1;
		height = height1;
	}

	// Function to display the dimensions
	// of the Box object
	void show_data()
	{
		cout << " Length = " << length
			<< "\n Breadth = " << breadth
			<< "\n Height = " << height
			<< endl;
	}
};

// Driver Code
int main()
{
	// Object of class Box
	box B1, B3;

	// Set dimensions of Box B1
	B1.set_dimensions(14, 12, 16);
	B1.show_data();

	// When copying the data of object
	// at the time of initialization
	// then copy is made through
	// COPY CONSTRUCTOR
	box B2 = B1;
	B2.show_data();

	// When copying the data of object
	// after initialization then the
	// copy is done through DEFAULT
	// ASSIGNMENT OPERATOR
	B3 = B1;
	B3.show_data();

	return 0;
}

```

输出:

```bash
 Length = 14
 Breadth = 12
 Height = 16
 Length = 14
 Breadth = 12
 Height = 16
 Length = 14
 Breadth = 12
 Height = 16
```

## 深拷贝

深拷贝通过复制所有变量的数据来创建一个对象，并为该对象分配具有相同值的相似内存资源。为了进行深拷贝，我们需要显式地定义拷贝构造函数，并在需要时分配动态内存。同时，还需要将内存动态分配给其他构造函数中的变量。

<center><img src={require("./imgs/DeepCopy.png").default} width='40%'/></center>

以下是上述方法的实现:

```cpp
// C++ program to implement the
// deep copy
#include <iostream>
using namespace std;

// Box Class
class box {
private:
	int length;
	int* breadth;
	int height;

public:
	// Constructor
	box()
	{
		breadth = new int;
	}

	// Function to set the dimensions
	// of the Box
	void set_dimension(int len, int brea,
					int heig)
	{
		length = len;
		*breadth = brea;
		height = heig;
	}

	// Function to show the dimensions
	// of the Box
	void show_data()
	{
		cout << " Length = " << length
			<< "\n Breadth = " << *breadth
			<< "\n Height = " << height
			<< endl;
	}

	// Parameterized Constructors for
	// for implementing deep copy
	box(box& sample)
	{
		length = sample.length;
		breadth = new int;
		*breadth = *(sample.breadth);
		height = sample.height;
	}

	// Destructors
	~box()
	{
		delete breadth;
	}
};

// Driver Code
int main()
{
	// Object of class first
	box first;

	// Set the dimensions
	first.set_dimension(12, 14, 16);

	// Display the dimensions
	first.show_data();

	// When the data will be copied then
	// all the resources will also get
	// allocated to the new object
	box second = first;

	// Display the dimensions
	second.show_data();

	return 0;
}
```

输出:

```bash
 Length = 12
 Breadth = 14
 Height = 16
 Length = 12
 Breadth = 14
 Height = 16
```

## 区别

|     | 浅拷贝                                     | 深拷贝                                                                     |
| :-- | :----------------------------------------- | :------------------------------------------------------------------------- |
| 1.  | 通过复制所有成员变量的数据来创建对象的副本 | 通过复制另一个对象的数据以及驻留在对象外部的内存资源的值来创建对象         |
| 2.  | 对象的浅拷贝复制所有成员字段值             | 通过实现我们自定义的拷贝构造函数来执行深拷贝                               |
| 3.  | 在浅拷贝中，两个对象不是独立的             | 它复制了所有字段，并构造了动态分配内存的副本                               |
| 4.  | 浅拷贝还创建了动态分配的对象的副本         | 如果我们不以正确的方式创建深拷贝，那么副本将指向原始对象，导致结果不可预测 |
