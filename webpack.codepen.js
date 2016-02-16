var path = require('path'),
    webpack = require('webpack'),
    node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
    context: __dirname,
    entry: {
      codepen: path.resolve(__dirname, 'src/main.js'),
      vendors: ['react', 'react-dom', 'marked']
    },
    output: {
        path: './dist/',
        filename: 'codepen.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    plugins:[ new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [node_modules],
                include: [
                  path.resolve(__dirname, "src")
                ],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    }
}
