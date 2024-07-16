import React from "react";

import * as S from "./ThemeToggle.style";

interface ThemeToggleProps {
  toggle: () => void;
  mode: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggle, mode }) => {
  return (
    <S.ToggleWrapper mode={mode}>
      <button onClick={toggle} />

      <S.Toggle mode={mode}>
        <div className="craters">
          <div className="crater1" />
          <div className="crater2" />
          <div className="crater3" />
        </div>
      </S.Toggle>

      <S.Shadow />
    </S.ToggleWrapper>
  );
};

export default ThemeToggle;
