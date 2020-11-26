import { createSelector } from 'reselect';

const selectCart = state => state.cartReducer;

export const selectCartHidden = createSelector(
    [selectCart],
    (cartReducer) => cartReducer.hidden
);

export const selectCartItems = createSelector(
    [selectCart],
    (cartReducer) => cartReducer.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (acumulated, cartItem) => acumulated + cartItem.quantity,
        0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (acumulated, cartItem) => acumulated + (cartItem.price * cartItem.quantity),
        0
    )
);
