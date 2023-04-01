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


function info({user}) {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
      <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell align="right">{user.firstName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Last Name</TableCell>
          <TableCell align="right">{user.lastName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Country</TableCell>
          <TableCell align="right">{user.country}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Region</TableCell>
          <TableCell align="right">{user.region}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>City</TableCell>
          <TableCell align="right">{user.city}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Number of rooms</TableCell>
          <TableCell align="right">{user.rooms}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Number of bathrooms</TableCell>
          <TableCell align="right">{user.bathrooms}</TableCell>
        </TableRow>
      </TableHead>
    </Table>
    <ImageList>
      {user.apartmentImgs.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`}    loading="lazy" />
      ))}
     </ImageList>
  </TableContainer>

  )
}

export default info