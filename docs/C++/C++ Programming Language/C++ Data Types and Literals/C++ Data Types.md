---
sidebar_position: 0
---

# C++ 数据类型

所有变量在声明过程中使用数据类型来限制要存储的数据类型。因此，我们可以说数据类型用于告诉变量它们可以存储的数据类型。每当在 C++ 中定义变量时，编译器都会根据其声明的数据类型为该变量分配一些内存。每种数据类型都需要不同的内存量。

C++ 支持多种数据类型，程序员可以选择适合应用程序需求的数据类型。数据类型指定要存储的值的大小和类型。但是，尽管 C++ 指令在所有机器上都是相同的，但操纵每种数据类型的存储表示和机器指令都不同。

**C++ 支持以下数据类型：**

1. Primary or Built-in or Fundamental data type
2. Derived data types
3. User-defined data types

<center><img src={require("./imgs/DatatypesInC.png").default} width='70%'/></center>

## C++中的数据类型主要分为三种类型

1. 基本数据类型: 这些数据类型是内置或预定义的数据类型，用户可以直接使用它们来声明变量。例如：int，char，float，bool，double 等。
   - Integer 整数类型
   - Character 字符类型
   - Boolean 布尔类型
   - Floating Point 浮点类型
   - Double Floating Point 双精度浮点类型
   - Valueless or Void 空类型
   - Wide Character 宽字符类型
2. 派生数据类型: 这些数据类型是从基本数据类型派生的。例如：数组，指针，函数，结构，联合和枚举等。
   - Function 函数类型
   - Array 数组类型
   - Pointer 指针类型
   - Reference 引用类型
3. 用户定义的数据类型: 这些数据类型是用户根据他们的要求定义的。例如：类，结构，联合，枚举等。
   * Class 类类型
   * Structure 结构类型
   * Union 联合类型
   * Enumeration 枚举类型
   * Typedef defined Datatype 类型定义
