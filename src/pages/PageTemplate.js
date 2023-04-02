import * as React from 'react';
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
import HomePage from '../components/PageTemplateComponents/HomePage'
import ChatPage from '../components/PageTemplateComponents/ChatPage'
import NewVacationPage from '../components/PageTemplateComponents/NewVacationPage';
import MenuList from '../components/PageTemplateComponents/MenuList';
import SettingsPage from '../components/PageTemplateComponents/SettingsPage';
import ContactUsPage from '../components/PageTemplateComponents/ContactUsPage';
import Button from '@mui/material/Button';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import { useEffect } from 'react';

const drawerWidth = 240; // Set the width of the drawer.

/**
 * Creates the styled AppBar component (top of the page)
 */
const AppBar = styled(MuiAppBar, { //
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
 * Creates the styled Drawer component.
 */
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
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
    }),
);

const mdTheme = createTheme();

/**
 * This component creates the frame of the home screen for a user connected to the site.
 * The frame includes the top bar and the menu.
 */
function PageTemplate({ data, setData, setUser, user }) {
    // Set two state variables using the React.useState() hook.
    const [activePage, setActivePage] = React.useState(0);     // 'activePage' keeps track of which page is currently active.
    const [open, setOpen] = React.useState(false);    // 'open' determines whether the side drawer is open or closed.

    // Run the useEffect() hook every time the 'data' prop changes.
    // This function sets the current user based on their ID.
    useEffect(() => {
        setUser(data.find((u) => u.id == user.id))
    }, [data]);

    // This function toggles the state of 'open' to either true or false.
    const toggleDrawer = () => {
        setOpen(!open);
    };

    // This function returns the content for the active page.
    function getPageContent(step) {
        switch (step) {
            case 0:
                return <HomePage data={data} setData={setData} user={user} setActivePage={setActivePage} />;
            case 1:
                return <NewVacationPage data={data} setData={setData} user={user} />;
            case 2:
                return <ChatPage />;
            case 3:
                return <SettingsPage data={data} setData={setData} user={user} />;
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
                {/* AppBar contains the top navigation bar */}
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        {/* The menu icon will toggle the state of the side drawer */}
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
                        {/* The app's icon and name */}
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
                        {/* A button to sign out the user */}
                        <Button
                            color='inherit'
                            variant="outlined"
                            startIcon={<MeetingRoomOutlinedIcon />}
                            onClick={(event) => { setUser(null) }}>
                            Sign Out
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* Drawer contains the side navigation menu */}
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        {/* The chevron icon will toggle the state of the side drawer */}
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    {/* Render the menu list of links */}
                    <List component="nav">
                        <MenuList setActivePage={setActivePage} />
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    {/* The main content area */}
                    {getPageContent(activePage)}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default PageTemplate
