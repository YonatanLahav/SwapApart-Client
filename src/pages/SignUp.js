import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUpForm from '../components/signUpComponents/SignUpForm'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import myImage from '../swap-houses.png'

const theme = createTheme();

/**
 * This component creates the frame of the registration form including
 * the top bar and the image on the left side of the screen.
 * The right part of the screen will be the registration form.
 * 
 */
export default function SignUp() {

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
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
                </Toolbar>
            </Box>

            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${myImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <SignUpForm />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}