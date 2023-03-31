import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ImageStepper from './ImageStepper';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import json from 'country-region-data/data.json';
import { useState } from 'react';

/**
 * Renders a form for apartment details, including country and region selection,
 * as well as various input fields for city, number of rooms and bathrooms.
 * Allows users to select and display images of the apartment.
 * 
 * @param {Object} formData - Object containing current form data. 
 * @param {Function} setFormData - Function to update form data.
 * @return {JSX.Element} A React Fragment containing the form for apartment details.
*/
export default function ApartmentDetails({ formData, setFormData }) {

    const [regions, setRegions] = useState([{ name: '' }]) // State for regions of a specific country

    /**
     * Updates form data object when user inputs data in any input field.
     */
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    };

    /**
     * Reads and updates form data object when user selects an images file.
     */
    const handleFileSelect = (event) => {
        const files = event.target.files;
        const fileArray = [];
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.onloadend = () => {
                fileArray.push(reader.result);
                setFormData((prevState) => ({ ...prevState, apartmentImgs: fileArray }));
            };
        }
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Apartment Details
            </Typography>
            <Grid container alignItems={'center'} spacing={3}>
                <Grid item xs={6}>
                    <Autocomplete
                        id="country-select"
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
                            setFormData({
                                ...formData,
                                'country': option.countryName
                            });
                            setRegions(option.regions)
                        }}
                        disableClearable />
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        id="region-select"
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
                        onChange={(event, option) => (setFormData({
                            ...formData,
                            'region': option.name
                        }))}
                        disableClearable />
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
                <Grid item xs={4} >
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
                <Grid item xs={4} >
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
                <Grid item xs={6}>
                    <Input id='apartmentImgs' type='file' multiple onChange={handleFileSelect} variant="out" />
                </Grid>
                <Grid item xs={6} textAlign={'center'}>
                    <ImageStepper images={formData.apartmentImgs}></ImageStepper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}