import * as React from 'react';
import { Box, Grid, Container, Paper, Typography, Link, Stepper, Step, StepLabel, Button } from '@mui/material';

function MainSettings({setActivePage}) {
  return (
                  <Typography component="h1" variant="h4" align="center">
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>                               
                                    <Button onClick={() => setActivePage(2)} >
                                        Watch Your Personal Details
                                    </Button>                                    
                                </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>                               
                                    <Button onClick={() => setActivePage(1)} >
                                        Change your Apertment details
                                    </Button>                                    
                                </Box>
                  </Typography>                 

  )
}

export default MainSettings