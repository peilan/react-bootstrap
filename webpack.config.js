var path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, './source/index')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './lib'),
    publicPath: '/static',
  },
  devServer: {
    port: 3333,
    contentBase: path.resolve(__dirname),
    inline: true
  },
  devtool: 'source-map',
  module: {
    rules: [{
        test: /\.jsx?$/,
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          query: {
            minimize: true
          }
        }]
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 15000
          }
        }]
      }
    ]
  }
};