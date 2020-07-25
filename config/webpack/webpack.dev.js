import { merge } from 'webpack-merge';
import path from 'path';
import common from './webpack.common';

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js',
  },
  devtool: '#sourcemap',
});
