import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import { useTranslation } from "react-i18next";

const renderAppAccordion = (app, index, lang) => (
  <Accordion key={index}>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls={`panel-${app.name}-content`}
      id={`panel-${app.name}-header`}
    >
      <Grid container alignItems="center">
        <Grid item xs={1} display="flex" justifyContent="center">
          <img
            src={app.logo}
            alt={`${app.name} logo`}
            style={{ width: "30px", height: "30px" }}
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

  useEffect(() => {
    fetch("/os.json")
      .then((response) => response.json())
      .then((data) => setOperatingSystems(data.operatingSystems));
  }, []);

  return (
    <Grid justifyContent="space-between" sx={{ paddingY: "1rem" }} xs={11} item>
      <Accordion sx={{ direction: "rtl" }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel-os-content"
          id="panel-os-header"
        >
          <Grid container alignItems="center">
            <Grid item xs={1} display="flex" justifyContent="center">
              <DevicesOtherIcon />
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
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls={`panel-${os.name}-content`}
                id={`panel-${os.name}-header`}
              >
                <Grid container alignItems="center">
                  <Grid item xs={1} display="flex" justifyContent="center">
                    <img
                      src={os.osLogo}
                      alt={`${os.name} logo`}
                      style={{ width: "30px", height: "30px" }}
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
                  renderAppAccordion(app, appIndex, lang)
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
