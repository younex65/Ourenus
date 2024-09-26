import { Grid, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import BoxS from "./Box";
import CircularProgressWithLabel from "./CircularWithValueLabel";
import { useTranslation } from "react-i18next";

const UsageBox = ({ type, value, total, remaining }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const getTypographyGradient = (v) => {
    if (v === Infinity) {
      return `linear-gradient(0deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`;
    } else if (v <= 30 || v > 100) {
      return `linear-gradient(0deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`;
    } else if (v <= 70) {
      return `linear-gradient(0deg, ${theme.palette.warning.main}, ${theme.palette.warning.dark})`;
    } else {
      return `linear-gradient(0deg, ${theme.palette.error.main}, ${theme.palette.error.dark})`;
    }
  };

  const labels = {
    usage: {
      title: t("remaining_volume"),
      totaltitle: t("initial_volume"),
      remaining: remaining,
      total: total,
      unit: t("gigabytes"),
    },
    time: {
      title: t("remaining_time"),
      totaltitle: t("initial_time"),
      remaining: remaining,
      total: total,
      unit: t("days"),
    },
  };

  const {
    title,
    remaining: remainingLabel,
    total: totalLabel,
    totaltitle: totaltitle,
  } = labels[type];

  return (
    <BoxS>
      <Grid item xs={4} display="flex" justifyContent="center">
        <CircularProgressWithLabel value={value} type={type} />
      </Grid>

      <Grid
        item
        xs={type === "usage" ? 4 : 8}
        display="flex"
        flexDirection={"column"}
        textAlign={"center"}
        sx={{ gap: ".3rem" }}
      >
        <Typography variant="p" component="div" fontSize={"small"}>
          {title}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            background: getTypographyGradient(value),
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            fontWeight: "600",
          }}
          fontFamily={"vazirmatn"}
          fontWeight={"lighter"}
        >
          {remainingLabel}
        </Typography>
      </Grid>
      {type === "usage" && (
        <Grid
          item
          xs={4}
          display="flex"
          flexDirection={"column"}
          textAlign={"center"}
          sx={{ gap: ".3rem" }}
        >
          <Typography
            variant="p"
            component="div"
            fontSize={"small"}
            fontFamily={"vazirmatn"}
          >
            {totaltitle}
          </Typography>
          <Typography variant="h6" component="div" fontFamily={"vazirmatn"}>
            {totalLabel}
          </Typography>
        </Grid>
      )}
    </BoxS>
  );
};

UsageBox.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  total: PropTypes.string,
  remaining: PropTypes.string.isRequired,
};

export default UsageBox;
