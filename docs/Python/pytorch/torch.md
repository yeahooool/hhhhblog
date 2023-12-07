---
sidebar_position: 0
---

# torch

## 1. `torch.zeros_like(Tensor, dtype)`

返回一个为 0 的 Tensor.

## 2. `torch.set_printoptions()`

显示的元素精度

<details>
<summary>详细解释</summary>

```python
def set_printoptions(
    precision=None,
    threshold=None,
    edgeitems=None,
    linewidth=None,
    profile=None,
    sci_mode=None,
):
    r"""Set options for printing. Items shamelessly taken from NumPy

    Args:
        precision: Number of digits of precision for floating point output
            (default = 4).
        threshold: Total number of array elements which trigger summarization
            rather than full `repr` (default = 1000).
        edgeitems: Number of array items in summary at beginning and end of
            each dimension (default = 3).
        linewidth: The number of characters per line for the purpose of
            inserting line breaks (default = 80). Thresholded matrices will
            ignore this parameter.
        profile: Sane defaults for pretty printing. Can override with any of
            the above options. (any one of `default`, `short`, `full`)
        sci_mode: Enable (True) or disable (False) scientific notation. If
            None (default) is specified, the value is defined by
            `torch._tensor_str._Formatter`. This value is automatically chosen
            by the framework.

    Example::

        >>> # Limit the precision of elements
        >>> torch.set_printoptions(precision=2)
        >>> torch.tensor([1.12345])
        tensor([1.12])
        >>> # Limit the number of elements shown
        >>> torch.set_printoptions(threshold=5)
        >>> torch.arange(10)
        tensor([0, 1, 2, ..., 7, 8, 9])
        >>> # Restore defaults
        >>> torch.set_printoptions(profile='default')
        >>> torch.tensor([1.12345])
        tensor([1.1235])
        >>> torch.arange(10)
        tensor([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

    """
    if profile is not None:
        if profile == "default":
            PRINT_OPTS.precision = 4
            PRINT_OPTS.threshold = 1000
            PRINT_OPTS.edgeitems = 3
            PRINT_OPTS.linewidth = 80
        elif profile == "short":
            PRINT_OPTS.precision = 2
            PRINT_OPTS.threshold = 1000
            PRINT_OPTS.edgeitems = 2
            PRINT_OPTS.linewidth = 80
        elif profile == "full":
            PRINT_OPTS.precision = 4
            PRINT_OPTS.threshold = inf
            PRINT_OPTS.edgeitems = 3
            PRINT_OPTS.linewidth = 80

    if precision is not None:
        PRINT_OPTS.precision = precision
    if threshold is not None:
        PRINT_OPTS.threshold = threshold
    if edgeitems is not None:
        PRINT_OPTS.edgeitems = edgeitems
    if linewidth is not None:
        PRINT_OPTS.linewidth = linewidth
    PRINT_OPTS.sci_mode = sci_mode
```

</details>

## 3. `torch.backends.cudnn as cudnn`

为什么使用相同的网络结构，跑出来的效果完全不同，用的学习率，迭代次数，`batch size` 都是一样？固定随机数种子是非常重要的。但是如果你使用的是 PyTorch 等框架，还要看一下框架的种子是否固定了。还有，如果你用了 cuda，别忘了 cuda 的随机数种子。这里还需要用到`torch.backends.cudnn.deterministic`.

`torch.backends.cudnn.deterministic`是啥？顾名思义，将这个 flag 置为`True`的话，每次返回的卷积算法将是确定的，即默认算法。如果配合上设置 Torch 的随机种子为固定值的话，应该可以保证每次运行网络的时候相同输入的输出是固定的，代码大致这样:

```python
def init_seeds(seed=0):
torch.manual_seed(seed) # sets the seed for generating random numbers.
torch.cuda.manual_seed(seed) # Sets the seed for generating random numbers for the current GPU. It’s safe to call this function if CUDA is not available; in that case, it is silently ignored.
torch.cuda.manual_seed_all(seed) # Sets the seed for generating random numbers on all GPUs. It’s safe to call this function if CUDA is not available; in that case, it is silently ignored.

if seed == 0:
    cudnn.deterministic = True
    cudnn.benchmark = False
```

> `torch.backends.cudnn.benchmark = true`: 大部分情况下，设置这个 flag 可以让内置的 cuDNN 的 auto-tuner 自动寻找最适合当前配置的高效算法，来达到优化运行效率的问题。
> 一般来讲，应该遵循以下准则：
>
> - 如果网络的输入数据维度或类型上变化不大，设置 `torch.backends.cudnn.benchmark = true` 可以增加运行效率；
> - 如果网络的输入数据在每次 iteration 都变化的话，会导致 cnDNN 每次都会去寻找一遍最优配置，这样反而会降低运行效率。
> - 为了避免计算结果的波动，设置`torch.backends.cudnn.deterministic = True`.

## 4. `torch.gather(input, dim, index, *, sparse_grad=False, out=None) → Tensor`

