import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import UserContext from '../context/UserContext';
import myImage from '../swap-houses.jpg';

const theme = createTheme();

/**
 * Sign In component displays the website signin form in its entirety.
 * The component contains the top bar of the login screen,
 * the image on the left side of the screen, and the login form on the right side.
 * After a successful login, it routes to the path "/home".
 */
export default function SignIn() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { handleLogin } = useContext(UserContext);

    /**
     * Handles form submission.
     * Checks whether the user exists in the data.
     * If the email and password are correct, it navigates to "/home".
     * Otherwise, it shows an error message.
     * @param {Object} event - The form submission event.
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        try {
            const res = await handleLogin(email, password);
            if (res) {
                navigate('/home');
            }
        } catch (e) {
            setError('Invalid email or password');
        }
    };

    /**
     * Navigates to "/signup" for user registration.
     */
    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Toolbar sx={{ pr: '24px' }}>
                    <SwapHorizontalCircleIcon />
                    <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} padding={'5px'}>
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
                        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar sx={{ m: 1, bgcolor: 'gray' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>

                        {error && (
                            <Typography color="error" sx={{ mt: 2, mb: 2 }}>
                                {error}
                            </Typography>
                        )}

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link underline="hover" onClick={handleSignUp}>
                                        Don't have an account? Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
