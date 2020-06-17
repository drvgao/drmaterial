import React, { useState } from "react";
import configureStore from "./store";

import {
  Paper,
  createMuiTheme,
  ThemeProvider,
  Switch,
} from "@material-ui/core";
import { Provider } from "react-redux";

import MaterialComps from "./apps/materials/index";
import DogView from "./apps/dogs/component/DogView";

const store = configureStore();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    typography: {
      fontFamily: `"Roboto", "Open Sans", "Helvetica", "Arial", sans-serif`,
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#ec407a",
      },
      secondary: {
        main: "#ff80ab",
      },
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "100vh" }}>
          <MaterialComps />
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <DogView />
        </Paper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
