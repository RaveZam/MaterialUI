import { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#90caf9" : "#3066be", // Replace with your desired primary color
      },
      secondary: {
        main: darkMode ? "#f48fb1" : "#03a9f4", // Replace with your desired secondary color
      },
      background: {
        default: darkMode ? "#121212" : "#f5f5f5", // Custom background for light/dark modes
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#ffffff" : "#000000",
        secondary: darkMode ? "#bbbbbb" : "#666666",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar setDarkMode={setDarkMode} darkMode={darkMode} />
    </ThemeProvider>
  );
}

export default App;
