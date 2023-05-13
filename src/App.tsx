import { ThemeProvider } from "styled-components";
import React from "react";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import Router from "./Router";

function App() {
  return (
    <>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
}

export default App;