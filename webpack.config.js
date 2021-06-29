const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/server",
  target: 'node',   //告诉webpack实在node环境中
  resolve:{
    alias:{
        '@':path.resolve(__dirname, 'src'),
    },
    extensions:['.js', '.jsx', '.css']
  },
  externals: [nodeExternals()],   //告诉webpack哪些不需要打包  webpack-node-externals
  module: {
    rules: [
      {
        test: /\.jsx?/,               // js 或者 jsx
        exclude: /node_modules/,      //排除node_modules里面的文件
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
};
