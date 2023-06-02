import React, { useState, useContext } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle'
import Button from '@mui/material/Button';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import HomePage from '../components/PageTemplateComponents/HomePage';
import ChatPage from '../components/PageTemplateComponents/ChatPage';
import NewVacationPage from '../components/PageTemplateComponents/NewVacationPage';
import MenuList from '../components/PageTemplateComponents/MenuList';
import SettingsPage from '../components/PageTemplateComponents/SettingsPage';
import ContactUsPage from '../components/PageTemplateComponents/ContactUsPage';
import { getAllUsers } from '../utils/api';
import UserContext from '../context/UserContext';

const drawerWidth = 240;

/**
 * Styled AppBar component.
 */
const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

/**
 * Styled Drawer component.
 */
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

const mdTheme = createTheme();

/**
 * Component representing the frame of the home screen for a logged-in user.
 */
function PageTemplate() {
    const [activePage, setActivePage] = useState(0);
    const [open, setOpen] = useState(false);
    const { handleLogout } = useContext(UserContext);
    const [activeSettingsPage, setActiveSettingsPage] = useState(0);
    const [planIndex, setPlanIndex] = useState(null);

    /**
     * Toggles the state of the side drawer.
     */
    const toggleDrawer = () => {
        setOpen(!open);
    };


    /**
     * Returns the content for the active page based on the step value.
     * @param {number} step - The step value representing the active page.
     * @returns {JSX.Element} - The content for the active page.
     */
    function getPageContent(step) {
        switch (step) {
            case 0:
                return <HomePage setActivePage={setActivePage} setPlanIndex={setPlanIndex} planIndex={planIndex} />;
            case 1:
                return <NewVacationPage setActivePage={setActivePage} />;
            case 2:
                return <ChatPage />;
            case 3:
                return <SettingsPage activeSettingsPage={activeSettingsPage} setActiveSettingsPage={setActiveSettingsPage} />;
            case 4:
                return <ContactUsPage />;
            default:
                throw new Error('Unknown step');
        }
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar sx={{ pr: '24px' }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <SwapHorizontalCircleIcon />
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                            padding={'5px'}
                        >
                            SwapApart!
                        </Typography>
                        <Button color="inherit" variant="outlined" startIcon={<MeetingRoomOutlinedIcon />} onClick={handleLogout}>
                            Sign Out
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <MenuList setActivePage={setActivePage} setActiveSettingsPage={setActiveSettingsPage} setPlanIndex={setPlanIndex} />
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    {getPageContent(activePage)}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default PageTemplate;
