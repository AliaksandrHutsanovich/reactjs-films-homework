import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './config/webpack/webpack.dev';

const compiler = webpack(config);
const app = express();
const port = 3000;

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
}));

app.use(webpackHotMiddleware(compiler));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); // eslint-disable-line
