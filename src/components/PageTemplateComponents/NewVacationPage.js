import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Typography, Link, Stepper, Step, StepLabel, Button, } from '@mui/material';
import PickDatesForm from './NewVacationPageComponents/PickDatesForm'
import PreferencesForm from './NewVacationPageComponents/PreferencesForm'
import VacationSummary from './NewVacationPageComponents/VacationSummary'

const steps = ['Dates', 'Preferences', 'Summary'];

function NewSearch({ data, setData, user }) {
    const [newVacation, setNewVacation] = useState({
        startDate: null,
        endDate: null,
        country: null,
        region: null,
        city: null,
        rooms: null,
        bathrooms: null
    })

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

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

    const handleCreate = () => {
        if (activeStep === steps.length - 1) {
            const search = {
                id: user.vacationsArr.length + 1,
                startDate: newVacation.startDate.format('DD-MM-YYYY'),
                endDate: newVacation.endDate.format('DD-MM-YYYY'),
                country: newVacation.country,
                region: newVacation.region,
                city: newVacation.city,
                rooms: newVacation.rooms,
                bathrooms: newVacation.bathrooms
            };

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


    return (
        <Container maxWidth="md" sx={{ mt: 6, mb: 4, }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography component="h1" variant="h4" align="center">
                            New Vacation
                        </Typography>
                        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order
                                    confirmation, and will send you an update when your order has
                                    shipped.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>

                                {/* Body of the form */}
                                {getStepContent(activeStep)}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                            Back
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        onClick={activeStep === steps.length - 1 ? handleCreate : handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Create' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default NewSearch