import * as React from 'react';
import { Box, Grid, Container, Paper, Typography, Link, Stepper, Step, StepLabel, Button } from '@mui/material';
import ApartDetails from './SettingsComponents/ApartDetails'
import MainSettings from './SettingsComponents/MainSettings'
import Info from './SettingsComponents/info'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(d, y) {
  return { d, y };
}


function SettingsPage({ data, setData, user }) {
  const [activePage, setActivePage] = React.useState(0); 

  function getPageContent(page) {
    switch (page) {
        case 0:
            return <MainSettings setActivePage={setActivePage}/>;
        case 1:
            return <ApartDetails setActivePage={setActivePage} setData={setData} data={data} user={user}/>;
        case 2:
            return <Info setActivePage={setActivePage} user={user}/>;
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