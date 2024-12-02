import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createAppTheme } from "./theme";
import PropTypes from "prop-types";
import storage from "../utils/storage";

const ThemeContext = createContext({
  toggleColorMode: () => {},
  mode: "dark",
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = storage.get("theme", "dark");
    return savedMode;
  });

  useEffect(() => {
    storage.set("theme", mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createAppTheme(mode);

  return (
    <ThemeContext.Provider value={{ toggleColorMode, mode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
