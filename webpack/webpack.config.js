const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); 
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  mode: 'development',
  entry: path.resolve('client'),
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
    publicPath: '/',
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
      template: '!!raw-loader!' + path.resolve('client', 'index.html'),
      filename: path.resolve('server', 'views', 'index.ejs')
    }),
  ],
  optimization: {
		minimizer: [new UglifyJsPlugin()],
  }
}

const serverConfig = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve('server', 'server.js'),
  output: {
    path: path.resolve('build'),
    filename: 'server_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
				test: /\.scss$/,
				use: [{
					loader: 'css-loader',
					options: {
						exportOnlyLocals: true,
					}
				}, 'sass-loader']
      },
       {
        test: /\.(png|jpg|jpeg|gif|svg|woff)$/,
        loader: 'file-loader',
        options: {
          emitFile: false,
        }
      },
    ]
  }
}
module.exports = [clientConfig, serverConfig];