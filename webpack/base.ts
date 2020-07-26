import * as path from 'path';

import { CssLoaderPluginOptions } from 'css-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Options as TsLoaderOptions } from 'ts-loader';
import { VueLoaderPlugin } from 'vue-loader';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src/index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsxSuffixTo: [/.vue$/]
            } as TsLoaderOptions
          }
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.(post)?css$/,
        exclude: /node_modules/,
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
      },
      {
        test: /\.(png|jpe?g|woff|woff2|eot|ttf|otf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@assets': path.resolve(__dirname, '../assets'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@composables': path.resolve(__dirname, '../src/composables')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../assets/index.html'),
      title: 'iOS Home Screen Simulator'
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ]
};

export default config;
