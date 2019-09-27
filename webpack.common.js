const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const JS_RULES = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: {
        test: /node_modules/,
    }
};

const CSS_RULES = {
    test: /\.css$/,
    use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } }
    ]
};

const LESS_RULES = {
    test: /\.less$/,
    use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } },
        {
            loader: 'less-loader',
            options: {
                javascriptEnabled: true,
                strictMath: true,
                noIeCompat: true,
                sourceMap: true
            }
        }
    ]
};

const IMAGES_RULES = {
    test: /\.(png|gif|jpg)/,
    use: {
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: '[name].[ext]'
        }
    }
};

const SVG_RULES = {
    test: /\.(svg)/,
    use: [
        {
            loader: "babel-loader"
        },
        {
            loader: '@svgr/webpack',
        }
    ]
};

module.exports = {
    module: {
        rules: [
            JS_RULES,
            CSS_RULES,
            LESS_RULES,
            IMAGES_RULES,
            SVG_RULES
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new DuplicatePackageCheckerPlugin()
    ],
    devtool: 'source-map',
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src/'),
            '@constants': path.resolve(__dirname, 'src/constants/'),
            '@core': path.resolve(__dirname, 'src/core/'),
            '@containers': path.resolve(__dirname, 'containers/'),
            '@api': path.resolve(__dirname, 'src/core/api/'),
        },
    },
};
