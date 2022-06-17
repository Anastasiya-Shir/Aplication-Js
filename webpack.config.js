const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,
  entry: {
    search: './src/search.js',
    history: './src/history.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {



    rules: [
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],

      },


      {
        test: /\.(scss|css)$/,
        use: [ExtractTextPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },

      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: ExtractTextPlugin.loader,
      //       options: {
      //         // you can specify a publicPath here
      //         // by default it uses publicPath in webpackOptions.output
      //         publicPath: " ",
      //       },
      //     },
      //     "css-loader",
      //   ],
      // },

      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },



      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({

      template: path.resolve(__dirname, './src/search.html'), // template file
      filename: 'index.html', // output file
      chunks: ['search'],
    }),


    new HtmlWebpackPlugin({

      template: path.resolve(__dirname, './src/history.html'), // template file
      filename: 'history.html', // output file
      chunks: ['history']
    }),
    new ExtractTextPlugin({
      filename: "[name].css",
      experimentalUseImportModule: true,
      chunkFilename: "[id].css",
      ignoreOrder: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),

    new CopyPlugin({
      patterns: [
        { from: 'src/img', to: 'img' },

      ]
    }),
  ]


};


  // plugins: [

  // ]
