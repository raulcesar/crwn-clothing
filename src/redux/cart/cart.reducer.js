import { CART_ACTION_TYPES } from './cart.actions';
import { addItemToCart } from './cart.utils';
const initialState = {
    hidden: true,
    cartItems: []
    // currentUser: null
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };

        case CART_ACTION_TYPES.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };

        default:
            return state;
    }
};

export default cartReducer;
