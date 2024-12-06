import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GavelIcon from '@mui/icons-material/Gavel';
import PolicyIcon from '@mui/icons-material/Policy';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';

const drawerWidth = 240;
const theme = createTheme();

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: "CLEAR__USER" });
    history("/login");
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const iconMapping = {
    '/privacyPolicy': <PolicyIcon />,
    '/masterservices': <DescriptionIcon />,
    '/advisionbusinessPrivacy': <PolicyIcon />,
    '/instructorterms': <GavelIcon />,
    '/affiliateterms': <AssignmentIcon />,
    '/termsofuse': <GavelIcon />,
    '/pricingpromotional': <DescriptionIcon />,
    '/advisionsproterms': <AssignmentIcon />,
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const drawer = (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <img src="/assets/logo10.png" alt="Logo" style={{ height: '35px' }} />
      </Box>
      <div className="app-sidebar-inner mt-4">
        {isMobile && (
          <div className="option">
            <NavLink 
              to="/" 
              activeClassName="active-link vertical-nav-menu" 
              style={{ textDecoration: 'none', color: '#007bff' }}
            >
              <i className="fa-solid fa-home menu-icon"></i>
              Home
            </NavLink>
          </div>
        )}
        <div className="option">
          <NavLink 
            to="/privacyPolicy" 
            activeClassName="active-link" 
            className="nav-link-custom"
            style={{ textDecoration: 'none', color: '#007bff' }}
          >
            {iconMapping['/privacyPolicy']}
            &nbsp; Privacy And Policy
          </NavLink>
        </div>

        <div className="option">
          <NavLink 
            to="/masterservices" 
            activeClassName="active-link" 
            className="nav-link-custom"
            style={{ textDecoration: 'none', color: '#007bff' }}
          >
            {iconMapping['/masterservices']}
            &nbsp; Master Services Agreement
          </NavLink>
        </div>

        <div className="option">
          <NavLink 
            to="/advisionbusinessPrivacy" 
            activeClassName="active-link" 
            className="nav-link-custom"
            style={{ textDecoration: 'none', color: '#007bff' }}
          >
            {iconMapping['/advisionbusinessPrivacy']}
            &nbsp; Advisions Business Privacy Statement
          </NavLink>
        </div>

        <div className="option">
          <NavLink 
            to="/instructorterms" 
            activeClassName="active-link" 
            className="nav-link-custom"
            style={{ textDecoration: 'none', color: '#007bff' }}
          >
            {iconMapping['/instructorterms']}
            &nbsp; Instructor Terms
          </NavLink>
        </div>

        <div className="option">
          <NavLink 
            to="/affiliateterms" 
            activeClassName="active-link" 
            className="nav-link-custom"
            style={{ textDecoration: 'none', color: '#007bff' }}
          >
            {iconMapping['/affiliateterms']}
            &nbsp; Affiliate Terms & Conditions
          </NavLink>
        </div>

        <div className="option">
          <NavLink 
            to="/termsofuse" 
            activeClassName="active-link" 
            className="nav-link-custom"
            style={{ textDecoration: 'none', color: '#007bff' }}
          >
            {iconMapping['/termsofuse']}
            &nbsp; Terms of Use
          </NavLink>
        </div>

        <div className="option">
          <NavLink 
            to="/pricingpromotional" 
            activeClassName="active-link" 
            className="nav-link-custom"
            style={{ textDecoration: 'none', color: '#007bff' }}
          >
            {iconMapping['/pricingpromotional']}
            &nbsp; Pricing & Promotions Policy
          </NavLink>
        </div>

        <div className="option">
          <NavLink 
            to="/advisionsproterms" 
            activeClassName="active-link" 
            className="nav-link-custom"
            style={{ textDecoration: 'none', color: '#007bff' }}
          >
            {iconMapping['/advisionsproterms']}
            &nbsp; Advisions Business Pro Terms & Conditions
          </NavLink>
        </div>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: 'white',
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon color="primary" />
              </IconButton>
              <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
                <img src="/assets/logo10.png" alt="Logo" style={{ height: '30px' }} />
              </Box>
              {!isMobile && (
                <NavLink 
                  to="/" 
                  style={{ textDecoration: 'none', color: '#007bff', marginLeft: '10px', fontSize: '20px' }}
                >
                  Home
                </NavLink>
              )}
            </Box>

            <Typography variant="h6" noWrap component="div" sx={{ display: 'flex', alignItems: 'center' }}>
              {userData ? (
                <div>
                  <IconButton 
                    onClick={handleClick} 
                    sx={{ color: '#007bff', fontSize: '18px', display: 'flex', alignItems: 'center' }}
                  >
                    <Typography variant="body1" sx={{ marginRight: '8px' }}>
                      {userData.userName}
                    </Typography>
                    <AccountCircleIcon sx={{ fontSize: '24px' }} />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                      sx: {
                        minWidth: 90,
                      },
                    }}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}
                >
                  Login
                </Link>
              )}
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            onTransitionEnd={handleDrawerTransitionEnd}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
