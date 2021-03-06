const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/components/index.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        
        ],
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
    },
};