const path = require('path');
const os = require('os');

const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'electron-main',

    externals: [nodeExternals()],

    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: {
        index: path.resolve(__dirname, 'src', 'index.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },

    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                loader: 'awesome-typescript-loader',
            },
        ],
    },
    plugins: [
        new Dotenv(),
        new FriendlyErrorsWebpackPlugin(),
        new TsConfigPathsPlugin(),
        new CheckerPlugin(),
        new CopyPlugin({ patterns: ['preloadStuff.js'] }),
    ],
};
