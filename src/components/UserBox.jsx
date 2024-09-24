import { Button, Grid, useTheme } from "@mui/material";
import BoxS from "./Box";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import { useTranslation } from "react-i18next";

const UserBox = () => {
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
        <SupervisedUserCircleIcon
          fontSize="large"
          sx={{
            color: theme.palette.mode === "dark" ? "#c0c0c0" : "#53488d",
            width: "100%",
            height: "auto",
          }}
        />
      </Grid>
      <Grid
        item
        xs={9}
        display="flex"
        flexDirection={"column"}
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
            paddingRight: ".4rem",
          }}
          xs={12}
          textAlign={"start"}
        >
          Erfan Jab
        </Grid>
        <Grid item display={"flex"} xs={12} justifyContent={"space-around"}>
          <Grid xs={5} textAlign={"center"} item>
            <Button
              sx={{
                borderRadius: "50px",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgb(26, 41, 39)"
                    : "rgb(226 241 239)",
                color:
                  theme.palette.mode === "dark"
                    ? "#88c0a6"
                    : "rgb(108 185 173)",
                fontFamily: "'Vazirmatn', sans-serif",
                textTransform: "capitalize",
                boxShadow: "0 0 3px 0px #99bbaf",
                width: "90%",
                fontWeight: "bold",
              }}
            >
              {t("status.active")}
            </Button>
          </Grid>
          <Grid item xs={7} textAlign={"center"}>
            <Button
              sx={{
                borderRadius: "50px",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgb(25, 40, 160)"
                    : "rgb(50 77 221)",
                paddingX: ".5rem",
                color: "#fff",
                backdropFilter: "blur(16px)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                fontFamily: "'Vazirmatn', sans-serif",
                textTransform: "capitalize",
                gap: "1rem",
                width: "90%",
                fontWeight: "lighter",
              }}
            >
              <QuestionAnswerOutlinedIcon />
              {t("support")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </BoxS>
  );
};

export default UserBox;
