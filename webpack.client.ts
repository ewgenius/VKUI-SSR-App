import path from "path";
import { Configuration } from "webpack";

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
    ],
  },
};

export default config;
