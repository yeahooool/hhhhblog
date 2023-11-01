---
sidebar_position: 0
---

C++快速入门精简教程

# 1. C++快速入门

## 1.1. C++程序结构

```cpp
#include <iostream>
using namespace std;
// main() 是程序开始执行的地方
int main()
{
cout << "Hello World"; // 输出 Hello World
return 0;
}
```

C++ 语言定义了一些头文件，这些头文件包含了程序中必需的或有用的信息。上面这段程序中，包含了头文件 `<iostream>`。

下一行 `using namespace std`; 告诉编译器使用 `std` 命名空间。命名空间是 C++ 中一个相对新的概念。

下一行 `// main()` 是程序开始执行的地方 是一个单行注释。单行注释以 // 开头，在行末结束。

下一行 `int main()` 是主函数，程序从这里开始执行。

下一行 `cout << "Hello World";` 会在屏幕上显示消息 "Hello World"。

下一行 `return 0`; 终止 main( )函数，并向调用进程返回值 0。

## 1.2. C++分号&语句块

在 C++ 中，分号是语句结束符。也就是说，每个语句必须以分号结束。它表明一个逻辑实体的结束。

例如，下面是两个不同的语句：

```cpp
x = y;
y = x+1;
```

语句块是一组使用大括号括起来的按逻辑连接的语句。例如：

```cpp
{
cout << "Hello World"; // 输出 Hello World
return 0;
}
```

## 1.3. C++关键字

下表列出了 C++ 中的保留字。这些保留字不能作为常量名、变量名或其他标识符名称。

| 关键字       | 描述                                             | 关键字           | 描述                                     |
| ------------ | ------------------------------------------------ | ---------------- | ---------------------------------------- |
| asm          | 把 C++ 语句(可选)嵌入到汇编语句中                | namespace        | 命名空间定义一个范围                     |
| auto         | 声明自动变量                                     | new              | 为对象或类型分配内存并返回地址           |
| bool         | 声明布尔类型变量                                 | operator         | 声明运算符函数                           |
| break        | 跳出当前循环                                     | private          | 指定私有成员                             |
| case         | 开关语句分支                                     | protected        | 指定受保护成员                           |
| catch        | 异常处理                                         | public           | 指定公用成员                             |
| char         | 声明字符型变量或函数返回值类型                   | register         | 声明寄存器变量                           |
| class        | 声明类                                           | reinterpret_cast | 类型转换运算符                           |
| const        | 声明只读变量或类的成员函数                       | return           | 子程序返回                               |
| const_cast   | 类型转换运算符                                   | short            | 声明短整型变量                           |
| continue     | 重新开始循环                                     | signed           | 声明有符号类型变量                       |
| default      | 开关语句中的"其它"分支                           | sizeof           | 计算对象或类型的大小                     |
| delete       | 删除 new 创建的对象                              | static           | 声明静态变量、函数、类                   |
| do           | 循环语句的循环体                                 | static_cast      | 类型转换运算符                           |
| double       | 声明双精度浮点型变量或函数返回值类型             | struct           | 声明结构体类型                           |
| dynamic_cast | 类型转换运算符                                   | switch           | 开关语句                                 |
| else         | 条件语句否定分支（与 if 连用）                   | template         | 声明模板                                 |
| enum         | 声明枚举类型                                     | this             | 指向当前对象的指针                       |
| explicit     | 声明类的构造函数或转换函数为显式调用             | throw            | 引发异常                                 |
| export       | 允许函数及变量在其他文件中被访问                 | true             | 声明值为真的布尔类型变量或函数返回值类型 |
| extern       | 声明变量或函数是在其它文件或本文件的其他位置定义 | try              | 异常处理                                 |
| false        | 声明值为假的布尔类型变量或函数返回值类型         | typedef          | 声明类型                                 |
| float        | 声明浮点型变量或函数返回值类型                   | typeid           | 返回对象的类型                           |
| for          | 一种循环语句                                     | typename         | 声明类的类型                             |
| friend       | 声明友元关系                                     | union            | 声明共用体类型                           |
| goto         | 无条件跳转语句                                   | unsigned         | 声明无符号类型变量                       |
| if           | 条件语句                                         | using            | 声明命名空间                             |
| inline       | 声明内联函数                                     | virtual          | 声明虚函数                               |
| int          | 声明整型变量或函数                               | void             | 声明函数无返回值或无参数，声明无类型指针 |
| long         | 声明长整型变量或函数返回值类型                   | volatile         | 说明变量在程序执行中可被隐含地改变       |
| mutable      | 声明类的成员可变                                 | wchar_t          | 声明宽字符型变量或函数返回值类型         |
|              |                                                  |                  |                                          |

## 1.4. C++标识符

C++ 标识符是用来标识变量、函数、类、模块，或任何其他用户自定义项目的名称。一个标识符以字母 A-Z 或 a-z 或下划线 \_ 开始，后跟零个或多个字母、下划线和数字（0-9）。

C++ 标识符内不允许出现标点字符，比如 @、& 和 %。C++ 是区分大小写的编程语言。因此，在 C++ 中，Manpower 和 manpower 是两个不同的标识符。下面列出几个有效的标识符：

```cpp
mohd       zara    abc   move_name  a_123
myname50   _temp   j     a23b9      retVal
```

## 1.5. C++数据类型

C++ 内置的数据类型可分为以下几种：

