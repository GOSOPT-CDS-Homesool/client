import { ThemeProvider } from "styled-components";
import React from "react";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import Router from "./Router";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <>
      <React.StrictMode>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router />
          </ThemeProvider>
        </RecoilRoot>
      </React.StrictMode>
    </>
  );
}

export default App;
