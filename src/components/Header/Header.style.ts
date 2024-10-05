import { media } from "@src/styles/Style";
import styled from "styled-components";

export const Header = styled.header<{
  background: string;
}>`
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

  background-color: ${(props) => `${props.background}`};

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

export const HeaderBtn = styled.button<{ color: string }>`
  border: none;
  background: none;

  color: ${(props) => `${props.color}`};

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
