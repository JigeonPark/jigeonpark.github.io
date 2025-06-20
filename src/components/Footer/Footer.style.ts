import { media } from "@src/styles/Style";
import styled from "styled-components";

export const Footer = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: 2fr auto 2fr;
  align-items: center;
  justify-content: center;

  padding: 0px 80px 0px 30px;
  font-weight: bold;
  letter-spacing: 0.5px;

  ${media.mobile} {
    height: auto;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr;
    padding: 0px 40px 0px 15px;
  }

  div {
    height: 100%;
    display: flex;
    align-items: center;

    ${media.mobile} {
      font-size: 13px;
      width: 100%;
      height: 40px;
      align-items: center;
      justify-content: center;
    }
  }

  div:first-child {
    justify-content: start;

    ${media.mobile} {
      grid-row: 2 / 3;
      grid-column: 1 / 4;
      justify-content: center;
    }
  }
`;

export const ScrollToTop = styled.div`
  /* text-align: center; */
  font-size: 30px;
  height: 40px;
  cursor: pointer;

  &:hover {
    transform: translateY(-20px);
    transition: 1s;
  }

  ${media.mobile} {
    font-size: 20px !important;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    justify-content: end !important;
  }
`;

export const ContactIconContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  gap: 20px;
  width: 100%;
  height: 65px;

  ${media.mobile} {
    height: 35px;
    img {
      width: 25px;
      height: 25px;
    }

    grid-row: 1 / 2;
    grid-column: 2 / 4;
  }
`;
