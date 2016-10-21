module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
        {
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
}