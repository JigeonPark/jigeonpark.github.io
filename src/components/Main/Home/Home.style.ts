import {
  FromRightToZero,
  FromtLeftToZero,
  opacity0To1,
} from "@src/styles/Animation";
import {
  GolbalTextTitle,
  GolbalTitle,
  media,
  prefersColorScheme,
} from "@src/styles/Style";
import styled from "styled-components";

console.log(prefersColorScheme.background);

export const Home = styled.div`
  display: flex;
  ${prefersColorScheme.oppositeBackground}

  :nth-child(1) {
    animation: ${FromtLeftToZero} 1s;
    /* ${prefersColorScheme.background}
    ${prefersColorScheme.color} */
  }

  :nth-child(2) {
    animation: ${FromRightToZero} 1s;
    ${prefersColorScheme.color}
    ${prefersColorScheme.background}
  }
`;

export const Title = styled(GolbalTitle)`
  animation: ${opacity0To1} 4s !important;
  position: absolute;
  height: auto;

  background-color: rgba(0, 0, 0, 0) !important;

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
