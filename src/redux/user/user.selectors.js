import { createSelector } from 'reselect';
// { userReducer: { currentUser }, cartReducer: { hidden } }
const selectUser = state => state.userReducer;


export const selectCurrentUser = createSelector(
    [selectUser],
    userReducer => userReducer.currentUser
);

// export const selectCartItemsCount = createSelector(
//     [selectCartItems],
//     (cartItems) => cartItems.reduce(
//         (acumulated, cartItem) => acumulated + cartItem.quantity,
//         0
//     )
// );
