var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

module.exports = {

	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/index'
	],

	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/dist/'),
		pathinfo: true,
		publicPath: '/dist/'
	},

	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin()
	],

	resolve: {
		extensions: ['', '.jsx', '.js', '.json'],
		modulesDirectories: ['src', 'node_modules']
	},

	devtool: 'eval',

	module: {
		loaders: [{
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&minetype=application/font-woff"
		}, {
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&minetype=application/font-woff2"
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&minetype=application/octet-stream"
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: "file"
		}, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&minetype=image/svg+xml"
		}, {
			test: /\.js$/,
			loaders: ['react-hot', 'babel-loader?optional[]=runtime&stage=0&plugins=jsx-control-statements/babel'],
			exclude: /node_modules/
		}, {
			test: /\.less$/,
			loader: "css!postcss-loader!less"
		}, {
			test: /\.(jpg)|(gif)|(png)$/,
			loader: "file"
		}]
	},
	postcss: function() {
		return [autoprefixer, csswring];
	}
};
