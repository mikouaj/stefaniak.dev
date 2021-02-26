const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/js/main.js'
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "../"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/html', to: '.' },
        { from: 'src/assets', to: 'assets' },
      ]
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: 'assets/fonts',
            }
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
      },
    ]
  },
};