import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import rootEpic from './rootEpics';
import rootReducers from './rootReducers';

import AsyncStorage from '@react-native-community/async-storage';
import {createEpicMiddleware} from 'redux-observable';

const persistConfig: any = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['news', 'books', 'search'],
};
const epicMiddleware = createEpicMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
store.subscribe(() => {
  console.log('state', store.getState());
});
export const persistor = persistStore(store);
export default store;
