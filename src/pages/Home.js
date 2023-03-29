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
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../components/HomeComponents/listItems';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
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
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Home({ data, setData, setUser }) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
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
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
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
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
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
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <CssBaseline />
                        <main>
                            {/* Hero unit */}
                            <Box
                                sx={{
                                    bgcolor: 'background.paper',
                                    pt: 8,
                                    pb: 6,
                                }}
                            >
                                <Container maxWidth="sm">
                                    <Typography
                                        component="h1"
                                        variant="h2"
                                        align="center"
                                        color="text.primary"
                                        gutterBottom
                                    >
                                        Your active searches
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        you can check out your last searches or start a new one
                                    </Typography>
                                    <Stack
                                        sx={{ pt: 4 }}
                                        direction="row"
                                        spacing={2}
                                        justifyContent="center"
                                    >
                                        <Button variant="contained">New search</Button>
                                    </Stack>
                                </Container>
                            </Box>
                            <Container sx={{ py: 8 }} maxWidth="md">
                                {/* End hero unit */}
                                <Grid container spacing={4}>
                                    {cards.map((card) => (
                                        <Grid item key={card} xs={12} sm={6} md={4}>
                                            <Card
                                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    image="https://source.unsplash.com/random"
                                                    alt="random"
                                                />
                                                <CardContent sx={{ flexGrow: 1 }}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Date: 12.2 - 3.3
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Where: Golan Heights
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">View</Button>
                                                    <Button size="small">Edit</Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </main>
                        {/* Footer */}
                        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                            <Typography variant="h6" align="center" gutterBottom>
                                Footer
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                align="center"
                                color="text.secondary"
                                component="p"
                            >
                                Something here to give the footer a purpose!
                            </Typography>
                        </Box>


                    </Container>
                </Box>
            </Box>



        </ThemeProvider>
    );
}

export default Home
