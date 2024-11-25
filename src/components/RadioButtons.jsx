import { Grid, useTheme } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import CapsuleButton from "./CapsuleButton";
import { useTranslation } from "react-i18next";

const RadioButtons = ({ setIsDarkMode }) => {
  const [theme, setTheme] = useState("light");
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const themecolors = useTheme();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsDarkMode(newTheme === "dark");
  };

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      sx={{ paddingY: 2 }}
      xs={11}
    >
      <Grid
        item
        xs={5}
        sm={4}
        md={3}
        sx={{
          position: "relative",
          backgroundColor: themecolors.colors.capsuleBtn.background[theme],
          borderRadius: "50px",
          display: "flex",
          padding: 0.2,
          justifyContent: "space-between",
          backdropFilter: "blur(16px)",
          boxShadow: "0 0 7rem rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: lang === "fa" ? 0 : "50%",
            width: "50%",
            height: "100%",
            backgroundColor: themecolors.colors.capsuleBtn.slider,
            borderRadius: "50px",
            transition: "all 0.3s ease",
          }}
        />
        <CapsuleButton
          label="فارسی"
          isActive={lang === "fa"}
          onClick={() => handleLangChange("fa")}
          icon={"فارسی"}
        />
        <CapsuleButton
          label="EN"
          isActive={lang === "en"}
          onClick={() => handleLangChange("en")}
          icon={"English"}
        />
      </Grid>
      <Grid
        item
        xs={5}
        sm={4}
        md={3}
        sx={{
          position: "relative",
          backgroundColor: themecolors.colors.capsuleBtn.background[theme],
          borderRadius: "50px",
          display: "flex",
          padding: 0.2,
          justifyContent: "space-between",
          backdropFilter: "blur(16px)",
          boxShadow: "0 0 7rem rgba(0, 0, 0, 0.2)",
          border: "1px solid #ffffff6b",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: theme === "light" ? 0 : "50%",
            width: "50%",
            height: "100%",
            backgroundColor: themecolors.colors.capsuleBtn.slider,
            borderRadius: "50px",
            transition: "all 0.3s ease",
          }}
        />
        <CapsuleButton
          isActive={theme === "light"}
          onClick={() => handleThemeChange("light")}
          icon={"روشن"}
        />
        <CapsuleButton
          isActive={theme === "dark"}
          onClick={() => handleThemeChange("dark")}
          icon={"تیره"}
        />
      </Grid>
    </Grid>
  );
};
RadioButtons.propTypes = {
  setIsDarkMode: PropTypes.func.isRequired,
};

export default RadioButtons;
