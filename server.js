const http = require('http');
const express = require('express');
const app = express();
const path = require('path')

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  stats: {
    colors: true,
  },
  hot:true,
  fileName: webpackConfig.output.fileName,
  publicPath: webpackConfig.output.publicPath,
  //contentBase: path.resolve(__dirname)
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

app.use(express.static(__dirname + '/'));

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});