import * as types from '../actions/types'l

let initialState = {
  errorMessage: '',
  hasError:false
}


export default function(state=initialState,action){
  switch(action.type){
    case types.HANDLE_ERROR:
    case types.CLEAR_ERROR:
    default:
  }
}