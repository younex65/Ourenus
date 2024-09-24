import { Button, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const CapsuleButton = ({ isActive, onClick, icon }) => {
  const theme = useTheme(); // Access the current theme

  return (
    <Button
      onClick={onClick}
      fullWidth
      sx={{
        borderRadius: "50px",
        paddingX: "1.5rem",
        backgroundColor: "transparent",
        color: isActive
          ? theme.palette.mode === "dark"
            ? "rgb(200, 200, 255)" // Active color for dark mode
            : "rgb(82, 88, 125)" // Active color for light mode
          : theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.45)" // Inactive color for dark mode
          : "rgba(121, 124, 146, 0.45)", // Inactive color for light mode
        fontFamily: "'Vazirmatn', sans-serif", // Use the Farsi font
        textTransform: "capitalize",
      }}
    >
      {icon}
    </Button>
  );
};

CapsuleButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
};

export default CapsuleButton;
