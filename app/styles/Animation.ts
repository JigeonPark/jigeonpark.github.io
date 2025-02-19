"use client";

import { keyframes } from "styled-components";

export const FromtLeftToBase = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const FromRightToBase = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const FromTopToBase = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const FromBottomToBase = keyframes`
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
