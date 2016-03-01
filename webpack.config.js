var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entry = ['./src/main.js'];
var buildPath = '/dist/';

var plugins = [
	new ExtractTextPlugin('style.css'),
	new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
];

module.exports = {
	entry: entry,
	output:  {
		path: path.join(__dirname, buildPath),
		filename: 'build.js'
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue',
			query: {
				css: ExtractTextPlugin.extract("css")
			}
		}, { 
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: "babel-loader",
			query: {
				presets: ['es2015', 'stage-0'],
        		plugins: ['transform-runtime']
			}
		}, { 
			test: /\.css$/, 
			loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
		}, { 
			test: /\.md$/, 
			loader: "html!markdown" 
		}, {
            test: /\.(jpg|png|gif)$/,
            loader: "file-loader?name=images/[hash].[ext]"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }],
	},
	resolve: {
		extension: ['', '.js']
	},
	node: {
  		fs: 'empty'
	},	
	plugins: plugins
};