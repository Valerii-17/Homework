const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/script.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template: "./src/index.html"})],



    devServer: {client: {
            overlay: {
                warnings: false,
                errors: true,
            },
        },
        static: path.join(__dirname, 'build'),
        port: 3000,
        open: true,
    },
};