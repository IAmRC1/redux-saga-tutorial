import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware, ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(RootSaga)

export default store;