import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function SettingsPage() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 10 }}>
        <Stack height={50} spacing={4} direction="row">
      <Button variant="outlined">Edit your profile</Button>
      <Button variant="outlined">Log Out</Button>
      
    </Stack>
    </Container>
    )
}

export default SettingsPage