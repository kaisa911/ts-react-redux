const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageObj = require('../package.json');

const publicPath = '/';

const config = {
  entry: {
    index: path.join(__dirname, '../client/Root.tsx')
  },
  output: {
    path: path.join(__dirname, '../dist'), // 文件的存放路径
    publicPath,
    filename: '[name].[hash:8].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', path.resolve(__dirname, 'client')],
    alias: {
      client: path.resolve(__dirname, 'client/')
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    compress: true,
    clientLogLevel: 'none',
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'minimal',
    disableHostCheck: true,
    proxy: {}
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.html',
      filename: 'index.html',
      templateParameters: {
        title: packageObj.name,
        environment: 'dev'
      },
      inject: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
