import { ADD_MESSAGE, addMessage } from "./messages/actions";

const middleware = store => next => action => {
    if(action.type === ADD_MESSAGE && action.payload.message.author !== 'bot'){
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

export default middleware;