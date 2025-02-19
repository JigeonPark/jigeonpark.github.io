import styled from "styled-components";
import { media } from "../styles/Style";

export const ToggleWrapper = styled.label<{ mode: string }>`
  position: fixed;
  z-index: 999;
  bottom: 20px;
  right: 20px;

  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  box-shadow: ${(props) => (props.mode === "dark" ? "0px 0px 5px #F5F5F7" : "0 0px 5px #1e1e1e")};
  background: ${(props) => (props.mode === "light" ? "#4682b4" : "#0f1c3b")};

  cursor: pointer;
  button {
    display: none;
  }

  ${media.mobile} {
    bottom: 10px;
    right: 10px;

    width: 30px;
    height: 30px;
  }
`;

export const Toggle = styled.div<{ mode: string }>`
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  box-shadow: inset -1px -1px 1px 1px rgba(0, 0, 0, 0.15);

  background-color: ${(props) => (props.mode === "light" ? "gold" : "lightgrey")};

  ${media.mobile} {
    width: 20px;
    height: 20px;
  }

  .craters {
    opacity: ${(props) => (props.mode === "light" ? "0" : "1")};
    transition: 1s;

    div {
      position: absolute;
      top: 7px;
      left: 3px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: rgba(153, 153, 153, 0.7);
      box-shadow: inset 0 0 2px 0px rgba(0, 0, 0, 0.15);

      ${media.mobile} {
        width: 8px;
        height: 8px;
      }
    }

    .crater2 {
      top: 4px;
      left: 12px;
      width: 5px;
      height: 5px;

      ${media.mobile} {
        width: 4px;
        height: 4px;
      }
    }

    .crater3 {
      top: 12px;
      left: 14px;
      width: 4px;
      height: 4px;

      ${media.mobile} {
        width: 3px;
        height: 3px;
      }
    }
  }
`;

export const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: inset 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
`;
