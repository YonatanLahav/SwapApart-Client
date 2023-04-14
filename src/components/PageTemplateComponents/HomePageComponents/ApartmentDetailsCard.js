import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Paper, Typography, Divider, List, IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function ApartmentDetailsCard({ optionalMatch, setVacationIndex }) {
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
                            <ListItemText primary={'Country'} secondary={optionalMatch.country} align='center' />
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemText primary={'Region'} secondary={optionalMatch.region} align='center' />
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemText primary={'City'} secondary={optionalMatch.city} align='center' />
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem sx={{ py: 0, px: 0 }}>
                    <Grid container spacing={2} >
                        <Grid item xs={4}>
                            <ListItemText primary={'Rooms'} secondary={optionalMatch.rooms} align='center' />
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemText primary={'Bathrooms'} secondary={optionalMatch.bathrooms} align='center' />
                        </Grid>
                        <Grid item xs={4} />
                    </Grid>
                </ListItem>
            </List>
        </Paper >
    )
}

export default ApartmentDetailsCard