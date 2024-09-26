import { Button, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const CapsuleButton = ({ isActive, onClick, icon }) => {
  const theme = useTheme(); 

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
            ? "rgb(200, 200, 255)"
            : "rgb(82, 88, 125)"
          : theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.45)"
          : "rgba(121, 124, 146, 0.45)",
        fontFamily: "'Vazirmatn', sans-serif",
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
