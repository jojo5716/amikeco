const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const DashboardPlugin = require('webpack-dashboard/plugin');

const ajax_mocks = require('./mocks/devserver/');

const ENTRY_POINTS = {
    index: ['./example']
};
// Output config
const OUTPUT_CONFIG = {
    // A filename pattern for the output files
    filename: '[name].js',
    // An absolute path to the desired output directory.
    path: path.resolve(__dirname, 'example/__dist__'),
    publicPath: '/__dist__/'
};

const PLUGINS = [
    new DashboardPlugin(),
];
module.exports = merge(common, {
    mode: 'development',
    entry: ENTRY_POINTS,
    output: OUTPUT_CONFIG,
    plugins: PLUGINS,
    resolve: {
        alias: {
            // we want to generate roi-core-libs build just once in commons.js
            //'roi-core-libs': path.resolve(path.join(__dirname, '../../', 'node_modules', 'roi-core-libs')),
        },
    },
    devServer: {
        contentBase: './example',
        port: 8080,
        open: false,
        before: ajax_mocks,
        historyApiFallback: true,  // To response for any path in the url
    },
    devtool: 'source-map'
});
