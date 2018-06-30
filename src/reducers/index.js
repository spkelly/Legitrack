import {combineReducers} from 'redux';
import bill_reducer from './bill_reducer';
import search_reducer from './search_reducer';


const combinedReducers = combineReducers({
  currentBill:bill_reducer,
  searchResults:search_reducer
});


export default combinedReducers;