---
sidebar_position: 14
---

# C++ 中的作用域解析运算符 vs this 指针

作用域解析运算符用于访问静态或类成员，而 this 指针用于存在同名局部变量时访问对象成员。

假设以下代码：

```cpp
// C++ program to show that local parameters hide
// class members
#include <iostream>
using namespace std;

class Test {
	int a;

public:
	Test() { a = 1; }

	// Local parameter 'a' hides class member 'a'
	void func(int a) { cout << a; }
};

// Driver Code
int main()
{
	Test obj;
	int k = 3;
	obj.func(k);
	return 0;
}
```

输出：

```
3
```

解释：

- `obj.func(k)` 调用 `func` 函数，传递 `k` 作为参数。
- `func` 函数的参数 `a` 隐藏了类成员 `a`。
- 因此，`a` 的值为 `3`。

如果我们想访问类成员 `a`，我们可以使用 `this` 指针，因为 `this` 指针指向调用`func`函数的对象。

```cpp
// C++ program to show use of this to access member when
// there is a local variable with same name
#include <iostream>
using namespace std;
class Test {
	int a;

public:
	Test() { a = 1; }

	// Local parameter 'a' hides object's member
	// 'a', but we can access it using this.
	void func(int a) { cout << this->a; }
};

// Driver code
int main()
{
	Test obj;
	int k = 3;
	obj.func(k);
	return 0;
}
```

输出：

```
1
```

如果是[作用域解析运算符](./):

上述程序中，我们不能使用作用域解析运算符来访问对象的成员`a`，因为作用域解析运算符只能用于静态数据成员（或类成员）。如果我们使用作用域解析运算符来访问对象的成员`a`，则会导致编译错误。

下面这个程序，如果我们使用`this`指针也会导致编译错误。

```cpp
// C++ program to show that scope resolution operator can be
// used to access static members when there is a local
// variable with same name
#include <iostream>
using namespace std;

class Test {
	static int a;

public:
	// Local parameter 'a' hides class member
	// 'a', but we can access it using ::
	void func(int a) { cout << Test::a; }
};

// In C++, static members must be explicitly defined
// like this
int Test::a = 1;

// Driver code
int main()
{
	Test obj;
	int k = 3;
	obj.func(k);
	return 0;
}

```

输出：

```
1
```
