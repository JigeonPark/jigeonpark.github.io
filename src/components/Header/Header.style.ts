import { media } from "@src/styles/Style";
import styled from "styled-components";

export const Header = styled.header<{ background: String }>`
  display: flex;
  align-items: start;
  flex-direction: column;

  width: 520px;
  height: 50px;

  box-sizing: border-box;
  padding: 8px;
  border-radius: 25px;

  position: fixed;
  left: calc(50% - 260px);
  top: 15px;
  z-index: 999;
  transition: 1s;

  @media (prefers-color-scheme: dark) {
    background: ${(props) =>
      props.background === "true"
        ? "rgba(169, 169, 169, 1)"
        : "rgba(169, 169, 169, 0)"};
  }

  @media (prefers-color-scheme: light) {
    background: ${(props) =>
      props.background === "true"
        ? "rgba(217, 217, 217, 1)"
        : "rgba(217, 217, 217, 0)"};
  }

  ${media.mobile} {
    width: 300px;
    height: 30px;
    padding: 5px;
    top: 5px;
    left: calc(50% - 150px);
    border-radius: 15px;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderBtn = styled.button<{ is_selected: String }>`
  border: none;
  background: none;

  @media (prefers-color-scheme: light) {
    color: ${(props) =>
      props.is_selected === "true" ? "var(--white)" : "var(--black)"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${(props) =>
      props.is_selected === "true" ? "var(--black)" : "var(--white)"};
  }

  transition: 1s;
  font-size: 24px;
  font-weight: bold;

  width: 120px;
  height: 35px;
  cursor: pointer;

  ${media.mobile} {
    width: 70px;
    height: 20px;
    font-size: 12px;
  }
`;

export const Border = styled.div`
  border-radius: 17.5px;

  @media (prefers-color-scheme: dark) {
    background-color: #d9d9d9;
  }

  @media (prefers-color-scheme: light) {
    background-color: rgba(169, 169, 169, 1);
  }

  width: 120px;
  height: 35px;

  position: absolute;
  z-index: -1;
  transition: 1s;

  ${media.mobile} {
    width: 70px;
    height: 20px;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-evenly;

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
