const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.css$/,
        use: [
            { loader: "style-loader" },
            { loader: "file-loader" }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, },
          { loader: 'css-loader', options: {sourceMap: true } },// translates CSS into CommonJS
          { loader: 'less-loader', options: {sourceMap: true } }, // compiles Less to CSS
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|json)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/',
            }
          }]
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' // url-loader is a must to be able to import bootstrap, font-awesome from node_modules folder!
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "Customer Service",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin(['assets'], {
      root: path.join(__dirname, './dist/')
    })
  ]
};


// var src = path.join(__dirname, '..', '..', 'src')
// var fs = require('fs')
// if (fs.existsSync(src)) {
//   module.exports.resolve = { alias: { 'react-router-redux': src } }
//   module.exports.module.loaders.push({
//     test: /\.js$/,
//     loaders: ['babel'],
//     include: src
//   });
// }