const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); 

const clientConfig = {
  mode: 'development',
  entry: path.resolve('client'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('build'),
  },
  module: { rules: [
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff)$/,
      loader: 'file-loader',
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }
  ]},
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
    }),
  ],
  optimization: {
		minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
  }
}

module.exports = [clientConfig];