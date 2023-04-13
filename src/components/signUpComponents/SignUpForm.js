import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonalInfoForm from './PersonalInfoForm';
import ApartmentDetails from './ApartmentDetails';
import SummaryForm from './SummaryForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

// The array containing the names of each step in the sign-up process.
const steps = ['Personal Information', 'Apartment Details', 'Summary'];

// Create a theme object for the app using the createTheme function.
const theme = createTheme();


export default function SignUpForm() {

    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0); // State for stepper status.
    const [newUser, setNewUser] = useState(null); // State for the new user.
    const [formData, setFormData] = useState({ // State for the form fields.
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        country: '',
        region: '',
        city: '',
        rooms: '',
        bathrooms: '',
        apartmentImgs: [],
    });

    const { handleRegister } = useContext(UserContext);

    // Define a helper function named getStepContent that receives a step number as an argument and returns a form component based on the current step number.
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <PersonalInfoForm formData={formData} setFormData={setFormData} />;
            case 1:
                return <ApartmentDetails formData={formData} setFormData={setFormData} />;
            case 2:
                return <SummaryForm formData={formData} setFormData={setFormData} />;
            default:
                throw new Error('Unknown step');
        }
    }

    // Handler for "next" button.
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    // Handler for "back" button.
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // Handler for "submit" button. 
    const handleSubmit = async () => {
        if (activeStep === steps.length - 1) {
            const user = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                apartment: {
                    country: formData.country,
                    region: formData.region,
                    city: formData.city,
                    rooms: Number(formData.rooms),
                    bathrooms: Number(formData.bathrooms),
                    pictures: formData.apartmentImgs
                }
            };

            const res = await handleRegister(user);
            if (res) {
                navigate('/home');
            }
        } else {
            handleNext();
        }
    };

    // Return a component that renders a sign-up form, including a stepper component, a form component, and two buttons for navigating the form.
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Sign Up
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
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
                                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                </Paper>
                <Link onClick={() => navigate("/signin")} underline='hover' >Have an account? Sign Ip</Link>
            </Container>
        </ThemeProvider >
    );
}