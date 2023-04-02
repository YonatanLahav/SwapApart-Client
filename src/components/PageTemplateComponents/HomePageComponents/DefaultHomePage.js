import React from 'react'
import { Container, Paper, Grid, Divider } from '@mui/material';
import HeaderCard from './HeaderCard';

function DefaultHomePage({ vacationCards, setActivePage }) {
    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 4, }}>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <HeaderCard setActivePage={setActivePage} />
                    </Paper>
                </Grid>
                {vacationCards}
            </Grid>
        </Container>
    )
}

export default DefaultHomePage