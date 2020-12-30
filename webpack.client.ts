import path from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const config: Configuration = {
  entry: path.resolve("./src/client/index.tsx"),
  target: "es5",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  output: {
    path: path.resolve("./dist/client"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.client.json",
        },
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve("./src/client/index.html"),
      filename: "template.html",
    }),
  ],
};

export default config;
