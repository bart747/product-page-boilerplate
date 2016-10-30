var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./js/entry.js",
  output: {
    path: "./js/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/
      },
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?importLoaders=1',
          'postcss-loader')
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
      // You could also use other loaders the same way. I. e. the autoprefixer-loader
    ]
  },
  eslint: {
    configFile: './.eslintrc.js'
  },
  postcss: function () {
    return [
      require('postcss-smart-import')({ /* ...options */ }),
      require('precss')({ /* ...options */ }),
      require('autoprefixer')({ /* ...options */ })
    ];
  },
  plugins: [
    new ExtractTextPlugin("../css/bundle.css")
  ]
};