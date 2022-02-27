import { Link, useParams } from "react-router-dom";


const ChatList = (props) => {
    const { chatId } = useParams();
    const { chats } = props;
    

  

    return <div className="css-144ebsl">
        {Object.keys(chats).map((id, index) => (
            <Link className="navigation-link " to={`/chats/${id}`} key={`${index}chat`}>
                    {chats[id].name}
            </Link>
        ))}
    </div>
}
export default ChatList;