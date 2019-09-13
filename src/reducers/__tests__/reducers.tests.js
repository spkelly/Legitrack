import billReducer from '../bill_reducer';
import searchReducer from '../search_reducer';
import errorReducer from '../error_reducer';
import trackingReducer from '../tracking_reducer';
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
  describe('Tracking Reducer', () => {
    test('returns correct default state', () => {
      let expectedState = {
        savedBills: [],
        lastUpdated: null,
      };
      expect(trackingReducer(undefined, {})).toEqual(expectedState);
    });
    test('addBill adds new bill to savedBills', () => {
      let expectedState = {
        savedBills: [
          {
            id: 124567,
            title: 'fake bill',
            description: 'fake description',
            isFetching: false,
            changeHash: 'B358FE39CD90DBF5F7B6F',
          },
        ],
        lastUpdated: null,
      };

      let action = {
        type: types.ADD_BILL,
        payload: {
          title: 'fake bill',
          id: 124567,
          description: 'fake description',
          changeHash: 'B358FE39CD90DBF5F7B6F',
        },
      };
      expect(trackingReducer(undefined, action)).toEqual(expectedState);
    });

    test('removeBill removes selected bill from savedBills', () => {
      let expectedState = {
        savedBills: [{
          id: 124567,
          title: 'fake bill',
          description: 'fake description',
          isFetching: false,
          changeHash: 'B358FE39CD90DBF5F7B6F',
        }],
        lastUpdated: null,
      };

      let initialState = {
        savedBills: [
          {
            id: 124567,
            title: 'fake bill',
            description: 'fake description',
            isFetching: false,
            changeHash: 'B358FE39CD90DBF5F7B6F',
          },
          {
            id: 391450,
            title: 'fake bill 2',
            description: 'another fake description',
            isFetching: false,
            changeHash: '33189CC3ADA54E88517',
          }

        ],
        lastUpdated: null,
      };

      let action = { type: types.REMOVE_BILL, payload: 391450 };

      expect(trackingReducer(initialState, action)).toEqual(expectedState);
    });
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
