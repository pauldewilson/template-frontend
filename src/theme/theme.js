import { createTheme } from "@mui/material/styles";
import { components } from "./components";
import { lightShadows, darkShadows } from "./shadows";
import { lightColors, darkColors } from "./colors";

export const createAppTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light" ? lightColors : darkColors),
    },
    components,
    shadows: mode === "light" ? lightShadows : darkShadows,
    typography: {
      fontFamily: [
        '"Segoe UI"',
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    shape: {
      borderRadius: 8,
    },
  });
};
