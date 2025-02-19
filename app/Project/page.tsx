import * as S from "./Project.style";

import { useState } from "react";
import { ProjectInfo, ProjectType } from "./InfoList";
import { useTheme } from "../theme/ThemeProvider";

const Project = () => {
  const [ThemeMode] = useTheme();
  const [isDisplay, setIsDisplay] = useState<Array<boolean>>([true]);

  function giveOppositeThemeValue() {
    return ThemeMode === "dark" ? "#F5F5F7" : "#1e1e1e";
  }

  function setHoveringList(b: boolean, i: number) {
    let tmp = [];
    [...isDisplay].forEach(() => {
      tmp.push(false);
    });
    tmp[i] = b;
    setIsDisplay(tmp);
  }

  return (
    <S.Project>
      <S.Title>Projects</S.Title>

      <S.ProjectContainer>
        {ProjectInfo.map((d: ProjectType, i: number) => {
          return (
            <S.ProjectBox
              style={{
                cursor: isDisplay[i] ? "n-resize" : "s-resize",
                height: isDisplay[i] ? "100px" : "60px",
                width: "100%",
              }}
              border={giveOppositeThemeValue()}
              key={i}
              onClick={() => {
                isDisplay[i] === true ? setHoveringList(false, i) : setHoveringList(true, i);
              }}
            >
              <S.ProjectTitleContainer>
                <S.ProjectName>{d.title}</S.ProjectName>
                <S.ProjectSubtitle>{d.subTitle && d.subTitle}</S.ProjectSubtitle>
              </S.ProjectTitleContainer>
            </S.ProjectBox>
          );
        })}
      </S.ProjectContainer>
    </S.Project>
  );
};

export default Project;
