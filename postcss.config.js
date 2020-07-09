/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');

const config = {
  plugins: [autoprefixer(), tailwindcss()]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(cssnano());
}

module.exports = config;
