var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {

    entry: {
        app: "./Scripts/app.js",
    },
    output: {
        path: __dirname + '/build',
        filename: "[name].js",
        publicPath: "/build/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html'           
        }),
         new ExtractTextPlugin("[name].css")
    ],
    module: {
        loaders: [
          { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
           {
               test: /\.js$/,
               loader: "source-map-loader"
           }
        ]
    }, devtool: "#source-map"

}