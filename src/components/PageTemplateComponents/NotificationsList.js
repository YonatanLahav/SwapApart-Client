import React, { useContext } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import UserContext from '../../context/UserContext';

/**
 * Component for rendering the list of notifications.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setActivePage - The function to set the active page.
 * @param {Function} props.setActiveChat - The function to set the active chat.
 * @returns {JSX.Element} The rendered component.
 */
export const NotificationsList = ({ setActivePage, setActiveChat }) => {
    const { notifications, conversations } = useContext(UserContext);

    /**
     * Handles the click event when a notification is clicked.
     *
     * @param {string} notification - The notification ID.
     */
    const handleClick = (notification) => {
        setActiveChat(notification);
        setActivePage(2);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Notifications
                </ListSubheader>
            }
        >
            <Divider />
            {notifications.map((notification) => {
                const conversation = conversations.find((c) => c._id === notification);
                const country = conversation.matchedUser.apartment.country;
                const region = conversation.matchedUser.apartment.region;
                const primaryText = `New Match Found in ${region}, ${country}!`;
                return (
                    <ListItemButton key={notification} onClick={() => handleClick(notification)}>
                        <ListItemText
                            primary={primaryText}
                            secondary="Click here to initiate a conversation."
                        />
                    </ListItemButton>
                );
            })}
        </List>
    );
};
