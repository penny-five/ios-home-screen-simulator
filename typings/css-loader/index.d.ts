declare module 'css-loader' {
  import { Plugin } from 'webpack';

  export class CssLoaderPlugin extends Plugin {}

  export class CssLoaderPluginOptions {
    importLoaders: number;
  }
}