[官方文档](https://pytorch.org/docs/stable/generated/torch.gather.html#torch.gather)

沿给定轴 dim，将输入索引张量 index 指定位置的值进行聚合。

> **Parameters**
>
> - input (Tensor) – 输入张量
> - dim (int) – 聚合的轴
> - index (LongTensor) – 聚合的索引
>
> **Keyword Arguments**
>
> - sparse_grad (bool, optional) – 如果为 True，梯度将是稀疏的。注意，当前只有 CPU 支持稀疏梯度，因此此选项只能在 CPU 上使用。默认值：False
> - out (Tensor, optional) – 输出张量
>
> **Returns**
>
> - 返回聚合后的张量

<details>
<summary>Example</summary>

```python
>>> import torch
>>> tensor = torch.arange(1, 13).view(3, 4)
>>> tensor
tensor([[ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12]])
```

```python
>>> index = torch.LongTensor([[0, 1, 2, 0],
                              [2, 0, 1, 2],
                              [0, 0, 0, 0]])
or
>>> index = torch.tensor([[0, 1, 2, 0],
                          [2, 0, 1, 2],
                          [0, 0, 0, 0]]).long()
```

- dim=0
  以行为单位，按行取值。每行的索引为 index 中的值，数的位置代表列数，聚合成一个新的 tensor

```python
>>> output = torch.gather(tensor, 0, index)
>>> output
tensor([[ 1,  6, 11,  4],
        [ 9,  2,  7, 12],
        [ 1,  2,  3,  4]])
```

取值矩阵

$$
\begin{bmatrix}
   X_{00} & X_{11} & X_{22} & X_{03}\\
   X_{20} & X_{01} & X_{12} & X_{23}\\
   X_{00} & X_{01} & X_{02} & X_{03}
\end{bmatrix}
$$

- dim=1
  以列为单位，按列取值。每列的索引为 index 中的值，位置代表行数，聚合成一个新的 tensor

```python
>>> tensor
tensor([[ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12]])
>>> index
tensor([[0, 1, 2, 0],
        [2, 0, 1, 2],
        [0, 0, 0, 0]])
>>> output = torch.gather(tensor, 1, index)
>>> output
tensor([[ 1,  2,  3,  1],
        [ 7,  5,  6,  7],
        [ 9,  9,  9,  9]])
```

取值矩阵

$$
\begin{bmatrix}
    X_{00} & X_{01} & X_{02} & X_{00}\\
    X_{12} & X_{10} & X_{11} & X_{12}\\
    X_{30} & X_{30} & X_{30} & X_{30}
\end{bmatrix}
$$

</details>

## 5. `.index_add_(dim, index, tensor) → Tensor`

[官方文档](https://pytorch.org/docs/stable/generated/torch.Tensor.index_add_.html#torch.Tensor.index_add_)

在指定的 dim 维度上，按照 index 指定的位置，将 tensor 加到原 tensor 上。

> **Parameters**
>
> - dim (int) – 指定的维度
> - index (LongTensor) – 指定的位置
> - tensor (Tensor) – 要加的 tensor
>
> **Returns**
>
> - 返回加完后的 tensor

<details>
<summary>Example</summary>

```python
>>> import torch
>>> x = torch.ones(5, 3)
tensor([[1., 1., 1.],
        [1., 1., 1.],
        [1., 1., 1.],
        [1., 1., 1.],
        [1., 1., 1.]])
>>> t = torch.tensor([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]], dtype=torch.float)
>>> index = torch.tensor([0, 2, 4, 2])
>>> x.index_add_(0, index, t)
tensor([[ 2.,  3.,  4.],
        [ 1.,  1.,  1.],
        [15., 17., 19.],
        [ 1.,  1.,  1.],
        [ 8.,  9., 10.]])
```

dim=0, index=[0, 2, 4, 2], x.shape[0] = 5

首先找 index 中值为 0 的索引，找`index[j] = 0`, `j = 0`, 找到 t 中第 0 行，将其加到 x 的第 0 行上，即`x[0] = x[0] + t[0] = [1, 1, 1] + [1, 2, 3] = [2, 3, 4]`

然后找 index 中值为 1 的索引，找`index[j] = 1`, 找不到对应的索引`j`，跳过，`x[1]`保持不变

然后找 index 中值为 2 的索引，找`index[j] = 2`, `j = 1, 3`, 找到 t 中第 1, 3 行，将其加到 x 的第 1, 3 行上，即`x[2] = x[2] + t[1] + t[3] = [1, 1, 1] + [4, 5, 6] + [10, 11, 12] = [15, 17, 19]`

然后找 index 中值为 3 的索引，找不到对应的索引`j`，跳过，`x[3]`保持不变

然后找 index 中值为 4 的索引，找`index[j] = 4`, `j = 2`, 找到 t 中第 2 行，将其加到 x 的第 2 行上，即`x[4] = x[4] + t[2] = [1, 1, 1] + [7, 8, 9] = [8, 9, 10]`

</details>

## 6. `.unbind(dim=0) → Tuple[Tensor]`

[官方文档](https://pytorch.org/docs/stable/generated/torch.unbind.html#torch.unbind)

按照指定的维度，将 tensor 拆分成一个元组。

> **Parameters**
>
> - dim (int) – 指定的维度
>
> **Returns**
>
> - 返回一个元组
>
> **Example**
>
> ```python
> >>> x = torch.tensor([[1, 2, 3],
>                       [4, 5, 6],
>                       [7, 8, 9]])
> >>> x.unbind()
> (tensor([1, 2, 3]), tensor([4, 5, 6]), tensor([7, 8, 9]))
> ```

## 7. `.nonzero(as_tuple=False) → LongTensor`

[官方文档](https://pytorch.org/docs/stable/generated/torch.nonzero.html#torch.nonzero)

返回非零元素的索引。

`.nonzero(as_tuple=True)` 等价于 `.nonzero().unbind(1)`

> **Parameters**
>
> - as_tuple (bool) – 如果为 True，返回一个元组，否则返回一个 `2D tensor`
>
> **Returns**
>
> - 返回一个 `2D tensor` 或者一个元组
>
> **Example**
>
> ```python
> >>> torch.nonzero(torch.tensor([1, 1, 1, 0, 1]))
> tensor([[ 0],
>         [ 1],
>         [ 2],
>         [ 4]])
> ```

## 8. `.scatter_(dim, index, src) → Tensor`

[官方文档](https://pytorch.org/docs/stable/generated/torch.Tensor.scatter_.html#torch.Tensor.scatter_)

在指定的 dim 维度上，按照 index 指定的位置，将 src 的值填充到原 tensor 上。

对一个 3-D tensor 来说，`self`值的更新方式为：

```python
self[index[i][j][k]][j][k] = src[i][j][k]  # if dim == 0
self[i][index[i][j][k]][k] = src[i][j][k]  # if dim == 1
self[i][j][index[i][j][k]] = src[i][j][k]  # if dim == 2
```

> **Parameters**
> - dim (int) – 指定的维度
> - index (LongTensor) – 指定的位置
> - src (Tensor) – 要加的 tensor
>
> **Returns**
> - 返回加完后的 tensor
>
> **Example**
>
> ```python
> >>> x = torch.rand(2, 5)
> >>> x
> tensor([[0.7404, 0.0427, 0.6480, 0.3806, 0.8328],
>        [0.7953, 0.2009, 0.9154, 0.6782, 0.9620]])
> >>> torch.zeros(3, 5).scatter_(0, torch.tensor([[0, 1, 2, 0, 0], [2, 0, 0, 1, 2]]), x)
> tensor([[0.7404, 0.2009, 0.9154, 0.3806, 0.8328],
>         [0.0000, 0.0427, 0.0000, 0.6782, 0.0000],
>         [0.7953, 0.0000, 0.6480, 0.0000, 0.9620]])
> ```

上面例子中：

index[0][0]=0, self[index[0][0]][0]=self[0][0]=x[0][0]=0.7404
index[0][1]=1, self[index[0][1]][1]=self[1][1]=x[0][1]=0.0427
index[0][2]=2, self[index[0][2]][2]=self[2][2]=x[0][2]=0.6480
...

## 9. `.scatter_add_(dim, index, src) → Tensor`

[官方文档](https://pytorch.org/docs/stable/generated/torch.Tensor.scatter_add_.html#torch.Tensor.scatter_add_)

在指定的 dim 维度上，按照 index 指定的位置，将 src 的值加到原 tensor 上。

对一个 3-D tensor 来说，`self`值的更新方式为：

```python
self[index[i][j][k]][j][k] += src[i][j][k]  # if dim == 0
self[i][index[i][j][k]][k] += src[i][j][k]  # if dim == 1
self[i][j][index[i][j][k]] += src[i][j][k]  # if dim == 2
```

> **Parameters**
> - dim (int) – 指定的维度
> - index (LongTensor) – 指定的位置
> - src (Tensor) – 要加的 tensor
>
> **Returns**
> - 返回加完后的 tensor
> **Example**
> ```python
> >>> x = torch.rand(2, 5)
> >>> x
> tensor([[0.7404, 0.0427, 0.6480, 0.3806, 0.8328],
>        [0.7953, 0.2009, 0.9154, 0.6782, 0.9620]])
> >>> torch.ones(3, 5).scatter_add_(0, torch.tensor([[0, 1, 2, 0, 0], [2, 0, 0, 1, 2]]), x)
> tensor([[1.7404, 1.2009, 1.9154, 1.3806, 1.8328],
>         [1.0000, 1.0427, 1.0000, 1.6782, 1.0000],
>         [1.7953, 1.0000, 1.6480, 1.0000, 1.9620]])
> ```

上面例子中：

index[0][0]=0, self[index[0][0]][0]=self[0][0]=self.[0][0] + x[0][0]= 1 + 0.7404 = 1.7404
index[0][1]=1, self[index[0][1]][1]=self[1][1]=self.[1][1] + x[0][1]= 1 + 0.0427 = 1.0427
index[0][2]=2, self[index[0][2]][2]=self[2][2]=self.[2][2] + x[0][2]= 1 + 0.6480 = 1.6480




