import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import { useTranslation } from "react-i18next";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import errorLogo from "../assets/vite.svg";

const getButtonStyles = (type, theme) => {
  switch (type) {
    case "download":
      return {
        backgroundColor:
          theme === "dark"
            ? "rgba(30, 144, 255, 0.5)"
            : "rgba(35, 103, 181, 0.8)", // Bright Blue
        color: "#fff",
      };
    case "config":
      return {
        backgroundColor:
          theme === "dark"
            ? "rgba(76, 175, 80, 0.5)"
            : "rgba(78, 191, 119, 0.8)", // Strong Green
        color: "#fff",
      };
    case "video":
      return {
        backgroundColor:
          theme === "dark"
            ? "rgba(255, 193, 7, 0.5)"
            : "rgba(255, 208, 75, 0.8)", // Bright Yellow
        color: "#000",
      };
    default:
      return {};
  }
};

const getAccordionStyles = (theme) => ({
  marginBottom: ".8rem",
  background:
    theme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.6)",
  color: theme === "light" ? "#000" : "#fff",
  "&.Mui-expanded": {
    background:
      theme === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.5)",
  },
});

const renderAppAccordion = (app, index, lang, theme, t) => {
  return (
    <Accordion key={index} sx={getAccordionStyles(theme)}>
      <AccordionSummary
        expandIcon={
          <ArrowDropDownIcon
            sx={{ color: theme === "light" ? "#000" : "#fff" }}
          />
        }
        aria-controls={`panel-${app.name}-content`}
        id={`panel-${app.name}-header`}
      >
        <Grid container alignItems="center" justifyContent="space-around">
          <Grid
            item
            xs={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={app.logo}
              alt={`${app.name} logo`}
              style={{ width: "30px", height: "auto", borderRadius: "20%" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = errorLogo;
              }}
            />
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>{app.name}</Typography>
            <Button
              variant="contained"
              color="textSecondary"
              sx={{
                borderRadius: "50px",
                backgroundColor:
                  app?.price === "0"
                    ? theme === "dark"
                      ? "rgb(26, 41, 39)"
                      : "rgb(226, 241, 239)"
                    : "rgb(255 25 25 / 65%)",
                color:
                  app?.price === "0"
                    ? theme === "dark"
                      ? "#88c0a6"
                      : "rgb(108 185 173)"
                    : "#fff",
                textTransform: "capitalize",
                boxShadow: "0 0 3px 0px #99bbaf",
              }}
            >
              {app.price === "0" ? t("free") : `${app.price} $`}
            </Button>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="column" gap={".7rem"} alignItems={"center"}>
          <Typography sx={{ paddingBottom: "1rem" }}>
            {lang === "en" ? app.description : app.faDescription}
          </Typography>
          {["download", "config", "video"].map((type) => (
            <Button
              key={type}
              variant="contained"
              href={
                type === "download"
                  ? app.downloadLink
                  : type === "config"
                  ? app.configLink
                  : app.videoLink
              }
              sx={{
                ...getButtonStyles(type, theme),
                backdropFilter: "blur(8px)",
                borderRadius: "8px !important",
                width: "85%",
                border: theme === "dark" ? "1px solid #ffffff42" : "",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {type === "download" ? (
                <ArrowCircleDownIcon fontSize="large" />
              ) : type === "config" ? (
                <AddCircleOutlineIcon fontSize="large" />
              ) : (
                <PlayCircleFilledWhiteOutlinedIcon fontSize="large" />
              )}
              {t(
                type === "download"
                  ? "download"
                  : type === "config"
                  ? "configuration"
                  : "watchVideo"
              )}
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </Button>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

const Apps = () => {
  const { t, i18n } = useTranslation();
  const [operatingSystems, setOperatingSystems] = useState([]);
  const lang = i18n.language;
  const theme = useTheme().palette.mode;

  useEffect(() => {
    fetch("/os.json")
      .then((response) => response.json())
      .then((data) => setOperatingSystems(data.operatingSystems));
  }, []);

  return (
    <Grid justifyContent="space-between" sx={{ paddingY: "1rem" }} xs={11} item>
      <Accordion
        sx={{
          direction: lang === "fa" ? "rtl" : "ltr",
          background:
            theme === "light"
              ? "rgba(85, 95, 163, 0.65)"
              : "rgba(34, 40, 85, 0.85)",
          borderRadius: "16px",
          paddingY: ".4rem",
          color: "#fff",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ArrowDropDownIcon fontSize="large" sx={{ color: "#fff" }} />
          }
          aria-controls="panel-os-content"
          id="panel-os-header"
        >
          <Grid container alignItems="center" justifyContent={"space-around"}>
            <Grid item xs={1} display="flex" justifyContent="center">
              <DevicesOtherIcon
                fontSize="large"
                sx={{ marginInlineStart: "1rem" }}
              />
            </Grid>
            <Grid item xs={10} display="flex" justifyContent="center">
              <Typography>{t("operatingSystems")}</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          {operatingSystems.map((os, index) => (
            <Accordion key={index} sx={getAccordionStyles(theme)}>
              <AccordionSummary
                expandIcon={
                  <ArrowDropDownIcon
                    sx={{ color: theme === "light" ? "#000" : "#fff" }}
                  />
                }
                aria-controls={`panel-${os.name}-content`}
                id={`panel-${os.name}-header`}
              >
                <Grid container alignItems="center">
                  <Grid item xs={1} display="flex" justifyContent="center">
                    <img
                      src={os.osLogo}
                      alt={`${os.name} logo`}
                      style={{
                        width: "30px",
                        height: "auto",
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = errorLogo;
                      }}
                    />
                  </Grid>
                  <Grid item xs={10} display="flex" justifyContent="center">
                    <Typography>
                      {lang === "en" ? os.engName : os.name}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                {os.apps.map((app, appIndex) =>
                  renderAppAccordion(app, appIndex, lang, theme, t)
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default Apps;
