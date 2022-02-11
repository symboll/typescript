
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')
const path =require('path')


module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    host: 'localhost',
    port: 8089
  },
})
