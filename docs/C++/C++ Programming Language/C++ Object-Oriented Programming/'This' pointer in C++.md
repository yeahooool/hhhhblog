---
sidebar_position: 13
---

# C++ 的'This'指针

要理解`this`指针，重要的是要了解对象如何查看类的函数和数据成员。

1. 每个对象都有它自己的数据成员的副本。
2. 全部访问与代码段中相同的函数定义。

这意味着每个对象都有自己的数据成员的副本，并且所有对象都共享成员函数的单个副本。

那么现在的问题是，如果每个成员函数只存在一个副本，并且由多个对象使用，那么如何访问和更新适当的数据成员？

编译器会以 `this` 为函数名提供一个隐式指针。

`this` 指针作为隐藏参数传递给所有非静态成员函数调用，并作为所有非静态函数主体内的局部变量可用。`this` 指针在静态成员函数中不可用，因为静态成员函数可用在不创建任何对象（带类名）的情况下调用。

对于类 `X`，`this` 指针的类型是 `X* `。同样，如果 X 的成员函数声明为`const`，则`this`指针的类型为`const X*`。[见 this GFact](./)

C++ 允许对象通过调用以下代码销毁自身：

```cpp
delete this;
```

正如 Stroustrup 所说，`this`可以是引用而不是指针，但引用在 C++ 早期版本中并不存在。如果将 `this`作为引用来实现，就可以避免上述问题，而且比指针更安全。

---

以下是使用`this`指针的情况:

## 1. 当局部变量和成员变量具有相同的名称时

```cpp
#include<iostream>
using namespace std;

/* local variable is same as a member's name */
class Test
{
private:
int x;
public:
void setX (int x)
{
	// The 'this' pointer is used to retrieve the object's x
	// hidden by the local variable 'x'
	this->x = x;
}
void print() { cout << "x = " << x << endl; }
};

int main()
{
Test obj;
int x = 20;
obj.setX(x);
obj.print();
return 0;
}
```

输出:

```bash
x = 20
```

