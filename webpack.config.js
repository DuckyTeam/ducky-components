/* eslint-env node */
/* eslint-disable no-process-env */
const ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    StatsPlugin = require('stats-webpack-plugin'),
    autoprefixer = require("autoprefixer"),
    cssnext = require("postcss-cssnext"),
    path = require("path"),
    webpack = require("webpack");

const options = {
    entry: [
        path.join(__dirname, 'preview/main.js')
    ],
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: "babel",
                include: [
                    path.resolve(__dirname, "common"),
                    path.resolve(__dirname, "desktop"),
                    path.resolve(__dirname, "preview")
                ],
                query: {
                    presets: ["es2015", "stage-0", "react"],
                    env: {
                        production: {
                            plugins: [
                                "transform-react-constant-elements",
                                "transform-react-inline-elements",
                                "transform-member-expression-literals",
                                "transform-merge-sibling-variables",
                                "transform-minify-booleans",
                                "transform-property-literals",
                                "transform-remove-console",
                                "transform-remove-debugger",
                                "transform-simplify-comparison-operators"
                            ]
                        }
                    }
                }
            },
            {test: /\.json?$/, loader: 'json'},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style',
                    'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
            },
            {
                test: [/\.woff/, /\.eot/, /\.woff2/, /\.ttf/, /\.svg/],
                loader: 'url?limit=20'
            }
        ],
        postcss: [autoprefixer({browsers: ["last 2 versions"]}), cssnext]
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name]-[hash].min.css', {allChunks: true}),
        new webpack.ProvidePlugin({fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch"})
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"],
        root: [
            path.resolve(__dirname, "common"),
            path.resolve(__dirname, "desktop"),
            path.resolve(__dirname, "preview")
        ]
    }
};

if (process.env.NODE_ENV === "production") {
    options.plugins.push(
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("production")}}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );
} else {
    options.entry = [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'preview/main.js')
    ];
    options.cache = true;
    options.debug = true;
    options.devtool = "#eval-source-map";
}
module.exports = options;
