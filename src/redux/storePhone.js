import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import sessionStorage from "redux-persist/lib/storage/session"
import contactReducer from "./contacts/contactReducer";
import authReducer from "./auth/authReducer";

const defaultMiddleware = getDefaultMiddleware;

const authPersistConfig = {
  key:'auth',
  storage:sessionStorage,
  whitelist: ['token']

}
// const contactPersistConfig = {
//   key: 'allContacts',
//   storage:sessionStorage,
//   whitelist: ['itemContacts']
// }

export const store = configureStore({
  reducer: {
    allContacts: contactReducer ,
    auth: persistReducer(authPersistConfig,authReducer),
  },
  middleware: defaultMiddleware({
    serializableCheck:{
      ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
    }
  }),
});

export const persistor = persistStore(store)