import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, IconButton, Paper, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ApartmentDetailsCard from './ApartmentDetailsCard';
import ApartmentImageCard from './ApartmentImageCard';
import { addSwipe, getOptionalMatchs } from '../../../utils/api';
import UserContext from '../../../context/UserContext';
import FooterApartImgsCard from './FooterApartImgsCard';

/**
 * VacationMatchsPage component displays the vacation matches page.
 *
 * @param {Object} props - The component props.
 * @param {string} props.plan - The ID of the current vacation plan.
 * @param {function} props.setPlanIndex - Function to set the index of the selected plan.
 * @returns {JSX.Element} The rendered VacationMatchsPage component.
 */
function VacationMatchsPage({ plan, setPlanIndex }) {
    const [optionalPlans, setOptionalPlans] = useState(null);
    const { token } = useContext(UserContext);

    /**
     * Handles the swipe action for a plan.
     *
     * @param {boolean} isLiked - Indicates if the plan is liked or not.
     */
    const swipePlan = async (isLiked) => {
        try {
            await addSwipe(token, plan, optionalPlans[optionalPlans.length - 1]._id, isLiked);
            const plans = optionalPlans.slice(0, -1);
            setOptionalPlans([...plans]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchOptionalMatchs = async () => {
            const plans = await getOptionalMatchs(token, plan);
            setOptionalPlans(plans);
            console.log(plans);
        };
        fetchOptionalMatchs();
    }, []);

    return optionalPlans && optionalPlans.length > 0 ? (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
            <IconButton onClick={() => setPlanIndex(null)}>
                <ArrowBackIosIcon />
            </IconButton>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={6}>
                    <ApartmentDetailsCard optionalMatch={optionalPlans[optionalPlans.length - 1]} />
                </Grid>
                <Grid item xs={6}>
                    <ApartmentImageCard optionalMatch={optionalPlans[optionalPlans.length - 1]} />
                </Grid>
                <Grid item xs={12}>
                    <FooterApartImgsCard swipePlan={swipePlan} />
                </Grid>
            </Grid>
        </Container>
    ) : (
        <Container maxWidth="md" sx={{ mt: 6, mb: 4 }}>
            <IconButton onClick={() => setPlanIndex(null)}>
                <ArrowBackIosIcon />
            </IconButton>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" fontWeight="bold" align="center">
                    We are sorry..
                </Typography>
                <Typography variant="body1" fontWeight="bold" align="center">
                    We have no possible matches for you at the moment. Please try again later.
                </Typography>
            </Paper>
        </Container>
    );
}

export default VacationMatchsPage;
