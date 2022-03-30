import { ADD_CHAT, DELETE_CHAT, UPDATE_CHAT } from "./actions"
const initialState ={
    chatList: []
}
const chatsReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_CHAT:
            return{
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id:`id${state.chatList.length}`,
                        name: action.payload
                    }
                ]
            }

        case DELETE_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList.slice(0, action.payload),
                    ...state.chatList.slice(action.payload + 1)
                ]
            }

            case UPDATE_CHAT:
                return {
                    ...state,
                    chatList: action.chats
                }

        default:
            return state
    }
}
export default chatsReducer;