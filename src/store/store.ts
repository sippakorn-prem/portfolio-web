import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { stateReducer } from './reducers';

const middleware = [thunk];

const store = createStore(stateReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
