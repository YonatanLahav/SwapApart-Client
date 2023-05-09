import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

/**
 * A form component that displays personal information fields such as first name, last name, email and password fields.
 * 
 * @param {Object} formData - An object containing the form data.
 * @param {Function} props.setFormData - A function to set the form data.
 * @returns {JSX.Element} - A form component that displays personal information fields.
 */
export default function PersonalInfoForm({ formData, setFormData }) {

    /**
     * Updating the formData object by copying its previous values and setting the
     * relevant values of the current inputs fields.
    */
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Personal Information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                        variant="outlined"
                        type={'email'}
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="Password"
                        fullWidth
                        autoComplete="new-password"
                        variant="outlined"
                        type={'password'}
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="verifypassword"
                        name="verifypassword"
                        label="Verify Password"
                        fullWidth
                        autoComplete="new-password"
                        variant="outlined"
                        type={'password'}
                        value={formData.verifypassword}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}