import path from "path";
import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import App from "../client/App";

const template = (content: string) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="/index.js"></script>
  </body>
</html>
`;

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/", (req, res) => {
  const renderedApp = ReactDOMServer.renderToString(<App />);
  return res.send(template(renderedApp));
});

app.use(express.static(path.resolve("./dist/client")));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
