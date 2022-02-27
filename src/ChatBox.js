import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import { useParams } from 'react-router-dom';
import {Chats} from './constants/Chats';

export default function SelectedListItem(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [chats, setChats] = React.useState([]);
    const [chatList, setChatList] = React.useState([]);
    const { chatId } = useParams();
    const {messages} = props;


    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        if (!chats.includes(chats[index])) {
            setChats([...chats, {
                messages: props.item,
                chatId: index
                
            }]);     
        } 
         
    };

    React.useEffect((event) => {
       
      console.log(props.item);
      console.log(chats);
      
        

    }, [ chats, props.item ])

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="chat1" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="chat2" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="chat3" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="chat4" />
                </ListItemButton>
            </List>
            <Divider />
        </Box>
    );
}