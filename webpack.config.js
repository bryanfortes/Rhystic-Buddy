const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry : "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: "/",
    },
    module:{
        rules: [
            { test: /\.(js|jsx)$/, use: "babel-loader"},
            {test:  /\.css$/, use: ["style-loader", "css-loader", 'postcss-loader']}
        ]
    },
    resolve: {
        extensions:[".jsx", "..."]
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
    ],
    devServer: {
        historyApiFallback: true,
    }
}