const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.config.js')
const webpack = require('webpack')

module.exports = merge(common, {
  entry: {
    app: './src/index.js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'src/assets'),
    historyApiFallback: true,
    stats: 'errors-only',
    open: true,
    port: 8040,
    host: "localhost",
    compress: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV_A': JSON.stringify('http://localhost:8040/api/v2/endpoint/'),
      }
    })
  ],
})
