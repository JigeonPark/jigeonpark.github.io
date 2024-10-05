import { media } from "@src/styles/Style";
import styled from "styled-components";

export const Container = styled.div<{ contactFlag: boolean }>`
  width: 100%;
  height: ${(props) => (props.contactFlag ? "100%" : "0px")};
  transition: 1s;
  overflow: hidden;
`;

export const ContactIconContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-evenly;

  width: 100%;
  height: 65px;
  margin-bottom: 20px;

  ${media.mobile} {
    height: 35px;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Question = styled.div`
  width: 100%;
  height: 175px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  grid-gap: 15px;

  input,
  textarea,
  button {
    width: 100%;
    padding: 10px;
    font-size: 15px;
    border-radius: 10px;

    outline: none;
    box-sizing: border-box;
    border: none;
  }

  input,
  button {
    height: 35px;
  }

  input {
  }

  button {
    width: 30%;
    padding: 0;
    border-radius: 25px;

    grid-column: 1 / 3;
    justify-self: center;

    cursor: pointer;
  }

  textarea {
    resize: none;
    line-height: 120%;
    grid-row: 2 / 6;
    grid-column: 1 / 3;
  }
`;
