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
        test: /\.css$/, // CSS 파일 처리
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/, // JS, JSX, TS, TSX 파일 처리
        use: "babel-loader", // babel-loader만 사용
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".css"], // ts, js, jsx, tsx, css 확장자 처리
  },
};
