const path = require('path')

module.exports = {
	mode: 'development',
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, 'public')
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 3000,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env", "stage-0", "react"]
					}
				}
			},
			{
				test: /\.jpg$/,
				use: [
					{loader: "url-loader"},
					{loader: "file-loader"}
				]
			}						
		]
	}
}