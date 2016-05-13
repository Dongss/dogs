# dogs

[个人博客 Dogs Blog](http://dongss.cn/)

## 新建和编辑文章

[文章 markdown 源文件](https://github.com/Dongss/dogs/tree/master/posts)

### 新增文章

在 dogs/map.js 中添加文章信息， 在对应分类的文件夹下创建 markdown 文件， 例如 100.md;

编辑完成后执行 `node build.js 100`

### 修改文章

找到对应 markdown 文件，例如 100.md， 修改，执行 `node build.js 100`

### 提交修改

dogs (submodule)目录下：提交修改至 gh-pages 分支；

根目录下： 提交修改至 master 分支。
