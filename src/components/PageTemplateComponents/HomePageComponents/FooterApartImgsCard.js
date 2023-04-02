import * as React from 'react';
import { IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

function FooterApartImgsCard({ accAction, decAction }) {
    return (
        <Grid container marginBottom={2} marginTop={2}>
            <Grid item xs={6}>
                <IconButton size='large' onClick={accAction} >
                    <CheckIcon />
                </IconButton>
            </Grid>
            <Grid item xs={6}>
                <IconButton size='large' onClick={decAction}>
                    <CloseIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default FooterApartImgsCard