import { createSelector } from 'reselect';
const selectShop = state => state.shopReducer;


export const selectCollections = createSelector(
    [selectShop],
    shopReducer => shopReducer.collections
);

export const selectSpecificCollection = collectionIdName => {
    return createSelector(
        [selectCollections],
        collections => collections[collectionIdName]
    );
};
