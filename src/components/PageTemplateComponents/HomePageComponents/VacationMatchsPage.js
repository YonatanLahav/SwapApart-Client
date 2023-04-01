import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper, Button, Typography, Divider, List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function VacationMatchsPage({ optionalMatchs, setVacationIndex }) {
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
                                        <ListItemText primary={'Country'} secondary={optionalMatchs.country} align='center' />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListItemText primary={'Region'} secondary={optionalMatchs.region} align='center' />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListItemText primary={'City'} secondary={optionalMatchs.city} align='center' />
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem sx={{ py: 0, px: 0 }}>
                                <Grid container spacing={2} >
                                    <Grid item xs={4}>
                                        <ListItemText primary={'Rooms'} secondary={optionalMatchs.rooms} align='center' />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListItemText primary={'Bathrooms'} secondary={optionalMatchs.bathrooms} align='center' />
                                    </Grid>
                                    <Grid item xs={4} />
                                </Grid>
                            </ListItem>
                            <Divider />

                            <ListItem sx={{ py: 0, px: 0 }}>
                                <Grid container spacing={2} >
                                    <Grid item xs={12}>
                                        <ListItemText primary={'More about the property'} secondary={"Need to think how to insert more details. for example who are the other swapper"} align='center' />
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={6} >
                    <Card >
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Button onClick={() => setVacationIndex(null)}>click</Button>
        </Container>
    )
}

export default VacationMatchsPage