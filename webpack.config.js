var webpack = require("webpack");

module.exports = {
  entry: {
    'vendor':[
        './app//vendor/rAF.js',
        './node_modules/core-js/client/shim.js',
        './node_modules/zone.js/dist/zone.js',
        './node_modules/reflect-metadata/Reflect.js',
        './node_modules/systemjs/dist/system-register-only.js',
        './node_modules/@angular/core/index.js',
        './node_modules/ionic-angular/index.js',
        './node_modules/ionic-native/dist/index.js'
    ],
    'main': './app/main.ts'
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
  ]
}