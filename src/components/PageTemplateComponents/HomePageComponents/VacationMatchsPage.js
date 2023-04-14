import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Button, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ApartmentDetailsCard from './ApartmentDetailsCard';
import ApartmentImageCard from './ApartmentImageCard';

function VacationMatchsPage({ optionalMatch, images, setVacationIndex }) {
    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 4, }}>
            <IconButton onClick={() => setVacationIndex(null)}>
                <ArrowBackIosIcon />
            </IconButton>
            <Grid container spacing={3}>
                <Grid item xs={6} >
                    <ApartmentDetailsCard optionalMatch={optionalMatch} setVacationIndex={setVacationIndex} />
                </Grid>
                <Grid item xs={6} >
                    <ApartmentImageCard optionalMatch={optionalMatch} images={images} />
                    {/* <Card align='center'  >
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
                    </Card> */}
                </Grid>
            </Grid>
            <Button onClick={() => setVacationIndex(null)}>click</Button>
        </Container>
    )
}

export default VacationMatchsPage