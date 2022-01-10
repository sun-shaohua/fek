# output

可以通过配置output选项，告知webpack如何向磁盘写入编译文件。注意，即使可以存在多个entry起点，但是只能指定一个output配置。

## 用法

在webpack配置中，output的最低要求是，将它的值设置为对象，然后将输出文件名配置为一个output.filename:
webpack.config.js
```javascript
module.exports = {
  output: {
    filename: 'bundle.js',
  },
};
```
此配置将一个单独的 bundle.js 文件输出到 dist 目录中。

## 多个入口起点

如果配置中创建出多于一个 "chunk"（例如，使用多个入口起点或使用像 CommonsChunkPlugin 这样的插件），则应该使用 占位符(substitutions) 来确保每个文件具有唯一的名称。
```javascript
module.exports = {
    entry: {
        app: './src/app.js',
        search: './src/search.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
};

// 写入到硬盘：./dist/app.js, ./dist/search.js
```

## 高级进阶

以下是对资源使用 CDN 和 hash 的复杂示例：
config.js

```javascript
module.exports = {
  //...
  output: {
    path: '/home/proj/cdn/assets/[fullhash]',
    publicPath: 'https://cdn.example.com/assets/[fullhash]/',
  },
};
```
如果在编译时，不知道最终输出文件的 publicPath 是什么地址，则可以将其留空，并且在运行时通过入口起点文件中的 __webpack_public_path__ 动态设置。

```javascript
__webpack_public_path__ = myRuntimePublicPath;
```
