const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
  target: 'web',
  entry: {
    index: './src/index.ts',
    ts: './src/example/index.ts',
    js: './src/js_example/index.js'
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "index.html",
      chunks: ['index'],
      favicon: './public/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      template: './src/example/index.html',
      filename: 'ts.html',
      chunks: ['ts'],
      favicon: './public/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      template: './src/js_example/index.html',
      filename: 'js.html',
      chunks: ['js'],
      favicon: './public/favicon.ico'
    }),
    new CleanWebpackPlugin()
  ]  
}

