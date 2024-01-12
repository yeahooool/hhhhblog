# numpy

## 1. `np.linalg.det()`: numpy.linalg --- NumPy 的线性代数函数; linalg.det 计算一个数组的行列式。

```python
 Examples
 --------
 The determinant of a 2-D array [[a, b], [c, d]] is ad - bc:

 >>> a = np.array([[1, 2], [3, 4]])
 >>> np.linalg.det(a)
 -2.0 # may vary

 Computing determinants for a stack of matrices:

 >>> a = np.array([ [[1, 2], [3, 4]], [[1, 2], [2, 1]], [[1, 3], [3, 1]] ])
 >>> a.shape
 (3, 2, 2)
 >>> np.linalg.det(a)
 array([-2., -3., -8.])
```

## 2. `np.linalg.lstsq(a, b, rcond="warn")`:NumPy 中的线性代数函数之一，用于求解线性最小二乘问题的解。线性最小二乘问题是指，给定一个矩阵 X 和一个向量 y，求解最小化残差平方和的向量 b，使得 y ≈ Xb。

- a: 形状为(m,n)的 2 维数组，表示矩阵 X。
- b: 形状为(m,)或(m, k)的 1 维或 2 维数组，表示向量 y。
- rcond（可选）：浮点数或 None，表示奇异值的截断阈值。奇异值是矩阵的特征值中非零的最小值，用于判断矩阵的秩。默认值为-1，表示使用 numpy.finfo(a.dtype).eps \* max(m, n)作为阈值。

函数返回一个元组(x, residuals, rank, s)，其中：

- x：形状为(n,)或(n, k)的 1 维或 2 维数组，表示线性最小二乘问题的解 b。
- residuals：形状为()或(1,)的 0 维或 1 维数组，表示残差平方和。如果 b 的长度大于 1，则返回一个包含多个残差平方和的数组。
- rank：整数，表示矩阵 X 的秩。
- s：形状为(min(m,n),)的 1 维数组，表示奇异值。

下面是一个示例，演示如何求解线性最小二乘问题：

```python
import numpy as np

# 定义矩阵X和向量y
X = np.array([[1, 1], [1, 2], [1, 3], [1, 4]])
y = np.array([2, 3, 4, 5])

# 求解线性最小二乘问题的解
b, residuals, rank, s = np.linalg.lstsq(X, y, rcond=None)

# 输出结果
print("解b：", b)
print("残差平方和：", residuals)
print("矩阵X的秩：", rank)
print("奇异值：", s)

>>>
解b： [1. 1.]
残差平方和： [4.18001683e-32]
矩阵X的秩： 2
奇异值： [5.77937881 0.77380911]
```

## 3. `np.save(file, arr, allow_pickle=True, fix_imports=True)`:

```python
 Save an array to a binary file in NumPy ``.npy`` format.

 Parameters
 ----------
 file : file, str, or pathlib.Path
     File or filename to which the data is saved.  If file is a file-object,
     then the filename is unchanged.  If file is a string or Path, a ``.npy``
     extension will be appended to the filename if it does not already
     have one.
 arr : array_like
     Array data to be saved.
 allow_pickle : bool, optional
     Allow saving object arrays using Python pickles. Reasons for disallowing
     pickles include security (loading pickled data can execute arbitrary
     code) and portability (pickled objects may not be loadable on different
     Python installations, for example if the stored objects require libraries
     that are not available, and not all pickled data is compatible between
     Python 2 and Python 3).
     Default: True
 fix_imports : bool, optional
     Only useful in forcing objects in object arrays on Python 3 to be
     pickled in a Python 2 compatible way. If `fix_imports` is True, pickle
     will try to map the new Python 3 names to the old module names used in
     Python 2, so that the pickle data stream is readable with Python 2.

 See Also
 --------
 savez : Save several arrays into a ``.npz`` archive
 savetxt, load

 Notes
 -----
 For a description of the ``.npy`` format, see :py:mod:`numpy.lib.format`.

 Any data saved to the file is appended to the end of the file.
```

## 4. `np.tile(A, reps)`:

