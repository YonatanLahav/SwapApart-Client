import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ImageStepper from './ImageStepper';

export default function ApartmentDetails({ formData, setFormData }) {

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    };

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
                <Grid item xs={12}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="country-name"
                        variant="standard"
                        value={formData.country}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="address-level2"
                        variant="standard"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="rooms"
                        name="rooms"
                        label="Rooms"
                        fullWidth
                        variant="standard"
                        value={formData.rooms}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="bathrooms"
                        name="bathrooms"
                        label="Bathrooms"
                        fullWidth
                        variant="standard"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <input id='apartmentImgs' type='file' multiple onChange={handleFileSelect} />
                </Grid>
                <Grid item xs={6} textAlign={'center'}>
                    <ImageStepper images={formData.apartmentImgs}></ImageStepper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}