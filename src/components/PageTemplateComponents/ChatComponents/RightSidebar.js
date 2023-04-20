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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function RightSidebar({ conversation }) {
  const [open, setOpen] = React.useState(true);
  const startDate = "start date: " + conversation.plan.startDate.slice(8,10) +
      "." + conversation.plan.startDate.slice(5,7) + 
      "." + conversation.plan.startDate.slice(0,4) 
  const endDate = "end date: " + conversation.plan.endDate.slice(8,10) +
      "." + conversation.plan.endDate.slice(5,7) + 
      "." + conversation.plan.endDate.slice(0,4)
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Sidebar position="right">
      <ExpansionPanel open title="Match Info">  
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText primary = {startDate} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArrowBackIcon />
              </ListItemIcon>
              <ListItemText primary={endDate} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary={"country: " + conversation.plan.country} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary={"region: " + conversation.plan.region} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={"city: " + conversation.plan.city} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeWorkIcon />
              </ListItemIcon>
              <ListItemText primary={"rooms: " + conversation.plan.rooms} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BathtubIcon />
              </ListItemIcon>
              <ListItemText primary={"bathrooms: " + conversation.plan.bathrooms} />
            </ListItemButton>
          </ListItem>
        </List>      
      </ExpansionPanel>
    </Sidebar>
  );
}
