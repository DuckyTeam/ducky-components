/* eslint-env node */
/* eslint-disable no-process-env */
const HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require("path");


const options = {
    entry: [
        path.join(__dirname, 'preview/main.js')
    ],
    devtool: 'eval-source-map',
    devServer: {
        port: 3005
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: "babel",
                include: [
                    path.resolve("src"),
                    path.resolve("preview")
                ],
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
            },
            {
                test: [/\.woff/, /\.eot/, /\.woff2/, /\.ttf/, /\.svg/],
                loader: 'url?limit=20'
            }
        ]
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'preview/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        })
    ]
};

module.exports = options;
