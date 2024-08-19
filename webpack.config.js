const path = require("path");
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js|jsx|ts|tsx$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
    //객체만 받는 배열
    //test, use, exclude 세가지 키만 받는다.
    ///\.ts$/ 정규식은 ts인지 확인하는 것
  },
  resolve: { extensions: [".ts", "js", ".tsx", ".jsx", "css"] },
  //ts랑 js 쓸거야
};
