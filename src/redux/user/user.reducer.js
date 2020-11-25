import { stateTypes } from './user.actions';
const initialState = {
    currentUser: null
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case stateTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;
