import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';
import createSagaMiddleware from 'redux-saga';
import { navMiddleware } from '../navigation';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare, navMiddleware)
);
// export const store = createStore(rootReducer);

sagaMiddleWare.run(rootSaga);
