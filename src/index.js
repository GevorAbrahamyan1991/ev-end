import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./pages/components/ThemContext";
import Wrapper from "./pages/Multilanguage/wrapper";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Wrapper>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Wrapper>
);
