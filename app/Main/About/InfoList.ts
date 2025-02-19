export interface SLsEVType {
  title: string;
  date?: string;
  height?: number[];
  context: string | string[];
}

export const SkillInfo: SLsEVType[] = [
  {
    title: "Languages",
    context: "HTML, CSS, JavaScript, TypeScript, Python, C",
  },
  {
    title: "Front-end Frameworks",
    context: "React.Js, Next.JS",
  },
  {
    title: "Back-end Frameworks",
    context: "Flask, Express",
  },
  {
    title: "DB",
    context: "MySQL",
  },
];

export const LanguagesInfo: SLsEVType[] = [
  {
    title: "Korean",
    context: "Native",
  },
  {
    title: "English",
    context: "Intermediate",
  },
];

export const EducationInfo: SLsEVType[] = [
  {
    title: "High School Dipmloa",
    context:
      "Embedded software development\nin Daegu Software Mesiter High School",
  },
];

export const VolunteeringInfo: SLsEVType[] = [
  {
    title: "Python Grammar lecture - LIKELION US",
    date: "07.2023 ~ 09.2023",
    height: [90, 100],
    context: [
      "Teaching Python coding grammar to school students on a weekly basis",
    ],
  },
  {
    title: "Making Arduino Robots - School Club",
    date: "04.2022 ~ 07.2022",
    height: [90, 100],
    context: [
      "Coach other students to build and program Arduino robots as part of an external program",
    ],
  },
];

export interface ExperienceType {
  title: string;
  date: string;
  position: string;
  height: number[];
  context: {
    subTitle: string;
    subContext: string[];
  }[];
}

export const ExperienceInfo: ExperienceType[] = [
  {
    title: "UNIVA",
    date: "01.2024 ~ 02.2024",
    position: "Front-end Developer",
    height: [160, 160],
    context: [
      {
        subTitle: "Company Homepage",
        subContext: [
          "Flask, JavaScript, React.JS, MySQL",
          "Desktop, mobile view development",
        ],
      },
    ],
  },
  {
    title: "CoSignOn",
    date: "07.2023 ~ 09.2023",
    position: "Full Stack Developer",
    height: [190, 205],
    context: [
      {
        subTitle: "Web Task Management Development",
        subContext: [
          "Flask, JavaScript, React.JS, MySQL",
          "Single-handed development",
        ],
      },
      {
        subTitle: "QA - company program",
        subContext: [],
      },
    ],
  },
];
