import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const store = createStore(
  reducers, 
  undefined, 
  applyMiddleware(promise,thunk,logger)
);


export default store;