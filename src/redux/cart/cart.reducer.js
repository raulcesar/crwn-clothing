import { CART_ACTION_TYPES } from './cart.actions';
const initialState = {
    hidden: true
    // currentUser: null
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };

        default:
            return state;
    }
};

export default cartReducer;
