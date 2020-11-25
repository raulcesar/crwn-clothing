import { ACTION_TYPES } from './user.actions';
const initialState = {
    currentUser: null
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;
