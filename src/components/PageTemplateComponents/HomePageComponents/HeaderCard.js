import React from 'react'
import { Container, Paper, Typography, Stack, Button } from '@mui/material';
import { WrapText } from '@mui/icons-material';

function HeaderCard() {
    return (
        <Stack spacing={2} alignItems={'center'} >
            <Typography component="h1" variant="h4" align="center">
                Create a new vacation
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Click the button to create a new vacation
            </Typography>
            <Button variant="contained" sx={{ width: 'fit-content', m: 1 }}>new vacation</Button>
        </Stack >
    )
}

export default HeaderCard