| 类型     | 关键字  |
| -------- | ------- |
| 布尔型   | bool    |
| 字符型   | char    |
| 整型     | int     |
| 浮点型   | float   |
| 双浮点型 | double  |
| 无类型   | void    |
| 宽字符型 | wchar_t |

## 1.6. C++变量

变量就是申请内存来存储值。也就是说，当创建变量时，需要在内存中申请空间。

内存管理系统根据变量的类型为变量分配存储空间，分配的空间只能用于储存该类型数据。

因此，通过定义不同类型的变量，可以在内存中储存整数、小数或者字符。

## 1.7. C++变量定义

变量定义就是告诉编译器在何处创建变量的存储，以及如何创建变量的存储。变量定义指定一个数据类型，并包含了该类型的一个或多个变量的列表，如下所示：

```cpp
type variable_list;
```

在这里，type 必须是一个有效的 C++ 数据类型，可以是 `char`、`wchar_t`、`int`、`float`、`double`、`bool` 或任何用户自定义的对象，`variable_list` 可以由一个或多个标识符名称组成，多个标识符之间用逗号分隔。下面列出几个有效的声明：

```cpp
int    i, j, k;
char   c, ch;
float  f, salary;
double d;
```

# 2. C++基本数据类型及流控制语句

## 2.1. C++数组

数组是相同类型数据的集合。C++ 中的数组是**连续的内存位置**的集合，它们都有相同的名称，并且是通过编号索引的。

数组中的特定元素可以通过索引访问。所有数组都是由连续的内存位置组成。最低的地址对应第一个元素，最高的地址对应最后一个元素。

### 2.1.1. 声明数组

在 C++ 中要声明一个数组，需要指定元素的类型和元素的数量，如下所示：

```cpp
type arrayName [ arraySize ];
```

这叫做一维数组。`arraySize` 必须是一个大于零的整数常量，`type` 可以是任意有效的 C++ 数据类型。例如，要声明一个类型为 `double` 的包含 `10` 个元素的数组 `balance`，声明语句如下：

```cpp
double balance[10];
```

### 2.1.2. 初始化数组

在 C++ 中，可以逐个初始化数组，也可以使用一个初始化语句，如下所示：

```cpp
double balance[5] = {1000.0, 2.0, 3.4, 17.0, 50.0};
```

大括号 { } 之间的值的数目不能大于我们在数组声明时在方括号 [ ] 中指定的元素数目。

如果您省略掉了数组的大小，数组的大小则为初始化时元素的个数。因此，如果：

```cpp
double balance[] = {1000.0, 2.0, 3.4, 17.0, 50.0};
```

将创建一个数组，它与前一个实例中所创建的数组是完全相同的。下面是一个为数组中某个元素赋值的实例：

```cpp
balance[4] = 50.0;
```

上述的语句把数组中第五个元素的值赋为 50.0。所有的数组都是以 0 作为它们第一个元素的索引，也被称为基索引，数组的最后一个索引是数组的总大小减去 1。

### 2.1.3. 访问数组元素

数组元素可以通过数组名称加索引进行访问。元素的索引是放在方括号内，跟在数组名称的后边。例如：

```cpp
double salary = balance[9];
```

上面的语句将把数组中第 10 个元素的值赋给 `salary` 变量。下面的实例使用了上述的三个概念，即，`声明数组`、`数组赋值`、`访问数组`：

```cpp

#include <iostream>
using namespace std;

#include <iomanip>
using std::setw;

int main ()
{
   int n[ 10 ]; // n 是一个包含 10 个整数的数组

   // 初始化数组元素
   for ( int i = 0; i < 10; i++ )
   {
      n[ i ] = i + 100; // 设置元素 i 为 i + 100
   }
   cout << "Element" << setw( 13 ) << "Value" << endl;

   // 输出数组中每个元素的值
   for ( int j = 0; j < 10; j++ )
   {
      cout << setw( 7 )<< j << setw( 13 ) << n[ j ] << endl;
   }

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Element        Value
      0          100
      1          101
      2          102
      3          103
      4          104
      5          105
      6          106
      7          107
      8          108
      9          109
```

其中，`setw(13)` 是输出格式控制符，用于控制输出宽度，即输出的字符数。`setw(7)` 用于控制输出宽度，即输出的字符数。`endl` 用于换行。

## 2.2. C++字符串

C++ 中的字符串实际上是使用 `null` 字符 `\0` 终止的一维字符数组。因此，一个以 `null` 结尾的字符串，包含了组成字符串的字符。

下面的声明和初始化创建了一个 "Hello" 字符串。由于在数组的末尾存储了空字符，所以字符数组的大小比单词 "Hello" 的字符数多一个。

```cpp
char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
```

以下是在 C++ 中使用的字符串定义：

```cpp
char greeting[] = "Hello";
```

实际上，您不需要把 `\0` 放在字符串常量的末尾。C++ 编译器会在初始化数组时，自动把 `\0` 放在字符串的末尾。让我们尝试一下上面的实例：

```cpp
#include <iostream>
using namespace std;

int main ()
{
   char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};

   cout << "Greeting message: ";
   cout << greeting << endl;

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Greeting message: Hello
```

### 2.2.1. C++中的 string 类型

C++ 标准库提供了 `string` 类类型，支持上述所有的操作，另外还支持其他一些功能。

下面的实例使用了 `string` 类的各种构造函数来定义字符串：

