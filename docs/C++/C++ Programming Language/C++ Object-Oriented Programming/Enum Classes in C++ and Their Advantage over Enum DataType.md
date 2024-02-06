---
sidebar_position: 17
---

# C++ 中的枚举类及其相较于枚举数据类型的优势

[枚举或枚举类型](./)是一种用户定义的数据类型，可以为其分配一些有限的值。浙西额值由程序员在声明枚举类型时定义。

## 需要枚举类而不是枚举类型：

以下是枚举类型的局限性以及为什么我们需要枚举类来覆盖它们的原因：

1. 枚举是一个命名为整数常量的集合，意味着它的每个元素都被赋予一个整数值。
2. 使用`enum`关键字声明

```cpp
#include <iostream>
using namespace std;
enum roll_no {
	satya = 70,
	aakanskah = 73,
	sanket = 31,
	aniket = 05,
	avinash = 68,
	shreya = 47,
	nikita = 69,
};
int main()
{
	enum roll_no obj;
	obj = avinash;
	cout << "The roll no of avinash=" << obj;
}
```

输出：

```cpp
The roll no of avinash=68
```

两个枚举不能共享相同的名称：

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
	// Defining enum1 Gender
	enum Gender { Male,
				Female };

	// Defining enum2 Gender2 with same values
	// This will throw error
	enum Gender2 { Male,
				Female };

	// Creating Gender type variable
	Gender gender = Male;
	Gender2 gender2 = Female;

	cout << gender << endl
		<< gender2;

	return 0;
}
```

编译器报错：

```cpp
prog.cpp:13:20: error: redeclaration of 'Male'
     enum Gender2 { Male,
                    ^
prog.cpp:8:19: note: previous declaration 'main()::Gender Male'
     enum Gender { Male,
                   ^
prog.cpp:14:20: error: redeclaration of 'Female'
                    Female };
                    ^
prog.cpp:9:19: note: previous declaration 'main()::Gender Female'
                   Female };
                   ^
prog.cpp:18:23: error: cannot convert 'main()::Gender'
to 'main()::Gender2' in initialization
     Gender2 gender2 = Female;
                       ^
```

任何变量的名称都不能已经存在于某个枚举中：

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
	// Defining enum1 Gender
	enum Gender { Male,
				Female };

	// Creating Gender type variable
	Gender gender = Male;

	// creating a variable Male
	// this will throw error
	int Male = 10;

	cout << gender << endl;

	return 0;
}
```

编译器报错：

```cpp
prog.cpp: In function 'int main()':
prog.cpp:16:9: error: 'int Male' redeclared as different kind of symbol
     int Male = 10;
         ^
prog.cpp:8:19: note: previous declaration 'main()::Gender Male'
     enum Gender { Male,
                   ^
```

枚举不是类型安全的：

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
	// Defining enum1 Gender
	enum Gender { Male,
				Female };

	// Defining enum2 Color
	enum Color { Red,
				Green };

	// Creating Gender type variable
	Gender gender = Male;
	Color color = Red;

	// Upon comparing gender and color
	// it will return true as both have value 0
	// which should not be the case actually
	if (gender == color)
		cout << "Equal";

	return 0;
}

```

警告：

```cpp
prog.cpp: In function 'int main()':
prog.cpp:23:19: warning: comparison between 'enum main()::Gender'
and 'enum main()::Color' [-Wenum-compare]
     if (gender == color)
```

## 枚举类

C++ 11 已经引入了枚举类（也称为范围枚举），这使得枚举既具有强类型又具有强作用域。枚举类不允许隐式转换为整数，也不允许比较来自不同枚举的枚举值。

要定义枚举类，在关键字`enum`后面使用关键字`class`.

语法：

```cpp
// Declaration
enum class EnumName{ Value1, Value2, ... ValueN};

// Initialisation
EnumName ObjectName = EnumName::Value;
```

例子：

```cpp
// Declaration
enum class Color{ Red, Green, Blue};

// Initialisation
Color col = Color::Red;
```

以下是展示枚举类的示例：

```cpp
// C++ program to demonstrate working
// of Enum Classes

#include <iostream>
using namespace std;

int main()
{

	enum class Color { Red,
					Green,
					Blue };
	enum class Color2 { Red,
						Black,
						White };
	enum class People { Good,
						Bad };

	// An enum value can now be used
	// to create variables
	int Green = 10;

	// Instantiating the Enum Class
	Color x = Color::Green;

	// Comparison now is completely type-safe
	if (x == Color::Red)
		cout << "It's Red\n";
	else
		cout << "It's not Red\n";

	People p = People::Good;

	if (p == People::Bad)
		cout << "Bad people\n";
	else
		cout << "Good people\n";

	// gives an error
	// if(x == p)
	// cout<<"red is equal to good";

	// won't work as there is no
	// implicit conversion to int
	// cout<< x;

	cout << int(x);

	return 0;
}
```

输出：

```cpp
It's not Red
Good people
1
```

枚举类声明的枚举类型对其基础类型也有更多的控制;它可以是任何整型数据类型，如 char、short 或 unsigned int，其本质上用于确定类型的大小。

这是由枚举类型后面的冒号和基础类型指定的：

```cpp
eg: enum class eyecolor : char {char,green,blue};
Here eyecolor is a distinct type with the same size as a char (1 byte).
```

```cpp
#include <iostream>
using namespace std;
enum rainbow{
	violet,
	indigo,
	blue,
	green,yellow,orange,red
}colors;
enum class eyecolor:char{
	blue,green,brown
}eye;
int main() {

	cout<<"size of enum rainbow variable: "<<sizeof(colors)<<endl;
	cout<<"size of enum class eyecolor variable:"<<sizeof(eye)<<endl;
	return 0;
}
```

输出：

```cpp
size of enum rainbow variable: 4
size of enum class eyecolor variable:1
```
