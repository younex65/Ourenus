import { Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import TranslateIcon from "@mui/icons-material/Translate";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import QrModal from "./QrModal";

const SwitchButtons = ({ setIsDarkMode }) => {
  const theme = useTheme();
  const { i18n } = useTranslation();

  const [themeMode, setThemeMode] = useState("روشن");
  const [openQrModal, setOpenQrModal] = useState(false);
  const [qrLink, setQrLink] = useState("https://example.com");

  const handleThemeChange = () => {
    const newTheme = themeMode === "روشن" ? "تیره" : "روشن";
    setThemeMode(newTheme);
    setIsDarkMode(newTheme === "تیره");
  };

  const handleLangChange = () => {
    const newLanguage = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLanguage);
  };

  const handleQrModalOpen = () => {
    setOpenQrModal(true);
  };

  const handleQrModalClose = () => {
    setOpenQrModal(false);
  };

  const panelDomain =
    import.meta.env?.VITE_PANEL_DOMAIN || window.location.origin;
  const pathname = window.location.pathname.split("#")[0];
  const url = `${panelDomain}${pathname}`;

  useEffect(() => {
    setQrLink(url);
  }, [url]);

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent={"space-between"}
        padding={"1rem"}
      >
        <Grid item>
          <Button
            onClick={handleQrModalOpen}
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
              color: theme.palette.text.primary,
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
      <QrModal
        open={openQrModal}
        handleClose={handleQrModalClose}
        title={"My QR Code"}
        link={qrLink}
      />
    </>
  );
};

SwitchButtons.propTypes = {
  setIsDarkMode: PropTypes.func.isRequired,
};

export default SwitchButtons;
