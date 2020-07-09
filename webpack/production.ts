import * as path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.bundle.js'
  },
  plugins: [new CleanWebpackPlugin(), new TerserWebpackPlugin()]
};

module.exports = config;
