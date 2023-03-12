const path = require('path')

module.exports = {
    mode: 'production',
    entry: './main.ts',                     // <-- You may change: The main TS file
    output: {
        filename: 'app.min.js',             // <-- You may change: The result file
        path: path.join(__dirname, 'dist')  // <-- You may change: The folder location of the result file
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}