import {
  createContext,
  useState,
  useContext,
  useCallback,
  ReactNode,
} from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";

interface ThemeContextProps {
  ThemeMode: string;
  setThemeMode: (mode: string) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const getLocalTheme = (): string => {
    if (window.localStorage.getItem("theme")) {
      return window.localStorage.getItem("theme")!;
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  };

  const [ThemeMode, setThemeMode] = useState<string>(getLocalTheme());
  const themeObject = ThemeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): [string, () => void] {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const { ThemeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (ThemeMode === "light") {
      setThemeMode("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setThemeMode("light");
      window.localStorage.setItem("theme", "light");
    }
  }, [ThemeMode]);

  return [ThemeMode, toggleTheme];
}

export { ThemeProvider, useTheme };
