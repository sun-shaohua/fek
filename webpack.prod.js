const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx", ".scss", ".css"]
    },
    module: {
        rules: [
            {test: /\.(ts|tsx)$/, use: "ts-loader"},
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['css-loader','style-loader']
            }, {
                test: /\.css$/,
                use: ['css-loader','style-loader']
            },
            {
                test: /\.(png|jpg|gif|md)$/,
                use: ['url-loader?limit=8192']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `${__dirname}/build/index.html`,
        })
    ]
}
