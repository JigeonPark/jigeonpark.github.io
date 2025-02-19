interface contactInfoType {
  name: string;
  imgSrc: string;
  link: string;
}

const contactInfo = [
  {
    name: "Linkedin",
    imgSrc: "images/linkdin.svg",
    link: "https:www.linkedin.com/in/jigeonpark",
  },
  {
    name: "Email",
    imgSrc: "images/mail.svg",
    link: "mailto:jnpk.zf.work@gmail.com",
  },
  {
    name: "GitHub",
    imgSrc: "images/gitHub.svg",
    link: "https://github.com/JigeonPark",
  },
];

export const MakeContactIconList = () => {
  return contactInfo.map((d: contactInfoType) => {
    return (
      <img
        style={{ cursor: "pointer" }}
        src={d.imgSrc}
        alt={d.name}
        key={d.name}
        onClick={() => {
          window.open(d.link, "_blank", "noopener, noreferrer");
        }}
      />
    );
  });
};
