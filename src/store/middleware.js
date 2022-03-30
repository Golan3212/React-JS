import { ADD_MESSAGE, addMessage,updateMessages } from "./messages/actions";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import firebase from "../services/firebase";
import { chatListUpdate } from "./chats/actions";




const middleware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.payload.message.author !== 'bot') {
        const botMessage = {
            author: 'bot',
            text: 'Кроме тебя тут никого нет...',
        }

        setTimeout(() => {
            store.dispatch(addMessage(action.payload.chatId, botMessage))
        }, 1500);
    }


    return next(action);
}


export const addChatWithFB = (name) => async () => {
    const db = getDatabase(firebase);

    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, { name: name }).then(res => {
        console.log(res);
    })
}

export const deleteChatWithFB = (id) => async () => {
    const db = getDatabase(firebase);

    const chatRef = ref(db, `/chats/${id}`);
    const messagesRef = ref(db, `/messages/${id}`);
    remove(chatRef).then(res => {
        console.log(`removed`);
    })
    remove(messagesRef).then(res => {
        console.log('msg delete', res);
    })
}



export const initTrackerWithFB = (id) => async (dispatch) => {
    const db = getDatabase(firebase);

    const chatRef = ref(db, `/chats`);
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({id: item, name: data[item].name}));
        dispatch(chatListUpdate(chatArr));
    })
}

export const getMessagesByChatIdWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebase);
    const msgRef = ref(db, `/messages/${chatId}`);

    onValue(msgRef, (snapshot) =>{
        const data = snapshot.val();
        const msg = data && Object.values(data);
        if (msg?.length > 0){
            dispatch(updateMessages(chatId, msg))
        }
    } )
}

export const addMessageWithFB = (chatId, message) => async ()=> {
    const db = getDatabase(firebase);
    const messageRef = ref(db, `/messages/${chatId}`);
    const newMessageRef = push(messageRef);
    set(newMessageRef, message).then((res) => {
        console.log('messagesAdd', res);
    })
}


export default middleware;