```python
Construct an array by repeating A the number of times given by reps.
Parameters
----------
A : array_like
    The input array.
reps : array_like
    The number of repetitions of `A` along each axis.

Returns
-------
c : ndarray
    The tiled output array.

See Also
--------
repeat : Repeat elements of an array.
broadcast_to : Broadcast an array to a new shape

Examples
--------
>>> a = np.array([0, 1, 2])
>>> np.tile(a, 2)
array([0, 1, 2, 0, 1, 2])
>>> np.tile(a, (2, 2))
array([[0, 1, 2, 0, 1, 2],
       [0, 1, 2, 0, 1, 2]])
>>> np.tile(a, (2, 1, 2))
array([[[0, 1, 2, 0, 1, 2]],
       [[0, 1, 2, 0, 1, 2]]])

>>> b = np.array([[1, 2], [3, 4]])
>>> np.tile(b, 2)
array([[1, 2, 1, 2],
       [3, 4, 3, 4]])
>>> np.tile(b, (2, 1))
array([[1, 2],
       [3, 4],
       [1, 2],
       [3, 4]])

>>> c = np.array([1,2,3,4])
>>> np.tile(c,(4,1))
array([[1, 2, 3, 4],
       [1, 2, 3, 4],
       [1, 2, 3, 4],
       [1, 2, 3, 4]])
```

## 5. `np.concatenate(arrays, axis=None, out=None, *, dtype=None, casting=None)`:

```python
concatenate((a1, a2, ...), axis=0, out=None, dtype=None, casting="same_kind")

Join a sequence of arrays along an existing axis.

Parameters
----------
a1, a2, ... : sequence of array_like
    The arrays must have the same shape, except in the dimension
    corresponding to `axis` (the first, by default).
axis : int, optional
    The axis along which the arrays will be joined.  If axis is None,
    arrays are flattened before use.  Default is 0.
out : ndarray, optional
    If provided, the destination to place the result. The shape must be
    correct, matching that of what concatenate would have returned if no
    out argument were specified.
dtype : str or dtype
    If provided, the destination array will have this dtype. Cannot be
    provided together with `out`.

casting : {'no', 'equiv', 'safe', 'same_kind', 'unsafe'}, optional
    Controls what kind of data casting may occur. Defaults to 'same_kind'.

Returns
-------
res : ndarray
    The concatenated array.

See Also
--------
ma.concatenate : Concatenate function that preserves input masks.
array_split : Split an array into multiple sub-arrays of equal or
              near-equal size.
split : Split array into a list of multiple sub-arrays of equal size.
hsplit : Split array into multiple sub-arrays horizontally (column wise).
vsplit : Split array into multiple sub-arrays vertically (row wise).
dsplit : Split array into multiple sub-arrays along the 3rd axis (depth).
stack : Stack a sequence of arrays along a new axis.
block : Assemble arrays from blocks.
hstack : Stack arrays in sequence horizontally (column wise).
vstack : Stack arrays in sequence vertically (row wise).
dstack : Stack arrays in sequence depth wise (along third dimension).
column_stack : Stack 1-D arrays as columns into a 2-D array.

Examples
--------
>>> a = np.array([[1, 2], [3, 4]])
>>> b = np.array([[5, 6]])
>>> np.concatenate((a, b), axis=0)
array([[1, 2],
       [3, 4],
       [5, 6]])
>>> np.concatenate((a, b.T), axis=1)
array([[1, 2, 5],
       [3, 4, 6]])
>>> np.concatenate((a, b), axis=None)
array([1, 2, 3, 4, 5, 6])
```

## 6. `np.loadtxt()`: Load data from a text file.

## 7. `np.insert(arr, obj, values, axis=None)`:

