import billReducer from '../bill_reducer';
import searchReducer from '../search_reducer';
import * as types from '../../actions/types';
import fakeBill from '../../components/Bill/__tests__/mockBill.json';

describe('Reducers',()=>{
  describe('Search Reducer',()=>{
    test('Should return correct initial state', ()=>{
      const expectedState = {
        items:[], 
        isFetching: false,
        query:''
      };

      expect(searchReducer(undefined,{})).toEqual(expectedState);

    });
    test('REQUEST_SEARCH action turns on isFetching flag in state',()=>{
      const action ={type: types.REQUEST_SEARCH};
      expect(searchReducer(undefined,action)).toHaveProperty('isFetching', true);
    });
    test('RECIEVED_SEARCH action turns off isFetching flag in state',()=>{
      const action = {type: types.RECEIVED_SEARCH,payload:{}};
      expect(searchReducer(undefined,action)).toHaveProperty('isFetching', false);
    });
    test('RECIEVED_SEARCH action adds results to state',()=>{
      let fakeResults = {};
    });
  });
  describe('Bill Reducer',()=>{
    test('returns correct initial state', ()=>{
      const expectedState = {
        id: null,
        bill:{},
        isFetching: false
      };
      expect(billReducer(undefined,{})).toEqual(expectedState);
    }); 
  });
});