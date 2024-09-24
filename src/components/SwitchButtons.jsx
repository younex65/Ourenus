import { Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import TranslateIcon from "@mui/icons-material/Translate";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const SwitchButtons = ({ setIsDarkMode }) => {
  const theme = useTheme();
  const { i18n } = useTranslation();

  const [themeMode, setThemeMode] = useState("روشن");

  const handleThemeChange = () => {
    const newTheme = themeMode === "روشن" ? "تیره" : "روشن";
    setThemeMode(newTheme);
    setIsDarkMode(newTheme === "تیره");
  };

  const handleLangChange = () => {
    const newLanguage = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent={"space-between"}
      padding={"1rem"}
    >
      <Grid item>
        <Button
          sx={{
            background:
              theme.palette.mode === "dark"
                ? theme.colors.gradients.dark
                : theme.colors.gradients.light,
            color: theme.palette.text.primary,
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255)",
          }}
        >
          <QrCodeIcon />
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={handleThemeChange}
          sx={{
            background:
              theme.palette.mode === "dark"
                ? theme.colors.gradients.dark
                : theme.colors.gradients.light,
            color:
              themeMode === "تیره"
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255)",
            padding: "0.5rem 1rem",
          }}
        >
          {themeMode === "روشن" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <WbSunnyOutlinedIcon />
          )}
        </Button>
        <Button
          onClick={handleLangChange}
          sx={{
            background:
              theme.palette.mode === "dark"
                ? theme.colors.gradients.dark
                : theme.colors.gradients.light,
            color: theme.palette.text.primary,
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255)",
            padding: "0.5rem 1rem",
            marginLeft: "0.5rem",
          }}
        >
          <TranslateIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

SwitchButtons.propTypes = {
  setIsDarkMode: PropTypes.func.isRequired,
};

export default SwitchButtons;
