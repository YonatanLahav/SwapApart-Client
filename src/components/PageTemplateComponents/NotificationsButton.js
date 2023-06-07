import React, { useContext, useState } from 'react';
import Popover from '@mui/material/Popover';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import UserContext from '../../context/UserContext';
import { NotificationsList } from './NotificationsList';


/**
 * Component for rendering the notifications button and popover.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.setActivePage - The function to set the active page.
 * @param {Function} props.setActiveChat - The function to set the active chat.
 * @returns {JSX.Element} The rendered component.
 */
export default function NotificationsButton({ setActivePage, setActiveChat }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const { notifications, setNotifications, handleDeleteNotifications } = useContext(UserContext);

    /**
     * Event handler for the button click event.
     * Sets the anchor element for the popover.
     *
     * @param {Event} event - The button click event.
     */
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    /**
     * Event handler for closing the popover.
     * Resets the anchor element and clears the notifications.
     */
    const handleClose = () => {
        setAnchorEl(null);
        if (notifications.length !== 0) {
            setNotifications([]);
            handleDeleteNotifications();
        }
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton color="inherit" onClick={handleClick} disabled={notifications.length === 0}>
                <Badge badgeContent={notifications.length} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <NotificationsList
                    setActivePage={setActivePage}
                    setActiveChat={setActiveChat}
                />
            </Popover>
        </div>
    );
}
