const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './src',
    compress: true,
    port: 8080,
    host: 'localhost',
    bonjour: true
  },
  resolve: {
    modules: ['./node_modules'],
    extensions: ['*', '.js', '.scss', '.html', 'css'],
    alias: {
        js: path.resolve(__dirname, 'src/js'),
        scss: path.resolve(__dirname, 'src/scss'),
        css: path.resolve(__dirname, 'src/css'),
        html: path.resolve(__dirname, 'src/html'),
        assets: path.resolve(__dirname, 'src/assets')
    }
},
  module: {
    rules: [{
      test: /\.(html)$/,
      use:  {
        loader: 'html-loader',
        options: {
          minimize: true,
          interpolate: true,
          removeComments: true,
          collapseWhitespace: true
        }
      },
    },{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      exclude: /\.inline\.|\.inline-style\./,
      use: [{
          loader: 'file-loader',
          options: {
              name: '[hash:6].[ext]'
          }
      }]
    },{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
          loader: "css-loader"
      }, {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: ["./src/scss/main.scss"]
            }
          }
      }],
      
  }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    }),
  ]
};