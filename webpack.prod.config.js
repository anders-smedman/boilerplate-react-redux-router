const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.config.js')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV_A': JSON.stringify('http://localhost:8000/api/v2/merchant_pages/'),
      }
    }),
    new CopyWebpackPlugin([{
      //Note:- No wildcard is specified hence will copy all files and folders
      from: 'src/assets/locales', //Will resolve to RepoDir/src/assets 
      to: 'locales' //Copies all files from above dest to dist/assets
    },
    // {
    //   from: 'src/assets/svg', //Will resolve to RepoDir/src/assets 
    //   to: 'svg' //Copies all files from above dest to dist/assets
    //   },
    {
      from: 'src/assets/favicon.ico', //Will resolve to RepoDir/src/assets 
      to: 'favicon.ico' //Copies all files from above dest to dist/assets
    },
  ]),
  ],
})