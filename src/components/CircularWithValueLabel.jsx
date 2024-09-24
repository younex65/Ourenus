import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { useId } from "react";
import { useTheme } from "@mui/material/styles";

function CircularProgressWithLabel({ value }) {
  const theme = useTheme();
  const gradientId = useId();

  const createGradient = (colors) => (
    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
      {colors.map((color, index) => (
        <stop
          key={index}
          offset={`${index * 100}%`}
          style={{ stopColor: color }}
        />
      ))}
    </linearGradient>
  );

  const getStyles = (value) => {
    if (value <= 35) {
      return {
        gradientColors: theme.colors.gradients.low.colors,
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(255, 102, 102, 0.2)"
            : theme.colors.gradients.low.background,
        typographyGradient:
          "linear-gradient(0deg, rgba(255, 102, 102, 1), rgba(153, 0, 0, 1))",
      };
    } else if (value <= 70) {
      return {
        gradientColors: theme.colors.gradients.medium.colors,
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 102, 0.2)"
            : theme.colors.gradients.medium.background,
        typographyGradient:
          "linear-gradient(0deg, rgba(235, 249, 94, 1), rgba(255, 165, 0, 1))",
      };
    } else {
      return {
        gradientColors: theme.colors.gradients.high.colors,
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(144, 238, 144, 0.2)"
            : theme.colors.gradients.high.background,
        typographyGradient:
          "linear-gradient(0deg, rgba(144, 238, 144, 1), rgba(0, 100, 0, 1))",
      };
    }
  };

  const { gradientColors, backgroundColor, typographyGradient } =
    getStyles(value);

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={85}
        sx={{
          color: "transparent",
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
            stroke: `url(#${gradientId})`,
          },
        }}
      />
      <CircularProgress
        variant="determinate"
        size={85}
        value={100}
        sx={{
          position: "absolute",
          zIndex: -1,
          color: backgroundColor,
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          fontSize="larger"
          component="div"
          sx={{
            background: typographyGradient,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>

      <svg width="0" height="0">
        <defs>{createGradient(gradientColors)}</defs>
      </svg>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CircularProgressWithLabel;
