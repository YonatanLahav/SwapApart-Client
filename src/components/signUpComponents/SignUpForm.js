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

const steps = ['Personal Information', 'Apartment Details', 'Summary'];
const theme = createTheme();

export default function SignUpForm({ data, setData, setUser }) {

    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0);
    const [newUser, setNewUser] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        country: '',
        region: '',
        city: '',
        rooms: '',
        bathrooms: '',
        apartmentImgs: []
    });

    useEffect(() => {
        if (newUser) {
            // find the newly created user and set it to the parent component state
            const user = data.find((u) => u.id === newUser.id);
            setUser(user);
            navigate('/home');
        }
    }, [newUser]);

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

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const handleSubmit = () => {
        if (activeStep === steps.length - 1) {
            // create a new user object with the form data
            const user = {
                id: data.length + 1, // generate a new ID based on the number of existing users
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                country: formData.country,
                region: formData.region,
                city: formData.city,
                rooms: formData.rooms,
                bathrooms: formData.bathrooms,
                apartmentImgs: formData.apartmentImgs
            };
            // update the data object with the new user
            setData([...data, user]);
            // set the newly created user to the state variable
            setNewUser(user);
        } else {
            handleNext();
        }
    };

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