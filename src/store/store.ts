// store.ts

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { stateReducer } from './reducers';

const middleware = [thunk];

const store = createStore(stateReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
