import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions,
    Grid,
    Divider,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';

const listItemTextStyle = {
    marginTop: 0,
    marginBottom: 0,
    textAlign: 'center',
};

/**
 * VacationCard component displays a card with vacation details.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.plan - The vacation plan object.
 * @param {Function} props.onClick - The function to handle the click event.
 * @returns {JSX.Element} The rendered VacationCard component.
 */
function VacationCard({ plan, onClick }) {
    /**
     * Retrieves the formatted start date of the vacation.
     *
     * @returns {string} The formatted start date.
     */
    const getStartDate = () => {
        const startDate = new Date(plan.startDate);
        return startDate.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    /**
     * Retrieves the formatted end date of the vacation.
     *
     * @returns {string} The formatted end date.
     */
    const getEndDate = () => {
        const endDate = new Date(plan.endDate);
        return endDate.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return (
        <Card sx={{ maxWidth: 345, p: 0 }} onClick={onClick}>
            <CardMedia component="img" height="140" src={`https://picsum.photos/400/300?${Math.random()}`} />
            <CardContent sx={{ pb: 0 }}>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                    Vacation Details
                </Typography>
                <List dense sx={{ p: 0 }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Start Date:" secondary={getStartDate()} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="End Date:" secondary={getEndDate()} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Country" secondary={plan.country} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Region" secondary={plan.region} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="City" secondary={plan.city} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Rooms" secondary={plan.minRoomsNum} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Bathrooms" secondary={plan.minBathroomsNum} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                    </Grid>
                </List>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button size="small">Find A Match</Button>
            </CardActions>
        </Card>
    );
}

export default VacationCard;
