import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunk from "redux-thunk"

const middleware = [thunk]
 const state={}
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, state, composeEnhancers(

    applyMiddleware(...middleware)
  ));

  export default store;
