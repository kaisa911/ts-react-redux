'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageObj = require('../package.json');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

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
      {
        test: /\.(ts?)|(tsx?)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          transpileOnly: true
        }
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
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
    new webpack.HotModuleReplacementPlugin(),
    // 创建一个在编译时可以配置的全局常量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // 把类型检查和webpack编译分开来
    new ForkTsCheckerWebpackPlugin({
      async: false,
      watch: '../client',
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      tslint: path.resolve(__dirname, '../tslint.json')
    })
  ]
};

module.exports = config;
