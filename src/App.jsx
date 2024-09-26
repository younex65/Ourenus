import { Grid, ThemeProvider, CssBaseline } from "@mui/material";
import LogoBox from "./components/LogoBox";
import UserBox from "./components/UserBox";
import UsageBox from "./components/UsageBox";
import Apps from "./components/Apps";
import SwitchButtons from "./components/SwitchButtons";
import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import getTheme from "./theme/Theme";
import Configs from "./components/Configs";
import LanguageIcon from "@mui/icons-material/Language";
import DangerousIcon from "@mui/icons-material/Dangerous";
import GetInfoRequest from "./utils/GetInfoRequest";
import { ClipLoader } from "react-spinners";
import {
  calculateRemainingTime,
  calculateUsedTimePercentage,
  formatTraffic,
} from "./utils/Helper";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const theme = useMemo(() => getTheme(isDarkMode), [isDarkMode]);

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    GetInfoRequest.getInfo()
      .then((res) => {
        setData(res?.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const renderConfig = (
    title,
    icon,
    configs,
    background,
    iconColor,
    border,
    btnStyle
  ) => (
    <Configs
      title={title}
      style={{
        direction: lang === "fa" ? "rtl" : "ltr",
        background,
        backdropFilter: "blur(8px)",
        boxShadow: "0 0 30px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        border: border,
        borderRadius: "16px",
        paddingY: ".4rem",
        color: iconColor === "#fff" ? "#fff" : "#000",
      }}
      iconColor={iconColor}
      icon={icon}
      configs={configs}
      btnStyle={btnStyle}
    />
  );

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
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <ClipLoader size={50} color="#3498db" loading={loading} />
          </div>
        ) : (
          data && (
            <>
              <SwitchButtons
                setIsDarkMode={setIsDarkMode}
                handleLanguageChange={handleLanguageChange}
              />
              <LogoBox />
              <UserBox data={data} />
              <UsageBox
                type="usage"
                value={Number(
                  ((data?.used_traffic / data?.data_limit) * 100).toFixed(2)
                )}
                total={formatTraffic(data?.data_limit, t)}
                remaining={
                  data?.data_limit === null
                    ? formatTraffic(null, t)
                    : formatTraffic(data?.data_limit - data?.used_traffic, t)
                }
              />
              <UsageBox
                type="time"
                value={calculateUsedTimePercentage(data?.expire)}
                remaining={calculateRemainingTime(data?.expire, t)}
              />
              <Apps />
              {renderConfig(
                t("configsList"),
                <LanguageIcon
                  fontSize="large"
                  sx={{ marginInlineStart: "1rem" }}
                />,
                data?.links,
                theme === "light"
                  ? "rgba(255, 255, 255, 0.65)"
                  : "rgba(255, 255, 255, 0.85)",
                theme === "light" ? "#fff" : "#000",
                "1px solid #ffffff6b",
                {
                  cursor: "pointer",
                  borderRadius: "30%",
                  padding: ".3rem",
                  background: "#c7becb61",
                  "&:hover": {
                    background: "#887890",
                  },
                }
              )}
              {renderConfig(
                t("emergancyList"),
                <DangerousIcon
                  fontSize="large"
                  sx={{ marginInlineStart: "1rem" }}
                />,
                data?.links,
                theme === "light"
                  ? "rgba(237, 114, 113, 0.65)"
                  : "rgb(225 45 44 / 68%)",
                theme === "light" ? "#000" : "#fff",
                "1px solid #ffffff6b",
                {
                  cursor: "pointer",
                  borderRadius: "30%",
                  padding: ".3rem",
                  background: "#272323",
                  "&:hover": {
                    background: "#4e0808",
                  },
                }
              )}
            </>
          )
        )}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
