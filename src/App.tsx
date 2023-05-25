import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Top from "./@components/common/top";
import Router from "./Router";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";

function App() {
  return (
    <>
      <React.StrictMode>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Top />
            <Router />
          </ThemeProvider>
        </RecoilRoot>
      </React.StrictMode>
    </>
  );
}

export default App;
