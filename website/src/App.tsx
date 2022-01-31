import React, { useState } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import HomePage from "./HomePage";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

function App() {
  const [DarkMode, setDarkMode] = useState(true);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: DarkMode ? "dark" : "light",
        },
      }),
    [DarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
