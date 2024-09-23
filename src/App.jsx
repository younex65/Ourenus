import { Grid } from "@mui/material";
import SwitchButtons from "./components/RadioButtons";
import "./App.css";
import LogoBox from "./components/LogoBox";

function App() {
  return (
    <>
      <Grid container justifyContent={"center"}>
        <SwitchButtons />
        <LogoBox />
      </Grid>
    </>
  );
}

export default App;
