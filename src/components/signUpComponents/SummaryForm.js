import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


/**
 * Renders a summary form with personal information and apartment details.
 * @param {Object} formData - The form data containing personal and apartment details.
 * @param {Function} setFormData - The function to update the form data.
 * @returns {JSX.Element} - The summary form.
 */
export default function SummaryForm({ formData, setFormData }) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>
                Summary
            </Typography>
            <Grid container>
                <Grid item xs={6}>
                    <List disablePadding>
                        <Typography variant="h6">
                            Personal Information
                        </Typography>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'First Name'} secondary={formData.firstName} />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'Last Name'} secondary={formData.lastName} />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'Email'} secondary={formData.email} />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'Password'} secondary={formData.password} />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List disablePadding>
                        <Typography variant="h6">
                            Apartment Details
                        </Typography>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'Country'} secondary={formData.country} />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'Region'} secondary={formData.region} />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'City'} secondary={formData.city} />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'Rooms'} secondary={formData.rooms} />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'Bathrooms'} secondary={formData.bathrooms} />
                        </ListItem>
                    </List>
                </Grid >
            </Grid >
        </React.Fragment >
    );
}