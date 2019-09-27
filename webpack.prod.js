const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const common = require('./webpack.common.js');

const reactExternal = {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
};

const reactDOMExternal = {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
};

const momentExternal = {
    root: 'moment',
    commonjs2: 'moment',
    commonjs: 'moment',
    amd: 'moment'
}

const ENTRY_POINTS = {
    index: ['./src/index.js']
};

const OUTPUT_CONFIG = {
    // An absolute path to the desired output directory.
    path: path.resolve(__dirname, 'dist/'),

    // A filename pattern for the output files
    filename: '[name].js',

    // IMPORTANT!: This is the name of the global variable exported in browsers
    // Change it for the name you want your component to have as window.NAME
    library: 'Amikeco',

    libraryTarget: 'umd'
};

const OPTIMIZATION = {
    splitChunks: {
        minSize: 30000,
        maxInitialRequests: 50,
        maxAsyncRequests: 50,
        minChunks: 1,
    }
};

module.exports = merge(common, {
    mode: 'production',
    entry: ENTRY_POINTS,
    output: OUTPUT_CONFIG,
    plugins: [
        new webpack.DefinePlugin({
            // removes a lot of debugging code in React
            'process.env': {
                BROWSER: true,
                VERSION: JSON.stringify(packageJSON.version)
            }
        }),
        new webpack.ContextReplacementPlugin(
            /moment[\/\\]locale$/,
            /en|es|ca|de|it|nl|fr|pt|ru|sv|zh|ja|da|ar|id|ko|ms|no|tl|th|tr|vi/
        ),
        new webpack.optimize.AggressiveMergingPlugin(),

        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
    ],
    optimization: OPTIMIZATION,
    externals: {
        'react': reactExternal,
        'react-dom': reactDOMExternal,
        'moment': momentExternal,
    }
});
