import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    scroll-behavior: smooth;
  }

  :root{
  --black: #1e1e1e;
  --white: #F5F5F7;
  } 

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    transition: 1s;
  }

  a{
    text-decoration: none;
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

  h1,h2,h4,p,a{
    background-color: rgba(0,0,0,0) !important;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

`;
