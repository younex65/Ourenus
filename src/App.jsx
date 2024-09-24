import { Grid, ThemeProvider, CssBaseline } from "@mui/material";
import LogoBox from "./components/LogoBox";
import UserBox from "./components/UserBox";
import UsageBox from "./components/UsageBox";
import Apps from "./components/Apps";
import SwitchButtons from "./components/SwitchButtons";
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import getTheme from "./theme/Theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { i18n } = useTranslation();

  const theme = useMemo(() => getTheme(isDarkMode), [isDarkMode]);

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        justifyContent={"center"}
        sx={{
          fontFamily: "'Vazirmatn', sans-serif",
        }}
      >
        <SwitchButtons
          setIsDarkMode={setIsDarkMode}
          handleLanguageChange={handleLanguageChange} // Pass the function to SwitchButtons
        />
        <LogoBox />
        <UserBox />
        <UsageBox type="usage" value={30} total={30} remaining={950} />
        <UsageBox type="time" value={75} total={30} remaining={27} />
        <Apps />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
