import styled from "styled-components";
import Home from "./Home";
import About from "./About";

const Container = styled.div``;

const Main = () => {
  return (
    <Container>
      <Home />
      <About />
    </Container>
  );
};

export default Main;
