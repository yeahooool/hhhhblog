---
sidebar_position: 2
---

# C++ 访问修饰符

访问修饰符用于实现面向对象编程的数据隐藏。以现实生活为例：

拥有 10 个核心成员的研究分析部门掌握了涉及国家安全的敏感机密信息。现在，我们可以将这些核心成员与类的数据成员或成员函数关联起来，而这些数据成员或成员函数又可以与研究分析部门关联起来。这 10 名成员可以直接从他们的部门访问机密信息，但是除了这 10 名成员之外的任何人都不能直接访问机密信息。也就是说，除了类本身中普遍存在的那些外部函数之外，如果没有指定访问权限（例如`friend`类或继承类所拥有的权限），则无法访问信息（无权限访问）。或者访问这 10 个成员中的一个，这些成员被允许直接访问机密信息（类似于可以通过类的公共成员函数在外部访问类的私有成员，该类的公共成员函数可以直接访问类的私有成员）。

这就是数据隐藏在实例中的作用。类中的访问修饰符或访问说明符用于为类的成员提供不同的访问权限。也就是说，它们对类成员设置了一些限制，使它们不能被外部函数直接访问。

C++中有三种访问修饰符：

1. `public` - 修饰符指定的类成员可以被程序中的任何函数访问。默认情况下，类成员是私有的。
2. `private` - 修饰符指定的类成员只能被类中的其他成员函数访问，不能被程序中的其他函数访问。如果不指定访问修饰符，则默认为私有。
3. `protected` - 修饰符指定的类成员可以被类中的其他成员函数或该类的子类访问，不能被程序中的其他函数访问。

## 访问修饰符的示例

### public

在`public`说明符下声明的所有类成员将对所有人可用。其他类和函数也可以访问这些数据成员和成员函数。类的公共成员可以在程序的任何地方直接成员访问运算符`.`对该类的对象进行访问。

```cpp
// C++ program to demonstrate public
// access modifier

#include<iostream>
using namespace std;

// class definition
class Circle
{
	public:
		double radius;

		double compute_area()
		{
			return 3.14*radius*radius;
		}

};

// main function
int main()
{
	Circle obj;

	// accessing public datamember outside class
	obj.radius = 5.5;

	cout << "Radius is: " << obj.radius << "\n";
	cout << "Area is: " << obj.compute_area();
	return 0;
}
```

输出：

```cpp
Radius is: 5.5
Area is: 94.985
```

上述程序中，`radius`和`compute_area()`函数都是公共的，因此可以在类的外部访问它们，从而允许从`main()`函数内部访问它们。

### private

在`private`说明符下声明的所有类成员仅可被类中的成员函数访问。它们不允许被类外部的任何对象或函数直接访问。只有成员函数或[友元函数](./Friend%20Class%20and%20Function%20in%20C++)可以访问类的私有数据成员。

```cpp
// C++ program to demonstrate private
// access modifier

#include<iostream>
using namespace std;

class Circle
{
	// private data member
	private:
		double radius;

	// public member function
	public:
		double compute_area()
		{ // member function can access private
			// data member radius
			return 3.14*radius*radius;
		}

};

// main function
int main()
{
	// creating object of the class
	Circle obj;

	// trying to access private data member
	// directly outside the class
	obj.radius = 1.5;

	cout << "Area is:" << obj.compute_area();
	return 0;
}
```

输出：

```cpp
 In function 'int main()':
11:16: error: 'double Circle::radius' is private
         double radius;
                ^
31:9: error: within this context
     obj.radius = 1.5;
         ^
```

上述程序的输出是编译时错误，因为不允许直接从类的外部访问类的私有数据成员(`radius`)。

但是，我们可以使用类的公共成员函数间接访问类的私有数据成员。

```cpp
// C++ program to demonstrate private
// access modifier

#include<iostream>
using namespace std;

class Circle
{
	// private data member
	private:
		double radius;

	// public member function
	public:
		void compute_area(double r)
		{ // member function can access private
			// data member radius
			radius = r;

			double area = 3.14*radius*radius;

			cout << "Radius is: " << radius << endl;
			cout << "Area is: " << area;
		}

};

// main function
int main()
{
	// creating object of the class
	Circle obj;

	// trying to access private data member
	// directly outside the class
	obj.compute_area(1.5);


	return 0;
}
```

输出：

```cpp
Radius is: 1.5
Area is: 7.065
```

### protected

`protected`访问修饰符与`private`访问修饰符类似，因为除非在友类(friend class)的辅助下，否则不能从类的外部访问类的受保护成员。不同之处在于，声明为`protected`的类成员可以被该类的任何子类（派生类）访问。

**注意：**根据[继承方式](./)的不同，这种通过继承进行的访问会改变派生类中基类元素的访问修饰符。

```cpp
// C++ program to demonstrate
// protected access modifier
#include <bits/stdc++.h>
using namespace std;

// base class
class Parent
{
	// protected data members
	protected:
	int id_protected;

};

// sub class or derived class from public base class
class Child : public Parent
{
	public:
	void setId(int id)
	{

		// Child class is able to access the inherited
		// protected data members of base class

		id_protected = id;

	}

	void displayId()
	{
		cout << "id_protected is: " << id_protected << endl;
	}
};

// main function
int main() {

	Child obj1;

	// member function of the derived class can
	// access the protected data members of the base class

	obj1.setId(81);
	obj1.displayId();
	return 0;
}
```

输出：

```cpp
id_protected is: 81
```
