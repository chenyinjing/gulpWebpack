var HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
  // 入口
  entry: helpers.root('') + '/index.ts',
  // 输出的文件名
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
  },
  // 添加我们的插件 会自动生成一个html文件
  plugins: [new HtmlWebpackPlugin({
    template: helpers.root('') + '/index.html', //'../index.html'
  }),
    /**
     * Plugin: ContextReplacementPlugin
     * Description: Provides context to Angular's use of System.import
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
     * See: https://github.com/angular/angular/issues/11580
     */
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src') // location of your src
    ),
  ],
  resolve: {
    /*
     * An array of extensions that should be used to resolve modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
     */
    extensions: ['', '.ts', '.js', '.css', '.scss', '.json'],
  },
  module: {
    loaders: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      {test: /\.ts$/, loader: 'ts-loader'},
      { test: /\.pug$/, loader: 'pug-ng-html' },
      {test: /\.less$/, loaders: ["raw-loader", "less-loader"]},
      {test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=25000'}
    ]
  }
};