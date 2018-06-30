import { FETCH_TEST, FETCH_BILL, REQUEST_BILL, RECIEVE_BILL } from '../actions/types';

export default function(state={}, action){
  switch(action.type){
    case FETCH_TEST:
      return action.payload.data;
    case REQUEST_BILL:
      return Object.assign({}, state, {id:action.id, isFetching:true})
    case RECIEVE_BILL:
      return Object.assign({},state,{
        id: action.id,
        content: action.payload.data,
        isFetching:false
      })
    default:
      return state;
  }
}