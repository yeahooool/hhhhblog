---
slug: pack and base64
title: 环境、代码打包和base64编码
authors: hf
tags: [python]
---

作用场景：

将已有虚拟环境和完整的代码包打包成一个文件，然后使用 base64 编码。然后可以移植到其他离线的机器上，解码后可以直接使用。

<!-- truncate -->

## 1. 环境打包

```bash
conda pack -n env_name
```

这将会创建一个名为`env_name.tar.gz`的文件，里面包含了虚拟环境的所有内容。

## 2. 代码打包

假设代码在一个名为`code_folder`的文件夹中，可以使用如下命令打包：

```bash
tar -czf package.tar.gz env_name.tar.gz code_folder
```

## 3. base64 编码

```bash
base64 package.tar.gz > package.tar.gz.base64
```

:::note
base64 编码后的文件会变大 33% 左右。
:::

## 4. base64 解码

创建一个用于移植的自解压脚本，将上述生成的 base64 编码的 tar 文件和安装脚本(bash)命令放在一起，然后在离线机器上执行安装脚本即可。

```bash
#!/bin/bash
BASE_DIR=$(pwd)
TEMP_DIR=$(mktemp -d)
FINAL_DIR=$BASE_DIR/PWMLFF-March2024
ENV_DIR=$FINAL_DIR/env
ARCHIVE=$(base64 -d <<'EOF'
...base64 encoded tar file...
EOF
)
pushd $TEMP_DIR
echo "$ARCHIVE" > archive.tar.gz
tar -xvzf archive.tar.gz
tar -xvzf env_name.tar.gz -C $ENV_DIR
popd
mv $TEMP_DIR/code_folder $FINAL_DIR
rm -rf $TEMP_DIR
```

其中需要将`...base64 encoded tar file...`替换为实际的`package.tar.gz.base64`文件的内容。

:::note
TEMP_DIR 是一个临时目录，用于解压缩文件。解压后的文件会被移动到`FINAL_DIR`目录下。
:::

## 5. 其他

### 5.1 分割和合并

如果`package.tar.gz.base64`文件太大，可以使用`split`命令将其分割成多个小文件，然后在解码时再合并。

```bash
split -b 100m package.tar.gz.base64 package.tar.gz.base64.
```

```bash
cat package.tar.gz.base64.* > package.tar.gz.base64
```

### 5.2 外部文件

如果`package.tar.gz.base64`文件太大，将其直接嵌入到脚本中可能会导致一些内存问题，另外一种移植方式是将直接导入外部文件。但是这样需要在解码时将`package.tar.gz.base64`文件放在同一目录下，这样做就没有了自解压的优势。

```bash
#!/bin/bash
BASE_DIR=$(pwd)
TEMP_DIR=$(mktemp -d)
FINAL_DIR=$BASE_DIR/PWMLFF-March2024
ENV_DIR=$FINAL_DIR/env
mkdir -p $FINAL_DIR
mkdir -p $ENV_DIR
pushd $TEMP_DIR
base64 -d $BASE_DIR/package.tar.gz.base64 > archive.tar.gz
tar -xvzf archive.tar.gz
tar -xvzf env_name.tar.gz -C $ENV_DIR
popd
mv $TEMP_DIR/code_folder $FINAL_DIR
rm -rf $TEMP_DIR
```

### 5.3 自解压的 Shell 脚本

如果目标是将所有内容都封装在一个文件中，以便于在其他机器上进行编译和安装，但是由于文件大小的问题，无法直接将 base64 编码的文件内容嵌入到脚本中，那么可以考虑使用一种不同的方法：创建一个自解压的 shell 脚本。

这种脚本在开始部分包含了 shell 命令，然后在后面附带了二进制数据。当运行这个脚本时，它会先执行 shell 命令，然后将二进制数据解压到一个临时目录，然后再执行其他步骤。

例如：

```bash
#!/bin/bash
# The next line will skip to the binary data
SKIP=`awk '/^__ARCHIVE_BELOW__/ { print NR + 1; exit 0; }' $0`
# Extract the binary data and decode it
tail -n+$SKIP $0 | base64 -d > package.tar.gz
# Now you can extract the tar file and do your stuff
BASE_DIR=$(pwd)
TEMP_DIR=$(mktemp -d)
FINAL_DIR=$BASE_DIR/PWMLFF-March2024
ENV_DIR=$FINAL_DIR/env
mkdir -p $FINAL_DIR
mkdir -p $ENV_DIR
pushd $TEMP_DIR
tar -xvzf $BASE_DIR/package.tar.gz -C .
tar -xvzf env.tar.gz -C $ENV_DIR
popd
mv $TEMP_DIR/PWMLFF $FINAL_DIR
source $ENV_DIR/bin/activate
cd $FINAL_DIR/PWMLFF/src
sh build.sh
rm -rf $TEMP_DIR
# Exit the script
exit 0
# The binary data starts here
__ARCHIVE_BELOW__
```

这个脚本包含了一个特殊的标记`__ARCHIVE_BELOW__`，需要将 base64 编码的文件内容放在这个标记之后。

因为`package.tar.gz.base64`文件太大，直接使用`cat`命令将 `package.tar.gz.base64` 的内容附加到脚本的末尾。

```bash
cat package.tar.gz.base64 >> pwmlff.sh
```

:::note

1. 这个脚本可能会消耗大量的内存，因为它需要将整个 `package.tar.gz.base64` 文件的内容加载到内存中。如果文件非常大，这可能会导致问题。
2. 激活打包的环境命令`source $ENV_DIR/bin/activate`。卸载环境命令`source $ENV_DIR/bin/deactivate`。
3. 假设`build.sh`是一个编译脚本，那么编译所需要的库仍需要提前安装和配置。如 intel,cuda 等。
   :::
