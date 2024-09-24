import { Box, Grid, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const BoxS = ({ children }) => {
  const theme = useTheme();

  return (
    <Grid item container justifyContent="space-around" xs={11}>
      <Box
        sx={{
          borderRadius: "16px",
          marginTop: "1rem",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(to right, rgba(34, 34, 34, 0.8), rgba(255, 255, 255, 0.1))"
              : "linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.1))",
          backdropFilter: "blur(8px)",
          boxShadow: "0 0 30px 10px rgba(0, 0, 0, 0.1)",
          direction: "rtl",
          width: "100%",
          border: "1px solid #ffffff6b",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};

BoxS.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxS;
