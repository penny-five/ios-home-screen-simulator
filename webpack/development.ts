import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    inline: true,
    hot: true,
    overlay: true,
    stats: 'minimal',
    port: 8080
  },
  plugins: [new FriendlyErrorsWebpackPlugin()]
};

module.exports = config;
