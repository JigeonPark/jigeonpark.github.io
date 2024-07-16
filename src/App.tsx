import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Router } from "./Router";
import { ThemeProvider } from "@src/theme/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
