import { createStore, combineReducers } from 'redux';
import { initialState } from './initialState';
import { postsReducer } from './postsReducer';
import { categoriesReducer } from './categoriesReducer';

const subreducers = {
  posts: postsReducer,
  categories: categoriesReducer,
};

const reducer = combineReducers(subreducers);

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
