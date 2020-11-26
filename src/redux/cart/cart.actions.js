export const CART_ACTION_TYPES = {
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
    ADD_ITEM: 'ADD_ITEM'
};

export const toggleCartHidden = () => {
    return {
        type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN
    };
};

export const addItem = item => {
    return {
        type: CART_ACTION_TYPES.ADD_ITEM,
        payload: item
    };
};
