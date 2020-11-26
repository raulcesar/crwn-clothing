export const CART_ACTION_TYPES = {
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN'
};

export const toggleCartHidden = () => {
    return {
        type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN
    };
};
