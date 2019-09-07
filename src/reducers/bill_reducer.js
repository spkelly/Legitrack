import { REQUEST_BILL, RECIEVE_BILL } from '../actions/types';

const initialState = {
  bill:{},
  id: null,
  isFetching:false
}

export default function(state=initialState, action){
  switch(action.type){
    case REQUEST_BILL:
      return Object.assign({}, state, {id:action.payload.id, isFetching:true});
    case RECIEVE_BILL:
      return Object.assign({}, state, {
        id: action.id,
        content: action.payload.data,
        isFetching:false
      });
    default:
      return state;
  }
}