---
sidebar_position: 18
---

# C++ 中的结构与类的区别

在 C++ 中，结构和类的工作方式非常相似，但它们之间有 2 个小区别。其中最重要的是隐藏实现细节。结构体在默认情况下不会对代码中使用它的人隐藏其实现细节，而类在默认情况下隐藏其所有实现细节，因此在默认情况下会阻止程序员访问它们。下表总结了结构和类之间的区别：

| 类                                                                                  | 结构                                                                           |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 1. 默认情况下，类中的成员是私有的。                                                 | 1. 默认情况下，结构中的成员是公共的。                                          |
| 2. 默认情况下，类的实例称为对象。                                                   | 2. 默认情况下，结构的实例称为结构变量。                                        |
| 3. 默认情况下，类的成员类/结构是私有的，但并非所有编程语言都具有此特性，例如 Java。 | 3. 默认情况下，结构的成员类/结构是公共的。                                     |
| 4. 使用`class`关键字声明类。                                                        | 4. 使用`struct`关键字声明结构。                                                |
| 5. 通常用于数据抽象和进一步继承。                                                   | 5. 通常用于数据分组。                                                          |
| 6. `NULL`值在类中是可能的。                                                         | 6. `NULL`值在结构中是不可能的。                                                |
| 7. 语法：`class class_name { data_members; member_functions; };`                    | 7. 语法：`struct struct_name { type struct_members1; type struct_members2; };` |

## 例子

### 1.类的成员默认是私有的，而结构的成员默认是公共的。

例如，程序 1 在编译中失败，但程序 2 运行良好

程序 1：

```cpp
// C++ Program to demonstrate that
// Members of a class are private
// by default
#include <iostream>

using namespace std;

class Test {
	// x is private
	int x;
};

int main()
{
	Test t;
	// compiler error because x
	// is private
	t.x = 20;

	return t.x;
}
```

输出：

```cpp
./cf03c8d1-d4a3-43ea-a058-fe5b5303167b.cpp: In function 'int main()':
./cf03c8d1-d4a3-43ea-a058-fe5b5303167b.cpp:10:9: error: 'int Test::x' is private
     int x;
         ^
./cf03c8d1-d4a3-43ea-a058-fe5b5303167b.cpp:18:7: error: within this context
     t.x = 20;
       ^
./cf03c8d1-d4a3-43ea-a058-fe5b5303167b.cpp:10:9: error: 'int Test::x' is private
     int x;
         ^
./cf03c8d1-d4a3-43ea-a058-fe5b5303167b.cpp:20:14: error: within this context
     return t.x;
              ^
```

程序 2：

```cpp
// C++ Program to demonstrate that
// members of a structure are public
// by default
#include <iostream>

using namespace std;

struct Test {
	// x is public
	int x;
};

int main()
{
	Test t;
	t.x = 20;

	// works fine because x is public
	cout << t.x;
}
```

输出：

```cpp
20
```

### 2. 使用`class`关键字声明类，而使用`struct`关键字声明结构。

语法：

```cpp
class ClassName {
private:
    member1;
    member2;

public:
    member3;
    .
    .
    memberN;
};
```

```cpp
struct StructureName {
    member1;
    member2;
    .
    .
    .
    memberN;
};
```

### 3. 继承对类和结构都是可用的。

例如，程序 3 和程序 4 工作得很好。

程序 3：

```cpp
// C++ Program to demonstrate
// Inheritance with classes.
#include <iostream>

using namespace std;

// Base class
class Parent {
public:
	int x;
};

// Subclass inheriting from
// base class (Parent).
class Child : public Parent {
public:
	int y;
};

int main()
{
	Child obj1;

	// An object of class Child has
	// all data members and member
	// functions of class Parent.
	obj1.y = 7;
	obj1.x = 91;
	cout << obj1.y << endl;
	cout << obj1.x << endl;

	return 0;
}
```

输出：

```cpp
7
91
```

程序 4：

```cpp
// C++ Program to demonstrate
// Inheritance with structures.
#include <iostream>

using namespace std;

struct Base {
public:
	int x;
};

// is equivalent to
// struct Derived : public Base {}
struct Derived : Base {
public:
	int y;
};

int main()
{
	Derived d;

	// Works fine because inheritance
	// is public.
	d.x = 20;
	cout << d.x;
	cin.get();
	return 0;
}
```

输出：

```cpp
20
```