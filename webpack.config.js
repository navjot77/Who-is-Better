var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require('webpack');

const config = {
    entry: [
        'babel-polyfill',
        './app/main.js'
        ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main_bundle.js',
        publicPath: "/"
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/main.html'
        })
    ]
};
if(process.env.NODE_ENV === 'production'){

    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()

    );


}

module.exports=config;