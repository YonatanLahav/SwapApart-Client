import React, { useState } from 'react'
import { Box, Grid, Container, Paper, Typography, Link, Stepper, Step, StepLabel, Button } from '@mui/material';
import PickDatesForm from './NewVacationPageComponents/PickDatesForm'
import PreferencesForm from './NewVacationPageComponents/PreferencesForm'
import VacationSummary from './NewVacationPageComponents/VacationSummary'

const steps = ['Dates', 'Preferences', 'Summary'];

/**
 * This is a React functional component that displays a form for creating a new vacation search.
 * It contains three main components for selecting dates, preferences, and displaying a summary of the search.
 * The form consists of a stepper and navigation buttons to move between the components.
 * Once all components are completed, the user can create a new vacation search by clicking the "Create" button.
 * 
 * @param {Object} data - an array of users data
 * @param {Function} setData - a function to set the users data
 * @param {Object} user - the user that create the new vacation.
 * @returns {JSX.Element} - a React component that renders a new vacation form.
 */
function NewVacationPage({ data, setData, user }) {

    // Define state to store the new vacation object and the active step in the form.
    const [activeStep, setActiveStep] = useState(0);
    const [newVacation, setNewVacation] = useState({
        startDate: null,
        endDate: null,
        country: null,
        region: null,
        city: null,
        rooms: null,
        bathrooms: null,
        seenVacations: []
    })

    // Handle moving to the next step in the form.
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    // Handle moving back to the previous step in the form.
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // Define a function to render the component for the current active step in the form.
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <PickDatesForm newVacation={newVacation} setNewVacation={setNewVacation} />;
            case 1:
                return <PreferencesForm newVacation={newVacation} setNewVacation={setNewVacation} />;
            case 2:
                return <VacationSummary newVacation={newVacation} setNewVacation={setNewVacation} />;
            default:
                throw new Error('Unknown step');
        }
    }

    // Handle creating a new vacation.
    const handleCreate = () => {
        if (activeStep === steps.length - 1) {
            // Create a new search object
            const search = {
                id: user.vacationsArr.length + 1,
                startDate: newVacation.startDate.format('DD-MM-YYYY'),
                endDate: newVacation.endDate.format('DD-MM-YYYY'),
                country: newVacation.country,
                region: newVacation.region,
                city: newVacation.city,
                rooms: newVacation.rooms,
                bathrooms: newVacation.bathrooms,
                seenVacations: []
            };
            // Update the user data with the new search
            const userIndex = data.findIndex((userData) => userData.id === user.id);
            const users = [...data];
            users[userIndex] = {
                ...user,
                vacationsArr: [...user.vacationsArr, search]
            };
            setData(users);
        } else {
            handleNext();
        }
    }

    // Render the form
    return (
        <Container maxWidth="md" sx={{ mt: 6, mb: 4, }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        {/* Header */}
                        <Typography component="h1" variant="h4" align="center">
                            New Vacation
                        </Typography>
                        {/* Stepper */}
                        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {/* Body of the form */}
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {/* Create back button if activeStep != 0 */}
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}
                                {/* Create "Create" or "Next" button. */}
                                <Button
                                    variant="contained"
                                    onClick={activeStep === steps.length - 1 ? handleCreate : handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'Create' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>

                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default NewVacationPage