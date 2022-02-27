import { EXAMPLE_ACTIONS } from './actions'
const initialState = {
    showName: false,
    name: 'Golan4eg'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_ACTIONS:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state;
    }
}
export default profileReducer;