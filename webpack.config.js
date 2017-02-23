var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: {
    app: [ 'react-hot-loader/patch', 
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', 
      path.resolve(__dirname, './source/index')
    ],
    vendor:[
      'react',
      'react-bootstrap',
      'react-dom'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './lib'),
    publicPath: '/static/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]'
            }
          }
        ]
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            query: {
              minimize: true
            }
          }
        ]
      }, {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 15000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  ],
  stats: "errors-only"
};