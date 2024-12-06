import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
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

const drawerWidth = 240;
const theme = createTheme();

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showOptions, setShowOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
    option8: false,
    option9: false,
  });

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
    // Dispatch logout action
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

  const toggleOptions = (option) => {
    setShowOptions({
      ...showOptions,
      [option]: !showOptions[option]
    });
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
            <NavLink to="/" activeClassName="active-link vertical-nav-menu">
              <i className="fa-solid fa-home menu-icon"></i>
              Home<span className='text-white'>svcerfe</span>
            </NavLink>
          </div>
        )}
  <div className="option" onClick={() => toggleOptions('option1')}>
              <NavLink to="/admin-dashboard" activeClassName="active-link vertical-nav-menu">
              <i className="fa-solid fa-tachometer-alt menu-icon"></i>
                Dashboard
              </NavLink>
            </div>
            <div className="option" onClick={() => toggleOptions('option1')}>
              <NavLink to="/metaData" activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-file-alt menu-icon"></i>
                Set Meta Data
              </NavLink>
            </div>
            <div className="option" onClick={() => toggleOptions('option2')}>
              <NavLink activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-book menu-icon"></i>
                Course Management
              </NavLink>
              {showOptions.option2 &&
                <div className="sub-options">
                  <NavLink to="/category" activeClassName="active-link">
                    <i className="fa-solid fa-tags"></i>
                    &nbsp; Category
                  </NavLink>
                  <NavLink to="/DashBoardCourse" activeClassName="active-link">
                    <i className="fa-solid fa-book-open"></i>
                    &nbsp; All Course
                  </NavLink>
                  <NavLink to="/chapter" activeClassName="active-link">
                  <i className="fa-solid fa-photo-film"></i>
                    &nbsp; Chapter
                  </NavLink>
                </div>
              }
            </div>
            <div className="option" onClick={() => toggleOptions('option3')}>
              <NavLink activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-users menu-icon"></i>
                Enroll Management
              </NavLink>
              {showOptions.option3 &&
                <div className="sub-options">
                  <NavLink to="/studentdash" activeClassName="active-link">
                    <i className="fa-solid fa-user"></i>
                    &nbsp; Student
                  </NavLink>
                  <NavLink to="/teacherdash" activeClassName="active-link">
                    <i className="fa-solid fa-chalkboard-teacher"></i>
                    &nbsp; Teacher
                  </NavLink>
                  <NavLink to="/principal" activeClassName="active-link">
                    <i className="fa-solid fa-school"></i>
                    &nbsp; Principal
                  </NavLink>
                </div>
              }
            </div>
            <div className="option" onClick={() => toggleOptions('option4')}>
              <NavLink activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-user-cog menu-icon"></i>
                Admin Management
              </NavLink>
              {showOptions.option4 &&
                <div className="sub-options">
                  <NavLink to="/createdashUser" activeClassName="active-link">
                    <i className="fa-solid fa-user-plus"></i>
                    &nbsp; Create User
                  </NavLink>
                  <NavLink to="/createdashcourse" activeClassName="active-link">
                    <i className="fa-solid fa-book-open"></i>
                    &nbsp; Create Course
                  </NavLink>
                  <NavLink to="/updatedashRole" activeClassName="active-link">
                    <i className="fa-solid fa-user-edit"></i>
                    &nbsp; Update Role
                  </NavLink>
                </div>
              }
            </div>
            <div className="option" onClick={() => toggleOptions('option5')}>
              <NavLink to="/plan" activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-calendar-check menu-icon"></i>
                Plans<span className='text-white'>ngfghfg</span>
              </NavLink>
            </div>
            <div className="option" onClick={() => toggleOptions('option5')}>
              <NavLink to="/addkit" activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-calendar-check menu-icon"></i>
                Add Kits<span className='text-white'>ngfghfg</span>
              </NavLink>
            </div>
            <div className="option" onClick={() => toggleOptions('option5')}>
              <NavLink to="/userPurchases" activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-calendar-check menu-icon"></i>
                Purchased Items<span className='text-white'>ngfghfg</span>
              </NavLink>
            </div>
            <div className="option" onClick={() => toggleOptions('option5')}>
              <NavLink to="/postForm" activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-calendar-check menu-icon"></i>
                Image Gallery<span className='text-white'>ngfghfg</span>
              </NavLink>
            </div>
            <div className="option" onClick={() => toggleOptions('option9')}>
              <NavLink activeClassName="active-link">
                <i className="fa-solid fa-bell menu-icon"></i>
                Notifications<span className='text-white'>ngfghfg</span>
              </NavLink>
              {showOptions.option9 &&
                <div className="sub-options">
                  <NavLink to="/schoolRegistered" activeClassName="active-link">
                    <i className="fa-solid fa-school"></i> &nbsp; School Registered
                  </NavLink>
                  <NavLink to="/teacherRegistered" activeClassName="active-link">
                    <i className="fa-solid fa-chalkboard-teacher"></i> &nbsp; Teacher Registered
                  </NavLink>
                </div>
              }
            </div>
            <div className="option" onClick={() => toggleOptions('option5')}>
              <NavLink activeClassName="active-link vertical-nav-menu">
                <i className="fa-solid fa-credit-card menu-icon"></i>
                Transaction
              </NavLink>
            </div>
            <div className="option" onClick={() => toggleOptions('option7')}>
              <NavLink activeClassName="active-link vertical-nav-menu">
              <i className="fa-solid fa-money-check-alt menu-icon"></i>
                Payment Method
              </NavLink>
              {/* {showOptions.option7 &&
                <div className="sub-options">
                  <NavLink to="/category/list" activeClassName="active-link">
                    <i className="fa-solid fa-list"></i>
                    &nbsp; Category
                  </NavLink>
                  <NavLink to="/DashBoardCourse" activeClassName="active-link">
                    <i className="fa-solid fa-book-open"></i>
                    &nbsp; All Course
                  </NavLink>
                  <NavLink to="/chapter/select_course" activeClassName="active-link">
                    <i className="fa-solid fa-book"></i>
                    &nbsp; Chapter
                  </NavLink>
                </div>
              } */}
            </div>
            <div className="option" onClick={() => toggleOptions('option8')}>
              <NavLink activeClassName="active-link">
                <i className="fa-solid fa-cogs menu-icon"></i>
                Settings<span className='text-white'>ngfghfg</span>
              </NavLink>
              {showOptions.option8 &&
                <div className="sub-options">
                  <NavLink to="/addterms" activeClassName="active-link">
                    <i className="fa-solid fa-file-alt"></i>
                    &nbsp; Add Terms and Conditions
                  </NavLink>
                  <button type="button" className="fullbtn hite-icon">
                    <i className="fa-solid fa-expand"></i>
                  </button>
                  <NavLink to="/logout" activeClassName="active-link">
                    <i className="fa-solid fa-power-off"></i>
                  </NavLink>
                </div>
              }
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
            backgroundColor: 'white', // Remove blue background
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
                <NavLink to="/" style={{ textDecoration: 'none', color: '#007bff', marginLeft: '10px', fontSize: '20px' }}>
                  Home
                </NavLink>
              )}
            </Box>

            <Typography variant="h6" noWrap component="div" sx={{ display: 'flex', alignItems: 'center' }}>
              {userData ? (
                <div>
                  <IconButton onClick={handleClick} sx={{ color: '#007bff', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
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
                        color : "red"
                      },
                    }}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <Link to="/login" className="nav-item nav-link active">
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
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
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
      </Box>
    </ThemeProvider>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
