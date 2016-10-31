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
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
      },    
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1'
        ]
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc.js'
  },
  postcss: function () {
    return [
      require('autoprefixer')({ browsers: ['last 2 versions'] })
    ];
  },
  plugins: [
    new ExtractTextPlugin('../css/bundle.css')
  ]
};