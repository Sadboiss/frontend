const common = require("./webpack.common");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require("webpack-merge");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: "main.[contentHash].js",
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.scss|css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contentHash].css',
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			}
		}),
	],
	externals: {
		// global app config object
		config: JSON.stringify({
			apiUrl: 'http://localhost:5000'
		})
	}
});