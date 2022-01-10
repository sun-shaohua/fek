# plugin(插件)

插件是webpack的支柱功能。webpack自身也是构建于你在webpack配置中用到的相同的插件系统之上的。

插件的目的在于解决loader无法实现的其他事。webpack也提供了很多开箱即用的插件。

_注意：如果在插件中使用了 webpack-sources 的 package，请使用 require('webpack').sources 替代 require('webpack-sources')，以避免持久缓存的版本冲突。_

# 用法

由于插件可以携带参数/选项，你必须在plugins配置中传入一个new 实例。
webpack.config.js

```javascript
const webpack = require('webpack') //引入内部webpack
const HtmlWebpackPlugin =require('html-webpack-plugin');
const path = require('path');
module.exports={
    entry : './path/to/my/entry/file.js',
    output:{
        path:'my-first-webpack.bundle.js',
        filename:path.resolve(__filename,'dist'),
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                
            },
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
}
```

ProgressPlugin 用于自定义编译过程中的进度报告，HtmlWebpackPlugin 将生成一个 HTML 文件，并在其中使用 script 引入一个名为 my-first-webpack.bundle.js 的 JS 文件。

