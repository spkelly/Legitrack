import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

const store = createStore(
  reducers, 
  undefined, 
  applyMiddleware(promise)
);


export default store;