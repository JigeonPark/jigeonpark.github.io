import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* html { 
    scroll-behavior: smooth;
  } */

  :root{
  --black: #1e1e1e;
  --white: #F5F5F7;
  } 

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    overflow-x: hidden;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #A9A9A9;
    background-clip: padding-box;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

`;
