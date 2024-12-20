import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Toolbar from "@mui/material/Toolbar";

const Drawercomponent: React.FC<{ isCollapsed: boolean }> = ({
  isCollapsed,
}) => {
  const collapsedWidth = 60;
  const expandedWidth = 220;

  return (
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
        {[
          { icon: <HomeIcon />, label: "Home" },
          { icon: <DashboardIcon />, label: "Dashboard" },
        ].map(({ icon, label }) => (
          <ListItemButton key={label} onClick={() => console.log(label)}>
            <ListItemIcon sx={{ minWidth: isCollapsed ? 0 : 40 }}>
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={label}
              sx={{ opacity: isCollapsed ? 0 : 1 }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Drawercomponent;
