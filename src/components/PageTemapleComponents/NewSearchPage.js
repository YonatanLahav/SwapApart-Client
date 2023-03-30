import React, { useState } from 'react'
import { countries } from 'country-list-json';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { Input } from '@mui/material';
import Container from '@mui/material/Container';
import { maxHeight } from '@mui/system';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import json from 'country-region-data/data.json';
import { Typography, Link, Stepper, Step, StepLabel, Button, } from '@mui/material';
import PickDatesForm from './HomePageComponents/PickDatesForm'
import PreferencesForm from './HomePageComponents/PreferencesForm'
import VacationSummary from './HomePageComponents/VacationSummary'



const steps = ['Dates', 'Preferences', 'Summary'];

function NewSearch() {
    const [newVacation, setNewVacation] = useState({
        startDate: null,
        endDate: null,
        country: '',
        region: '',
        city: '',
        rooms: '',
        bathrooms: ''
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
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                        {/* <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography
                                    component="h1"
                                    variant="h4"
                                    align="center"
                                    color="text.primary"
                                    gutterBottom
                                    sx={{ pt: 3 }}
                                >
                                    Plan a new vacation
                                </Typography>
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                    id="country-select-demo"
                                    options={json}
                                    autoHighlight
                                    getOptionLabel={(option) => option.countryName}
                                    renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                            <img
                                                loading="lazy"
                                                width="20"
                                                src={`https://flagcdn.com/w20/${option.countryShortCode.toLowerCase()}.png`}
                                                srcSet={`https://flagcdn.com/w40/${option.countryShortCode.toLowerCase()}.png 2x`}
                                                alt=""
                                            />
                                            {option.countryName} ({option.countryShortCode})
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Country"
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            }}
                                        />
                                    )}
                                    onChange={(event, option) => {
                                        setCountry(option.countryName);
                                        setRegions(option.regions)

                                    }}
                                    disableClearable />

                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                    id="country-select-demo"
                                    options={regions}
                                    autoHighlight
                                    getOptionLabel={(option) => option.name}
                                    renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                            {option.name}
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Region"
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            }}
                                        />
                                    )}
                                    onChange={(event, option) => {
                                        setRegion(option.name)
                                    }}
                                    disableClearable />
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={6} align='center'>
                                <TextField variant="outlined" label="City" fullWidth />
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={6} align='center'>
                                <TextField variant="outlined" label="" fullWidth type="date" />
                            </Grid>
                            <Grid item xs={3}></Grid>

                        </Grid> */}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default NewSearch