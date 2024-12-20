import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";

const collapsedWidth = 70;
const expandedWidth = 240;

const Sidebar: React.FunctionComponent<{
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ darkMode, setDarkMode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <IconButton color="inherit" onClick={toggleSidebar}>
            {isCollapsed ? <MenuIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: isCollapsed ? collapsedWidth : expandedWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isCollapsed ? collapsedWidth : expandedWidth,
            boxSizing: "border-box",
            padding: 0,
            overflow: "hidden",
            transition: "width 0.3s",
          },
        }}
      >
        <Toolbar />
        <List>
          {["Home", "Analytics", "Reports", "Settings"].map((text) => (
            <ListItemButton key={text}>
              <ListItemText
                primary={text}
                sx={{ opacity: isCollapsed ? 0 : 1 }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: isCollapsed ? `${collapsedWidth}px` : `${expandedWidth}px`,
          transition: "margin-left 0.3s",
        }}
      >
        <Toolbar />
        <div className="mr-16 text-center">
          <Typography variant="h4">Main Content</Typography>
          <p>Welcome to your dashboard!</p>
          <Button variant="contained" onClick={() => setDarkMode(!darkMode)}>
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Sidebar;
