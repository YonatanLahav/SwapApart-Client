import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Button, IconButton, Paper, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ApartmentDetailsCard from './ApartmentDetailsCard';
import ApartmentImageCard from './ApartmentImageCard';
import { getOptionalMatchs } from '../../../utils/api';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../../context/UserContext';

function VacationMatchsPage({ plan, images, setPlanIndex }) {
    const [optionalMatchs, setOptionalMatchs] = useState(null);
    const { token } = useContext(UserContext);

    useEffect(() => {
        const fetchOptionalMatchs = async () => {
            const Data = await getOptionalMatchs(token, plan);
            setOptionalMatchs(Data);
            console.log(Data)
        };
        fetchOptionalMatchs();
    }, []);

    return (optionalMatchs && (optionalMatchs.length > 0)) ? (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 4, }}>
            <IconButton onClick={() => setPlanIndex(null)}>
                <ArrowBackIosIcon />
            </IconButton>
            <Grid container spacing={3}>
                <Grid item xs={6} >
                    <ApartmentDetailsCard optionalMatch={optionalMatchs[0]} />
                </Grid>
                <Grid item xs={6} >
                    <ApartmentImageCard optionalMatch={optionalMatchs[0]} images={images} />
                </Grid>
            </Grid>
            <Button onClick={() => setPlanIndex(null)}>click</Button>
        </Container >
    ) : (
        <Container maxWidth="md" sx={{ mt: 6, mb: 4, }}>
            <IconButton onClick={() => setPlanIndex(null)}>
                <ArrowBackIosIcon />
            </IconButton>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" fontWeight={'bold'} align={'center'}>
                    We are sorry..
                </Typography>
                <Typography variant="body1" fontWeight={'bold'} align={'center'}>
                    We have no possible matches for you at the moment. Please try again later.
                </Typography>
            </Paper>
        </Container>);
}

export default VacationMatchsPage