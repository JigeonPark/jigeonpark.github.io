import React from "react";
import * as S from "./ThemeToggle.style";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <S.ToggleWrapper mode={ThemeMode}>
      <button onClick={toggleTheme} />
      <S.Toggle mode={ThemeMode}>
        <div className="craters">
          <div className="crater1" />
          <div className="crater2" />
          <div className="crater3" />
        </div>
      </S.Toggle>
      <S.Shadow />
    </S.ToggleWrapper>
  );
}
