import * as React from "react";
import { FC, useEffect } from "react";

export const App: FC<{}> = () => {
  useEffect(() => {
    console.log("mounted");
  }, []);

  return <div>test test test</div>;
};

export default App;
