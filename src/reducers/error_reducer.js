import * as types from '../actions/types'

let initialState = {
  errorMessage: '',
  hasError:false
}


export default function(state=initialState,action){
  switch(action.type){
    case types.HANDLE_ERROR:
      return Object.assign({},state,{
        hasError:true,
        errorMessage:action.payload.errorMessage
      });
    case types.CLEAR_ERROR:
      return Object.assign({},state,{
        errorMessage: '',
        hasError:false
      })
    default:
      return state;
  }
}