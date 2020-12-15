import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import contactReducer from "./contacts/contactReducer";
import authReducer from "./auth/authReducer";

const defaultMiddleware = getDefaultMiddleware;

const authPersistConfig = {
  key:'auth',
  storage,
  whitelist: ['token']

}
const contactPersistConfig = {
  key: 'allContacts',
  storage,
  whitelist: ['itemContacts']
}

export const store = configureStore({
  reducer: {
    allContacts: persistReducer(contactPersistConfig ,contactReducer),
    auth: persistReducer(authPersistConfig,authReducer),
  },
  middleware: defaultMiddleware({
    serializableCheck:{
      ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
    }
  }),
});

export const persistor = persistStore(store)