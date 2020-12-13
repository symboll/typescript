const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
  entry: {
    main: './src/index.ts',
    js: './src/index.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [
            [ "@babel/plugin-proposal-decorators",{"legacy": true}],
            '@babel/plugin-proposal-class-properties',
          ]
        }
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'development'? 'inline-source-map': false,
  devServer: {
    contentBase: './dist',
    stats: 'errors-only',
    compress: false,
    host: 'localhost',
    port: 8089
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template/index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/template/js.html',
      filename: 'js.html',
      title: 'javascript',
      chunks: ['js']
    })
  ]  
}