import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const Wrapper = styled.div`
  text-align: center;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <p>Start coding here...</p>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