```cpp
#include <iostream>
#include <string>
using namespace std;

int main ()
{
   string str1 = "Hello";
   string str2 = "World";
   string str3;
   int  len ;

   // 复制 str1 到 str3
   str3 = str1;
   cout << "str3 : " << str3 << endl;

   // 连接 str1 和 str2
   str3 = str1 + str2;
   cout << "str1 + str2 : " << str3 << endl;

   // 连接后，str3 的总长度
   len = str3.size();
   cout << "str3.size() :  " << len << endl;

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
str3 : Hello
str1 + str2 : HelloWorld
str3.size() :  10
```

## 2.3. C++循环

### 2.3.1. 循环类型

C++ 提供了以下几种循环类型。

| 循环类型   | 描述                                                        |
| ---------- | ----------------------------------------------------------- |
| while      | 只要指定的条件为真，循环就可以一直执行一些语句              |
| for        | 多次执行一个语句序列，简化管理循环变量的代码                |
| do...while | 除了它是在循环主体结尾测试条件外，其他与 while 语句类似     |
| 嵌套循环   | 您可以在 while、for 或 do..while 循环内使用一个或多个循环。 |

### 2.3.2. 循环控制语句

C++ 提供了以下几种控制语句。

| 控制语句 | 描述                                                                         |
| -------- | ---------------------------------------------------------------------------- |
| break    | 终止 loop 或 switch 语句，程序流将继续执行紧接着 loop 或 switch 的下一条语句 |
| continue | 引起循环跳过主体的剩余部分，立即重新开始测试条件                             |
| goto     | 将控制转移到被标记的语句。但是不建议在程序中使用 goto 语句                   |

## 2.4. C++判断

### 2.4.1. 判断语句

C++ 提供了以下类型的判断语句

| 判断语句  | 描述                                                                       |
| --------- | -------------------------------------------------------------------------- |
| if        | 一个 if 语句 由一个布尔表达式后跟一个或多个语句组成。                      |
| if...else | 一个 if 语句 后可跟一个可选的 else 语句，else 语句在布尔表达式为假时执行。 |
| switch    | 一个 switch 语句允许测试一个变量等于多个值时的情况。                       |
| 嵌套判断  | 您可以在一个判断或循环内使用另一个判断或循环语句。                         |

# 3. C++进阶 基本输入输出、指针、引用

## 3.1. C++ 输入输出

### 3.1.1. I/O 库头文件

以下列出了 C++ 头文件列表中一些重要的头文件：

| 头文件       | 描述                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------- |
| `<iostream>` | 该文件定义了 cin、cout、cerr 和 clog 对象，分别对应于标准输入流、标准输出流、非缓冲标准错误流和缓冲标准错误流。 |
| `<iomanip>`  | 该文件通过所谓的参数化的流操纵器（比如 setw 和 setprecision），来声明对执行标准化 I/O 有用的服务。              |
| `<fstream>`  | 该文件为用户控制的文件处理声明服务。                                                                            |

### 3.1.2. 标准输出流（cout）

标准输出流 `cout` 是 `iostream` 类的对象。`cout` 对象 "连接" 到标准输出设备，通常是显示屏。`cout` 是与流插入运算符 `<<` 结合使用的。

```cpp
#include <iostream>
using namespace std;

int main( )
{
   char str[] = "Hello C++";

   cout << "Value of str is : " << str << endl;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Value of str is : Hello C++
```

C++ 编译器根据要输出变量的数据类型， 选择合适的流插入运算符来显示值。流插入运算符 `<<` 可以连用输出多个值。下面的实例显示了如何使用流插入运算符 `<<` 来输出不同类型的变量：

```cpp
#include <iostream>
using namespace std;

int main( )
{
   char grade = 'B';
   int age = 18;
   float pi = 3.1416;

   cout << "Hello World! ";
   cout << "I am " << age << " years old! ";
   cout << "I got " << grade <<" in Physics. ";
   cout << "The value of pi is " << pi << endl;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Hello World! I am 18 years old! I got B in Physics. The value of pi is 3.1416
```

### 3.1.3. 标准输入流（cin）

标准输入流 `cin` 是 `iostream` 类的对象。`cin` 对象 "连接" 到标准输入设备，通常是键盘。`cin` 是与流提取运算符 `>>` 结合使用的。

```cpp
#include <iostream>
using namespace std;

int main( )
{
   char name[50];

   cout << "请输入您的名称：";
   cin >> name;
   cout << "您的名称是：" << name << endl;

}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
请输入您的名称：Runoob
您的名称是：Runoob
```

### 3.1.4. 标准错误流（cerr）

标准错误流 `cerr` 是 `iostream` 类的对象。`cerr` 对象附属到标准错误设备，通常也是显示屏，但是 `cerr` 对象是非缓冲的，且每个流插入到 `cerr` 都会立即输出。

```cpp
#include <iostream>
using namespace std;

int main( )
{
   char str[] = "Unable to read....";

   cerr << "Error message : " << str << endl;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Error message : Unable to read....
```

### 3.1.5. 标准日志流（clog）

标准日志流 `clog` 是 `iostream` 类的对象。`clog` 对象附属到标准错误设备，通常也是显示屏，但是 `clog` 对象是缓冲的。这意味着每个流插入到 `clog` 都会先存储在缓冲在，直到缓冲填满或者缓冲区刷新时才会输出。

