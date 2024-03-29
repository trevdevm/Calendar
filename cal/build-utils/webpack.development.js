const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = () => ({
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    devServer: {
        port: 3789
    },
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
                use: ["style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }]
            },
            {
                test: [/\.jp?g$/, /\.png$/],
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 5000,
                            esModule: false,
                            publicPath: "/"
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: "[name].js",
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
});