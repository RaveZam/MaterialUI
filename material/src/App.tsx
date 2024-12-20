import { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Button from "@mui/material/Button";
import Sidebar from "./components/Sidebar";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
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
