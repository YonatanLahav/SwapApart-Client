import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

/**
 * HeaderCard component displays the header section of the home page.
 *
 * @param {Object} props - The component props.
 * @param {function} props.setActivePage - Function to set the active page.
 * @returns {JSX.Element} The rendered HeaderCard component.
 */
function HeaderCard({ setActivePage }) {
    return (
        <Stack spacing={2} alignItems="center">
            <Typography component="h1" variant="h4" align="center">
                Create a new vacation
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Click the button to create a new vacation
            </Typography>
            <Button
                variant="contained"
                sx={{ width: 'fit-content', m: 1 }}
                onClick={() => setActivePage(1)}
            >
                new vacation
            </Button>
        </Stack>
    );
}

export default HeaderCard;
