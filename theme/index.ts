import React, { SetStateAction, createContext } from "react";
import { ThemeType } from "./themes";
import { lightTheme } from "./themes";

export const ThemeContext = createContext<{ theme: ThemeType }>({
  theme: lightTheme,
});

export const useTheme = () => React.useContext(ThemeContext);
