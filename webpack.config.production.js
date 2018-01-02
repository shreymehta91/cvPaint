const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');
const CompressionPlugin = require('compression-webpack-plugin');

webpackConfig.plugins = [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
    	drop_console: true,
		screw_ie8: true,
		conditionals: true,
		unused: true,
		comparisons: true,
		dead_code: true,
		if_return: true,
		join_vars: true,
		warnings: false
    }), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks 
    new CompressionPlugin({ 
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ];

module.exports =  webpackConfig;