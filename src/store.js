import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
import { UV_UDP_REUSEADDR } from 'constants';

const store = createStore(
  reducers, 
  undefined, 
  applyMiddleware(promise,thunk, logger)
);


export default store;