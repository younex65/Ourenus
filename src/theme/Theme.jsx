import { createTheme } from "@mui/material/styles";

const colors = {
  gradients: {
    light:
      "linear-gradient(to right, rgba(255, 255, 255, 0.8), rgb(52 0 79 / 12%))",
    dark: "linear-gradient(to right, rgba(34, 34, 34, 0.8), rgb(91 7 122 / 10%))",
    purpleLight: "#9C27B0",
    purpleDark: "#6A1B9A",
    low: {
      colors: ["rgba(255, 102, 102, 1)", "rgba(153, 0, 0, 1)"],
      background: "rgba(255, 102, 102, 0.1)",
    },
    medium: {
      colors: ["rgba(235, 249, 94, 1)", "rgba(255, 165, 0, 1)"],
      background: "rgba(255, 255, 102, 0.1)",
    },
    high: {
      colors: ["rgba(144, 238, 144, 1)", "rgba(0, 100, 0, 1)"],
      background: "rgba(144, 238, 144, 0.1)",
    },
  },
  rgb: {
    lightShadow: "rgba(0, 0, 0, 0.1)",
    darkShadow: "rgba(255, 255, 255, 0.1)",
  },
};

const getTheme = (isDarkMode) =>
  createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      background: {
        default: isDarkMode ? "#121212" : "#ffffff",
        paper: "transparent",
      },
    },
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(8px)",
            borderRadius: "16px !important",
            border: isDarkMode ? "1px solid #ffffff6b" : "",
            color: isDarkMode ? "#000" : "#fff",
            fontWeight: "bold",
            fontFamily: "'Vazirmatn', sans-serif",
            "&:before": {
              display: "none",
            },
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "50px",
            fontFamily: "'Vazirmatn', sans-serif",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: isDarkMode ? "" : `url("/web-1920.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            cursor: "pointer",
            direction: "ltr",
            marginBottom: ".5rem",
            backdropFilter: "blur(8px)",
            borderRadius: "12px !important",
            border: "1px solid #48444a4f",
            fontWeight: "bold",
            fontFamily: "'Vazirmatn', sans-serif",
            "&:hover": {
              background: "rgba(0, 0, 0, 0.1)",
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "'Vazirmatn', sans-serif",
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            fontFamily: "'Vazirmatn', sans-serif",
          },
        },
      },
    },
    colors: colors,
  });

export default getTheme;
