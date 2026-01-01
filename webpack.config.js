const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.wasm'],
    // Avoid resolving the package.json "browser" field into broken aliases
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.wasm$/,
        // Emit .wasm as a separate file so it can be fetched at runtime.
        // Importing a wasm file will return the URL to that emitted asset.
        type: 'asset/resource'
      }
    ]
  },
  experiments: {
    asyncWebAssembly: true
  },
  performance: {
    hints: false
  }
};
