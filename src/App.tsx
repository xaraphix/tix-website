import { useEffect, useState } from "react";
import "./App.css";
import { themeModes } from "./constant/app.constant";
import { ScrollContextProvider } from "./context/scroll.context";
import { ThemeContextProvider } from "./context/Theme.content";
import { Main } from "./features/website/layouts/Main";

function App() {
  const [theme, setTheme] = useState(themeModes.DARK_THEME_MODE);
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

  const [viewAtTop, setViewAtTop] = useState(true);
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) && darkThemeMq.matches)
    ) {
      localStorage.setItem("color-theme", "dark");
      setTheme(themeModes.DARK_THEME_MODE);
    } else {
      localStorage.setItem("color-theme", "light");
      setTheme(themeModes.LIGHT_THEME_MODE);
    }
  }, []);

  return (
    <ThemeContextProvider
      value={{
        themeMode: theme,
        setThemeMode: setTheme,
      }}
    >
      <ScrollContextProvider
        value={{
          viewAtTop: viewAtTop,
          setViewAtTop: setViewAtTop,
        }}
      >
        <div
          className={`max-h-screen-xl max-w-screen h-screen`}
          data-theme={`${
            theme === themeModes.DARK_THEME_MODE ? "aphx-dark" : "aphx-light"
          }`}
        >
          <Main />
        </div>
      </ScrollContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
