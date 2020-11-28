import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer.js';
import cartReducer from './cart/cart.reducer.js';
import directoryReducer from './directory/directory.reducer.js';
import shopReducer from './shop/shop.reducer.js';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer']
};
const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    directoryReducer,
    shopReducer
});


export default persistReducer(persistConfig, rootReducer);
