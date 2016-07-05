var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    'vendor':[
        'config/rAF.js',
        'core-js/client/shim.js',
        'zone.js/dist/zone.js',
        'reflect-metadata/Reflect.js',
        'systemjs/dist/system-register-only.js',
        '@angular/core/index.js',
        'ionic-angular/index.js',
        'angularfire2/angularfire2.js',
        'firebase/firebase.js'
    ],
    'main': './app/main.ts'
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
    modulesDirectories:['node_modules','app']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      },
      { test: /\.scss$/, loaders: ['style','css','postcss','sass?sourceMap']},
      { test: /\.woff(2)?(\?v=.+)?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=dist/fonts/[hash].[ext]" },
      { test: /\.(ttf|eot|svg)(\?v=.+)?$/, loader: 'file?name=dist/fonts/[hash].[ext]' }
    ]
  },
  sassLoader:{
    includePaths:[
      path.resolve(__dirname,"./node_modules/ionic-angular"),
      path.resolve(__dirname,"./node_modules/ionicons/dist/scss/")
    ]
  },
  plugins: [
  ]
}