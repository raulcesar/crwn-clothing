import { createSelector } from 'reselect';
const selectShop = state => state.shopReducer;


export const selectCollections = createSelector(
    [selectShop],
    shopReducer => shopReducer.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.values(collections)
    // collections => {
    //     const ret = Object.values(collections);
    //     return ret;
    // }
);

export const selectSpecificCollection = collectionIdName => {
    return createSelector(
        [selectCollections],
        collections => collections[collectionIdName]
    );
};
