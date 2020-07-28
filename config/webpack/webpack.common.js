import HtmlWebpackPlugin from 'html-webpack-plugin';

import path from 'path';

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/html/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src/index.jsx',
  plugins: [
    htmlPlugin,
  ],
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                ['transform-class-properties', { spec: true }],
                ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
              ],
            },
          },
        ],
      }, {
        test: /\.s[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};