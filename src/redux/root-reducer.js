import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer.js';
import cartReducer from './cart/cart.reducer.js';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer']
};
const rootReducer = combineReducers({
    userReducer,
    cartReducer
});


export default persistReducer(persistConfig, rootReducer);
