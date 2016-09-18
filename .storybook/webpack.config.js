// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')

module.exports = function(storybookBaseConfig, configType) {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.loaders = storybookBaseConfig.module.loaders.concat([
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
  ]);

  storybookBaseConfig.entry.preview = [path.resolve('src', 'icons.css')].concat(storybookBaseConfig.entry.preview);

  // Return the altered config
  return storybookBaseConfig;
};
