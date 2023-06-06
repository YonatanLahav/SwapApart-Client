import React, { useState, useContext } from 'react';
import { Box, Grid, Container, Paper, Typography, Stepper, Step, StepLabel, Button } from '@mui/material';
import PickDatesForm from './NewVacationPageComponents/PickDatesForm';
import PreferencesForm from './NewVacationPageComponents/PreferencesForm';
import VacationSummary from './NewVacationPageComponents/VacationSummary';
import { addPlan } from '../../utils/api';
import UserContext from '../../context/UserContext';

const steps = ['Dates', 'Preferences', 'Summary'];

/**
 * Renders a form for creating a new vacation search.
 * The form consists of three main components: PickDatesForm, PreferencesForm, and VacationSummary.
 * It uses a stepper and navigation buttons to move between the components.
 * Once all components are completed, the user can create a new vacation search by clicking the "Create" button.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setActivePage - A function to set the active page.
 * @returns {JSX.Element} - The rendered NewVacationPage component.
 */
function NewVacationPage({ setActivePage }) {
    const { token, plans, setPlans } = useContext(UserContext);
    const [error, setError] = useState('');

    const [activeStep, setActiveStep] = useState(0);
    const [newVacation, setNewVacation] = useState({
        startDate: null,
        endDate: null,
        country: null,
        region: null,
        city: null,
        rooms: null,
        bathrooms: null,
        seenVacations: [],
    });

    /**
     * Checks if a given date is in the past.
     *
     * @param {Date} date - The date to check.
     * @returns {boolean} - True if the date is in the past, false otherwise.
     */
    const isDateInPast = (date) => {
        const now = new Date();
        if (date < now) {
            setError('The date is in the past');
            return true;
        }
        return false;
    };

    /**
     * Verifies if the required fields in Step 1 are filled and have valid values.
     *
     * @returns {boolean} - True if all fields are valid, false otherwise.
     */
    const verifyStepOne = () => {
        if (
            newVacation.country == null ||
            newVacation.region == null ||
            newVacation.city == null ||
            newVacation.rooms == null ||
            newVacation.bathrooms == null
        ) {
            setError('All the fields are required');
            return false;
        } else if (isNaN(newVacation.rooms) || isNaN(newVacation.bathrooms)) {
            setError('Rooms and bathroom fields should contain numbers only');
            return false;
        }
        return true;
    };

    /**
     * Handles the "Next" button click to move to the next step in the form.
     * Validates the current step before proceeding.
     */
    const handleNext = () => {
        if (activeStep === 0 && !isDateInPast(newVacation.startDate)) {
            setError('');
            setActiveStep(activeStep + 1);
        } else if (activeStep === 1 && verifyStepOne()) {
            setError('');
            setActiveStep(activeStep + 1);
        }
    };

    /**
     * Handles the "Back" button click to move back to the previous step in the form.
     */
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    /**
     * Retrieves the content component for the current active step in the form.
     *
     * @param {number} step - The current step index.
     * @returns {JSX.Element} - The component for the current step.
     */
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

    /**
   * Handles the "Create" button click to create a new vacation search.
   * If the current step is the last step, it creates the new search object and navigates to the home page.
   * If not, it proceeds to the next step in the form.
   */
    const handleCreate = () => {
        if (activeStep === steps.length - 1) {
            const plan = {
                startDate: newVacation.startDate,
                endDate: newVacation.endDate,
                country: newVacation.country,
                region: newVacation.region,
                city: newVacation.city,
                minRoomsNum: newVacation.rooms,
                minBathroomsNum: newVacation.bathrooms,
            };

            // Call the API function to add the plan
            addPlan(token, plan)
                .then((newPlan) => {
                    // Update the user's plans with the new plan
                    setPlans([...plans, newPlan]);

                    // Navigate to the home page
                    setActivePage(0);
                })
                .catch((error) => {
                    // Handle the error
                    console.error('Error adding plan:', error);
                });
        } else {
            handleNext();
        }
    };


    return (
        <Container maxWidth="md" sx={{ mt: 6, mb: 4 }}>
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
                        <Typography color="error" sx={{ mt: 0, mb: 2 }}>
                            {error}
                        </Typography>
                        <React.Fragment>
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
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default NewVacationPage;
