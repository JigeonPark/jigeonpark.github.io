import {
  GolbalSubTitle,
  GolbalText,
  GolbalTextTitle,
  GolbalTitle,
  media,
} from "@src/styles/Style";
import styled from "styled-components";

export const Project = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;

export const Title = styled(GolbalTitle)`
  height: auto;
  width: 100%;
  margin-bottom: 30px;
`;

export const ProjectContainer = styled.div`
  /* width: 1200px; */
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  margin-bottom: 30px;
`;

export const ProjectBox = styled.div<{
  border: string;
}>`
  padding: 13px;

  border: ${(props) => `3px solid ${props.border}`};
  border-radius: 25px;
  transition: 1s;
`;

export const ProjectTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProjectName = styled(GolbalTextTitle)``;

export const ProjectSubtitle = styled.h3`
  font-size: 18px;
`;
