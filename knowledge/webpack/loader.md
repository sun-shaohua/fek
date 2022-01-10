# loader

loader用于对模块的源代码进行转化。loader可以使你在使用import或者load（加载）模块时预处理文件。
因此loader类似与其他的构建工具里的task，并且提供了处理前端构建步骤的得力方式。
loader可以使文件从不同的语言（typeScript）转化为javaScript，或者将内联的图片转化为data URL。
loader甚至可以让你直接在javaScript模块中 import css文件

## 示例
你可以使用loader告诉webpack加载css文件，或者typeScript转化为javaScript，为此应该首先安装loader
>npm install --save-dev css-loader ts-loader

然后指示 webpack 对每个 .css 使用 css-loader，以及对所有 .ts 文件使用 ts-loader：
webpack.config.js
```javascript
module.exports={
    module:{
        rulers:[
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
        ]
    }
}
```


## 使用loader

你在应用程序中有两种使用方式：
- 配置方式（推荐）：在webpack.config.js文件中指定loader。
- 内联方式： 在每个import中显示指定loader。

### 配置方式

module.rules允许你在webpack中配置中指定多个loader。这种方式是展示loader的一种简明的方式，并且有助于代码变得简洁和易于维护，
同时让你对loader有个全局的概览
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // [sass-loader](/loaders/sass-loader)
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};

```
