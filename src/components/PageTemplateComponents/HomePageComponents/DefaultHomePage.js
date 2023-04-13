import React, { useContext } from 'react'
import { Container, Paper, Grid, Divider } from '@mui/material';
import HeaderCard from './HeaderCard';
import UserContext from '../../../context/UserContext';

function DefaultHomePage({ vacationCards }) {
    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 4, }}>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <HeaderCard />
                    </Paper>
                </Grid>
                {vacationCards}
            </Grid>
        </Container>
    )
}

export default DefaultHomePage