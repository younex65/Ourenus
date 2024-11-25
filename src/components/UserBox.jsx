import { Button, Grid, useTheme } from "@mui/material";
import BoxS from "./Box";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const UserBox = ({ data }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const getStatusBackgroundColor = (status) => {
    switch (status) {
      case "active":
        return theme.colors.userBox.statusBtn.btn.active[theme.palette.mode];
      case "expired":
        return theme.colors.userBox.statusBtn.btn.expired[theme.palette.mode];
      case "on_hold":
        return theme.colors.userBox.statusBtn.btn.onHold[theme.palette.mode];
      case "disabled":
        return theme.colors.userBox.statusBtn.btn.disabled[theme.palette.mode];
      default:
        return "transparent";
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case "active":
        return theme.colors.userBox.statusBtn.text.active[theme.palette.mode];
      case "expired":
        return theme.colors.userBox.statusBtn.text.expired[theme.palette.mode];
      case "on_hold":
        return theme.colors.userBox.statusBtn.text.onHold[theme.palette.mode];
      case "disabled":
        return theme.colors.userBox.statusBtn.text.disabled[theme.palette.mode];
      default:
        return theme.palette.text.primary;
    }
  };

  return (
    <BoxS>
      <Grid
        item
        xs={3.5}
        display="flex"
        justifyContent="center"
        sx={{ padding: ".3rem", paddingX: ".5rem" }}
      >
        <SupervisedUserCircleIcon
          fontSize="large"
          sx={{
            color: theme.colors.userBox.logoColor[theme.palette.mode],
            width: "100%",
            height: "auto",
          }}
        />
      </Grid>
      <Grid
        item
        xs={8.5}
        display="flex"
        flexDirection={"column"}
        sx={{
          color: theme.colors.BWColor[theme.palette.mode],
          fontSize: "1.2rem",
        }}
      >
        <Grid
          item
          sx={{
            color: theme.colors.BWColor[theme.palette.mode],
            fontSize: "1.2rem",
            paddingBottom: ".7rem",
            paddingRight: ".4rem",
            fontWeight: 500,
          }}
          xs={12}
          textAlign={"start"}
        >
          {data?.username}
        </Grid>
        <Grid item display={"flex"} xs={12} justifyContent={"space-around"}>
          <Grid xs={5} textAlign={"center"} item>
            <Button
              sx={{
                borderRadius: "50px",
                backgroundColor: getStatusBackgroundColor(data?.status),
                color: getStatusTextColor(data?.status),
                textTransform: "capitalize",
                boxShadow: "0 0 3px 0px #99bbaf",
                width: "90%",
                fontWeight: "bold",
                textWrap: "nowrap",
                fontSize: "small",
              }}
            >
              {t(`status.${data?.status}`)}
            </Button>
          </Grid>
          <Grid item xs={7} textAlign={"center"}>
            <Button
              onClick={() => window.open(import.meta.env.VITE_SUPPORT_URL)}
              sx={{
                borderRadius: "50px",
                backgroundColor:
                  theme.colors.userBox.supportBox[theme.palette.mode],
                paddingX: ".5rem",
                color: "#fff",
                backdropFilter: "blur(16px)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
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

UserBox.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default UserBox;
