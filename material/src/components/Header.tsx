import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header: React.FunctionComponent<{
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
  isCollapsed: boolean;
}> = ({ darkMode, setDarkMode, toggleSidebar, isCollapsed }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ padding: "12px" }} disableGutters={true}>
        <IconButton
          sx={{ paddingRight: "16px" }}
          color="inherit"
          onClick={toggleSidebar}
        >
          {isCollapsed ? <MenuIcon /> : <ChevronLeftIcon />}
        </IconButton>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Home Page
        </Typography>
        <IconButton onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon className="text-white" />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
