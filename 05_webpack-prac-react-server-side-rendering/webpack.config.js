var path = require('path');

module.exports = {
    entry: {
        'public': './src/index.js',
    },
    module: {
        loaders: [
            {
                // Only run this loader on files with .js exentension
                test: /\.js$/,
                // the loader should only run files in the src directory
                include: path.join(__dirname, '/src'),
                // Tell webpack to run the es2015 transformation on all files 
                // thats has .js exentension (test) and is within the src directory (include)
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public')
    },
    plugins: []
};