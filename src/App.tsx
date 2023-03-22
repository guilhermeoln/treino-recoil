import React from "react";
import { RecoilRoot } from "recoil";
import RoutesApp from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <RoutesApp />
    </RecoilRoot>
  );
}

export default App;
