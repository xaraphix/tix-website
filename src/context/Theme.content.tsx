import { createContext } from "react";
import { themeModes } from "../constant/app.constant";

const ThemeContext = createContext({
  themeMode: themeModes.LIGHT_THEME_MODE,
  setThemeMode: (theme: themeModes) => {},
});

export const ThemeContextProvider = ThemeContext.Provider;
export default ThemeContext;
