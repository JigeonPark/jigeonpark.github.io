import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Header.style";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "@src/Router";
import { useTheme } from "@src/theme/ThemeProvider";
import Contact from "./Contact";

const Header = () => {
  const [ThemeMode] = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const borderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);

  const urlPath = location.pathname.split("/")[1];
  const headerList = ["Home", "About", "Project"];
  const [contactFlag, setContactFlag] = useState<boolean>(false);
  const [backgroundFlag, setBackgroundFlag] = useState<boolean>(false);

  const [path, setPath] = useState<string>(
    urlPath === ""
      ? headerList[0]
      : urlPath.charAt(0).toUpperCase() + urlPath.slice(1)
  );
  const [scrollFlag, setScrollFlag] = useState<boolean>(true);

  function ScrollTo(y: number) {
    scrollFlag &&
      window.scrollTo({
        top: y,
      });
  }

  useEffect(() => {
    borderRef.current!.style.transform = `translate(${
      isMobile
        ? headerList.indexOf(`${path}`) * 73.333333
        : headerList.indexOf(`${path}`) * 128
    }px, 0px)`;

    switch (path) {
      case headerList[0]:
        setScrollFlag(true);
        !contactFlag && ScrollTo(0);
        break;

      case headerList[1]:
        setScrollFlag(true);
        !contactFlag && ScrollTo(window.innerHeight);
        break;

      case headerList[2]:
        navigate(headerList[2].toLowerCase());
        break;
    }
  }, [path]);

  useEffect(() => {
    function handleScroll() {
      if (urlPath !== headerList[2]) {
        if (window.scrollY < window.innerHeight - 1 && path === headerList[1]) {
          setScrollFlag(false);
          setPath(headerList[0]);
        } else if (
          window.scrollY > window.innerHeight - 1 &&
          path === headerList[0]
        ) {
          setScrollFlag(false);
          setPath(headerList[1]);
        }
      }

      !contactFlag && setBackgroundFlag(window.scrollY > 1);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (contactFlag) {
      setBackgroundFlag(true);
      if (isMobile) {
        headerRef.current!.style.height = "65px";
      } else {
        headerRef.current!.style.height = "320px";
      }
      document.body.style.overflow = "hidden";
    } else {
      if (isMobile) {
        headerRef.current!.style.height = "30px";
      } else {
        headerRef.current!.style.height = "50px";
      }
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";

      window.scrollY < 2 && setBackgroundFlag(false);
    }
  }, [contactFlag]);

  const giveStyleToHeader = () => {
    if (ThemeMode === "dark") {
      return backgroundFlag
        ? "rgba(169, 169, 169, 1)"
        : "rgba(169, 169, 169, 0)";
    } else {
      return backgroundFlag
        ? "rgba(217, 217, 217, 1)"
        : "rgba(217, 217, 217, 0)";
    }
  };

  const giveStyleToHeaderBtn = (isSelected: boolean) => {
    if (ThemeMode === "dark") {
      return isSelected ? "var(--black)" : "var(--white)";
    } else {
      return isSelected ? "var(--white)" : "var(--black)";
    }
  };

  return (
    <S.Header ref={headerRef} background={giveStyleToHeader()}>
      <S.ItemContainer>
        {headerList.map((d: string, i: number) => {
          return (
            <S.HeaderBtn
              key={i}
              color={giveStyleToHeaderBtn(path === d)}
              onClick={() => {
                setScrollFlag(true);
                !contactFlag && setPath(d);
                if (d === headerList[1] || d === headerList[0]) navigate("/");
              }}
            >
              {d}
            </S.HeaderBtn>
          );
        })}

        <S.HeaderBtn
          color={giveStyleToHeaderBtn(contactFlag)}
          onClick={() => {
            setContactFlag(!contactFlag);
          }}
        >
          Contact
        </S.HeaderBtn>

        <S.Border
          ref={borderRef}
          style={{
            backgroundColor:
              ThemeMode === "dark" ? "#d9d9d9" : "rgba(169, 169, 169, 1)",
          }}
        />
      </S.ItemContainer>
      {contactFlag && (
        <Contact contactFlag={contactFlag} setContactFlag={setContactFlag} />
      )}
    </S.Header>
  );
};

export default Header;