```cpp
#include <iostream>
using namespace std;

int main( )
{
   char str[] = "Unable to read....";

   clog << "Error message : " << str << endl;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Error message : Unable to read....
```

## 3.2. C++指针

指针是 C++ 中一种复杂的变量类型，允许对任何内存位置的直接访问。**我们可以把指针看作是一个地址，这个地址指向电脑内存的一个存储单元**。

使用指针时会频繁进行以下几个操作：定义一个指针变量、把变量地址赋值给指针、访问指针变量中可用地址的值。

每一个变量都有一个内存位置，每一个内存位置都定义了可使用连字号 `&` 运算符访问的地址，它表示了在内存中的一个地址。下面的实例涉及到了这些操作：

```cpp
#include <iostream>
using namespace std;

int main ()
{
   int  var1;
   char var2[10];

   cout << "var1 变量的地址： ";
   cout << &var1 << endl;

   cout << "var2 变量的地址： ";
   cout << &var2 << endl;

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
var1 变量的地址： 0xbfebd5c0
var2 变量的地址： 0xbfebd5b6
```

### 3.2.1. 什么是指针？

指针是一个变量，其值为另一个变量的地址，即，内存位置的直接地址。就像其他变量或常量一样，必须在使用指针存储其他变量地址之前，对其进行声明。指针变量声明的一般形式为：

```cpp
type *var-name;
```

在这里，`type` 是指针的基类型，它必须是一个有效的 C++ 数据类型，`var-name` 是指针变量的名称。用来声明指针的星号 `*` 与乘法中使用的星号是相同的。但是，在这个语句中，星号是用来指定一个变量是指针。以下是有效的指针声明：

```cpp
int   *ip;    /* 一个整型的指针 */
double *dp;    /* 一个 double 型的指针 */
float  *fp;    /* 一个浮点型的指针 */
char  *ch     /* 一个字符型的指针 */
```

### 3.2.2. 如何使用指针？

使用指针时会频繁进行以下几个操作：定义一个指针变量、把变量地址赋值给指针、访问指针变量中可用地址的值。

以下是一个使用整数指针的实例，其中我们将演示上面提到的所有概念：

```cpp
#include <iostream>
using namespace std;

int main ()
{
   int  var = 20;   // 实际变量的声明
   int  *ip;        // 指针变量的声明

   ip = &var;       // 在指针变量中存储 var 的地址

   cout << "Value of var variable: ";
   cout << var << endl;

   // 输出在指针变量中存储的地址
   cout << "Address stored in ip variable: ";
   cout << ip << endl;

   // 访问指针中地址的值
   cout << "Value of *ip variable: ";
   cout << *ip << endl;

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Value of var variable: 20
Address stored in ip variable: 0xbfc601ac
Value of *ip variable: 20
```

## 3.3. C++引用

引用变量是一个别名，也就是说，它是某个已存在变量的另一个名字。一旦把引用初始化为某个变量，就可以使用该引用名称或变量名称来指向变量。

### 3.3.1. C++引用 vs 指针

引用很容易与指针混淆，它们之间有三个主要的不同：

- 不存在空引用。引用必须连接到一块合法的内存。
- 一旦引用被初始化为一个对象，就不能被指向到另一个对象。指针可以在任何时候指向到另一个对象。
- 引用必须在创建时被初始化。指针可以在任何时间被初始化。

### 3.3.2. C++中创建引用

创建引用变量时，程序把变量名和存储单元的地址关联起来。在定义引用变量时，程序员必须同时对其进行初始化，因为以后就没有机会再去改变它的关系了。

```cpp
int    i;
double d;

int&    r = i;
double& s = d;
```

在这些声明中，`&` 读作引用。因此，第一个声明可以读作 "r 是一个初始化为 i 的整型引用"，第二个声明可以读作 "s 是一个初始化为 d 的 `double` 型引用"。

### 3.3.3. C++中使用引用

```cpp
#include <iostream>

using namespace std;

int main ()
{
   // 声明简单的变量
   int    i;
   double d;

   // 声明引用变量
   int&    r = i;
   double& s = d;

   i = 5;
   cout << "Value of i : " << i << endl;
   cout << "Value of i reference : " << r  << endl;

   d = 11.7;
   cout << "Value of d : " << d << endl;
   cout << "Value of d reference : " << s  << endl;

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Value of i : 5
Value of i reference : 5
Value of d : 11.7
Value of d reference : 11.7
```

# 4. C++ 类与对象初探：继承和重载

## 4.1. C++类和对象

C++ 语言是面向对象的，我们都知道，在 C++ 中，可以通过创建类来定义自己的新数据类型，类是用户定义的一种数据类型，它可以作为模板描述现实世界的事物。

类是一种用户自定义的数据类型，它可以包含**数据**以及**函数**。

### 4.1.1. C++类定义

定义一个类，本质上是定义一个数据类型的蓝图。这实际上并没有定义任何数据，但它定义了类的名称意味着什么，也就是说，它定义了类的对象包括了什么，以及可以在这个对象上执行哪些操作。

类定义是以关键字 `class` 开头，后跟类的名称。类的主体是包含在一对花括号中。类定义后必须跟着一个分号或一个声明列表。例如，我们使用关键字 `class` 定义 `Box` 数据类型，如下所示：

```cpp
class Box
{
   public:
      double length;   // 盒子的长度
      double breadth;  // 盒子的宽度
      double height;   // 盒子的高度
};
```