```python
Insert values along the given axis before the given indices.

Parameters
----------
arr : array_like
    Input array.
obj : int, slice or sequence of ints
    Object that defines the index or indices before which `values` is
    inserted.

    .. versionadded:: 1.8.0

    Support for multiple insertions when `obj` is a single scalar or a
    sequence with one element (similar to calling insert multiple
    times).
values : array_like
    Values to insert into `arr`. If the type of `values` is different
    from that of `arr`, `values` is converted to the type of `arr`.
    `values` should be shaped so that ``arr[...,obj,...] = values``
    is legal.
axis : int, optional
    Axis along which to insert `values`.  If `axis` is None then `arr`
    is flattened first.

Returns
-------
out : ndarray
    A copy of `arr` with `values` inserted.  Note that `insert`
    does not occur in-place: a new array is returned. If
    `axis` is None, `out` is a flattened array.

See Also
--------
append : Append elements at the end of an array.
concatenate : Join a sequence of arrays along an existing axis.
delete : Delete elements from an array.

Notes
-----
Note that for higher dimensional inserts ``obj=0`` behaves very different
from ``obj=[0]`` just like ``arr[:,0,:] = values`` is different from
``arr[:,[0],:] = values``.

Examples
--------
>>> a = np.array([[1, 1], [2, 2], [3, 3]])
>>> a
array([[1, 1],
       [2, 2],
       [3, 3]])
>>> np.insert(a, 1, 5)
array([1, 5, 1, ..., 2, 3, 3])
>>> np.insert(a, 1, 5, axis=1)
array([[1, 5, 1],
       [2, 5, 2],
       [3, 5, 3]])

Difference between sequence and scalars:

>>> np.insert(a, [1], [[1],[2],[3]], axis=1)
array([[1, 1, 1],
       [2, 2, 2],
       [3, 3, 3]])
>>> np.array_equal(np.insert(a, 1, [1, 2, 3], axis=1),
...                np.insert(a, [1], [[1],[2],[3]], axis=1))
True

>>> b = a.flatten()
>>> b
array([1, 1, 2, 2, 3, 3])
>>> np.insert(b, [2, 2], [5, 6])
array([1, 1, 5, ..., 2, 3, 3])

>>> np.insert(b, slice(2, 4), [5, 6])
array([1, 1, 5, ..., 2, 3, 3])

>>> np.insert(b, [2, 2], [7.13, False]) # type casting
array([1, 1, 7, ..., 2, 3, 3])

>>> x = np.arange(8).reshape(2, 4)
>>> idx = (1, 3)
>>> np.insert(x, idx, 999, axis=1)
array([[  0, 999,   1,   2, 999,   3],
       [  4, 999,   5,   6, 999,   7]])
```

## 8. `np.unique(ar, return_index=False, return_inverse=False,    return_counts=False, axis=None, *, equal_nan=True)`:

