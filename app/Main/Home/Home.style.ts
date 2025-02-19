"use client";

import styled from "styled-components";
import { FromRightToBase, FromtLeftToBase, opacity0To1 } from "../../styles/Animation";
import { GolbalTextTitle, GolbalTitle, media } from "../../styles/Style";

export const Home = styled.div<{ mode: string }>`
  display: flex;
  background-color: ${(props) => (props.mode === "dark" ? "var(--white)" : "var(--black)")};

  :nth-child(1),
  :nth-child(2) {
    transition: 1s;
    background-color: ${(props) => (props.mode === "light" ? "var(--white)" : "var(--black)")};

    * {
      transition: 0s;
    }
  }

  :nth-child(1) {
    animation: ${FromtLeftToBase} 1s;
  }

  :nth-child(2) {
    animation: ${FromRightToBase} 1s;
    ${media.mobile} {
      padding-right: 13px;
    }
  }
`;

export const Title = styled(GolbalTitle)`
  animation: ${opacity0To1} 4s !important;
  position: absolute;
  height: auto;

  ${media.mobile} {
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 50vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  //IntroduceText
  :nth-child(2) {
    position: relative;
    top: +70px;

    @media (max-width: 1240px) {
      top: +120px;
    }

    ${media.tablet} {
      top: +135px;
    }

    ${media.mobile} {
      top: +90px;
    }
  }
`;

export const IntroduceText = styled(GolbalTextTitle)`
  max-width: 459px;
  animation: ${opacity0To1} 4s !important;

  ${media.mobile} {
    font-size: 14px;
    font-weight: bold;
  }
`;