关键字 `public` 确定了类成员的访问属性。在类对象作用域内，公共成员在类的外部是可访问的。您也可以指定类的成员为 `private` 或 `protected`。

### 4.1.2. 定义 C++ 对象

类提供了对象的蓝图，所以基本上，对象是根据类来创建的。声明类的对象，就像声明基本类型的变量一样。下面的语句声明了类 `Box` 的两个对象：

```cpp
Box Box1;          // 声明 Box1，类型为 Box
Box Box2;          // 声明 Box2，类型为 Box
```

但是，每个对象都有独立的**数据成员**，两个对象的**数据成员**之间没有联系。

### 4.1.3. 访问数据成员

类的对象的公共数据成员可以使用直接成员访问运算符 (.) 来访问。为了更好地理解这些概念，让我们尝试下面的实例：

```cpp
#include <iostream>
using namespace std;

class Box
{
   public:
      double length;   // 盒子的长度
      double breadth;  // 盒子的宽度
      double height;   // 盒子的高度
};

int main( )
{
   Box Box1;        // 声明 Box1，类型为 Box
   Box Box2;        // 声明 Box2，类型为 Box
   double volume = 0.0;     // 用于存储体积

   // box 1 详述
   Box1.height = 5.0;
   Box1.length = 6.0;
   Box1.breadth = 7.0;

   // box 2 详述
   Box2.height = 10.0;
   Box2.length = 12.0;
   Box2.breadth = 13.0;

   // box 1 的体积
   volume = Box1.height * Box1.length * Box1.breadth;
   cout << "Box1 的体积：" << volume <<endl;

   // box 2 的体积
   volume = Box2.height * Box2.length * Box2.breadth;
   cout << "Box2 的体积：" << volume <<endl;
   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Box1 的体积：210
Box2 的体积：1560
```

需要注意的是，`private` 和 `protected` 访问修饰符用于实现封装性。私有成员或函数只能通过类中的其他成员和函数访问，不能从程序的其他部分访问。受保护的成员或函数可以被派生类访问。即不能使用直接成员访问运算符 `.` 访问私有成员或受保护的成员。

## 4.2. C++继承

继承是面向对象程序设计中的一个概念，即创建新类时，可以从现有的类继承数据和函数成员。这个已经存在的类称为基类，新类称为派生类。

继承代表了 is a 关系。例如，哺乳动物是动物，狗是哺乳动物，因此，狗是动物，等等。

### 4.2.1. 基类 & 派生类

一个类可以派生自多个类，这意味着，它可以从多个基类继承数据和函数。定义一个派生类，我们使用一个类派生列表来指定基类。类派生列表以一个或多个基类命名，形式如下：

```cpp
class derived-class: access-specifier base-class
```

其中，访问修饰符 access-specifier 是 `public`、`protected` 或 `private` 其中的一个，base-class 是之前定义过的某个类的名称。如果未使用访问修饰符 access-specifier，则默认为 `private`。

假设有一个基类 `Shape`，`Rectangle` 是它的派生类，如下所示：

```cpp
class Shape
{
   public:
      void setWidth(int w)
      {
         width = w;
      }
      void setHeight(int h)
      {
         height = h;
      }
   protected:
      int width;
      int height;
};

// 派生类
class Rectangle: public Shape
{
   public:
      int getArea()
      {
         return (width * height);
      }
};

int main(void)
{
   Rectangle Rect;

   Rect.setWidth(5);
   Rect.setHeight(7);

   // 输出对象的面积
   cout << "Total area: " << Rect.getArea() << endl;

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Total area: 35
```

## 4.3. 访问控制和继承

派生类可以访问基类中所有的非私有成员。因此基类成员如果不想被派生类的成员函数访问，则应在基类中声明为 `private`。

我们可以根据访问权限总结出不同的访问类型，如下所示：

| 访问     | public | protected | private |
| -------- | ------ | --------- | ------- |
| 同一个类 | yes    | yes       | yes     |
| 派生类   | yes    | yes       | no      |
| 外部的类 | yes    | no        | no      |

一个派生类继承了所有的基类方法，但下列情况除外：

- 基类的构造函数、析构函数和拷贝构造函数。
- 基类的重载运算符。
- 基类的友元函数。

### 4.3.1. 继承类型

当一个类派生自基类，该基类可以被继承为 `public`、`protected` 或 `private` 几种类型。继承类型是通过上面讲解的访问修饰符 access-specifier 来指定的。

我们几乎不使用 `protected` 或 `private` 继承，通常使用 `public` 继承。当使用不同类型的继承时，遵循以下几个规则：

- 公有继承（public）：当一个类派生自公有基类时，基类的公有成员也是派生类的公有成员，基类的保护成员也是派生类的保护成员，基类的私有成员不能直接被派生类访问，但是可以通过调用基类的公有和保护成员来访问。
- 保护继承（protected）：当一个类派生自保护基类时，基类的公有和保护成员将成为派生类的保护成员。
- 私有继承（private）：当一个类派生自私有基类时，基类的公有和保护成员将成为派生类的私有成员。

### 4.3.2. 多继承

多继承即一个子类可以有多个父类，它继承了多个父类的特性。

C++ 类可以从多个类继承成员，语法如下：

```cpp
class <派生类名>:<继承方式1><基类名1>,<继承方式2><基类名2>,…
{
<派生类类体>
};
```

