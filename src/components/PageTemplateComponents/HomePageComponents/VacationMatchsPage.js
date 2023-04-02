import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper, Button, Typography, Divider, List, IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ImageStepper from '../../signUpComponents/ImageStepper';
import ApartmentImageStepper from './ApartmentImageStepper';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

function VacationMatchsPage({ optionalMatch, images, setVacationIndex }) {
    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 4, }}>
            <Grid container spacing={3}>
                <Grid item xs={6} >
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
                    </Paper>
                </Grid>

                <Grid item xs={6} >
                    <Card align='center'  >
                        <ApartmentImageStepper images={images} />
                        <Divider />
                        <CardContent>
                            <ListItemText primary={'More about the property'} secondary={"Need to think how to insert more details. for example who are the other swapper"} align='center' />
                        </CardContent>
                        <Divider />
                        <Grid container marginBottom={2} marginTop={2}>
                            <Grid item xs={6}>
                                <IconButton size='large' >
                                    <CheckIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton size='large' >
                                    <CloseIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            <Button onClick={() => setVacationIndex(null)}>click</Button>
        </Container>
    )
}

export default VacationMatchsPage