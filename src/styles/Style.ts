import styled from "styled-components";
import { opacity0To1 } from "./Animation";

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

//Font
export const GolbalTitle = styled.h1`
  font-size: 64px;
  letter-spacing: 2px;
  font-weight: bold;
  min-height: 81px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile} {
    max-width: 175px;
    line-height: 120%;
    font-size: 33px;
  }
`;

export const GolbalSubTitle = styled.h2`
  font-size: 32px;
  letter-spacing: 2px;
  font-weight: bold;
  min-height: 81px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile} {
    font-size: 25px;
    letter-spacing: 1px;
    min-height: 45px;
    max-width: 175px;
  }
`;

export const GolbalTextTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;

  ${media.mobile} {
    font-size: 20px;
    line-height: 21px;
    letter-spacing: 0.5px;
    max-width: 175px;
  }
`;

export const GolbalText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: "#7F7F7F";
  letter-spacing: 1px;

  ${media.mobile} {
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 0.5px;
    max-width: 175px;
  }
`;

export const Line = styled.hr<{
  vertical: string;
  time?: string;
}>`
  width: ${(props) => (props.vertical === "true" ? "1px" : "1000px")};
  height: ${(props) => (props.vertical === "true" ? "100%" : "1px")};

  ${media.mobile} {
    width: ${(props) => (props.vertical === "true" ? "1px" : "345px")};
    height: ${(props) => (props.vertical === "true" ? "100%" : "1px")};
  }

  &#opacity {
    animation-name: ${opacity0To1};
    animation-duration: ${(props) => (props.time ? `${props.time}s` : "3s")};
  }
`;