其中，访问修饰符继承方式是 `public`、`protected` 或 `private` 其中的一个，用来修饰每个基类，各个基类之间用逗号分隔，如上所示。

下面的实例使用了多继承的概念：

```cpp
#include <iostream>

using namespace std;

// 基类 Shape
class Shape
{
   public:
      void setWidth(int w)
      {
         width = w;
      }
      void setHeight(int h)
      {
         height = h;
      }
   protected:
      int width;
      int height;
};

// 基类 PaintCost
class PaintCost
{
   public:
      int getCost(int area)
      {
         return area * 70;
      }
};

// 派生类
class Rectangle: public Shape, public PaintCost
{
   public:
      int getArea()
      {
         return (width * height);
      }
};

int main(void)
{
   Rectangle Rect;
   int area;

   Rect.setWidth(5);
   Rect.setHeight(7);

   area = Rect.getArea();

   // 输出对象的面积
   cout << "Total area: " << Rect.getArea() << endl;

   // 输出总花费
   cout << "Total paint cost: $" << Rect.getCost(area) << endl;

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Total area: 35
Total paint cost: $2450
```

## 4.4. C++重载

C++ 允许在同一作用域中的某个函数和运算符指定多个定义，分别称为**函数重载**和**运算符重载**。

重载声明是指一个与之前已经在该作用域内声明过的函数或方法具有相同名称的声明，但是它们的参数列表和定义（实现）不相同。

当调用一个**重载函数**或**重载运算符**时，编译器通过把所使用的参数类型与定义中的参数类型进行比较，决定选用最合适的定义。选择最合适的重载函数或重载运算符的过程，称为**重载决策**。

### 4.4.1. C++中的函数重载

在同一个作用域内，可以声明几个功能类似的同名函数，但是这些同名函数的形式参数（指参数的个数、类型或者顺序）必须不同。不能仅通过返回类型的不同来重载函数。

下面的实例中，同名函数 `print()` 被用于输出不同的数据类型：

```cpp

#include <iostream>
using namespace std;

class printData
{
   public:
      void print(int i) {
        cout << "整数为: " << i << endl;
      }

      void print(double  f) {
        cout << "浮点数为: " << f << endl;
      }

      void print(char c[]) {
        cout << "字符串为: " << c << endl;
      }
};

int main(void)
{
   printData pd;

   // 输出整数
   pd.print(5);
   // 输出浮点数
   pd.print(500.263);
   // 输出字符串
   char c[] = "Hello C++";
   pd.print(c);

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
整数为: 5
浮点数为: 500.263
字符串为: Hello C++
```

### 4.4.2. C++中的运算符重载

可以重定义或重载大部分 C++ 内置的运算符。这样，就能使用自定义类型的运算符。

重载的运算符是带有特殊名称的函数，函数名是由关键字 `operator` 和其后要重载的运算符符号构成的。与其他函数一样，重载运算符有一个返回类型和一个参数列表。

```cpp
Box operator+(const Box&);
```

声明加法运算符用于把两个 Box 对象相加，返回最终的 Box 对象。大多数的重载运算符可被定义为普通的非成员函数或者被定义为类成员函数。如果我们定义上面的函数为类的非成员函数，那么我们需要为每次操作传递两个参数，如下所示：

```cpp
Box operator+(const Box&, const Box&);
```

下面的实例使用成员函数演示了运算符重载的概念。在这里，对象作为参数进行传递，对象的属性使用 `this` 运算符进行访问，如下所示：

```cpp
#include <iostream>
using namespace std;

class Box
{
   public:
      double getVolume(void)
      {
         return length * breadth * height;
      }
      void setLength( double len )
      {
          length = len;
      }

      void setBreadth( double bre )
      {
          breadth = bre;
      }

      void setHeight( double hei )
      {
          height = hei;
      }
      // 重载 + 运算符，用于把两个 Box 对象相加
      Box operator+(const Box& b)
      {
         Box box;
         box.length = this->length + b.length;
         box.breadth = this->breadth + b.breadth;
         box.height = this->height + b.height;
         return box;
      }
   private:
      double length;      // 长度
      double breadth;     // 宽度
      double height;      // 高度
};

// 程序的主函数
int main( )
{
   Box Box1;                // 声明 Box1，类型为 Box
   Box Box2;                // 声明 Box2，类型为 Box
   Box Box3;                // 声明 Box3，类型为 Box
   double volume = 0.0;     // 把体积存储在该变量中

   // Box1 详述
   Box1.setLength(6.0);
   Box1.setBreadth(7.0);
   Box1.setHeight(5.0);

   // Box2 详述
   Box2.setLength(12.0);
   Box2.setBreadth(13.0);
   Box2.setHeight(10.0);

   // Box1 的体积
   volume = Box1.getVolume();
   cout << "Volume of Box1 : " << volume <<endl;

   // Box2 的体积
   volume = Box2.getVolume();
   cout << "Volume of Box2 : " << volume <<endl;

   // 把两个对象相加，得到 Box3
   Box3 = Box1 + Box2;

   // Box3 的体积
   volume = Box3.getVolume();
   cout << "Volume of Box3 : " << volume <<endl;

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Volume of Box1 : 210
Volume of Box2 : 1560
Volume of Box3 : 5400
```

# 5. C++高级：多态、数据抽象、数据封装、接口

