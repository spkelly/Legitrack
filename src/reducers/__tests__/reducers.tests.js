import billReducer from '../bill_reducer';
import searchReducer from '../search_reducer';
import * as types from '../../actions/types';

describe('Reducers',()=>{
  describe('Search Reducer',()=>{
    test('REQUEST_SEARCH action turns on isFetching flag in state',()=>{
      let expectedState = {isFetching:true};
      let action ={type: types.REQUEST_SEARCH};
      let returnedState = searchReducer(undefined,action);
      expect(returnedState).toEqual(expectedState);
    });
    test('RECIEVED_SEARCH action turns off isFetching flag in state',()=>{});
    test('RECIEVED_SEARCH action adds results to state',()=>{});
  });
  describe('Bill Reducer',()=>{

  });
});