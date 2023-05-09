import * as React from 'react';
import { Box, Grid, Container, Paper, Typography, Link, Stepper, Step, StepLabel, Button } from '@mui/material';
import ApartDetails from './SettingsComponents/ApartDetails'
import MainSettings from './SettingsComponents/MainSettings'
import Info from './SettingsComponents/Info'


function SettingsPage({activeSettingsPage, setActiveSettingsPage }) {

    function getPageContent(page) {
        switch (page) {
            case 0:
                return <MainSettings setActiveSettingsPage={setActiveSettingsPage} />;
            case 1:
                return <ApartDetails setActiveSettingsPage={setActiveSettingsPage} />;
            case 2:
                return <Info setActiveSettingsPage={setActiveSettingsPage} />;
            default:
                throw new Error('Unknown step');
        }
    }

    return (
        <Container maxWidth="md" sx={{ mt: 6, mb: 4, }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        {/* Header */}
                        <Typography component="h1" variant="h4" align="center">
                            Settings
                        </Typography>

                        {getPageContent(activeSettingsPage)}
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    )
}

export default SettingsPage