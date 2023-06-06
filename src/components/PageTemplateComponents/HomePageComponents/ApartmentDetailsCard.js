import React from 'react';
import { Paper, Typography, Divider, List, ListItem, Grid, ListItemText } from '@mui/material';

/**
 * Renders the Apartment Details Card component.
 * Displays the details of an apartment.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.optionalMatch - The optional match object containing the apartment details.
 * @returns {JSX.Element} - The rendered Apartment Details Card component.
 */
function ApartmentDetailsCard({ optionalMatch }) {
    const { apartment } = optionalMatch.userId;

    return (
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" fontWeight="bold" align="center">
                Apartment Details
            </Typography>
            <Divider />
            <List>
                <ListItem sx={{ py: 0, px: 0 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <ListItemText primary="Country" secondary={apartment.country} align="center" />
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemText primary="Region" secondary={apartment.region} align="center" />
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemText primary="City" secondary={apartment.city} align="center" />
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem sx={{ py: 0, px: 0 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <ListItemText primary="Rooms" secondary={apartment.rooms} align="center" />
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemText primary="Bathrooms" secondary={apartment.bathrooms} align="center" />
                        </Grid>
                        <Grid item xs={4} />
                    </Grid>
                </ListItem>
            </List>
        </Paper>
    );
}

export default ApartmentDetailsCard;
