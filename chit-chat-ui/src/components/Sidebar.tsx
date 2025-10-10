import {
  Home as HomeIcon,
  Menu as MenuIcon,
  Logout as LogoutIcon
} from "@mui/icons-material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React, { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import ChitChatLogo from "../assets/chit_chat_logo_v2_blue.png";

const drawerWidth = 260;

interface ResponsiveSidebarProps {
  children: ReactNode;
  onLogout: () => void;
}

const ResponsiveSidebar: React.FC<ResponsiveSidebarProps> = ({ children, onLogout }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { text: "Community", icon: <HomeIcon />, path: "/community" },
    { text: "AI Chat", icon: <AutoAwesomeIcon />, path: "/ai" },  
    { text: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
    { text: "Logout", icon: <LogoutIcon />, path: "/logout" }
  ];

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#F5F6FA",
        color: "#F5F6FA",
        pl: 2,
      }}
      data-testid="sidebar"
    >
      <Box>
        <img
          src={ChitChatLogo}
          alt="Chit Chat Logo"
          style={{ width: 150 }}
        />
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

      <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
        <List dense>
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                selected={location.pathname === item.path}
                component={Link}
                to={item.path}
                sx={{ borderRadius: 2 }}
                data-testid={
                  item.text === "Community" ? "nav-community" : "nav-ai"
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "black" }} />
              </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Mobile App Bar */}
      {!isLargeScreen && (
        <AppBar
          position="fixed"
          sx={{
            background: "#1e1e2f",
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              data-testid="sidebar-toggle"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 2 }}>
              Chit Chat
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        data-testid="sidebar"
      >
        {drawer}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        open
        data-testid="sidebar"
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "white",
          p: { xs: 2, md: 4 },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Box sx={theme.mixins.toolbar} />
        {children}
      </Box>
    </Box>
  );
};

export default ResponsiveSidebar;
