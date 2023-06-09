import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import json from 'country-region-data/data.json';

/**
 * PreferencesForm component renders a form for users to enter their vacation preferences, 
 * including country, region, city, number of rooms, and bathrooms. 
 * It uses the Autocomplete component from Material-UI for country and region inputs, 
 * and TextField component for city, rooms, and bathrooms inputs.
 * 
 * @param {Object} newVacation - An object containing the current values of the form fields.
 * @param {function} setNewVacation - A function to update the values of the form fields.
 * @returns {JSX.Element} - A form component that displays the input fields for country, region, city, rooms, and bathrooms.
 */
function PreferencesForm({ newVacation, setNewVacation }) {
    // Define state for specific regions for selected country.
    const [regions, setRegions] = useState([{ name: null }])

    return (
        <Grid container spacing={3} component="form">
            <Grid item xs={12}>
                <Grid item xs={12} textAlign="center">
                    Enter you preferences
                </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                {/* Country */}
                <Autocomplete
                    id="country"
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
                        setNewVacation({ ...newVacation, country: option.countryName });
                        setRegions(option.regions)

                    }}
                    disableClearable />

            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                {/* Region */}
                <Autocomplete
                    id="region"
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
                        setNewVacation({ ...newVacation, region: option.name });

                    }}
                    disableClearable />
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={3} />
            <Grid item xs={6} align='center'>
                {/* City */}
                <TextField
                    variant="outlined"
                    label="City"
                    fullWidth
                    value={newVacation.city}
                    onChange={(event) => setNewVacation({ ...newVacation, city: event.target.value })} />
            </Grid>
            <Grid item xs={3} />

            <Grid item xs={3} />
            <Grid item xs={3} align='center'>
                {/* Rooms number */}
                <TextField
                    variant="outlined"
                    label="Rooms"
                    type={'number'}
                    fullWidth
                    value={newVacation.rooms}
                    onChange={(event) => setNewVacation({ ...newVacation, rooms: event.target.value })} />
            </Grid>
            <Grid item xs={3} >
                {/* Bathrooms number */}
                <TextField
                    variant="outlined"
                    label="Bathrooms"
                    type={'number'}
                    fullWidth
                    value={newVacation.bathrooms}
                    onChange={(event) => setNewVacation({ ...newVacation, bathrooms: event.target.value })} />            </Grid>
            <Grid item xs={3} />
        </Grid>
    )
}

export default PreferencesForm