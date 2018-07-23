module.exports = {
	resolve: {
		modules: ["src", "node_modules"]
	},
	module: {
		 rules: [{
			 test: /\.scss$/,
			 use: [
				 "css-loader",
				 "sass-loader"
			 ]
		 }]
	 }
}
