
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')
const path =require('path')


module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
})
