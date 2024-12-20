import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawercomponent from "./Drawercomponent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Header from "./Header";

const collapsedWidth = 60;
const expandedWidth = 220;

const Sidebar: React.FunctionComponent<{
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ darkMode, setDarkMode }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleSidebar={toggleSidebar}
        isCollapsed={isCollapsed}
      />
      <Drawercomponent isCollapsed={isCollapsed} />
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
        </div>
      </Box>
    </Box>
  );
};

export default Sidebar;
