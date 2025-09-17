import React, { useState, type ReactNode } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
} from '@mui/icons-material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { deepPurple } from '@mui/material/colors';
import { Link, useLocation } from 'react-router-dom';
import ChitChatLogo from "../assets/chit_chat_logo.svg"

// Drawer width constant
const drawerWidth = 240;

interface ResponsiveSidebarProps {
  children: ReactNode;
}

const ResponsiveSidebar: React.FC<ResponsiveSidebarProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(true);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <List sx={{ mt: { md: 2 } }}>
      <ListItem disablePadding>
        <ListItemButton
          component={Link}
          to="/community"
          selected={location.pathname === '/community'}
          sx={{
            '&.Mui-selected': {
              backgroundColor: deepPurple[100],
              color: deepPurple[700],
              '& .MuiListItemIcon-root': { color: deepPurple[700] },
            },
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Community" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          component={Link}
          to="/ai"
          selected={location.pathname === '/ai'}
          sx={{
            '&.Mui-selected': {
              backgroundColor: deepPurple[100],
              color: deepPurple[700],
              '& .MuiListItemIcon-root': { color: deepPurple[700] },
            },
          }}
        >
          <ListItemIcon>
            <AutoAwesomeIcon />
          </ListItemIcon>
          <ListItemText primary="AI" />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {!isLargeScreen ? (
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            background: deepPurple[700],
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Chit Chat
            </Typography>
          </Toolbar>
        </AppBar>
      ) : null}

      {/* Side drawer navigation */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {/* Mobile drawer (temporary) */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <img src={ChitChatLogo} className="logo" alt="Chit Chat logo" />
          {drawerContent}
        </Drawer>

        {/* Desktop drawer (permanent) */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <img
            src={ChitChatLogo}
            alt="Chit Chat logo"
            style={{ width: '60%', height: 'auto' }}
          />
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* Push content below AppBar */}
        <Box sx={theme.mixins.toolbar} />
        {children}
      </Box>
    </Box>
  );
};

export default ResponsiveSidebar;
