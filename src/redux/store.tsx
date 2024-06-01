import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reduces';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // Key for the persisted state in storage
  storage, // Storage engine (e.g., localStorage)
  safelist: ["auth"], // Array of reducers to persist (only 'auth' in this case)
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export {persistor, store};
