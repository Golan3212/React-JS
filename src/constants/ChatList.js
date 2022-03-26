
import { Button, Dialog, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.scss'
import { addChatWithFB, deleteChatWithFB, initTrackerWithFB } from "../store/middleware";


const ChatList = () => {
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false)
    const [chatName, setChatName] = useState('');
    const chats = useSelector(state => state.chats.chatList);
    const dispatch = useDispatch();

    const handleOpen = () => {
        setVisible(true);
    }

    const onDeleteChat = (index)=> {
        dispatch(deleteChatWithFB(index));
    }
    const handleChange = (event) => {
        setChatName(event.target.value)
    }

    const onAddChat = () => {
       dispatch(addChatWithFB(chatName));
        setChatName('');
        setVisible(false)
    }

    useEffect(() => {
        dispatch(initTrackerWithFB());
    }, [])


    return <div className="css-144ebsl">
        {chats?.map((chat, index) => (
            <div className="chatList">
                <Link className="navigation-link " to={`/chats/${chat.id}`} key={`${chat.id}`}>
                    {chat.name}
                </Link>
                <IconButton onClick={() => {onDeleteChat(chat.id)}} aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>


        ))}
        <button className="addChatBtn" onClick={handleOpen}>Add Chat</button>
        <Dialog open={visible} onClose={() => setVisible(false)}>
            <TextField value={chatName} onChange={handleChange} />
            <Button  onClick={onAddChat}>Submit</Button>
        </Dialog>
    </div>
}
export default ChatList;