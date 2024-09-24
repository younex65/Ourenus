import { Grid, useTheme } from "@mui/material";
import BoxS from "./Box";
import { useTranslation } from "react-i18next";

const LogoBox = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <BoxS>
      <Grid
        item
        xs={3}
        display="flex"
        justifyContent="center"
        sx={{ padding: ".3rem", paddingX: ".5rem" }}
      >
        <img
          src="/vite.svg"
          alt="Logo"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid
        item
        xs={9}
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        sx={{
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
          fontSize: "1.2rem",
        }}
      >
        <Grid
          item
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            fontSize: "1.2rem",
            paddingBottom: ".7rem",
          }}
        >
          {t("userPanelTitle")}
        </Grid>
        <Grid
          sx={{
            color: theme.palette.mode === "dark" ? "#ccc" : "#545454",
            fontSize: ".9rem",
          }}
        >
          {t("userPanelWelcome")}
        </Grid>
      </Grid>
    </BoxS>
  );
};

export default LogoBox;