## 5.1. C++多态

多态是同一个函数或方法可以作用于多种类型的对象上并获得不同的结果。多态性（polymorphisn）通常分为两种：

- 编译时多态性：即函数和运算符的重载。
- 运行时多态性：即派生类的虚函数。

C++ 多态性是通过**重写**（覆盖）基类的虚函数实现的。

下面的实例中，基类 `Shape` 被派生为两个类，如下所示：

```cpp
#include <iostream>
using namespace std;

class Shape {
   protected:
      int width, height;
   public:
      Shape( int a=0, int b=0)
      {
         width = a;
         height = b;
      }
      int area()
{
         cout << "Parent class area :" <<endl;
         return 0;
      }
};
class Rectangle: public Shape{
   public:
      Rectangle( int a=0, int b=0):Shape(a, b) { }
      int area ()
{
         cout << "Rectangle class area :" <<endl;
         return (width * height);
      }
};
class Triangle: public Shape{
   public:
      Triangle( int a=0, int b=0):Shape(a, b) { }
      int area ()
{
         cout << "Triangle class area :" <<endl;
         return (width * height / 2);
      }
};
// 程序的主函数
int main( )
{
   Shape *shape;
   Rectangle rec(10,7);
   Triangle  tri(10,5);

   // 存储矩形的地址
   shape = &rec;
   // 调用矩形的求面积函数 area
   shape->area();

   // 存储三角形的地址
   shape = &tri;
   // 调用三角形的求面积函数 area
   shape->area();

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Parent class area
Parent class area
```

导致错误输出的原因是，调用函数 `area()` 被编译器设置为基类中的版本，这就是所谓的**静态多态**，或**静态链接** - 函数调用在程序执行前就准备好了。有时候这也被称为**早绑定**，因为 `area()` 函数在程序编译期间就已经设置好了。

但现在让我们对程序稍作修改，在 `Shape` 类中，`area()` 的声明前放置关键字 `virtual`，如下所示：

```cpp
class Shape {
   protected:
      int width, height;
   public:
      Shape( int a=0, int b=0)
      {
         width = a;
         height = b;
      }
      virtual int area()
      {
         cout << "Parent class area :" <<endl;
         return 0;
      }
};
```

现在，让我们编译并运行上面的代码，这次将产生正确的结果，如下所示：

```cpp
Rectangle class area
Triangle class area
```

此时，编译器看的是指针的内容，而不是它的类型。因此，由于 tri 和 rec 的地址被存储在 \*shape 中，所以会调用各自的 area() 函数。

<font color='red'>有了多态，就可以有多个不同的类，都带有同一个名称但具有不同实现的函数，函数的参数甚至可以是相同的。</font>

### 5.1.1. 虚函数

虚函数 是在基类中使用关键字 `virtual` 声明的函数。在派生类中重新定义基类中定义的虚函数时，会告诉编译器不要静态链接到该函数。

我们想要的是在程序中任意点可以根据所调用的对象类型来选择调用的函数，这种操作被称为**动态链接**，或**后期绑定**。

纯虚函数是在基类中声明的虚函数，它在基类中没有定义，但需要在派生类中定义，且它们**只是一个接口**，就是说，纯虚函数只提供一个函数的接口，而没有具体的实现。

我们不能创建一个对象来调用纯虚函数。但是我们可以创建一个指向该类的指针或引用，让它指向实现了该纯虚函数的类的对象。

```cpp
class Shape {
   protected:
      int width, height;
   public:
      Shape( int a=0, int b=0)
      {
         width = a;
         height = b;
      }
      // pure virtual function
      virtual int area() = 0;
};
```

`= 0 `告诉编译器，函数没有主体，上面的虚函数是纯虚函数。

## 5.2. C++数据抽象

数据抽象是指，只向外界提供关键信息，并隐藏其后台的实现细节，即只表现必要的信息而不呈现细节。

数据抽象是一种依赖于接口和实现分离的编程（设计）技术。

让我们举一个现实生活中的真实例子，比如一台电视机，您可以打开和关闭、切换频道、调整音量、添加外部组件（如喇叭、录像机、DVD 播放器），但是您不知道它的内部实现细节，也就是说，您并不知道它是如何通过缆线接收信号，如何转换信号，并最终显示在屏幕上。

因此，我们可以说电视把它的内部实现和外部接口分离开了，您无需知道它的内部实现原理，直接通过它的外部接口（比如电源按钮、遥控器、声量控制器）就可以操控电视。

现在，让我们回到 C++，C++ 程序中，任何带有公有和私有成员的类都可以作为抽象类。标有至少一个纯虚函数的类被称为抽象类。抽象类不能用于实例化对象，它只能作为接口使用。如果试图实例化一个抽象类的对象，会导致编译错误。

因此，如果一个抽象类的子类需要被实例化，则必须实现每个虚函数，这也意味着 C++ 支持使用抽象基类来创建多态类型。

### 5.2.1. 访问标签强制抽象

在 C++ 中，我们使用访问标签来定义类的抽象接口。一个类可以包含零个或多个访问标签：

- 使用公共标签定义的成员都可以访问该程序的所有部分。一个类型的数据抽象视图是由它的公共成员来定义的。
- 使用私有标签定义的成员无法访问到使用类的代码。私有部分对使用类型的代码隐藏了实现细节。

```cpp
class Box
{
   public:
      // 公有成员
   private:
      // 私有成员
};
```

