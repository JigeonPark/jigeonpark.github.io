import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Header.style";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "@src/Router";
import { useTheme } from "@src/theme/ThemeProvider";
import Contact from "./Contact";

const HEADER_TABS = ["Home", "About", "Project"];
const MOBILE_TAB_WIDTH = 73.33;
const DESKTOP_TAB_WIDTH = 128;

const Header = () => {
  const [ThemeMode] = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const borderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);

  const currentUrlPath = location.pathname.split("/")[1];
  const initialPath = currentUrlPath === "" ? HEADER_TABS[0] : capitalize(currentUrlPath);

  const [selectedTab, setSelectedTab] = useState<string>(initialPath);
  const [isContactOpened, setIsContactOpened] = useState(false);
  const [hasHeaderBackground, setHasHeaderBackground] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const ScrollTo = (y: number) => {
    if (scrollEnabled) {
      window.scrollTo({ top: y });
    }
  };

  useEffect(() => {
    const tabIndex = HEADER_TABS.indexOf(selectedTab);
    const offset = (isMobile ? MOBILE_TAB_WIDTH : DESKTOP_TAB_WIDTH) * tabIndex;
    if (borderRef.current) {
      borderRef.current.style.transform = `translate(${offset}px, 0px)`;
    }

    if (selectedTab === "Project") {
      navigate("project");
    } else {
      setScrollEnabled(true);
      if (!isContactOpened) {
        const y = selectedTab === "Home" ? 0 : window.innerHeight;
        ScrollTo(y);
      }
    }
  }, [selectedTab, isContactOpened, navigate]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (currentUrlPath !== "project") {
        const scrolledY = window.scrollY;
        const screenH = window.innerHeight;

        if (scrolledY < screenH - 1 && selectedTab === "About") {
          setScrollEnabled(false);
          setSelectedTab("Home");
        } else if (scrolledY > screenH - 1 && selectedTab === "Home") {
          setScrollEnabled(false);
          setSelectedTab("About");
        }
      }

      if (!isContactOpened) {
        setHasHeaderBackground(window.scrollY > 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedTab, isContactOpened, currentUrlPath]);

  // Contact toggle effects
  useEffect(() => {
    const headerHeight = isMobile
      ? isContactOpened
        ? "65px"
        : "30px"
      : isContactOpened
      ? "320px"
      : "50px";

    if (headerRef.current) {
      headerRef.current.style.height = headerHeight;
    }

    document.body.style.overflow = isContactOpened ? "hidden" : "unset";
    document.body.style.overflowX = "hidden";

    if (isContactOpened) {
      setHasHeaderBackground(true);
    } else if (window.scrollY < 2) {
      setHasHeaderBackground(false);
    }
  }, [isContactOpened]);

  const getHeaderBackgroundColor = () => {
    const base = ThemeMode === "dark" ? "169, 169, 169" : "217, 217, 217";
    return `rgba(${base}, ${hasHeaderBackground ? "1" : "0"})`;
  };

  const getTabColor = (isSelected: boolean) => {
    if (ThemeMode === "dark") {
      return isSelected ? "var(--black)" : "var(--white)";
    } else {
      return isSelected ? "var(--white)" : "var(--black)";
    }
  };

  return (
    <S.Header ref={headerRef} background={getHeaderBackgroundColor()}>
      <S.ItemContainer>
        {HEADER_TABS.map((tab, i) => (
          <S.HeaderBtn
            key={i}
            color={getTabColor(selectedTab === tab)}
            onClick={() => {
              setScrollEnabled(true);
              if (!isContactOpened) {
                setSelectedTab(tab);
                if (tab !== "Project") navigate("/");
              }
            }}
          >
            {tab}
          </S.HeaderBtn>
        ))}

        <S.HeaderBtn
          color={getTabColor(isContactOpened)}
          onClick={() => setIsContactOpened(!isContactOpened)}
        >
          Contact
        </S.HeaderBtn>

        <S.Border
          ref={borderRef}
          style={{
            backgroundColor: ThemeMode === "dark" ? "#d9d9d9" : "rgba(169, 169, 169, 1)",
          }}
        />
      </S.ItemContainer>

      {isContactOpened && (
        <Contact isContactOpened={isContactOpened} setIsContactOpened={setIsContactOpened} />
      )}
    </S.Header>
  );
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default Header;
