const path = require('path')


module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
          { test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                  presets: 
                     ["@babel/preset-env", "@babel/preset-react"],  
                  plugins: [
                    ["@babel/plugin-transform-runtime",
                      {
                        "regenerator": true
                      }
                    ]
                  ]
              }
            }]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
          }
        ]
      },

    devServer: {
        contentBase: path.join(__dirname, "public/"),
        publicPath: "http://localhost:3000/",
        historyApiFallback: true,
        compress: true,
        port: 3000,
        inline: true,
        disableHostCheck: true
    }
}