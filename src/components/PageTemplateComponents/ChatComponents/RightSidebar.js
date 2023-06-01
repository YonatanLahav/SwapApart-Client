import * as React from 'react';
import { Sidebar, ExpansionPanel } from "@chatscope/chat-ui-kit-react";
import PublicIcon from '@mui/icons-material/Public';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MapIcon from '@mui/icons-material/Map';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BathtubIcon from '@mui/icons-material/Bathtub';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ApartmentImageStepper from '../HomePageComponents/ApartmentImageStepper';


export default function RightSidebar({ conversation }) {

  const getStartDate = () => {
    const startDate = new Date(conversation.plan.startDate);
    const formattedDate = startDate.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return "Start Date: " + formattedDate;
  };

  const getEndDate = () => {
    const endDate = new Date(conversation.plan.endDate);
    const formattedDate = endDate.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return "Start Date: " + formattedDate;
  };

  const getCountry = () => { return "Country: " + conversation.matchedUser.apartment.country; };
  const getRegion = () => { return "Region: " + conversation.matchedUser.apartment.region; };
  const getCity = () => { return "City: " + conversation.matchedUser.apartment.city; };
  const getRooms = () => { return "Rooms: " + conversation.matchedUser.apartment.rooms; };
  const getBathrooms = () => { return "Bathrooms: " + conversation.matchedUser.apartment.bathrooms; };


  return (
    <Sidebar position="right">
      <ExpansionPanel open title="Match Info">
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary={getStartDate()} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowBackIcon />
            </ListItemIcon>
            <ListItemText primary={getEndDate()} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            <ListItemText primary={getCountry()} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary={getRegion()} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary={getCity()} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <HomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary={getRooms()} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <BathtubIcon />
            </ListItemIcon>
            <ListItemText primary={getBathrooms()} />
          </ListItem>
          <ListItem disablePadding>
            <ApartmentImageStepper images={conversation.matchedUser.apartment.pictures} />
          </ListItem>
        </List>
      </ExpansionPanel>
    </Sidebar>
  );
}
