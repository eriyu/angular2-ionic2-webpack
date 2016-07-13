var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.ts', '.css', '.scss'],
    modulesDirectories:['node_modules','app']
  },
  entry: {
    'polyfills':[
      'polyfills/rAF.js',
      'core-js/client/shim.js',
      'zone.js/dist/zone.js',
      'reflect-metadata/Reflect.js'
    ],
    'vendor':[
      'systemjs/dist/system-register-only.js',
      '@angular/core/index.js',
      'ionic-angular/index.js',
      'angularfire2/angularfire2.js',
      'firebase/firebase.js'      
    ],
    'app': ['webpack/hot/dev-server','main.ts']
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: ['raw-loader']
      },
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass?sourceMap")},
      { test: /\.woff(2)?(\?v=.+)?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]" },
      { test: /\.(ttf|eot|svg)(\?v=.+)?$/, loader: 'file?name=fonts/[hash].[ext]' },
      {
        test:/\.(png|jpg|jpeg|gif)$/,
        loader:"url?limit=1024&name=images/[name].[ext]"
      }
    ]
  },
  sassLoader:{
    includePaths:[
      path.resolve(__dirname,"./node_modules/ionic-angular"),
      path.resolve(__dirname,"./node_modules/ionicons/dist/scss/")
    ]
  },
  plugins: [
    //new CleanWebpackPlugin(['dist'], {}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills'], minChunks: Infinity }),
    new ExtractTextPlugin("styles.css")
  ]
}