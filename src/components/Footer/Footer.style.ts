import { media } from "@src/styles/Style";
import styled from "styled-components";

export const Footer = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 2fr auto 2fr;
  align-items: center;
  justify-content: center;

  padding: 70px 100px 30px 100px;
  font-weight: bold;
  letter-spacing: 0.5px;

  div {
    height: 100%;
    display: flex;
    align-items: center;
  }

  div:first-child {
    justify-content: start;
  }
`;

export const ScrollToTop = styled.div`
  text-align: center;
  font-size: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    transform: translateY(-20px);
    transition: 1s;
  }
`;

export const ContactIconContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  gap: 20px;
  width: 100%;
  height: 65px;
  cursor: pointer;

  ${media.mobile} {
    height: 35px;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
