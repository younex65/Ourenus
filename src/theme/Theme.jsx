import { createTheme } from "@mui/material/styles";

// Define your gradient and RGB colors here
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
        paper: "transparent", // Make the paper components transparent to see the background
      },
    },
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(8px)", // Glassmorphism
            borderRadius: "16px",
            boxShadow: `0 0 30px 10px ${
              isDarkMode ? colors.rgb.darkShadow : colors.rgb.lightShadow
            }`,
            background: isDarkMode
              ? colors.gradients.dark
              : colors.gradients.light,
            border: "1px solid #ffffff6b",
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
            // backgroundImage: `url("/web-1920.png")`, // Set the background image
            backgroundSize: "cover", // Make sure the image covers the whole page
            backgroundRepeat: "no-repeat", // Avoid repeating the background
            backgroundPosition: "center center", // Center the image
          },
        },
      },
    },
    colors: colors,
  });

export default getTheme;
