import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Button, IconButton, Paper, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ApartmentDetailsCard from './ApartmentDetailsCard';
import ApartmentImageCard from './ApartmentImageCard';
import { addSwipe, getOptionalMatchs } from '../../../utils/api';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../../context/UserContext';
import FooterApartImgsCard from './FooterApartImgsCard';

function VacationMatchsPage({ plan, setPlanIndex }) {
    const [optionalPlans, setOptionalPlans] = useState(null);

    const { token } = useContext(UserContext);

    const swipePlan = async (isLiked) => {
        try {
            await addSwipe(token, plan, optionalPlans[optionalPlans.length - 1]._id, isLiked)
            const plans = optionalPlans;
            plans.pop();
            setOptionalPlans([...plans]);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        const fetchOptionalMatchs = async () => {
            const plans = await getOptionalMatchs(token, plan);
            setOptionalPlans(plans);
            console.log(plans)
        };
        fetchOptionalMatchs();
    }, []);

    return (optionalPlans && (optionalPlans.length > 0)) ? (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 4, }}>
            <IconButton onClick={() => setPlanIndex(null)}>
                <ArrowBackIosIcon />
            </IconButton>
            <Grid container spacing={3} alignItems={'center'}>
                <Grid item xs={6} >
                    <ApartmentDetailsCard optionalMatch={optionalPlans[optionalPlans.length - 1]} />
                </Grid>
                <Grid item xs={6} >
                    <ApartmentImageCard optionalMatch={optionalPlans[optionalPlans.length - 1]} />
                </Grid>
                <Grid item xs={12} >
                    <FooterApartImgsCard swipePlan={swipePlan} />
                </Grid>
            </Grid>
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