import { useState } from "react"
import { useParams } from "react-router-dom";
import MessageList from "./MessageList";
import ChatList from "./ChatList";
import { Paper } from "@mui/material";



const initialChats = {
    id1: {
        name: 'chat1',
        messages: [{ text: 'sss1', author: '', id: `testId ${0}` }]
    },
    id2: {
        name: 'chat2',
        messages: [{ text: 'sss2', author: '', id: 0 }]
    },
    id3: {
        name: 'chat3',
        messages: [{ text: 'sss3', author: '', id: 0 }]
    },
    id4: {
        name: 'chat4',
        messages: [{ text: 'sss4', author: '', id: 0 }]
    }
}


const Chats = (props) => {
    const [chats, setChats] = useState(initialChats);
    const { chatId } = useParams();
    console.log(chatId);





    return (
        <div className="messageList " >

            <div className="css-144ebsl">
                <ChatList chats={chats} />
            </div>
            <Paper>
                <MessageList messages={chats[chatId].messages} />
            </Paper>

        </div>
    );
};

export default Chats