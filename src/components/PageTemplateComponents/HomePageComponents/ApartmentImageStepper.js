import React, { useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

/**
 * Renders the Apartment Image Stepper component.
 * Displays a stepper for navigating through apartment images.
 *
 * @param {Object} props - The component props.
 * @param {string[]} props.images - The array of apartment images.
 * @returns {JSX.Element|null} - The rendered Apartment Image Stepper component.
 */
function ApartmentImageStepper({ images }) {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    // Handle the next button click.
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // Handle the back button click.
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return images.length !== 0 ? (
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 5, mb: 5 }}>
            <Grid item xs={2}>
                <IconButton onClick={handleBack} disabled={activeStep === 0}>
                    <ArrowBackIosIcon />
                </IconButton>
            </Grid>
            <Grid item xs={8}>
                <img src={images[activeStep]} alt={`Apartment Image ${activeStep + 1}`} width="100%" />
            </Grid>
            <Grid item xs={2}>
                <IconButton onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Grid>
        </Grid>
    ) : null;
}

export default ApartmentImageStepper;
