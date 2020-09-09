const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const CompressWebpack = require("compression-webpack-plugin");
//const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = () => ({
    name: "portFront",
    entry: "./src/index.js",
    target: "web",

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [{
                    loader: "html-loader",
                    options: {
                        attributes: false
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1
                    }
                }]
            },
            {
                test: [/\.(jp?g|png)$/i],
                use: [{
                    loader: "file-loader",
                    options: {
                        publicPath: "",
                        name: "[name].[ext]",
                        esModule: false,
                    }
                }]
            }
        ]
    },
    output: {
        filename: "[id].bundle.js",
        publicPath: ""
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            publicPath: ""
        }),
        new CompressWebpack({
            exclude: [/\.html$/i, /\.json$/i]
        })
    ]
})