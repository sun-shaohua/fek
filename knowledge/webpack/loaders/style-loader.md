# style-loader

为了javaScript模块中 import 一个css文件，需要在module中配置style-module和css-module

# 如何将css和js文件分离

需要 style-loader，css-loader，MiniCssExtractPlugin.loader，其中需要注意顺序问题
首先css-loader编译成css
其次MiniCssExtractPlugin.loader分开打包css文件
最终用style-loader将css加载到界面上

```javascript
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
    entry:{
        'a':[psth.resolve(__dirname,'assets/source/js/a.js')]
    },
    output:{
        path: path.resolve(__dirname, 'assets/dist/js'),
        filename: '[name]-buddle.js'
    },
    module:{
        rules:[
            {test: /\.css$/,
                use:["style-loader",MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] }
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "../css/[name]-buddle.css"
        })
    ]
}
```
vertical
horizontal
