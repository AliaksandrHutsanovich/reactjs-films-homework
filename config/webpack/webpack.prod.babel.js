import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      common.module.rules[0],
      {
        test: common.module.rules[1].test,
        use: [
          common.module.rules[1].use[0],
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/src',
            },
          },
          common.module.rules[1].use[1],
          common.module.rules[1].use[2],
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
        },
      },
    ],
  },
};
