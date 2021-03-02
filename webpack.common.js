const path = require('path');

module.exports = {
	entry: './src/index.js',
	devServer: {
		port: 3000,
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
				test: /\.(gif|jpg|png|jpeg|)$/,
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
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
				  {
					loader: 'file-loader',
					options: {
					  name: '[name].[ext]',
					  outputPath: 'fonts'
					}
				  }
				]
			  }
		]
	},
	plugins: [


	],
	externals: {
		// global app config object
		config: JSON.stringify({
			apiUrl: 'http://localhost:5001'
		})
	}
};