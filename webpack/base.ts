import * as path from 'path';

import { CssLoaderPluginOptions } from 'css-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Options as TsLoaderPluginOptions } from 'ts-loader';
import { VueLoaderPlugin } from 'vue-loader';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src/index.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            configFile: path.resolve(__dirname, '../tsconfig.app.json')
          } as TsLoaderPluginOptions
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(post)?css$/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            } as MiniCssExtractPlugin.PluginOptions
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            } as CssLoaderPluginOptions
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../assets/index.html'),
      title: 'iOS Home Screen Simulator'
    })
  ]
};

export default config;
