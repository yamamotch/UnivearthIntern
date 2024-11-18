
import React from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const SidebarList: React.FC = () => {
    return (
        <List>
            <ListItemButton>
                <ListItemIcon>
                    <InboxIcon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <MailIcon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary="Mail" />
            </ListItemButton>
        </List>
    );
};

export default SidebarList;