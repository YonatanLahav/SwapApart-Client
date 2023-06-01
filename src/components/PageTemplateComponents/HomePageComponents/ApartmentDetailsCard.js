import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Paper, Typography, Divider, List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function ApartmentDetailsCard({ optionalMatch }) {

    const getCountry = () => { return optionalMatch.userId.apartment.country };
    const getRegion = () => { return optionalMatch.userId.apartment.region };
    const getCity = () => { return optionalMatch.userId.apartment.city };
    const getRooms = () => { return optionalMatch.userId.apartment.rooms };
    const getBathrooms = () => { return optionalMatch.userId.apartment.bathrooms };
    return (
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

            <Typography variant="h6" fontWeight={'bold'} align={'center'}>
                Apartment Details
            </Typography>
            <Divider />
            <List >
                <ListItem sx={{ py: 0, px: 0 }}>
                    <Grid container spacing={2} >
                        <Grid item xs={4}>
                            <ListItemText primary={'Country'} secondary={getCountry()} align='center' />
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemText primary={'Region'} secondary={getRegion()} align='center' />
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemText primary={'City'} secondary={getCity()} align='center' />
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem sx={{ py: 0, px: 0 }}>
                    <Grid container spacing={2} >
                        <Grid item xs={4}>
                            <ListItemText primary={'Rooms'} secondary={getRooms()} align='center' />
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemText primary={'Bathrooms'} secondary={getBathrooms()} align='center' />
                        </Grid>
                        <Grid item xs={4} />
                    </Grid>
                </ListItem>
            </List>
        </Paper >
    )
}

export default ApartmentDetailsCard