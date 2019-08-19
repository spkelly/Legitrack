import { REQUEST_SEARCH, RECEIVED_SEARCH } from '../actions/types';
import * as _ from 'lodash/core';

const defaultState = {
  items:[]
}


export default function (state=defaultState, action){
  switch(action.type){
    case REQUEST_SEARCH:
      return Object.assign({},state,{
        isFetching: true, 
        query: action.query
      });
    case RECEIVED_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        items: _.values(action.payload.data),
        query: action.payload.query
      });
    default:
      return state;
  }
}