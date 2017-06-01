"use strict";

const webpack = require('webpack');
const merge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const commonConfig = require('./webpack.config.js');


const config = merge(commonConfig, {
    devtool: 'eval-source-map',
    plugins: [
        new OpenBrowserPlugin(),
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'errors-only',
        // host: options.host || '0.0.0.0';
        // host: options.host, // Defaults to `localhost`
        // port: options.port // Defaults to 8080
    }
})

module.exports = config;