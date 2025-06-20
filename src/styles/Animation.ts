import { keyframes } from "styled-components";

export const FromtLeftToZero = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const FromRightToZero = keyframes`
  from {
transform: translateX(100%);
}

to {
transform: translateX(0%);
}
`;

export const FromTopToZero = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const FromBottomToZero = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const opacity0To1 = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
