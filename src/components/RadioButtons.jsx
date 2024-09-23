import { Button, Grid } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';

const CapsuleButton = ({ label, isActive, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant={isActive ? "contained" : ""}
      fullWidth
      sx={{
        borderRadius: "50px",
        paddingX: "1.5rem",
        backgroundColor: isActive ? "rgba(137, 103, 179, 0.6)" : "rgba(255, 255, 255, 0.3)",
        color: isActive ? "#000" : "#000",
        backdropFilter:isActive ?"blur(8px)" : "",
        boxShadow: isActive ? "0 4px 10px rgba(0, 0, 0, 0.2)" : "",
      }}
    >
      {label}
    </Button>
  );
};

CapsuleButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const RadioButtons = () => {
  const [language, setLanguage] = useState("فارسی");
  const [theme, setTheme] = useState("روشن");

  return (
    <Grid container justifyContent="space-between" sx={{ paddingY: "1rem" }} xs={11}>
      {/* Language Buttons */}
      <Grid item xs={5} sm={4} md={3} sx={{ 
        backgroundColor: "rgba(255, 255, 255, 0.2)", 
        borderRadius: "50px", 
        padding: ".4rem", 
        display: "flex", 
        justifyContent: "space-between", 
        backdropFilter: "blur(10px)", 
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}>
        <CapsuleButton
          label="فارسی"
          isActive={language === "فارسی"}
          onClick={() => setLanguage("فارسی")}
        />
        <CapsuleButton
          label="English"
          isActive={language === "English"}
          onClick={() => setLanguage("English")}
        />
      </Grid>

      {/* Theme Buttons */}
      <Grid item xs={5} sm={4} md={3} sx={{ 
        backgroundColor: "rgba(255, 255, 255, 0.2)", 
        borderRadius: "50px", 
        padding: ".4rem", 
        display: "flex", 
        justifyContent: "space-between", 
        backdropFilter: "blur(10px)", 
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}>
        <CapsuleButton
          label="روشن"
          isActive={theme === "روشن"}
          onClick={() => setTheme("روشن")}
        />
        <CapsuleButton
          label="تیره"
          isActive={theme === "تیره"}
          onClick={() => setTheme("تیره")}
        />
      </Grid>
    </Grid>
  );
};

export default RadioButtons;
