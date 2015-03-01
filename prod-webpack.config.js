var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {

    entry: {
        app: "./Scripts/app.js",
    },
    output: {
        path: __dirname + '/build',
        filename: "[name]-[hash].js",
        publicPath: ""
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html'           
        }),
         new ExtractTextPlugin("[name]-[hash].css"),
         new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
          { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
        ]
    }

 
 
}