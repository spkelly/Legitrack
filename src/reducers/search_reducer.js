import { FETCH_SEARCH } from '../actions/types';


export default function (state={}, action){
  switch(action.type){
    case FETCH_SEARCH:
      return action.payload.data
    default:
      return state;
  }
}