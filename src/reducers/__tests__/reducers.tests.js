import billReducer from '../bill_reducer';
import searchReducer from '../search_reducer';
import errorReducer from '../error_reducer';
import * as types from '../../actions/types';
import fakeBill from '../../components/Bill/__tests__/mockBill.json';

describe('Reducers', () => {
  describe('Search Reducer', () => {
    test('Should return correct initial state', () => {
      const expectedState = {
        items: [],
        isFetching: false,
        query: '',
      };

      expect(searchReducer(undefined, {})).toEqual(expectedState);
    });
    test('REQUEST_SEARCH action turns on isFetching flag in state', () => {
      const action = { type: types.REQUEST_SEARCH };
      expect(searchReducer(undefined, action)).toHaveProperty(
        'isFetching',
        true
      );
    });
    test('RECIEVED_SEARCH action turns off isFetching flag in state', () => {
      const action = { type: types.RECEIVED_SEARCH, payload: {} };
      expect(searchReducer(undefined, action)).toHaveProperty(
        'isFetching',
        false
      );
    });
    test('RECIEVED_SEARCH action adds results to state', () => {
      let fakeResults = {};
    });
  });
  describe('Bill Reducer', () => {
    test('returns correct initial state', () => {
      const expectedState = {
        id: null,
        bill: {},
        isFetching: false,
      };
      expect(billReducer(undefined, {})).toEqual(expectedState);
    });
    test('REQUEST_BILL sets the is fetching flag in state', () => {
      let id = '6';
      const expectedState = {
        id: id,
        isFetching: true,
        bill: {},
      };
      let action = { type: types.REQUEST_BILL, payload: { id: id } };

      expect(billReducer(undefined, action)).toEqual(expectedState);
    });

    test('RECIEVE_BILL adds bill to state and stops fetching', () => {});
  });

  describe('Error Reducer', () => {
    test('returns correct initial state', () => {
      const expectedState = {
        errorMessage: '',
        hasError: false,
      };

      expect(errorReducer(undefined, {})).toEqual(expectedState);
    });

    test('HANDLE_ERROR saves error into state', () => {
      const errorMessage = 'Test Error Message';
      const action = { type: types.HANDLE_ERROR, payload: { errorMessage } };
      const expectedState = {
        errorMessage: errorMessage,
        hasError: true,
      };
      expect(errorReducer(undefined, action)).toEqual(expectedState);
    });
    test('CLEAR_ERROR removes exsisting error from state', () => {
      const initialState = { errorMessage: 'test Message', hasError: true };
      const action = { type: types.CLEAR_ERROR };
      const expectedState = {
        errorMessage: '',
        hasError: false,
      };
      expect(errorReducer(initialState, action)).toEqual(expectedState);
    });
  });
});
