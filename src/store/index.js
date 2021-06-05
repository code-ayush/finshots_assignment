import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import rootSaga from './sagas';
import rootReducer, {rootPersistConfig} from './reducers';

const sagaMiddleware = createSagaMiddleware();
const pReducer = persistReducer(rootPersistConfig, rootReducer);
export const store = createStore(pReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
