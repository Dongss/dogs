var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entry = ['./src/main.js'];

const ENV = process.env.NODE_ENV || 'local';
var entry = {
    main: './src/main.js',
    post: './src/post.js'
};
var buildPath, htmlFilename;

if (ENV === 'production') {
    buildPath = 'dogs/dist/';
    htmlFilename = '../index.html';
} else {
    buildPath = "dist/";
    htmlFilename = '../index.html';
}

var plugins = [
	new ExtractTextPlugin('[name].style.css'),
    new HtmlWebpackPlugin({
        filename: htmlFilename,
        template: 'src/index.html',
        favicon: 'src/assets/img/favicon.ico',
        inject: false,
        cache: true
    }),
];

module.exports = {
	entry: entry,
	output:  {
        path: buildPath,
		filename: '[name].build.js'
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
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
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
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
        }]		
	},
	vue: {
		loaders: {
            css: ExtractTextPlugin.extract("css"),
            sass: ExtractTextPlugin.extract("css!sass")
		}
	},	
	resolve: {
		extension: ['', '.js']
	},
	node: {
  		fs: 'empty'
	},	
	plugins: plugins
};
