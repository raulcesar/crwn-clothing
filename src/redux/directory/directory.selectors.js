import { createSelector } from 'reselect';
const selectDirectory = state => state.directoryReducer;


export const selectDirectorySections = createSelector(
    [selectDirectory],
    directoryReducer => directoryReducer.sections
);

// export const selectCartItemsCount = createSelector(
//     [selectCartItems],
//     (cartItems) => cartItems.reduce(
//         (acumulated, cartItem) => acumulated + cartItem.quantity,
//         0
//     )
// );