```python
 Find the unique elements of an array.

 Returns the sorted unique elements of an array. There are three optional
 outputs in addition to the unique elements:

 * the indices of the input array that give the unique values
 * the indices of the unique array that reconstruct the input array
 * the number of times each unique value comes up in the input array

 Parameters
 ----------
 ar : array_like
     Input array. Unless `axis` is specified, this will be flattened if it
     is not already 1-D.
 return_index : bool, optional
     If True, also return the indices of `ar` (along the specified axis,
     if provided, or in the flattened array) that result in the unique array.
 return_inverse : bool, optional
     If True, also return the indices of the unique array (for the specified
     axis, if provided) that can be used to reconstruct `ar`.
 return_counts : bool, optional
     If True, also return the number of times each unique item appears
     in `ar`.
 axis : int or None, optional
     The axis to operate on. If None, `ar` will be flattened. If an integer,
     the subarrays indexed by the given axis will be flattened and treated
     as the elements of a 1-D array with the dimension of the given axis,
     see the notes for more details.  Object arrays or structured arrays
     that contain objects are not supported if the `axis` kwarg is used. The
     default is None.
 equal_nan : bool, optional
     If True, collapses multiple NaN values in the return array into one.


 Returns
 -------
 unique : ndarray
     The sorted unique values.
 unique_indices : ndarray, optional
     The indices of the first occurrences of the unique values in the
     original array. Only provided if `return_index` is True.
 unique_inverse : ndarray, optional
     The indices to reconstruct the original array from the
     unique array. Only provided if `return_inverse` is True.
 unique_counts : ndarray, optional
     The number of times each of the unique values comes up in the
     original array. Only provided if `return_counts` is True.

     .. versionadded:: 1.9.0

 See Also
 --------
 numpy.lib.arraysetops : Module with a number of other functions for
                         performing set operations on arrays.
 repeat : Repeat elements of an array.


 Examples
 --------
 >>> np.unique([1, 1, 2, 2, 3, 3])
 array([1, 2, 3])
 >>> a = np.array([[1, 1], [2, 3]])
 >>> np.unique(a)
 array([1, 2, 3])

 Return the unique rows of a 2D array

 >>> a = np.array([[1, 0, 0], [1, 0, 0], [2, 3, 4]])
 >>> np.unique(a, axis=0)
 array([[1, 0, 0], [2, 3, 4]])

 Return the indices of the original array that give the unique values:

 >>> a = np.array(['a', 'b', 'b', 'c', 'a'])
 >>> u, indices = np.unique(a, return_index=True)
 >>> u
 array(['a', 'b', 'c'], dtype='<U1')
 >>> indices
 array([0, 1, 3])
 >>> a[indices]
 array(['a', 'b', 'c'], dtype='<U1')

 Reconstruct the input array from the unique values and inverse:

 >>> a = np.array([1, 2, 6, 4, 2, 3, 2])
 >>> u, indices = np.unique(a, return_inverse=True)
 >>> u
 array([1, 2, 3, 4, 6])
 >>> indices
 array([0, 1, 4, 3, 1, 2, 1])
 >>> u[indices]
 array([1, 2, 6, 4, 2, 3, 2])

 Reconstruct the input values from the unique values and counts:

 >>> a = np.array([1, 2, 6, 4, 2, 3, 2])
 >>> values, counts = np.unique(a, return_counts=True)
 >>> values
 array([1, 2, 3, 4, 6])
 >>> counts
 array([1, 3, 1, 1, 1])
 >>> np.repeat(values, counts)
 array([1, 2, 2, 2, 3, 4, 6])    # original order not preserved
```

## 9. `np.math.ceil()`:函数 Math.ceil(x)返回大于数字 x 的最小整数值。如果 number 已经是整数，则返回相同的数字。

## 10. `.tolist()`: NumPy 中的一个函数，用于将 NumPy 数组转换为 Python 列表。

## 11. `np.pad()`: NumPy 中的一个函数，用于在数组的边缘填充常数:

    ```python
    import numpy as np

    >>> a.shape
    (1, 5, 3)
    >>> b = np.pad(a, ((0, 0), (0, 4), (0, 0)))
    >>> b.shape
    (1, 9, 3)
    >>> c = np.pad(a, ((0, 0), (0, 4), (0, 0)), mode='constant', constant_values=-1)
    >>> c.shape
    (1, 9, 3)
    ```

    解释：`((0, 0), (0, 4), (0, 0))`表示在第一个维度上不填充，第二个维度上填充 4 个，第三个维度上不填充。加上`mode='constant', constant_values=-1`表示填充的值为-1，默认为 0。

## 12. `np.searchsorted`和`np.cumsum`: NumPy 中的两个函数，用于在数组中查找元素的位置和计算累积和。

假设 `index=29`，`len(self.dirs)=3`， `self.images_per_dir = [8, 11, 10]`，如果 index 的值为 0-7，那么对应属于第一种类型的索引 type_index=0，如果 index 为 8-18,那么 type_index=1，如果 index 为 19-28,那么 type_index=2.

```python
def __load_data(self, index):
    cumulative_images = np.cumsum(self.images_per_dir)
    type_index = np.searchsorted(cumulative_images, index + 1)
```

在这段代码中，首先计算了`self.images_per_dir`的累积和,`cumulative_images`的值为`[8, 19, 29]`，然后使用`np.searchsorted`函数查找`index + 1`在`cumulative_images`中的位置，这个位置就是`type_index`的值。这样如果`index`的值为 0-7，那么`type_index`的值为 0，如果`index`的值为 8-18，那么`type_index`的值为 1，如果`index`的值为 19-28，那么`type_index`的值为 2。