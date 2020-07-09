import { merge } from 'webpack-merge';

import baseConfig from './webpack/base';

const config = merge(
  baseConfig,
  process.env.NODE_ENV === 'production'
    ? require('./webpack/production')
    : require('./webpack/development')
);

export default config;
