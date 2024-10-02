import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { wordReducer } from './appReducers/wordReducer';

const reducer = combineReducers({
  wordList: wordReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;
