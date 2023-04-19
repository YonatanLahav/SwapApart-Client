import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

export default function RightSidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Matched Apertment Details
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <AccessAlarmIcon />
        </ListItemIcon>
        <ListItemText primary="date: 1/2 - 5/2" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <ThreeDRotation />
        </ListItemIcon>
        <ListItemText primary="country : Israel" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Rooms : 6" />
      </ListItemButton>
      
    </List>
  );
}
