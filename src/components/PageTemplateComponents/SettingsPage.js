import React from 'react';
import { Grid, Container, Paper, Typography } from '@mui/material';
import ApartDetails from './SettingsComponents/ApartDetails';
import MainSettings from './SettingsComponents/MainSettings';
import Info from './SettingsComponents/Info';

/**
 * SettingsPage component is responsible for rendering the settings page with different sections.
 * It includes a header and displays the content of the active settings page based on the provided activeSettingsPage prop.
 *
 * @param {number} activeSettingsPage - The active settings page index.
 * @param {function} setActiveSettingsPage - A function to set the active settings page index.
 * @returns {JSX.Element} - The rendered settings page component.
 */
const SettingsPage = ({ activeSettingsPage, setActiveSettingsPage }) => {
    /**
     * Returns the content of the active settings page based on the provided page index.
     *
     * @param {number} page - The page index.
     * @returns {JSX.Element} - The content component of the active settings page.
     * @throws {Error} - Throws an error if the provided page index is unknown.
     */
    const getPageContent = (page) => {
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
    };

    return (
        <Container maxWidth="md" sx={{ mt: 6, mb: 4 }}>
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
    );
};

export default SettingsPage;
