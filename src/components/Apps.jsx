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

const renderAppAccordion = (app, index, lang, theme) => (
  <Accordion
    key={index}
    sx={{
      marginBottom: ".8rem",
      background:
        theme === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
      color: theme === "light" ? "#000" : "#fff",
      "&.Mui-expanded": {
        background:
          theme === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.5)",
      },
    }}
  >
    <AccordionSummary
      expandIcon={
        <ArrowDropDownIcon
          sx={{ color: theme === "light" ? "#000" : "#fff" }}
        />
      }
      aria-controls={`panel-${app.name}-content`}
      id={`panel-${app.name}-header`}
    >
      <Grid container alignItems="center">
        <Grid item xs={1} display="flex" justifyContent="center">
          <img
            src={app.logo}
            alt={`${app.name} logo`}
            style={{ width: "30px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={10} display="flex" justifyContent="center">
          <Typography>{app.name}</Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginLeft: "10px" }}
          >
            {app.price}
          </Typography>
        </Grid>
      </Grid>
    </AccordionSummary>
    <AccordionDetails>
      <Grid container direction="column">
        <Typography>{app.description}</Typography>
        <Button
          variant="outlined"
          href={app.configLink}
          sx={{ marginTop: "10px" }}
        >
          {lang === "en" ? "Configuration" : "پیکربندی"}
        </Button>
        <Button
          variant="contained"
          href={app.downloadLink}
          sx={{ marginTop: "10px" }}
        >
          {lang === "en" ? "Download" : "دانلود"}
        </Button>
      </Grid>
    </AccordionDetails>
  </Accordion>
);

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
              <Typography fontFamily={"vazirmatn"}>
                {t("operatingSystems")}
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          {operatingSystems.map((os, index) => (
            <Accordion
              key={index}
              sx={{
                marginBottom: ".8rem",
                background:
                  theme === "light"
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgba(0, 0, 0, 0.6)",
                color: theme === "light" ? "#000" : "#fff",
                "&.Mui-expanded": {
                  background:
                    theme === "light"
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(0, 0, 0, 0.5)",
                },
              }}
            >
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
                      style={{ width: "30px", height: "auto" }}
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
                  renderAppAccordion(app, appIndex, lang, theme)
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
