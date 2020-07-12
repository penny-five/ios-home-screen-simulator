/* eslint-disable @typescript-eslint/no-var-requires */
const cssnano = require('cssnano');
const presetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');

const config = {
  plugins: [
    presetEnv({
      stage: 2,
      features: {
        'nesting-rules': true
      }
    }),
    tailwindcss()
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(cssnano());
}

module.exports = config;
