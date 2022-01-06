# 入口 （entry）

## 单个入口的配置语法

用法：`entry:strinf|[string]`
webpack.config.js

```javascript
module.exports = {
    entry: './path/to/my/entry/file.js',
};
```

`entry` 属性单个入口语法 webpack.config.js

```javascript
module.exports = {
    entry: {
        main: './path/to/my/entry/file.js',
    },
};
```

我们也可以将一个文件路径数组传递给 entry 属性，这将创建一个所谓的 "multi-main entry"。 在你想要一次注入多个依赖文件，并且将它们的依赖关系绘制在一个 "chunk" 中时，这种方式就很有用。
webpack.config.js

```javascript
module.exports = {
    entry: ['./src/file_1.js', './src/file_2.js'],
    output: {
        filename: 'bundle.js',
    },
};
```

当你希望通过一个入口（例如一个库）为应用程序或工具快速设置 webpack 配置时，单一入口的语法方式是不错的选择。 然而，使用这种语法方式来扩展或调整配置的灵活性不大。

## 对象语法

用法：`entry:{<entryChunkName> string|[string]}|{}`
webpack.config.js

```javascript
module.exports={
    entry:{
        app:'./src/app.js',
        adminApp:'./src/adminApp.js',
    },
}
```
虽然对象语法会比较的繁琐，但是这是应用程序中定义入口最可扩展的方式。

## 描述入口对象

用于描述入口对象。你可以使用一下属性：
- dependOn:当前入口所依赖的入口。它必须在该入口加载前加载。
- filename:指定要输出文件的名称。
- import：启动时要加载的模块。
- library：指定library选项，为当前entry构建一个library。
- runtime：chunk运行时的名称。如果设置了，就会创建一个新的运行时chunk。在 webpack 5.43.0 之后可将其设为 false 以避免一个新的运行时 chunk。
- publicPath：当该入口输出文件在浏览器中被引用，为它们指定一个公共的URL地址。
webpack.config.js

```javascript
module.exports={
    entry:{
        a2:'dependingFile.js',
        b2:{
            dependOn:a2,
            improt:'./app/index.js',
        }
    }
}
```

runtime 和 dependOn不应同时出现在同一个entry使用，所以下面的配置会失效，并且抛出错误。
webpack.config.js

```javascript
modele.exports={
    entry:{
        a2:'./a',
        b2:{
            runtime:'x2',
            dependOn:a2,
            improt:'/b'
        }
    }
}
```

确保 runtime 不能指向已存在的入口名称，例如下面配置会抛出一个错误：

```javascript
module.exports = {
  entry: {
    a1: './a',
    b1: {
      runtime: 'a1',
      import: './b',
    },
  },
};
```

dependOn不能循环引用，下面的例子会出现错误：

```javascript
module.exports = {
  entry: {
    a3: {
      import: './a',
      dependOn: 'b3',
    },
    b3: {
      import: './b',
      dependOn: 'a3',
    },
  },
};
```

## 常见的场景
以下列出一些入口的配置，以及它们的实际用例。

###分类app（应用程序）和vendor（第三方库）入口
webpack.config.js

```javascript
module.exports={
    entry:{
        main:'./src/app.js',
        vendor:'./src/vendor.js',
    },
    output:{
        filename:'[name].[contenthash].bundle.js'
    }
}
```
###这是为什么？
**_这样你就可以在 vendor.js 中存入未做修改的必要 library 或文件（例如 Bootstrap, jQuery, 图片等），然后将它们打包在一起成为单独的 chunk。
内容哈希保持不变，这使浏览器可以独立地缓存它们，从而减少了加载时间。_**





