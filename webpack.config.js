var webpack = require('webpack');
var path = require('path');
module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'app'),
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader'
      },
      {
        test: /(\.css)$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};
