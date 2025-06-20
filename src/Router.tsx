import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Project from "./components/Project";
import styled from "styled-components";
import ThemeToggle from "@src/theme/ThemeToggle";
import { useTheme } from "@src/theme/ThemeProvider";
import Footer from "./components/Footer";
import { useEffect } from "react";

export let isMobile = window.innerWidth < 576;

const Root = styled.div`
  width: 100vw;
  overflow: hidden;
`;

export const Router = () => {
  const [ThemeMode, toggleTheme] = useTheme();

  const changeIsMobile = () => {
    isMobile = window.innerWidth < 576;
  };

  useEffect(() => {
    window.addEventListener("resize", changeIsMobile);
    return () => window.removeEventListener("resize", changeIsMobile);
  }, []);

  return (
    <BrowserRouter>
      <Root>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<>404</>} />
        </Routes>
        <Footer />
        <ThemeToggle toggle={toggleTheme} mode={ThemeMode} />
      </Root>
    </BrowserRouter>
  );
};
