var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: {
        app: [__dirname + "/index.js"]
    },
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js",
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        contentBase: __dirname + "./../",
    }
};