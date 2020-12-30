import fs from "fs";
import path from "path";
import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import App from "../client/App";
import { SSRWrapper } from "@vkontakte/vkui/dist/cjs";

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/", (req, res) => {
  const renderedApp = ReactDOMServer.renderToString(
    <SSRWrapper>
      <App />
    </SSRWrapper>
  );

  fs.readFile(
    path.resolve("./dist/client/template.html"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Something went wrong:", err);
        return res.status(500).send("Oops, better luck next time!");
      }

      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${renderedApp}</div>`
        )
      );
    }
  );
});

app.use(express.static(path.resolve("./dist/client")));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
