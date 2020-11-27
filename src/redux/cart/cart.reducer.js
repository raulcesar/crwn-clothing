import { CART_ACTION_TYPES } from './cart.actions';
import { addItemToCart, removeItemFromCart } from './cart.utils';
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

        case CART_ACTION_TYPES.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };

        case CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => action.payload.id !== item.id)
            };
        default:
            return state;
    }
};

export default cartReducer;
