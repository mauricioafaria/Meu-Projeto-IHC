import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider
} from "@material-ui/core";

/* cores */
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import Rotas from "./rotas";

let theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red
  }
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Rotas />
    </MuiThemeProvider>
  );
}

export default App;
