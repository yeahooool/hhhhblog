---
slug: fortran-dynamics
title: fortran 动态库
authors: [hf]
tags: [fortran, python]
---

如果需要在 python 中调用 fortran 的动态库，则需要将 fortran 代码封装在一个模块（module）中。

python 的`numpy.f2py`工具可以将 fortran 模块编译为 Python 可以调用的动态链接库。

<!-- truncate -->

## 1. 一个原始的 fortran 子程序（subroutine）：

```Fortran
subroutine find_neighbore(images, lattice, position, ntypes, natoms, m_neigh, Rc_M, Rc_type, type_maps)

    implicit none

    ! ... your code here ...

end subroutine find_neighbore
```

## 2. 将其封装在一个模块中：

```Fortran
module NeighConst
    implicit none
    contains

    subroutine find_neighbore(images, lattice, position, ntypes, natoms, m_neigh, Rc_M, Rc_type, type_maps)

        ! ... your code here ...

    end subroutine find_neighbore
end module NeighConst
```

## 3. Makefile 文件：

```Makefile
all: NeighConst.so
	\cp *.so ../../lib/

NeighConst.so: NeighConst.f90
	python3 -m numpy.f2py -c -m NeighConst --fcompiler=intelem --compiler=intelem -L$(MKLROOT)/lib/intel64/ -lmkl_rt NeighConst.f90
	mv NeighConst.cpython-*-x86_64-linux-gnu.so NeighConst.so

clean:
	rm -f *.x *.mod *.so
```

## 4. python 调用：

```python
from NeighConst import neighconst

Rc_type = np.asfortranarray(self.Rc_type)
type_maps = np.asfortranarray(AtomTypeMap[:natoms] + 1)
lattice = np.asfortranarray(Lattice.reshape(images, 3, 3))
position = np.asfortranarray(Position[:natoms].reshape(images, natoms, 3))
neighconst.find_neighbore(chunk_size, lattice, position, ntypes, natoms, m_neigh, Rc_m, Rc_type, type_maps)
```

在 Fortran 中，数组的内存布局是列优先的，而在 Python（如果你是从 Python 调用 Fortran 子程序的话）中，数组的内存布局是行优先的。使用 numpy 的 `asfortranarray` 函数来确保数组是 Fortran 连续的。

**注意**：小写的`neighconst`是模块名，大写的`NeighConst`是模块文件名。`find_neighbore`是模块中的子程序名。

## 5. 访问模块中的变量，可以在模块中定义一个全局变量：

```Fortran
module NeighConst
    implicit none

    integer, allocatable, dimension(:,:,:,:) :: list_neigh
    real(8), allocatable, dimension(:,:,:,:,:) :: dR_neigh

    contains

    subroutine find_neighbore(images, lattice, position, ntypes, natoms, m_neigh, Rc_M, Rc_type, type_maps)

        ! initialize
        allocate(list_neigh(m_neigh, ntypes, natoms, images))
        allocate(dR_neigh(3, m_neigh, ntypes, natoms, images))
        list_neigh = 0
        dR_neigh = 0

        ! ... your code here ...

    end subroutine find_neighbore
end module NeighConst
```

然后在 python 中就可以访问这些变量了：

```python
from NeighConst import neighconst

neighconst.find_neighbore(chunk_size, lattice, position, ntypes, natoms, m_neigh, Rc_m, Rc_type, type_maps)
_list_neigh = neighconst.list_neigh
_dR_neigh = neighconst.dr_neigh
```

## 6. 释放模块中的变量：

```Fortran
module NeighConst
    implicit none

    integer, allocatable, dimension(:,:,:,:) :: list_neigh
    real(8), allocatable, dimension(:,:,:,:,:) :: dR_neigh

    contains

    subroutine find_neighbore(images, lattice, position, ntypes, natoms, m_neigh, Rc_M, Rc_type, type_maps)

        ! initialize
        allocate(list_neigh(m_neigh, ntypes, natoms, images))
        allocate(dR_neigh(3, m_neigh, ntypes, natoms, images))
        list_neigh = 0
        dR_neigh = 0

        ! ... your code here ...

    end subroutine find_neighbore

    subroutine dealloc()
        deallocate(list_neigh)
        deallocate(dR_neigh)
    end subroutine dealloc
end module NeighConst
```

我们可以在 python 中调用`dealloc`子程序来释放模块中的变量：

```python
from NeighConst import neighconst

neighconst.find_neighbore(chunk_size, lattice, position, ntypes, natoms, m_neigh, Rc_m, Rc_type, type_maps)
_list_neigh = neighconst.list_neigh
_dR_neigh = neighconst.dr_neigh
list_neigh = np.transpose(_list_neigh, (3, 2, 1, 0))
dR_neigh = np.transpose(_dR_neigh, (4, 3, 2, 1, 0))
davg, dstd = calc_stat(config, dR_neigh, list_neigh, m_neigh, natoms, ntypes, atom_types_nums)
neighconst.dealloc()
```

**注意**：在 python 中，`list_neigh`和`dR_neigh`的维度顺序和 fortran 中的不一样，然后在 Python 中访问它，需要交换行和列的索引。fortran 为列优先，python 为行优先。例如，如果在 Fortran 中访问`A(i, j)`，那么在 Python 中，你需要访问`A[j, i]`。

:::info
调用`dealloc`子程序后，模块中的变量就被释放了，`_list_neigh` 和 `_dR_neigh`变成垃圾变量，如果后面还需要使用这两个变量，需在调用`dealloc`子程序前，利用`copy`函数将其拷贝到新的变量中。

```python
list_neigh = np.transpose(_list_neigh.copy(), (3, 2, 1, 0))
dR_neigh = np.transpose(_dR_neigh.copy(), (4, 3, 2, 1, 0))
```

或者使用该变量计算得到的其他变量在新的内存地址。
:::
