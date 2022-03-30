export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const UPDATE_MESSAGE = 'MESSAGES::UPDATE_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: message
    }
});

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));

    if (message.author !== 'bot') {
        const botMessage = {
            author: 'bot',
            text: 'Кроме тебя тут никого нет...'
        }

        setTimeout(() => {
            dispatch(addMessage(chatId, botMessage))
        }, 1500);
    }
}

export const updateMessages = (chatId, messages) => ({
    type: UPDATE_MESSAGE,
    chatId,
    messages
})