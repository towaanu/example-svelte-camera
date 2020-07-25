const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // entry: path.resolve(__dirname, 'src/main.js'),
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "camcam.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(html|svelte)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader',
                    options: { emitCss: true }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        },
                    },
                    'css-loader',
                ],
            }
        ]
    },
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "style.css" })
    ]
}