对于构造函数，当参数名称与成员变量名称相同时，也可用使用[初始化列表](https://www.geeksforgeeks.org/when-do-we-use-initializer-list-in-c/)来初始化成员变量。

## 2. 返回调用对象的引用

```cpp
/* Reference to the calling object can be returned */
Test& Test::func ()
{
// Some processing
return *this;
}
```

当返回对局部对象的引用时，返回的引用可用于对单个对象的**链式函数调用**。

```cpp
#include<iostream>
using namespace std;

class Test
{
private:
int x;
int y;
public:
Test(int x = 0, int y = 0) { this->x = x; this->y = y; }
Test &setX(int a) { x = a; return *this; }
Test &setY(int b) { y = b; return *this; }
void print() { cout << "x = " << x << " y = " << y << endl; }
};

int main()
{
Test obj1(5, 5);

// Chained function calls. All calls modify the same object
// as the same object is returned by reference
obj1.setX(10).setY(20);

obj1.print();
return 0;
}
```

输出:

```bash
x = 10 y = 20
```

## 3. 其他示例

### 问题 1:

```cpp
#include<iostream>
using namespace std;

class Test
{
private:
int x;
public:
Test(int x = 0) { this->x = x; }
void change(Test *t) { this = t; }
void print() { cout << "x = " << x << endl; }
};

int main()
{
Test obj(5);
Test *ptr = new Test (10);
obj.change(ptr);
obj.print();
return 0;
}
```

输出:

```bash
./Solution.cpp: In member function 'void Test::change(Test*)':
./Solution.cpp:10:29: error: lvalue required as left operand of assignment
 void change(Test *t) { this = t; }
                             ^
```

在 C++ 中，`this` 是一个常量指针，它指向当前对象。不能改变 `this` 指针的值，因为它是只读的。在代码中，试图改变 `this` 指针的值，这是不允许的，所以编译器报错。

如果想改变对象的状态，应该通过 `this` 指针来访问对象的成员。例如，如果想在 `change` 方法中改变 `x` 的值，可以这样做：

```cpp
void change(Test *t) { this->x = t->x; }
```

这将把传入对象的 `x` 值赋给当前对象的 `x`。

输出:

```bash
x = 10
```

### 问题 2:

```cpp
#include<iostream>
using namespace std;

class Test
{
private:
int x;
int y;
public:
Test(int x = 0, int y = 0) { this->x = x; this->y = y; }
static void fun1() { cout << "Inside fun1()"; }
static void fun2() { cout << "Inside fun2()"; this->fun1(); }
};

int main()
{
Test obj;
obj.fun2();
return 0;
}
```

输出:

```bash
./Solution.cpp: In static member function 'static void Test::fun2()':
./Solution.cpp:12:47: error: 'this' is unavailable for static member functions
 static void fun2() { cout << "Inside fun2()"; this->fun1(); }
```

在 C++ 中，静态成员函数是属于类的，而不是属于类的任何特定对象的。因此，静态成员函数不能使用 `this` 指针，因为 `this` 指针是指向类的当前对象的指针。

在代码中，试图在静态成员函数` fun2()` 中使用 `this` 指针，这是不允许的，所以编译器报错。

如果想在` fun2()` 中调用 `fun1()`，应该直接调用它，而不是通过 `this` 指针。可以这样做：

```cpp
static void fun2() { cout << "Inside fun2()"; fun1(); }
```

输出:

```bash
Inside fun2()Inside fun1()
```

### 问题 3:

```cpp
#include<iostream>
using namespace std;

class Test
{
private:
int x;
int y;
public:
Test (int x = 0, int y = 0) { this->x = x; this->y = y; }
Test setX(int a) { x = a; return *this; }
Test setY(int b) { y = b; return *this; }
void print() { cout << "x = " << x << " y = " << y << endl; }
};

int main()
{
Test obj1;
obj1.setX(10).setY(20);
obj1.print();
return 0;
}
```

输出:

```bash
x = 10 y = 0
```

代码中的问题在于 `setY` 方法没有被正确调用。在 `main` 函数中，调用了` setX(10).setY(20);`，这意味着首先调用 `setX` 方法，然后在返回的对象上调用 `setY` 方法。然而，`setX` 和 `setY` 方法都返回的是对象的副本，而不是对象本身。

在代码中，`setX` 方法返回了一个新的 `Test` 对象，然后在这个新对象上调用了 `setY` 方法。然而，这个新对象并没有被保存，所以当 `setY` 方法返回后，它就被销毁了。这就是为什么 `y` 的值没有被改变。

为了解决这个问题，需要让 `setX` 和 `setY` 方法返回对象本身的引用，而不是对象的副本。可以这样修改代码：

```cpp
Test& setX(int a) { x = a; return *this; }
Test& setY(int b) { y = b; return *this; }
```

输出:

```bash
x = 10 y = 20
```

### 问题 4:

```cpp
#include<iostream>
using namespace std;

class Test
{
private:
int x;
int y;
public:
Test(int x = 0, int y = 0) { this->x = x; this->y = y; }
void setX(int a) { x = a; }
void setY(int b) { y = b; }
void destroy() { delete this; }
void print() { cout << "x = " << x << " y = " << y << endl; }
};

int main()
{
Test obj;
obj.destroy();
obj.print();
return 0;
}
```

输出:

```bash
Abort signal from abort(3) (SIGABRT)
*** Error in `./Solution': double free or corruption (out): 0x00007ffc02030f20 ***
timeout: the monitored command dumped core
/bin/bash: line 1:    31 Aborted
```

代码中的问题在于试图删除一个没有动态分配的对象。在代码中，`obj` 是在栈上创建的，而不是在堆上。当调用 `delete this;` 时，试图删除一个在栈上的对象，这是不允许的，所以程序崩溃了。

`delete` 关键字应该只用于删除在堆上（使用 `new` 关键字创建的）动态分配的对象。如果试图删除一个在栈上的对象，结果是未定义的，通常会导致程序崩溃。

如果想在类的方法中删除对象，应该确保该对象是动态分配的。可以这样修改代码：

```cpp
int main()
{
    Test* obj = new Test();
    obj->destroy();
    // obj->print(); // This line is not safe because obj has been deleted.
    return 0;
}
```

注意，注释掉了` obj->print();` 这一行，因为在删除 `obj` 之后再访问它是不安全的。这被称为悬空指针。