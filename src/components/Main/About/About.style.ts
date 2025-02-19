import { GolbalTitle, media } from "@src/styles/Style";
import styled from "styled-components";

export const About = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  height: auto;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Title = styled(GolbalTitle)`
  position: absolute;
  height: auto;

  ${media.mobile} {
    text-align: center;
  }
`;
