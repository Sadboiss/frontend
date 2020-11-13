const path = require('path');

module.exports = {
	entry: './src/index.js',
	devServer: {
		port: 3001,
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				options: {
					presets: ['@babel/preset-env', '@babel/react']
				}
			},
			{
				test: /\.(gif|svg|jpg|png|jpeg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "imgs"
					}
				}
			},
			{
				test: /\.html$/,
				use: ["html-loader"]
			}
		]
	},
	plugins: [
		

	],
	externals: {
		// global app config object
		config: JSON.stringify({
			apiUrl: 'http://localhost:5000'
		})
	}
};