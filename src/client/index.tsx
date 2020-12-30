import * as React from "react";
import { hydrate } from "react-dom";
import "@vkontakte/vkui/dist/vkui.css";

import App from "./App";

hydrate(<App />, document.getElementById("root"));
