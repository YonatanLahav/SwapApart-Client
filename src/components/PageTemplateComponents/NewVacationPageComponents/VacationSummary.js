import React from 'react'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

/**
 * Component for displaying the summary of a vacation, including dates and preferences.
 * @param {Object} newVacation - Object containing information about the new vacation.
 * @param {function} setNewVacation - Function to update the information about the new vacation.
 * @returns {JSX.Element} - Rendered component.
 */
function VacationSummary({ newVacation, setNewVacation }) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom fontWeight={'bold'} align='center' sx={{ mb: 5 }}>
                Vacation Summary
            </Typography>
            <Grid container textAlign={'center'}>
                <Grid item xs={1} />
                <Grid item xs={5}>
                    <List disablePadding>
                        <Typography variant="h6">
                            Dates
                        </Typography>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'From'} secondary={newVacation.startDate.format('DD-MM-YYYY')} align='center' />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'To'} secondary={newVacation.endDate.format('DD-MM-YYYY')} align='center' />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={5}>
                    <List disablePadding>
                        <Typography variant="h6">
                            Preferences
                        </Typography>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'Country'} secondary={newVacation.country} align='center' />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'Region'} secondary={newVacation.region} align='center' />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'City'} secondary={newVacation.city} align='center' />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'Rooms'} secondary={newVacation.rooms} align='center' />
                        </ListItem>
                        <ListItem sx={{ py: 0, px: 0 }}>
                            <ListItemText primary={'Bathrooms'} secondary={newVacation.bathrooms} align='center' />
                        </ListItem>
                    </List>
                </Grid >
                <Grid item xs={1} />

            </Grid >
        </React.Fragment >
    )
}

export default VacationSummary