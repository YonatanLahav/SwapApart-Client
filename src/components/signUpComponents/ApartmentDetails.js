import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import { MultipleStop } from '@mui/icons-material';


export default function ApartmentDetails({ formData, setFormData }) {

    const [apartmentImgs, setApartmentImgs] = React.useState([]);

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    };

    const handleFileSelect = (event) => {
        const files = event.target.files;
        const newApartmentImgs = [...apartmentImgs];
        for (let i = 0; i < files.length; i++) {
            newApartmentImgs.push(files[i]);
        }
        setApartmentImgs(newApartmentImgs);
        setFormData({
            ...formData,
            apartmentImgs: [...newApartmentImgs],
        });
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Apartment Details
            </Typography>
            <Grid container spacing={3}>
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
                <Grid item xs={12}>
                    <input id='apartmentImgs' type='file' multiple onChange={handleFileSelect} />
                    {apartmentImgs.map((img) => (
                        <img src={URL.createObjectURL(img)} alt="Apartment" key={img.name} />
                    ))}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}