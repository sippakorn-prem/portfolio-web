// store.ts

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers';
import { RootState } from './store.interface';
import thunk from 'redux-thunk';

const rootReducer = combineReducers<RootState>({
  user: userReducer,
});

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
