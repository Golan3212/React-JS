
import { Button, Dialog, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {addChat} from '../store/chats/actions'


const ChatList = () => {
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false)
    const [chatName, setChatName] = useState('');
   const chats = useSelector( state => state.chats.chatList);
    const dispatch = useDispatch();
    
    const handleOpen = () => {
        setVisible(true)
    }

    const handleChange = (event) => {
        setChatName(event.target.value)
    }
    
    const onAddChat = () => {
        dispatch(addChat(chatName));
        setChatName('');
        setVisible(false)
    }
  

    return <div className="css-144ebsl">
        {chats?.map((chat, index) => (
            <Link className="navigation-link " to={`/chats/${chat.id}`} key={`${index}chat`}>
                    {chat.name}
            </Link>
        ))}
        <button onClick={handleOpen}>Add Chat</button>
        <Dialog open={visible} onClose={()=>setVisible(false)}>
            <TextField value={chatName} onChange={handleChange} />
            <Button onClick={onAddChat}>Submit</Button>
        </Dialog>
    </div>
}
export default ChatList;