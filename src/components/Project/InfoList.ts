export interface ProjectType {
  height: number[];
  title?: string;
  subTitle: string;
  context: string;
  languages: string[];
}

export const ProjectInfo: ProjectType[] = [
  {
    height: [160, 160],
    title: "Portfolio",
    subTitle: "",
    context: "",
    languages: ["React.JS", "TypeScript"],
  },
  {
    height: [160, 160],
    title: "",
    subTitle: "",
    context: "",
    languages: ["Next.JS", "TypeScript"],
  },
];
