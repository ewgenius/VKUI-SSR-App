import path from "path";
import { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

export const config: Configuration = {
  entry: path.resolve("./src/server/index.tsx"),
  target: "node",
  externals: [nodeExternals()],

  resolve: {
    extensions: [".ts", ".tsx"],
  },

  output: {
    path: path.resolve("./dist/server"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
};

export default config;
