var webpack = require("webpack");
var webpackBase = require("./webpack.config.base.js");

var cfg = Object.assign(webpackBase, {
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    inline: true,
    proxy: {
      '/mock/*': {
        target: 'http://localhost:5000',
        secure: false
      }
    }
  },
});

module.exports = cfg;