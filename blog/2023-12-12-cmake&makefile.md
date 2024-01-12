---
slug: compile1
title: cmake及makefile记录1
authors: [hf]
tags: [libtorch, compile]
---

同一个项目`project()`中，为了对不同的执行文件或库文件使用不同的编译选项，可以通过编写不同的次级`CMakeLists.txt`和顶级`CMakeLists.txt`来实现。

比如说，对于 `include_directories()` 函数，如果在顶级 `CMakeLists.txt` 文件中调用了它，那么它的效果会应用到所有的子目录。也就是说，在顶级 `CMakeLists.txt` 文件中添加的包含目录会被所有的子目录继承。因此，通常不需要在子目录的 `CMakeLists.txt` 文件中再次调用 `include_directories()` 函数。

但是，如果有一些只在特定子目录中使用的包含目录，可以在那个子目录的 `CMakeLists.txt` 文件中调用 `include_directories()` 函数来添加它们。这样，这些包含目录只会对那个子目录及其子目录生效，而不会影响其他目录。

假设目录结构如下：

```bash
project(test)
├── CMakeLists.txt
├── cmake
│   └── cpu
│      └── CMakeLists.txt
│   └── gpu
│      └── CMakeLists.txt
├── include
│   └── *.h
├── src
│   └── 1.cpp
│   └── 2.cpp
│   └── CalcOps.cpp
│   └── CalcOps_cpu.cpp
│   └── CalcOps_bind.cpp
│   └── CalcOps_bind_cpu.cpp
└── kernel
    └── 1.cu
    └── 2.cu
```

<!-- truncate -->

以下是一个常规的`CMakeLists.txt`文件，其中包含gpu和cpu的cpp代码，该代码都调用了Pytorch的库。

## 1. `/CMakeLists.txt`

```cpp
# 1. Basic info 
cmake_minimum_required(VERSION 3.2 FATAL_ERROR)
project(CalcOps)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED on)
# enable_language(CUDA)			### no need, just compile on GPU device
# set(CMAKE_CUDA_FLAGS "-arch=sm_60")

# 2. include 
execute_process(COMMAND python3 -c "import torch; print(torch.utils.cmake_prefix_path)" OUTPUT_VARIABLE TORCH_CMAKE_PREFIX_PATH) ### cmake
string(REPLACE "\n" "" TORCH_CMAKE_PREFIX_PATH ${TORCH_CMAKE_PREFIX_PATH}) 
list(APPEND CMAKE_PREFIX_PATH ${TORCH_CMAKE_PREFIX_PATH}) 
# find_package(Torch REQUIRED)		# if use find_package, then it will link all library in torch, including torch_cpu, torch_cuda...
list(APPEND CMAKE_CXX_FLAGS ${TORCH_CXX_FLAGS})


# 3. set 
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)
file(MAKE_DIRECTORY ${CMAKE_RUNTIME_OUTPUT_DIRECTORY})

set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
file(MAKE_DIRECTORY ${CMAKE_LIBRARY_OUTPUT_DIRECTORY})

set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/obj)
file(MAKE_DIRECTORY ${CMAKE_ARCHIVE_OUTPUT_DIRECTORY})

# 4. add_library
execute_process(COMMAND python3 -c "import sysconfig; print(sysconfig.get_paths()['include'])" OUTPUT_VARIABLE PYTHON_INCLUDE_DIR) ### python
string(REPLACE "\n" "" PYTHON_INCLUDE_DIR ${PYTHON_INCLUDE_DIR}) ### python
execute_process(COMMAND python3 -c "import torch; print(torch.__path__[0])" OUTPUT_VARIABLE TORCH_PATH) ### torch
string(REPLACE "\n" "" TORCH_PATH ${TORCH_PATH}) ### torch
include_directories(${PYTHON_INCLUDE_DIR})
include_directories(${TORCH_PATH}/include/)
include_directories(${TORCH_PATH}/include/torch/csrc/api/include/)

# 5. compile library
add_subdirectory(cmake/gpu)
add_subdirectory(cmake/cpu)
```

