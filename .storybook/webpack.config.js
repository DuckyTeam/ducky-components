// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')

module.exports = {
  plugins: [
    // your custom plugins
  ],
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
};
