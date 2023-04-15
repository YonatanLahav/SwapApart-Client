import * as React from 'react';
import { IconButton, Grid, Paper, Card } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

function FooterApartImgsCard({ swipePlan }) {
    return (
        <Paper >
            <Card align='center'  >
                <Grid container >
                    <Grid item xs={6}>
                        <IconButton size='large' onClick={() => swipePlan(true)} >
                            <CheckIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButton size='large' onClick={() => swipePlan(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Card >
        </Paper >
    )
}

export default FooterApartImgsCard