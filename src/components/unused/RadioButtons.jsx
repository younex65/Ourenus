import { Grid } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import CapsuleButton from "./CapsuleButton";
import { IR, US } from "country-flag-icons/react/1x1";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const RadioButtons = ({ setIsDarkMode }) => {
  const [language, setLanguage] = useState("فارسی");
  const [theme, setTheme] = useState("روشن");

  // Function to handle theme toggle
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsDarkMode(newTheme === "تیره"); // Update dark mode when the theme is "تیره"
  };

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      sx={{ paddingY: "1rem" }}
      xs={11}
    >
      {/* Language Buttons */}
      <Grid
        item
        xs={4}
        sm={4}
        md={3}
        sx={{
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "space-between",
          backdropFilter: "blur(16px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Sliding background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: language === "فارسی" ? 0 : "50%",
            width: "50%",
            height: "100%",
            backgroundColor: "rgb(143 141 179 / 60%)",
            borderRadius: "50px",
            transition: "all 0.3s ease",
          }}
        />
        <CapsuleButton
          label="فارسی"
          isActive={language === "فارسی"}
          onClick={() => setLanguage("فارسی")}
          icon={<IR style={{ borderRadius: "50px" }} />}
        />
        <CapsuleButton
          label="EN"
          isActive={language === "English"}
          onClick={() => setLanguage("English")}
          icon={<US style={{ borderRadius: "50px" }} />}
        />
      </Grid>

      {/* Theme Buttons */}
      <Grid
        item
        xs={4}
        sm={4}
        md={3}
        sx={{
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50px",
          padding: ".2rem",
          display: "flex",
          justifyContent: "space-between",
          backdropFilter: "blur(16px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          border: "1px solid #ffffff6b",
        }}
      >
        {/* Sliding background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: theme === "روشن" ? 0 : "50%",
            width: "50%",
            height: "100%",
            backgroundColor: "rgb(143 141 179 / 60%)",
            borderRadius: "50px",
            transition: "all 0.3s ease",
          }}
        />
        <CapsuleButton
          isActive={theme === "روشن"}
          onClick={() => handleThemeChange("روشن")}
          icon={<WbSunnyOutlinedIcon />}
        />
        <CapsuleButton
          isActive={theme === "تیره"}
          onClick={() => handleThemeChange("تیره")}
          icon={<DarkModeOutlinedIcon />}
        />
      </Grid>
    </Grid>
  );
};
RadioButtons.propTypes = {
  setIsDarkMode: PropTypes.func.isRequired,
};

export default RadioButtons;
