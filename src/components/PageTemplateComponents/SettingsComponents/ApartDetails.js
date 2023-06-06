import React, { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import json from 'country-region-data/data.json';
import { Button } from '@mui/material';
import UserContext from '../../../context/UserContext';

/**
 * Renders a form for apartment details, including country and region selection,
 * as well as various input fields for city, number of rooms and bathrooms.
 * Allows users to select and display images of the apartment.
 *
 * @param {Object} formData - Object containing current form data.
 * @param {Function} setFormData - Function to update form data.
 * @param {Function} setActiveSettingsPage - Function to set the active settings page.
 * @returns {JSX.Element} A React Fragment containing the form for apartment details.
 */
export default function ApartDetails({ setActiveSettingsPage }) {
    const [error, setError] = useState('');
    const { userData, handleUserUpdate, token } = useContext(UserContext);

    const [regionss, setRegions] = useState(
        json.find(
            (country) => JSON.parse(userData).apartment.country === country.countryName
        ).regions
    ); // State for regions of a specific country

    const [formData, setFormData] = useState({
        // State for the form fields.
        country: json.find(
            (country) => JSON.parse(userData).apartment.country === country.countryName
        ),
        region: regionss.find(
            (regions) => JSON.parse(userData).apartment.region === regions.name
        ),
        city: JSON.parse(userData).apartment.city,
        rooms: JSON.parse(userData).apartment.rooms,
        bathrooms: JSON.parse(userData).apartment.bathrooms,
    });

    const handleSubmit = () => {
        if (
            formData.country === '' ||
            formData.region === '' ||
            formData.city === '' ||
            formData.rooms === '' ||
            formData.bathrooms === ''
        ) {
            setError('All the fields are required');
        } else if (isNaN(formData.rooms) || isNaN(formData.bathrooms)) {
            setError('Rooms and bathroom fields should contain numbers only');
        } else {
            const changes = {
                apartment: {
                    country: formData.country,
                    region: formData.region,
                    city: formData.city,
                    rooms: formData.rooms,
                    bathrooms: formData.bathrooms,
                },
            };
            handleUserUpdate(token, changes);
            setActiveSettingsPage(0);
        }
    };

    /**
     * Updates form data object when user inputs data in any input field.
     */
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <Typography color="error" sx={{ mt: 0, mb: 2 }}>
                {error}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Apartment Details
            </Typography>
            <Grid container alignItems="center" spacing={3}>
                <Grid item xs={6}>
                    <Autocomplete
                        defaultValue={formData.country}
                        id="country-select"
                        options={json}
                        autoHighlight
                        getOptionLabel={(option) => option.countryName}
                        renderOption={(props, option) => (
                            <Box
                                component="li"
                                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                {...props}
                            >
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
                            setFormData({
                                ...formData,
                                country: option.countryName,
                            });
                            setRegions(option.regions);
                        }}
                        disableClearable
                    />
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        defaultValue={formData.region}
                        id="region-select"
                        options={regionss}
                        autoHighlight
                        getOptionLabel={(option) => option.name}
                        renderOption={(props, option) => (
                            <Box
                                component="li"
                                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                {...props}
                            >
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
                        onChange={(event, option) =>
                            setFormData({
                                ...formData,
                                region: option.name,
                            })
                        }
                        disableClearable
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="address-level2"
                        variant="outlined"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        required
                        id="rooms"
                        name="rooms"
                        label="Rooms"
                        fullWidth
                        variant="outlined"
                        value={formData.rooms}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        required
                        id="bathrooms"
                        name="bathrooms"
                        label="Bathrooms"
                        fullWidth
                        variant="outlined"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>{/* <Input id='apartmentImgs' type='file' multiple onChange={handleFileSelect} variant="out" /> */}</Grid>
                <Grid item xs={6} textAlign="center">{/* <ImageStepper images={data.apartmentImgs}></ImageStepper> */}</Grid>
                <Button variant="contained" onClick={handleSubmit} sx={{ mt: 3, ml: 1 }}>
                    Submit
                </Button>
            </Grid>
        </>
    );
}
