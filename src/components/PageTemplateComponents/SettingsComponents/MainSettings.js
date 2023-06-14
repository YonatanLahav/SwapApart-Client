import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import UserContext from '../../../context/UserContext';
import ApartmentImageStepper from '../HomePageComponents/ApartmentImageStepper';
import { margin } from '@mui/system';

function MainSettings({setActiveSettingsPage}) {
  const { userData } = useContext(UserContext);
  return (
    <TableContainer component={Paper} >
      <Typography component="h1" variant="h4" align="center">
                            Your Personal Details
                        </Typography>
      <Table sx={{ minWidth: 650, marginBottom:10 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">{JSON.parse(userData).firstName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell align="right">{JSON.parse(userData).lastName}</TableCell>
          </TableRow>
          </TableHead>
      </Table>

      <Typography component="h1" variant="h4" align="center">
                            Your Apartment Details
                        </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>               
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">{JSON.parse(userData).apartment.country}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Region</TableCell>
            <TableCell align="right">{JSON.parse(userData).apartment.region}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell align="right">{JSON.parse(userData).apartment.city}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Number of rooms</TableCell>
            <TableCell align="right">{(JSON.parse(userData).apartment.rooms)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Number of bathrooms</TableCell>
            <TableCell align="right">{JSON.parse(userData).apartment.bathrooms}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <TableCell>Pictures</TableCell>
      <ApartmentImageStepper images={(JSON.parse(userData).apartment.pictures)} />
    </TableContainer>

  )
}





                  // <Typography component="h1" variant="h4" align="center">
                  //   <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>                               
                  //                   <Button onClick={() => setActiveSettingsPage(2)} >
                  //                       Watch Your Personal Details
                  //                   </Button>                                    
                  //               </Box>
                  // <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>                               
                  //                   <Button onClick={() => setActiveSettingsPage(1)} >
                  //                       Change your Apertment details
                  //                   </Button>                                    
                  //               </Box>
                  // </Typography>                 

//   )
// }

export default MainSettings