:::tip
`find_package(Torch REQUIRED)`: 如果使用`find_package`，则会链接所有的库文件，包括`torch_cpu`和`torch_cuda`，这样会导致编译纯CPU版本的torch库文件时会存在很多cuda依赖项，如`libcuda.so`等，导致调用该动态库需要在cuda环境中才能正常运行。所以这里注释掉，然后在分别编译cpu和gpu版本的库文件时，分别链接需要的torch库文件。
:::

## 2. `/cmake/cpu/CMakeLists.txt`

```cpp
# 4. add_library
add_library(CalcOps_cpu SHARED ${CMAKE_SOURCE_DIR}/src/CalcOps_cpu.cpp)
target_include_directories(CalcOps_cpu PRIVATE ${CMAKE_SOURCE_DIR})
target_link_libraries(CalcOps_cpu PRIVATE ${TORCH_LIBRARIES})
target_link_libraries(CalcOps_cpu PRIVATE ${TORCH_PATH}/lib/libtorch.so)
target_link_libraries(CalcOps_cpu PRIVATE ${TORCH_PATH}/lib/libtorch_cpu.so)

add_library(CalcOps_bind_cpu SHARED ${CMAKE_SOURCE_DIR}/src/CalcOps_bind_cpu.cpp)
target_compile_features(CalcOps_bind_cpu PRIVATE cxx_std_17)
target_link_libraries(CalcOps_bind_cpu PRIVATE CalcOps_cpu ${TORCH_LIBRARIES})
```

:::tip
在 CMake 中，可以使用` ${CMAKE_SOURCE_DIR}` 变量来表示顶级源代码目录，也就是最顶级的 `CMakeLists.txt` 文件所在的目录。

`${CMAKE_CURRENT_SOURCE_DIR}` 变量表示当前处理的 `CMakeLists.txt` 文件所在的目录。所以，如果在子目录中的 `CMakeLists.txt` 文件中使用 `${CMAKE_CURRENT_SOURCE_DIR}`，它将表示那个子目录的路径。
:::

## 3. `/cmake/gpu/CMakeLists.txt`

```cmake
# include 
find_package(Torch REQUIRED)
# add_library
add_library(CalcOps_cuda SHARED ${CMAKE_SOURCE_DIR}/src/CalcOps.cpp)
target_include_directories(CalcOps_cuda PRIVATE ${CMAKE_SOURCE_DIR})
target_link_libraries(CalcOps_cuda PRIVATE ${TORCH_LIBRARIES})

# register_op
file(GLOB CPP_FILES ${CMAKE_SOURCE_DIR}/src/*.cpp)
file(GLOB CU_FILES ${CMAKE_SOURCE_DIR}/kernel/*.cu)
file(GLOB CALC_FILES ${CMAKE_SOURCE_DIR}/src/CalcOp*.cpp)
list(REMOVE_ITEM CPP_FILES ${CALC_FILES})

foreach(CPP_FILE ${CPP_FILES})
	get_filename_component(CPP_LIB ${CPP_FILE} NAME)
	add_library(${CPP_LIB} SHARED ${CPP_FILE})
	target_link_libraries(CalcOps_cuda PRIVATE ${CPP_LIB} ${TORCH_LIBRARIES})
endforeach(CPP_FILE)

foreach(CU_FILE ${CU_FILES})
	get_filename_component(CU_LIB ${CU_FILE} NAME)
	add_library(${CU_LIB} SHARED ${CU_FILE})
	target_link_libraries(CalcOps_cuda PRIVATE ${CU_LIB} ${TORCH_LIBRARIES})
endforeach(CU_FILE)

add_library(CalcOps_bind SHARED ${CMAKE_SOURCE_DIR}/src/CalcOps_bind.cpp)
target_compile_features(CalcOps_bind PRIVATE cxx_std_17)
target_link_libraries(CalcOps_bind PRIVATE CalcOps_cuda ${TORCH_LIBRARIES})
```

:::tip
多个库文件时，可以使用`GLOB`和循环来添加库文件及链接库，但是当添加或删除文件时，`GLOB`不会自动更新，需要删除`build`目录重新编译。
:::

