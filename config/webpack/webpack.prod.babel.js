import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { HotModuleReplacementPlugin } from 'webpack';
import path from 'path';
import common from './webpack.common';

module.exports = {
  ...common,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: 'js/bundle.[hash].js',
  },
  plugins: [
    ...common.plugins,
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      common.module.rules[0],
      {
        test: common.module.rules[1].test,
        use: [
          common.module.rules[1].use[0],
          common.module.rules[1].use[1],
          common.module.rules[1].use[2],
        ],
      },
      common.module.rules[2],
    ],
  },
};
