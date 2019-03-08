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
        enforce: 'pre',
        test: /\.(ts?)|(tsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
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
    new webpack.HotModuleReplacementPlugin(),
    // 把类型检查和webpack打包分开来
    new ForkTsCheckerWebpackPlugin({
      async: false,
      watch: '../client',
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      tslint: path.resolve(__dirname, '../tslint.json')
    })
  ]
};

module.exports = config;