### 5.2.2. 数据抽象的好处

数据抽象有两个重要的优势：

- 类的内部受到保护，不会因无意的用户级错误导致对象状态受损。
- 类实现可能随着时间的推移而发生变化，以便应对不断变化的需求，或者应对那些要求不改变用户级代码的错误报告。

### 5.2.3. 数据抽象的实例

```cpp
#include <iostream>
using namespace std;

class Adder{
   public:
      // 构造函数
      Adder(int i = 0)
      {
        total = i;
      }
      // 对外的接口
      void addNum(int number)
{
          total += number;
      }
      // 对外的接口
      int getTotal()
{
          return total;
      };
   private:
      // 对外隐藏的数据
      int total;
};
int main( )
{
   Adder a;

   a.addNum(10);
   a.addNum(20);
   a.addNum(30);

   cout << "Total " << a.getTotal() <<endl;
   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Total 60
```

上面的类把数字相加，并返回总和。公有成员 `addNum` 和 `getTotal` 是对外的接口，用户需要知道它们以便使用类。私有成员 `total` 是用户不需要了解的，但又是类能正常工作所必需的。

## 5.3. C++数据封装

所有的 C++ 程序都有以下两个基本要素：

- 程序语句（代码）：这是程序中执行动作的部分，它们被称为函数。
- 程序数据：数据是程序的信息，会受到程序函数的影响。

封装是面向对象编程中的把数据和操作数据的函数绑定在一起的一个概念，这样能避免受到外界的干扰和误用，从而确保了安全。数据封装引申出了另一个重要的 OOP 概念，即**数据隐藏**。

数据隐藏是一种把细节加以隐藏的机制，它确保了**程序模块**（类）内部的**数据**和**方法**被保护在外部的干扰和误用之下。

C++ 通过创建类来支持封装和数据隐藏（public、protected、private）。我们已经知道，类包含私有成员（private）、保护成员（protected）和公有成员（public）。默认情况下，在类中定义的所有项目都是私有的。

例如，我们把 `Box` 类的宽度、长度和高度声明为公有的，这样，我们就可以不使用成员函数 `setLength`、`setWidth` 和 `setHeight` 来设置它们的值：

```cpp
#include <iostream>
using namespace std;

class Box
{
   public:
      double length;   // 长度
      double width;    // 宽度
      double height;   // 高度
};

int main( )
{
   Box Box1;        // 声明 Box1，类型为 Box
   Box Box2;        // 声明 Box2，类型为 Box
   double volume = 0.0;     // 用于存储体积

   // box 1 详述
   Box1.height = 5.0;
   Box1.length = 6.0;
   Box1.width = 7.0;

   // box 2 详述
   Box2.height = 10.0;
   Box2.length = 12.0;
   Box2.width = 13.0;

   // box 1 的体积
   volume = Box1.height * Box1.length * Box1.width;
   cout << "Box1 的体积：" << volume <<endl;

   // box 2 的体积
   volume = Box2.height * Box2.length * Box2.width;
   cout << "Box2 的体积：" << volume <<endl;
   return 0;
}
```

如果这些变量都是私有的，这意味着它们只能被 `Box` 类中的其他成员访问，而不能被程序中其他部分访问。这是实现封装的一种方式。

```cpp
class Box
{
   public:
      double getVolume(void)
      {
         return length * breadth * height;
      }
   private:
      double length;      // 长度
      double breadth;     // 宽度
      double height;      // 高度
};
```

# 6. C++进阶 模板

## 6.1. C++模板

C++ 模板是泛型编程的基础，泛型编程即以一种独立于任何特定类型的方式编写代码。

模板是创建泛型类或函数的蓝图或公式。库容器、迭代器和算法都是泛型编程的例子，它们都使用了模板的概念。

每个容器都有一个单一的定义，比如 向量，我们可以定义许多不同类型的向量，比如 `vector <int>` 或 `vector <string>`。

### 6.1.1. 函数模板

函数模板是一种特殊的函数，可以使用泛型来定义，泛型就是能够支持多种类型的函数。

函数模板定义的一般形式如下所示：

```cpp
template <class type> ret-type func-name(parameter list)
{
   // 函数的主体
}
```

在这里，`type` 是占位符类型名称，**可以在函数被调用时进行指定**。可以使用一个逗号分隔的列表来定义多个泛型数据类型。

下面是函数模板的实例，求取两个数中的最大值：

```cpp
#include <iostream>
using namespace std;

template <typename T>
inline T const& Max (T const& a, T const& b)
{
    return a < b ? b:a;
}

int main ()
{

    int i = 39;
    int j = 20;
    cout << "Max(i, j): " << Max(i, j) << endl;

    double f1 = 13.5;
    double f2 = 20.7;
    cout << "Max(f1, f2): " << Max(f1, f2) << endl;

    string s1 = "Hello";
    string s2 = "World";
    cout << "Max(s1, s2): " << Max(s1, s2) << endl;

   return 0;
}
```

当上面的代码被编译和执行时，它会产生下列结果：

```cpp
Max(i, j): 39
Max(f1, f2): 20.7
Max(s1, s2): World
```

### 6.1.2. 类模板

类模板实例化的方式与函数模板相似，但是需要在模板名称后使用尖括号括起来的模板参数列表，如下所示：

```cpp
template <class type> class class-name {

}
```

