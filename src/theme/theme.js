import { createTheme } from "@mui/material/styles";
import { components } from "./components";
import { lightShadows, darkShadows } from "./shadows";
import { lightColors, darkColors } from "./colors";
import { designConfig } from "./design-config";

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
        '"Inter"',
        '"Segoe UI"',
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
      h1: {
        fontSize: "clamp(2rem, 4vw, 3.5rem)",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
        fontWeight: 600,
        lineHeight: 1.4,
      },
    },
    shape: {
      borderRadius: designConfig.borderRadius.base,
    },
    spacing: designConfig.spacing.base,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    transitions: {
      duration: {
        shortest: designConfig.transitions.duration.fast,
        shorter: 200,
        short: 250,
        standard: designConfig.transitions.duration.normal,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
      easing: {
        easeInOut: designConfig.transitions.easing,
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
    // Custom modern layout utilities
    mixins: {
      // Glassmorphism effect - base version
      glassmorphism: {
        background: mode === "light"
          ? "rgba(255, 255, 255, 0.25)"
          : "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: mode === "light"
          ? "1px solid rgba(255, 255, 255, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: mode === "light"
          ? "0 8px 32px rgba(0, 0, 0, 0.1)"
          : "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      // Glassmorphism effect - stronger version for main content
      glassmorphismStrong: {
        background: mode === "light"
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(30, 30, 30, 0.95)",
        backdropFilter: "blur(20px)",
        border: mode === "light"
          ? "1px solid rgba(255, 255, 255, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: mode === "light"
          ? "0 8px 32px rgba(0, 0, 0, 0.1)"
          : "0 8px 32px rgba(0, 0, 0, 0.5)",
      },
      // Glassmorphism effect - medium version
      glassmorphismMedium: {
        background: mode === "light"
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(40, 40, 40, 0.9)",
        backdropFilter: "blur(15px)",
        border: mode === "light"
          ? "1px solid rgba(255, 255, 255, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: mode === "light"
          ? "0 8px 32px rgba(0, 0, 0, 0.1)"
          : "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      // Paper-like background that adapts to theme
      paperBackground: {
        background: mode === "light"
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(30, 30, 30, 0.95)",
        backdropFilter: "blur(10px)",
        border: mode === "light"
          ? "1px solid rgba(255, 255, 255, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.1)",
      },
      // Modern gradient backgrounds
      gradientBackground: {
        background: mode === "light"
          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          : "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
      },
      // Subtle hover effects for truly interactive elements only
      subtleHover: {
        transition: `all ${designConfig.transitions.duration.fast}ms ${designConfig.transitions.easing}`,
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: mode === "light"
            ? "0 4px 12px rgba(0, 0, 0, 0.1)"
            : "0 4px 12px rgba(0, 0, 0, 0.3)",
        },
      },
      // Flex utilities
      flexCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      flexBetween: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      flexColumn: {
        display: "flex",
        flexDirection: "column",
      },
      flexColumnCenter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      // Modern spacing
      sectionSpacing: {
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
      },
      containerSpacing: {
        paddingTop: "clamp(2rem, 4vw, 4rem)",
        paddingBottom: "clamp(2rem, 4vw, 4rem)",
      },
    },
  });
};
