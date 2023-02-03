import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <p>Start coding here...</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
