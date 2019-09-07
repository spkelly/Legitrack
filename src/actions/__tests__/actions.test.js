import * as actions from '../index';
import * as types from '../types';
import configureStore from 'redux-mock-store';
import mockBill from '../../components/Bill/__tests__/mockBill.json';
import thunk from 'redux-thunk';
import { billResponse, searchResponse } from '../../../test/axiosResponseMock';
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {};
const mockAxiosBillResponse = billResponse(mockBill);
const mockAxiosSearchResponse = searchResponse('term');

jest.mock('axios');

describe('simple action creators', () => {
  describe('requestBill', () => {
    test('should return the proper action type and payload', () => {
      let expectedAction = {
        type: 'request_bill',
        payload: { id: '6' },
      };
      let returnedAction = actions.requestBill('6');
      expect(returnedAction).toEqual(expectedAction);
    });
  });

  describe('recieveBill', () => {
    test('should return the proper action type and payload', () => {
      let expectedAction = {
        type: 'recieve_bill',
        payload: {
          id: '6',
          bill: mockBill,
        },
      };

      let returnedAction = actions.recieveBill('6', { bill: mockBill });
      expect(returnedAction).toEqual(expectedAction);
    });
  });

  describe('requestSearch', () => {
    test('should return the proper action type and payload', () => {
      let expectedAction = {
        type: 'request_search',
        payload: { query: 'term' },
      };

      let returnedAction = actions.requestSearch('term');
      expect(returnedAction).toEqual(expectedAction);
    });
  });

  describe('recieveSearch', () => {
    test('should return the proper action type and payload', () => {});
  });
});

describe('asynchronous actions', () => {
  test('fetchSearch dispatches correct actions', async () => {
    let store = mockStore(initialState);
    let term = 'test';

    axios.get.mockImplementation(() => {
      return Promise.resolve(mockAxiosSearchResponse.success);
    });

    let expectedActions = [
      { type: types.REQUEST_SEARCH, payload: { query: 'test' } },
      { type: types.RECEIVED_SEARCH, payload: { query: 'test', data: [] } },
    ];

    await store.dispatch(actions.fetchSearch('test'));
    expect(store.getActions()).toEqual(expectedActions);
  });
  test('fetchSearch handles errors properly', async () => {
    let store = mockStore(initialState);
    let term = 'test';
    axios.get.mockImplementation(() => {
      return Promise.resolve(mockAxiosSearchResponse.failure);
    });

    const expectedActions = [
      {
        type: types.REQUEST_SEARCH,
        payload: { id: '6' },
      },
      {
        types: types.FETCH_SEARCH_ERROR,
        payload: { errorMessage: 'an error has occured' },
      },
    ];

    await store.dispatch(actions.fetchSearch(term));
    return expect(store.getActions()).toEqual(expectedActions);
  });
  test('fetchBill Dispatches correct actions', async () => {
    let store = mockStore(initialState);
    let billId = '6';

    axios.get.mockImplementation(() => {
      return Promise.resolve(mockAxiosBillResponse.success);
    });

    let expectedActions = [
      { type: types.REQUEST_BILL, payload: { id: '6' } },
      { type: types.RECIEVE_BILL, payload: { id: '6', bill: mockBill } },
    ];
    await store.dispatch(actions.fetchBill(billId));
    return expect(store.getActions()).toEqual(expectedActions);
  });
  test('fectchBill handles errors properly', async () => {
    let store = mockStore(initialState);
    let billId = '6';
    axios.get.mockImplementation(() => {
      return Promise.resolve(mockAxiosBillResponse.failure);
    });

    const expectedActions = [
      {
        type: types.REQUEST_BILL,
        payload: { id: '6' },
      },
      {
        types: types.FETCH_BILL_ERROR,
        payload: { errorMessage: 'an error has occured' },
      },
    ];

    await store.dispatch(actions.fetchBill(billId));
    return expect(store.getActions()).toEqual(expectedActions);
  });
});
