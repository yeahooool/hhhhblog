---
sidebar_position: 16
---

# C++ 中的嵌套类

嵌套类是在另一个封闭类中声明的类。嵌套类是一个成员，因此具有与任何其他成员相同的访问权限。封闭类的成员对嵌套类的成员没有特殊的访问权限;应遵守通常的访问规则。

例如，程序 1 没有任何报错，但程序 2 编译失败：

程序 1：

```cpp
#include<iostream>

using namespace std;

/* start of Enclosing class declaration */
class Enclosing {
private:
	int x;

/* start of Nested class declaration */
class Nested {
	int y;
	void NestedFun(Enclosing *e) {
		cout<<e->x; // works fine: nested class can access
					// private members of Enclosing class
	}
}; // declaration Nested class ends here
}; // declaration Enclosing class ends here

int main()
{

}
```

程序 2：

```cpp
#include<iostream>

using namespace std;

/* start of Enclosing class declaration */
class Enclosing {

int x;

/* start of Nested class declaration */
class Nested {
	int y;
}; // declaration Nested class ends here

void EnclosingFun(Nested *n) {
		cout<<n->y; // Compiler Error: y is private in Nested
}
}; // declaration Enclosing class ends here

int main()
{

}

```
