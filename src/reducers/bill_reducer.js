import { FETCH_TEST, FETCH_BILL } from '../actions/types';

export default function(state={}, action){
  switch(action.type){
    case FETCH_TEST:
      return action.payload.data;
    case FETCH_BILL:
      return action.payload.data;
    default:
      return state;
  }
}