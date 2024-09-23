import { Box, Grid } from "@mui/material";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const LogoBox = () => {
  return (
    <Grid container justifyContent="space-around" xs={11}>
      <Box
        sx={{
          border: "1px",
          borderRadius: "16px",
          padding: "1rem",
          display: "flex",
          alignItems: "center", // Align items vertically in the center
          justifyContent: "space-between",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
          backdropFilter: "blur(8px)", // Blur effect for glassmorphism
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow
          direction: "rtl", // Right-to-left direction
          width: "100%"
        }}
      >
        <Grid item xs={3} display="flex" justifyContent="center">
          <SupervisedUserCircleIcon fontSize="large" sx={{ color: "#000" }} />
        </Grid>
        <Grid item xs={9} display="flex" justifyContent="center" sx={{ color: "#000", fontSize: "1.2rem" }}>
          پنل کاربری مرزبان
        </Grid>
      </Box>
    </Grid>
  );
};

export default LogoBox;
