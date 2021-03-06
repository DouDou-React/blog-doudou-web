module.exports = [
    {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-modules-typescript-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: "[local]__[hash:base64:10]",
                    }
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    includePaths: ['src/styles']
                    // sassOptions: {
                    //     indentWidth: 4,
                    //     includePaths: ['src/styles']
                    // }
                }
            }
        ]
    }
]