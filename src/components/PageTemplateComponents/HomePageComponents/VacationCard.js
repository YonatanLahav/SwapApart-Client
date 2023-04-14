import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid, Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



const listItemTextStyle = {
    marginTop: 0,
    marginBottom: 0,
    textAlign: 'center'
};

function VacationCard({ vacation, onClick }) {
    return (
        <Card sx={{ maxWidth: 345, p: 0 }} onClick={onClick} >
            <CardMedia
                component="img"
                height="140"
                src={`https://picsum.photos/400/300?${Math.random()}`} />
            <CardContent sx={{ pb: 0 }} >
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                    Vacation Details
                </Typography>
                <List dense sx={{ p: 0 }}>
                    <Grid container  >
                        <Grid item xs={6}>
                            <ListItem >
                                <ListItemText primary="Start Date" secondary={vacation.startDate} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="End Date" secondary={vacation.endDate} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Country" secondary={vacation.country} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Region" secondary={vacation.region} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="City" secondary={vacation.city} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Rooms" secondary={vacation.rooms} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Bathrooms" secondary={vacation.bathrooms} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>

                    </Grid>
                </List>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button size="small">Find A Match</Button>
            </CardActions>
        </Card >
    );
}

export default VacationCard;
