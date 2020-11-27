export const CART_ACTION_TYPES = {
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART'
};

export const toggleCartHidden = () => {
    return {
        type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN
    };
};

export const removeItem = item => {
    return {
        type: CART_ACTION_TYPES.REMOVE_ITEM,
        payload: item
    };
};

export const addItem = item => {
    return {
        type: CART_ACTION_TYPES.ADD_ITEM,
        payload: item
    };
};

export const clearItemFromCart = item => {
    return {
        type: CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART,
        payload: item
    };
};
