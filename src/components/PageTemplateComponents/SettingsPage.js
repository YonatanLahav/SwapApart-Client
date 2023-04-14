import * as React from 'react';
import { Box, Grid, Container, Paper, Typography, Link, Stepper, Step, StepLabel, Button } from '@mui/material';
import ApartDetails from './SettingsComponents/ApartDetails'
import MainSettings from './SettingsComponents/MainSettings'
import Info from './SettingsComponents/Info'

function createData(d, y) {
  return { d, y };
}


function SettingsPage() {
  const [activePage, setActivePage] = React.useState(0); 

  function getPageContent(page) {
    switch (page) {
        case 0:
            return <MainSettings setActivePage={setActivePage}/>;
        case 1:
            return <ApartDetails setActivePage={setActivePage}/>;
        case 2:
            return <Info setActivePage={setActivePage}/>;
        default:
            throw new Error('Unknown step');
    }
}

    return (
      <Container maxWidth="md" sx={{ mt: 6, mb: 4, }}>
      <Grid container spacing={3}>
          <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/* Header */}
                  <Typography component="h1" variant="h4" align="center">
                            Settings
                        </Typography>
                        
                       {getPageContent(activePage)}
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    )
}

export default SettingsPage