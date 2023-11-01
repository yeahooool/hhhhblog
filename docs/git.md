# git 教程

--- written by hfhuang 2023-05-18 ---

<!-- TOC -->

- [初始化](#%E5%88%9D%E5%A7%8B%E5%8C%96)
- [添加文件](#%E6%B7%BB%E5%8A%A0%E6%96%87%E4%BB%B6)
- [状态追踪](#%E7%8A%B6%E6%80%81%E8%BF%BD%E8%B8%AA)
- [版本回退](#%E7%89%88%E6%9C%AC%E5%9B%9E%E9%80%80)
- [撤销修改](#%E6%92%A4%E9%94%80%E4%BF%AE%E6%94%B9)
- [关联远程仓库](#%E5%85%B3%E8%81%94%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93)
  - [添加 ssh key 到 GitHub](#%E6%B7%BB%E5%8A%A0-ssh-key-%E5%88%B0-github)
  - [添加远程库（本地仓库上传到 GitHub）](#%E6%B7%BB%E5%8A%A0%E8%BF%9C%E7%A8%8B%E5%BA%93%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93%E4%B8%8A%E4%BC%A0%E5%88%B0-github)
  - [删除远程库](#%E5%88%A0%E9%99%A4%E8%BF%9C%E7%A8%8B%E5%BA%93)
  - [从远程库克隆（现有远程库，克隆到本地）](#%E4%BB%8E%E8%BF%9C%E7%A8%8B%E5%BA%93%E5%85%8B%E9%9A%86%E7%8E%B0%E6%9C%89%E8%BF%9C%E7%A8%8B%E5%BA%93%E5%85%8B%E9%9A%86%E5%88%B0%E6%9C%AC%E5%9C%B0)
- [分支管理](#%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86)
  - [创建与合并分支](#%E5%88%9B%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6%E5%88%86%E6%94%AF)
  - [解决冲突](#%E8%A7%A3%E5%86%B3%E5%86%B2%E7%AA%81)
  - [Bug 分支](#bug-%E5%88%86%E6%94%AF)
- [多人协作](#%E5%A4%9A%E4%BA%BA%E5%8D%8F%E4%BD%9C)
  - [推送分支](#%E6%8E%A8%E9%80%81%E5%88%86%E6%94%AF)
  - [抓取分支](#%E6%8A%93%E5%8F%96%E5%88%86%E6%94%AF)
- [标签管理](#%E6%A0%87%E7%AD%BE%E7%AE%A1%E7%90%86)
  - [创建标签](#%E5%88%9B%E5%BB%BA%E6%A0%87%E7%AD%BE)
  - [操作标签](#%E6%93%8D%E4%BD%9C%E6%A0%87%E7%AD%BE)
- [Git fork](#git-fork)
  - [fork 操作](#fork-%E6%93%8D%E4%BD%9C)

<!-- /TOC -->

## 初始化

某个目录下创建 git 库，首先通过`git init`命令把这个目录变成 Git 可以管理的仓库：

```shell
$ git init
Initialized empty Git repository in /data/home/hfhuang/test/5-git/.git/
```

初始化完成后目录下存在`.git`隐藏目录，可通过`ls -a`查看.

## 添加文件

目录下新建文件`readme.txt`,并使用`git add`命令将文件添加到仓库的**暂存区**：

```shell
$ git add readme.txt
```

然后，使用`git commit`命令把暂存区的所有内容提交到**当前分支**：

```shell
$ git commit -m "wrote a readme file"
[master (root-commit) 93656e6] wrote a readme file
 1 file changed, 1 insertion(+)
 create mode 100644 readme.txt
```

**注：**`git add`后可以添加多个文件，如`git add 1.txt 2.txt ...`，也可以使用`git add .`添加当前目录下所有文件。

## 状态追踪

1. 修改`readme.txt`文件，使用`git status`命令查看仓库当前状态：

```shell
$ git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   readme.txt
#
no changes added to commit (use "git add" and/or "git commit -a")
```

通过`git status`命令，可以追踪到仓库中`readme.txt`文件被修改过，但还没有添加和提交到仓库中。

2. 另外可以通过`git diff`命令查看文件具体修改了什么内容：

```shell
$ git diff readme.txt 或 git diff
diff --git a/readme.txt b/readme.txt
index 7898192..5652252 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1 +1,3 @@
 a
+just test
+yes
```

可以从上面的命令输出看到，我们在第一行添加了两行内容。

3. 再次添加文件：

```shell
$ git add readme.txt
```

再次执行`git status`命令：

```shell
$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       modified:   readme.txt
#
```

可以从输出看到，`readme.txt`文件已经添加到仓库中，但还没有提交。

4. 提交文件：

```shell
$ git commit -m "add 2 line"
[master 63e5530] add 2 line
 1 file changed, 2 insertions(+)
```

## 版本回退

如果`readme.txt`文件修改错误，想要回退到上一个版本，可以使用`git log`命令查看提交历史：

```shell
$ git log
commit 63e55304dc71504048f023939f6a39073dc78adc
Author: yeahoool <a471101014@gmail.com>
Date:   Tue May 16 14:32:40 2023 +0800

    add 2 line

commit 93656e6e01dcfc5b0361752c6719ea182a42fae5
Author: yeahoool <a471101014@gmail.com>
Date:   Tue May 16 14:15:57 2023 +0800

    wrote a readme file
```

如果嫌输出信息太多，加上`--pretty=oneline`参数：

```shell
git log --pretty=oneline
63e55304dc71504048f023939f6a39073dc78adc add 2 line
93656e6e01dcfc5b0361752c6719ea182a42fae5 wrote a readme file
```

从上面的输出可以看到，每次提交都有一个唯一的`commit id`,比如`63e55304...`，通过`git reset`命令可以回退到上一个版本：

```powershell
$ git reset --hard HEAD^
HEAD is now at 93656e6 wrote a readme file
```

在 Git 中，用`HEAD`表示当前版本，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上 100 个版本写 100 个`^`比较容易数不过来，所以写成`HEAD~100`。
此时版本已经回退到上一个版本，这里是`wrote a readme file`版本。再次使用`git log`命令查看提交历史：

```shell
$ git log
commit 93656e6e01dcfc5b0361752c6719ea182a42fae5
Author: yeahoool <a471101014@gmail.com>
Date:   Tue May 16 14:15:57 2023 +0800

    wrote a readme file
```

输出的结果显示刚才第二次提交的版本已经没有了，如果需要找回可以通过刚才对应的`commit id`找回,并到 id 对应的版本中：

```shell
$ git reset --hard 63e55
HEAD is now at 63e5530 add 2 line
```

这里的`63e55`是`63e55304dc71504048f023939f6a39073dc78adc`的简写，只要能够保证唯一性即可。

**注：** Git 提供了一个`git reflog`命令用来记录你的每一次命令的改变，可以找到对应的 id 及版本信息。

```shell
$ git reflog
63e5530 HEAD@{0}: reset: moving to 63e55
93656e6 HEAD@{1}: reset: moving to HEAD^
63e5530 HEAD@{2}: commit: add 2 line
93656e6 HEAD@{3}: commit (initial): wrote a readme file
```

## 撤销修改

1. 修改`readme.txt`文件，使用`git status`命令查看仓库当前状态：

```shell
$ git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   readme.txt
#
no changes added to commit (use "git add" and/or "git commit -a")
```

输出中的`git checkout -- readme.txt`命令可以**丢弃工作区**的修改,把`readme.txt`文件在工作区的修改全部撤销，这里有两种情况：

- 一种是`readme.txt`自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

- 一种是`readme.txt`已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。

**注：**`git reset`命令既可以回退版本，也可以把**暂存区**的修改回退到工作区。当我们用 HEAD 时，表示最新的版本:`git reset HEAD <file>`。

## 关联远程仓库

检查本机是否有 ssh key 设置

```shell
$ cd ~/.ssh
```

再看看这个目录下有没有`id_rsa`和`id_rsa.pub`这两个文件,如果有直接跳到下一步，如果没有执行下面的命令：

```shell
$ ssh-keygen -t rsa -C "youremail@example.com"  # 建议填写自己真实有效的邮箱地址
Generating public/private rsa key pair.
Enter file in which to save the key (/public/home/hfhuang/.ssh/id_rsa): # 不填直接回车
Enter passphrase (empty for no passphrase): # 输入密码（可以为空）
Enter same passphrase again: # 再次确认密码（可以为空）
Your identification has been saved in /public/home/hfhuang/.ssh/id_rsa.
# 生成的id_rsa文件为密钥，不能泄露
Your public key has been saved in /public/home/hfhuang/.ssh/id_rsa.pub.
# 生成的id_rsa.pub公钥,可以告诉别人
...
```

**注：** 可生成 ssh key 自定义名称的密钥，默认`id_rsa`。

### 添加 ssh key 到 GitHub

1. 登录 GitHub 账号；点击右上角账号头像的“▼”→Settings→SSH and GPG kyes→New SSH key。

2. 复制`id_rsa.pub`文件里的公钥内容。

3. Title 自定义，将公钥内容粘贴到 Key 输入框，最后“Add Key”。

### 添加远程库（本地仓库上传到 GitHub）

本地仓库与远程库关联，在本地目录下使用以下命令直接与远程库关联：

```shell
$ git remote add origin git@github.com:xxxx/test.git (SSH地址)
```

xxxx 为 GitHub 账号名，test 为仓库名。

添加后，远程库的名字就是`origin`.

下一步，就可以把本地库的所有内容推送到远程库上：

```shell
$ git push -u origin master
Counting objects: 6, done.
Delta compression using up to 28 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (6/6), 439 bytes | 0 bytes/s, done.
Total 6 (delta 0), reused 0 (delta 0)
remote: To git@github.com:yeahooool/learngit.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.
```

把本地库的内容推送到远程，用`git push`命令，实际上是把当前分支`master`推送到远程。

由于远程库是空的，我们**第一次推送**`master`分支时，加上了`-u`参数，Git 不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令。

---

从现在起，只要本地作了提交，就可以通过以下命令，把本地 `master` 分支的最新修改推送至 GitHub：

```shell
$ git push origin master
```

### 删除远程库

如果添加的时候地址写错了，或者就是想删除远程库，可以用`git remote rm <name>`命令。

使用前，建议先用`git remote -v`查看远程库信息：

```shell
$ git remote -v
origin  git@github.com:yeahooool/learngit.git (fetch)
origin  git@github.com:yeahooool/learngit.git (push)
```

然后，根据名字删除，比如删除`origin`：

```shell
$ git remote rm origin
```

**注：** 仅删除关联，不会删除远程库。

### 从远程库克隆（现有远程库，克隆到本地）

直接从远程库克隆，可以跳过 `git init`。从远程库克隆时，使用`git clone`命令：

```shell
$ git clone git@github.com:yeahooool/learngit.git
Cloning into 'learngit'...
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 9 (delta 0), reused 6 (delta 0), pack-reused 0
Receiving objects: 100% (9/9), done.
```

Git 支持多种协议，默认的 git://使用 ssh，但也可以使用 https 等其他协议。

**NOTE：如果有多个人协作开发，那么每个人各自从远程克隆一份就可以了。**

## 分支管理

默认只有`master`分支，`HEAD`指向当前所在的分支。

### 创建与合并分支

1. 创建`dev`分支：

```shell
$ git checkout -b dev
Switched to a new branch 'dev'
```

`git checkout`命令加上`-b`参数表示创建并切换，相当于以下两条命令：

```shell
$ git branch dev
$ git checkout dev
Switched to branch 'dev'
```

`git branch`命令查看当前分支：

```shell
$ git branch
* dev
  master
```

`*`号表示当前分支。

或`git status`命令查看当前分支：

```shell
$ git status
On branch dev
nothing to commit, working tree clean
```

2. 在`dev`分支上做修改，然后提交：

```shell
$ git add .
$ git commit -m 'branch dev'
[dev a4f5588] branch dev
 1 file changed, 2 insertions(+)
```

3. 切换回`master`分支：

```shell
$ git checkout master
Switched to branch 'master'
```

4. `git merge`命令用于合并指定分支(`dev`)到当前分支(上一步切换回了`master`分支)：

```shell
$ git merge dev
Updating c67e99d..a4f5588
Fast-forward
 test | 2 ++
 1 file changed, 2 insertions(+)
```

合并完成后可以删除`dev`分支：

```shell
$ git branch -d dev
Deleted branch dev (was a4f5588).
```

### 解决冲突

切换的分支`dev`，修改文件并提交：

```shell
$ git checkout -b test
Switched to a new branch 'test'

$ git add .
$ git commit -m 'and simple'
[test 003b983] and simple
 1 file changed, 1 insertion(+)
```

切换回`master`分支：

```shell
$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
```

Git 提示我们当前 `master` 分支比远程的 `master` 分支要超前 1 个提交。

在`master`分支上修改文件并提交：

```shell
$ git add .
$ git commit -m 'master branch revise'
[master 5782f9d] master branch revise
 1 file changed, 1 insertion(+)
```

此时，`master`分支和`test`分支各自都有新的提交，但这两个分支的最新提交是没有任何关系的，无法进行快速合并。

用`git merge`试图合并`test`分支到`master`分支：

```shell
$ git merge test
Auto-merging test
CONFLICT (content): Merge conflict in test
Automatic merge failed; fix conflicts and then commit the result.
```

合并有冲突，需要手动解决，可以通过`git status`查看。

```shell
$ git status
# On branch master
# Your branch is ahead of 'origin/master' by 2 commits.
#   (use "git push" to publish your local commits)
#
# You have unmerged paths.
#   (fix conflicts and run "git commit")
#
# Unmerged paths:
#   (use "git add <file>..." to mark resolution)
#
#       both modified:      test
#
no changes added to commit (use "git add" and/or "git commit -a")
```

输出信息告诉我们，`test`文件存在冲突，必须手动解决冲突后再提交。

打开`test`文件，会看到类似如下内容：

```shell
$ more test
test for git clone
Creating a new branch is quick.
<<<<<<< HEAD
Creating a new branch is quick & simple.
=======
Creating a new branch is quick AND simple.
>>>>>>> test
```

Git 用`<<<<<<<`，`=======`，`>>>>>>>`标记出不同分支的内容，手动修改好后，再提交：

```shell
$ git add .
$ git commit -m "conflict fixed"
[master 365bc09] conflict fixed
```

结合`git log`可以看到分支的合并情况：

```shell
$ git log --graph --pretty=oneline --abbrev-commit
*   365bc09 conflict fixed
|\
| * 003b983 and simple
* | 5782f9d master branch revise
|/
* a4f5588 branch dev
* c67e99d Create test
* 63e5530 add 2 line
* 93656e6 wrote a readme file
```

### Bug 分支

适用于当前某个分支上的工作还没完成，但是需要切换到其他分支上修复 bug。

1. 暂存分支：

```shell
$ git add .
$ git stash
Saved working directory and index state WIP on test: 003b983 and simple
HEAD is now at 003b983 and simple
```

2. 切换到其他分支修复 bug：

```shell
$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 4 commits.
  (use "git push" to publish your local commits)
```

3. 修复 bug 后恢复之前暂存的分支：

```shell
$ git checkout test
Switched to branch 'test'
$ git stash list
stash@{0}: WIP on test: 003b983 and simple
$ git stash apply stash@{0}
# On branch test
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       new file:   bug.txt
#
```

`git stash list`可以查看暂存的分支上工作区的内容。`git stash apply ...`命令用于恢复指定的`stash`，但是恢复后，`stash`内容并不删除，需要用`git stash drop`来删除。

## 多人协作

当你从远程仓库克隆时，实际上 Git 自动把本地的 `master` 分支和远程的 `master` 分支对应起来了，并且，远程仓库的默认名称是 `origin`。

要查看远程库的信息，用 `git remote`：

```shell
$ git remote
origin
```

或者，用 `git remote -v` 显示更详细的信息：

```shell
$ git remote -v
origin  git@github.com:yeahooool/learngit.git (fetch)
origin  git@github.com:yeahooool/learngit.git (push)
```

### 推送分支

推送分支，就是把该分支上的所有本地提交推送到远程库。推送时，要指定本地分支，这样，Git 就会把该分支推送到远程库对应的远程分支上：

```shell
$ git push origin master
Counting objects: 12, done.
Delta compression using up to 28 threads.
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 967 bytes | 0 bytes/s, done.
Total 10 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), done.
To git@github.com:yeahooool/learngit.git
   c67e99d..365bc09  master -> master
```

如果要推送其他分支，比如 `dev`，就改成：

```shell
$ git push origin dev
```

### 抓取分支

多人协作时，直接从远程仓库克隆是最简单的方式。但是，默认情况下，只能看到本地的 `master` 分支。要在 `dev` 分支上开发，就必须创建远程 `origin` 的 `dev` 分支到本地。

```shell
$ git branch
* master
```

当想从远程仓库里拉取一条本地不存在的分支时，以下命令将会自动创建一个新的本地分支，并与指定的远程分支关联起来：

```shell
$ git checkout -b dev origin/dev
fatal: Cannot update paths and switch to branch 'dev' at the same time.
Did you intend to checkout 'origin/dev' which can not be resolved as commit?
```

如果出现以上错误，可以使用`git fetch`命令来拉取远程分支：

```shell
$ git fetch
From github.com:yeahooool/learngit
 * [new branch]      dev        -> origin/dev
 * [new branch]      test       -> origin/test
```

然后再次执行`git checkout -b dev origin/dev`命令关联指定的远程分支：

```shell
$ git checkout -b dev origin/dev
Branch dev set up to track remote branch dev from origin.
Switched to a new branch 'dev'
```

现在，就可以在本地`dev`分支上进行修改，并使用`git push origin dev`推送到远程仓库的`dev`分支上。

---

如果其他人也向 `origin/dev` 分支推送了他的提交，而碰巧你也对**同样的文件**作了修改，并试图推送：

```shell
$ git push origin dev
To git@github.com:yeahooool/learngit.git
 ! [rejected]        dev -> dev (fetch first)
error: failed to push some refs to 'git@github.com:yeahooool/learngit.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first merge the remote changes (e.g.,
hint: 'git pull') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

此时推送失败，因为你的本地分支和远程分支都是基于同一个提交的，如果要推送，必须先把远程分支的提交拉取(`git pull`)下来，然后在本地分支上合并，解决冲突后再推送。

```shell
$ git pull
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From github.com:yeahooool/learngit
   5e772af..630b4c9  dev        -> origin/dev
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> dev
```

根据输出信息，使用`git pull`直接拉取失败，因为当前分支和远程分支没有建立联系，使用`git branch --set-upstream-to=origin/<branch> dev`命令建立联系后再次拉取：

```shell
$ git branch --set-upstream-to=origin/dev dev
Branch dev set up to track remote branch dev from origin.
```

再次拉取：

```shell
$ git pull
Auto-merging dev.txt
CONFLICT (add/add): Merge conflict in dev.txt
Automatic merge failed; fix conflicts and then commit the result.
```

`git pull`成功，但是合并有冲突，需要手动解决，解决后，提交，再`git push`。

同样通过`git status`可以查看当前分支的状态：

```shell
$ git status
# On branch dev
# Your branch and 'origin/dev' have diverged,
# and have 1 and 1 different commit each, respectively.
#   (use "git pull" to merge the remote branch into yours)
#
# You have unmerged paths.
#   (fix conflicts and run "git commit")
#
# Unmerged paths:
#   (use "git add <file>..." to mark resolution)
#
#       both added:         dev.txt
#
no changes added to commit (use "git add" and/or "git commit -a")
```

直接打开`dev.txt`文件，会发现里面多了一些特殊符号，这些符号表示冲突的地方，手动修改后再次提交即可。

## 标签管理

### 创建标签

在需要打标签的分支上，使用`git tag <tagname>`命令即可打一个新标签：

```shell
$ git tag version-0.1

$ git tag
version-0.1
```

默认标签是打在最新提交的 commit 上的。如果要对历史提交打标签，需要找到历史提交的 commit id，然后使用`git tag <tagname> <commit id>`命令：

```shell
$ git log --pretty=oneline --abbrev-commit
5e772af bug branch test
003b983 and simple
a4f5588 branch dev
c67e99d Create test
63e5530 add 2 line
93656e6 wrote a readme file

$ git tag version-demo 93656e6

$ git tag
version-0.1
version-demo
```

使用`git tag`可以查看所有标签，使用`git show <tagname>`查看标签具体信息：

```shell
$ git show version-demo
commit 93656e6e01dcfc5b0361752c6719ea182a42fae5
Author: yeahoool <a471101014@gmail.com>
Date:   Tue May 16 14:15:57 2023 +0800

    wrote a readme file

diff --git a/readme.txt b/readme.txt
new file mode 100644
index 0000000..7898192
--- /dev/null
+++ b/readme.txt
@@ -0,0 +1 @@
+a
```

还可以创建带有说明的标签，用`-a`指定标签名，`-m`指定说明文字：

```shell
$ git tag -a version-0.05 -m 'add test' 63e5530

$ git show version-0.05
tag version-0.05
Tagger: yeahoool <a471101014@gmail.com>
Date:   Thu May 18 11:58:16 2023 +0800

add test

commit 63e55304dc71504048f023939f6a39073dc78adc
Author: yeahoool <a471101014@gmail.com>
Date:   Tue May 16 14:32:40 2023 +0800

    add 2 line

diff --git a/readme.txt b/readme.txt
index 7898192..5652252 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1 +1,3 @@
 a
+just test
+yes
```

### 操作标签

删除标签：

```shell
$ git tag -d version-0.1
Deleted tag 'version-0.1' (was 5e772af)
```

使用`git push origin <tagname>`命令推送标签到远程：

```shell
$ git tag -d version-0.1
Deleted tag 'version-0.1' (was 5e772af)
(base) [hfhuang@login learngit]$ git push origin version-0.05
Counting objects: 1, done.
Writing objects: 100% (1/1), 162 bytes | 0 bytes/s, done.
Total 1 (delta 0), reused 0 (delta 0)
remote: To git@github.com:yeahooool/learngit.git
 * [new tag]         version-0.05 -> version-0.05
```

一次性推送全部尚未推送到远程的本地标签：

```shell
$ git push origin --tags
Total 0 (delta 0), reused 0 (delta 0)
remote: To git@github.com:yeahooool/learngit.git
 * [new tag]         version-demo -> version-demo
```

如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除，然后再从远程删除。删除命令是`git push origin :refs/tags/<tagname>`：

```shell
$ git tag -d version-demo
Deleted tag 'version-demo' (was 93656e6)

$ git push origin :refs/tags/version-demo
To git@github.com:yeahooool/learngit.git
 - [deleted]         version-demo
```

## Git fork

Git 中 Fork 即是远程仓库的克隆，包含了原来的仓库（即 upstream repository，上游仓库）所有内容，如分支、Tag、提交。

适用于团队协作开发，每个人都可以从远程仓库 fork 一份到自己的仓库，然后在自己的仓库中进行开发，最后再提交到远程仓库。

### fork 操作

1. 在 github 上找到需要 fork 的仓库，点击右上角的 fork 按钮即可。
   ![p9fdcCt.png](https://s1.ax1x.com/2023/05/18/p9fdcCt.png)

2. fork 完成后，会跳转到自己的仓库。然后 clone 仓库的项目，并添加远程项目路径。

```shell
$ git clone git@github.com:yeahooool/PWmatMLFF.git (自己仓库地址)
Cloning into 'PWmatMLFF'...
remote: Enumerating objects: 1166, done.
remote: Counting objects: 100% (214/214), done.
remote: Compressing objects: 100% (125/125), done.
remote: Total 1166 (delta 112), reused 140 (delta 78), pack-reused 952
Receiving objects: 100% (1166/1166), 1012.25 KiB | 298.00 KiB/s, done.
Resolving deltas: 100% (710/710), done.
```

此时使用`git remote -v`查看远程仓库，会发现只有自己的仓库地址，没有上游仓库地址。

```shell
$ git remote -v
origin  git@github.com:yeahooool/PWmatMLFF.git (fetch)
origin  git@github.com:yeahooool/PWmatMLFF.git (push)
```

3. 添加上游仓库地址

```shell
$ git remote add upstream git@github.com:LonxunQuantum/PWmatMLFF.git (被fork的仓库地址)
```

upstream 是上游仓库的默认名称，可以自己定义。

此时再次查看远程仓库，会发现多了上游仓库地址。

```shell
$ git remote -v
origin  git@github.com:yeahooool/PWmatMLFF.git (fetch)
origin  git@github.com:yeahooool/PWmatMLFF.git (push)
upstream        git@github.com:LonxunQuantum/PWmatMLFF.git (fetch)
upstream        git@github.com:LonxunQuantum/PWmatMLFF.git (push)
```

4. **每次需要更新代码前，先从上游仓库拉取最新的代码**。

```shell
$ git pull upstream
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 8 (delta 1), reused 8 (delta 1), pack-reused 0
Unpacking objects: 100% (8/8), done.
From github.com:LonxunQuantum/PWmatMLFF
 * [new branch]      main       -> upstream/main
 * [new branch]      master     -> upstream/master
You asked to pull from the remote 'upstream', but did not specify
a branch. Because this is not the default configured remote
for your current branch, you must specify a branch on the command line.
```

该输出表示主仓库有两个分支，一个是 `main`，一个是 `master`，需要指定拉取哪个分支的代码。

```shell
$ git pull upstream master
From github.com:LonxunQuantum/PWmatMLFF
 * branch            master     -> FETCH_HEAD
Already up-to-date.
```

5. 将更新后的代码推送到自己的仓库

```shell
$ git add .
$ git commit -m "update"
$ git push origin master
```

6. 回到 github，点击`New pull request`，发起一个主仓库的合并请求。

---

参考资料：
[Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600/900375748016320)
[本地项目同步 github](https://blog.csdn.net/Hunt_bo/article/details/89047662)
[Windows 下配置 Git 连接上 github](https://blog.csdn.net/qq_45583787/article/details/126882580)
[图文详解如何利用 Git+Github 进行团队协作开发](https://zhuanlan.zhihu.com/p/23478654)
[Git 冲突](https://blog.csdn.net/DDD4V/article/details/118896307)
[基于 fork 的 git 常规操作](https://www.imyangyong.com/blog/2019/06/git/%E5%9F%BA%E4%BA%8Efork%E7%9A%84git%E5%B8%B8%E8%A7%84%E6%93%8D%E4%BD%9C/)
[Git fork 项目后如何同步原项目的更新](https://www.cnblogs.com/kevingrace/p/5690241.html)
