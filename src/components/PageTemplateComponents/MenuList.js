import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import Divider from '@mui/material/Divider';

function MenuList({ setActivePage, setActiveSettingsPage, setPlanIndex }) {
    return (
        <div>
            <React.Fragment>
                <ListItemButton onClick={() => {setActivePage(0); setPlanIndex(null);}}  >
                    <ListItemIcon >
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home Page" />
                </ListItemButton>
                <ListItemButton onClick={() => setActivePage(1)} >
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="New Vacation" />
                </ListItemButton>
                <ListItemButton onClick={() => setActivePage(2)}>
                    <ListItemIcon>
                        <ForumIcon />
                    </ListItemIcon>
                    <ListItemText primary="Chats" />
                </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
                <ListSubheader component="div" inset>
                </ListSubheader>
                <ListItemButton onClick={() => {
                                setActivePage(3);
                                setActiveSettingsPage(0);
                    }}>

                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>
                <ListItemButton onClick={() => setActivePage(4)}>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact Us" />
                </ListItemButton>
            </React.Fragment>
        </div>
    )
}

export default MenuList