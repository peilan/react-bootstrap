const path = require('path');
const webpack = require('webpack')
module.exports = {
  entry: {
    app: [ 
      'react-hot-loader/patch', 
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', 
      path.resolve(__dirname, './source/index')
    ],
    vendor:[
      'react',
      'react-bootstrap',
      'react-dom',
      'react-hot-loader'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './lib'),
    publicPath: '/lib/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude:path.resolve(__dirname, 'node_modules')
      }, {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'bootstrap.min.css'),
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'vendor.js',
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: ['vendor.js']
    }),
  ]
};