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
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { isEmail } from 'validator';

// The array containing the names of each step in the sign-up process.
const steps = ['Personal Information', 'Apartment Details', 'Summary'];

// Create a theme object for the app using the createTheme function.
const theme = createTheme();

/**
 * Component for the sign-up form.
 */
export default function SignUpForm() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0); // State for stepper status.
    const [formData, setFormData] = useState({ // State for the form fields.
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        verifypassword: '',
        country: '',
        region: '',
        city: '',
        rooms: '',
        bathrooms: '',
        apartmentImgs: [],
    });

    const { handleRegister } = useContext(UserContext);

    /**
     * Helper function to get the form component based on the current step.
     * @param {number} step - The current step number.
     * @returns {React.ReactNode} - The form component for the current step.
     * @throws {Error} - If the step number is unknown.
     */
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

    /**
     * Helper function to validate the form fields in step zero.
     * @returns {boolean} - True if all fields are valid, false otherwise.
     */
    const verifyStepZero = () => {
        if (
            formData.firstName === '' ||
            formData.lastName === '' ||
            formData.email === '' ||
            formData.password === ''
        ) {
            setError('All the fields are required');
            return false;
        } else if (!isEmail(formData.email)) {
            setError('Not a valid Email');
            return false;
        } else if (formData.password !== formData.verifypassword) {
            setError("The password you entered and the verification password do not match");
            return false;
        } else if (formData.password.length < 6) {
            setError("The password must be at least 6 characters long");
            return false;
        }
        return true;
    };

    /**
     * Helper function to validate the form fields in step one.
     * @returns {boolean} - True if all fields are valid, false otherwise.
     */
    const verifyStepOne = () => {
        if (
            formData.country === '' ||
            formData.region === '' ||
            formData.city === '' ||
            formData.rooms === '' ||
            formData.bathrooms === ''
        ) {
            setError('All the fields are required');
            return false;
        } else if (isNaN(formData.rooms) || isNaN(formData.bathrooms)) {
            setError('Rooms and bathroom fields should contain numbers only');
            return false;
        }
        return true;
    };

    /**
     * Handler for "next" button.
     */
    const handleNext = () => {
        if (activeStep === 0 && verifyStepZero()) {
            setError('');
            setActiveStep(activeStep + 1);
        }
        if (activeStep === 1 && verifyStepOne()) {
            setError('');
            setActiveStep(activeStep + 1);
        }
    };

    /**
     * Handler for "back" button.
     */
    const handleBack = () => {
        setError('');
        setActiveStep(activeStep - 1);
    };

    /**
     * Handler for "submit" button.
     */
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
                    pictures: formData.apartmentImgs,
                },
            };
            const res = await handleRegister(user);
            if (res) {
                navigate('/home');
            } else {
                setError('This email already exists');
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
                                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                </Paper>
                <Link onClick={() => navigate('/signin')} underline="hover">
                    Have an account? Sign In
                </Link>
            </Container>
        </ThemeProvider>
    );
}
