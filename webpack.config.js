const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject:'body'
});

module.exports = {

    entry: __dirname + '/app/index.js',

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    output: {
        filename: 'transformed.js',
        path: __dirname + '/dist'
    },

    plugins:[HTMLWebpackPluginConfig],

    devServer: {
        inline:true,
        port: 9002
    },
};