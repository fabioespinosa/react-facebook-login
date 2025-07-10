var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    'with-button': ['./src/facebook-with-button.js'],
    'render-props': ['./src/facebook.js'],
  },

  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { 
        test: /\.scss$/, 
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
    ],
  },

  externals: {
    'react': 'react',
    'react-dom': 'ReactDOM',
  },

  output: {
    path: require('path').resolve(__dirname, 'dist'),
    filename: 'facebook-login-[name].js',
    libraryTarget: 'umd',
    library: 'FacebookLogin',
    globalObject: 'this',
  },

  resolve: {
    extensions: ['.js'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
};
