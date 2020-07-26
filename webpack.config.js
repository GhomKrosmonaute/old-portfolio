const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC = path.resolve( __dirname, 'src' );
const DIST = path.resolve( __dirname, 'dist' );

module.exports = {
  entry: {
    'main': 'src/index.ts'
  },
  
  output: {
    filename: 'index.min.js',
    path: DIST
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.png"
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'src/images/**/*', to: "dist/images"
      }]
    })
  ],
  
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      SRC,
      'node_modules'
    ]
  },
  
  module: {
    rules: [
      /****************
       * PRE-LOADERS
       *****************/
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'tslint-loader'
      },
      
      /****************
       * LOADERS
       *****************/
      {
        test: /\.ts$/i,
        exclude: [ /node_modules/ ],
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader'],
      },
      {
        test: /\.(?:png|svg|jpg|ttf|gif)$/i,
        use: 'file-loader'
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
      }
    ]
  },
  
  devtool: 'cheap-module-source-map',
  devServer: {}
};