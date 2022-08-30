import * as React from 'react';
import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  Divider,
  Drawer,
  AppBar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import { NavLink as RouterLink } from 'react-router-dom';
import TodoPage from 'pages/todo-page';

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: 200,
    }),
  }),
);

const pages = [
  { text: 'Dashboard', to: '/' },
  { text: 'Todo', to: '/todo' },
  { text: 'Kanban', to: '/kanban' },
  { text: 'Calendar', to: '/calendar' },
];

const Link = styled(RouterLink)(({ theme }) => ({
  display: 'flex',
  textDecoration: 'none',
  color: '#323130',
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 10,
  padding: 10,
  borderRadius: 5,

  '&.active': {
    color: '#3949ab',
    backgroundColor: theme.palette.primary.light,
  },
  ':hover': {
    color: '#3949ab',
    backgroundColor: theme.palette.primary.light,
  },
}));

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
              <DoubleArrowOutlinedIcon sx={{ fontSize: 30 }} />
              Planner
            </Typography>
            <IconButton sx={{ ml: 4, color: 'white' }} onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2,
          }}
          >
            <IconButton sx={{ p: 0 }}>
              <NotificationsIcon sx={{ fontSize: 24, color: 'white' }} />
            </IconButton>
            <IconButton sx={{ p: 0 }}>
              <SettingsIcon sx={{ fontSize: 24, color: 'white' }} />
            </IconButton>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Gytis Paulauskas" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Divider />
        <Box sx={{ pt: 10 }}>
          {pages.map(({ text, to }) => (
            <Link key={text} to={to}>
              {text}
            </Link>
          ))}
        </Box>
        <Divider />
      </Drawer>
      <Main open={isDrawerOpen}>
        <Toolbar />
        <TodoPage />
      </Main>
    </Box>
  );
};

export default Navbar;