编译命令：

```bash
mkdir build
cd build
cmake ..
make
```

## 4. 在python中调用动态库

为了在python中调用动态库，需要使用`torch/extension.h`头文件，该头文件包含了`torch::RegisterOperators()`函数，该函数可以注册自定义操作符，然后在python中调用。

### 1. `src/CalcOps_bind.cpp`

```cpp
#include <torch/torch.h>
#include <torch/extension.h>

#include "../include/CalcOps.h"

TORCH_LIBRARY(CalcOps_cuda, m) {
    m.def("calculateForce", calculateForce);
    m.def("calculateVirial", calculateVirial);
    m.def("calculateCompress", calculateCompress);
}
```

### 2. `src/CalcOps_bind_cpu.cpp`

```cpp
#include <torch/torch.h>
#include <torch/extension.h>

#include "../include/CalcOps.h"

TORCH_LIBRARY(CalcOps_cpu, m) {
    m.def("calculateForce", calculateForce_cpu);
    m.def("calculateVirial", calculateVirial_cpu);
    m.def("calculateCompress", calculateCompress_cpu);
}
```

### 3. `test/main.py`

```python
import torch
if torch.cuda.is_available():
    lib_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "op/build/lib/libCalcOps_bind.so")
    torch.ops.load_library(lib_path)
    CalcOps = torch.ops.CalcOps_cuda
else:
    lib_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "op/build/lib/libCalcOps_bind_cpu.so")
    torch.ops.load_library(lib_path)    # load the custom op, no use for cpu version
    CalcOps = torch.ops.CalcOps_cpu     # only for compile while no cuda device
...

F = CalcOps.calculateForce(list_neigh, dE, Ri_d, Force)[0]
...
```

:::tip
环境变量`LD_LIBRARY_PATH`中必须包含`libCalcOps_bind.so`及`libCalcOps_bind_cpu`所在的路径，以及`libpython3.x.so`所在的路径。例如：
```bash
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/path/to/build/lib/:/path/to/anaconda3/envs/pytorch2/lib/
```
:::

## 5. 在其他软件的接口中使用调用动态库

例如编译 Lammps 时，需要在`Makefile.mpi`中添加一些链接库的路径，例如：

```makefile
LINKFLAGS += -L$(PYTORCH_PATH)/lib/ -ltorch -lc10 -ltorch_cpu
LINK_COSTUM_OP_CPU ?= 1
LINK_COSTUM_OP_GPU ?= 0
ifeq ($(LINK_COSTUM_OP_CPU), 1)
	LINKFLAGS += -L$(OP_LIB_PATH) -lCalcOps_bind_cpu
endif
ifeq ($(LINK_COSTUM_OP_GPU), 1)
	LINKFLAGS += -L$(OP_LIB_PATH) -lCalcOps_bind
endif
PYTHON_LIB_PATH = $(shell python3-config --prefix)/lib
LINKFLAGS += -L$(PYTHON_LIB_PATH) -lpython3.11 -static-libstdc++ -static-libgcc
```

其中，使用静态链接`-static-libstdc++ -static-libgcc`是为了解决链接器不支持的GNU属性类型的问题.

如：

```bash
/opt/rh/devtoolset-8/root/usr/libexec/gcc/x86_64-redhat-linux/8/ld: warning: /data/home/hfhuang/software/anaconda3/envs/pytorch2/lib/libstdc++.so: unsupported GNU_PROPERTY_TYPE (5) type: 0xc0010001
...
```

`OP_LIB_PATH`是动态库文件所在的路径，这里通过在执行编译前`export`设置环境变量：

```bash
export OP_LIB_PATH=/path/to/build/lib/
```

`LINK_COSTUM_OP_CPU`和`LINK_COSTUM_OP_GPU`是为了在编译时选择链接cpu版本的库文件还是gpu版本的库文件，默认值分别为1和0。可以在运行`make`时设置这些变量的值，例如：

```bash
make mpi -j4 LINK_COSTUM_OP_GPU=1
```

