import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useContext } from 'react';
import UserContext from '../../../context/UserContext';
import ApartmentImageStepper from '../HomePageComponents/ApartmentImageStepper';


function Info() {
    const {userData}  = useContext(UserContext);
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
      <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell align="right">{JSON.parse(userData).firstName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Last Name</TableCell>
          <TableCell align="right">{JSON.parse(userData).lastName}</TableCell>
        </TableRow>
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

export default Info