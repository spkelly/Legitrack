import * as actions from '../index';
import * as types from '../types';
import configureStore from 'redux-mock-store';
import mockBill from '../../components/Bill/__tests__/mockBill.json';
import thunk from 'redux-thunk';

import axios from 'axios';
import http from '../../utils/http';
import { fail } from 'assert';

let middlewares = [thunk];

jest.mock('axios');

const mockStore = configureStore(middlewares);
const initialState = {};


const mockSearchSuccessResponse = (query) => ({
  status: 200,
  response:{}
});

const mockBillSuccessResponse = (id)=> ({
  status: 200,
  response:{
    data:{}
  }
});

describe('simple action creators',()=>{
  describe('requestBill',()=>{
    test('it should return the proper action type and payload', ()=>{
      let expectedAction = {
        type: 'request_bill',
        payload: '6'
      };
      let returnedAction = actions.requestBill('6');
      expect(returnedAction).toBe(expectedAction);
    });
  });

  describe('recieveBill',()=>{
    test('it should return the proper action type and payload', ()=>{
      let testBill = {};
      let expectedAction = {
        type: 'recieve_bill',
        payload:{
          id: '6',
          bill:{
            // ...
          }
        }
      };

      let returnedAction = actions.recieveBill('6', testBill);
      expect(returnedAction).toBe(expectedAction);
    });
  });

  describe('requestSearch',()=>{
    test('it should return the proper action type and payload', ()=>{
      let expectedAction = {
        type: 'request_search',
        payload: 'term'
      };

      let returnedAction = actions.requestSearch('term');
      expect(returnedAction).toBe(expectedAction);
    });
  });

  describe('recieveSearch',()=>{
    test('it should return the proper action type and payload', ()=>{

    });
  });
});

describe('asynchronous actions', ()=>{
  beforeEach(()=>{

  });
  afterEach(()=>{

  });

  test('fetchSearch dispatches correct actions', async()=>{
    let store = mockStore(initialState);
    let term = 'test';

    axios.get.mockImplementation(()=>{
      return Promise.resolve({
        data:{
          results: []
        }
      })
      .catch((e)=>{
        console.log(e);
      });
    });

    let expectedActions = [
      {type:types.REQUEST_SEARCH,payload:{query:'test'}},
      {
        type:types.RECEIVED_SEARCH,
        payload: {
          query: 'test',
          data:[]
        }
      }
    ]
    await store.dispatch(actions.fetchSearch('test'));
    return expect(store.getActions()).toEqual(expectedActions);
  });
  test('fetchBill Dispatches correct actions', async()=>{
    let store = mockStore(initialState);
    let billId = '6';
    axios.get.mockImplementation(()=>{
      return Promise.resolve({bill:mockBill});
    });

    let expectedActions = [
      {type:types.REQUEST_BILL},
      {
        type:types.RECIEVE_BILL,
        payload: {
          id: 6,
          bill: mockBill
        }
      }
    ];

    await store.dispatch(actions.fetchBill(billId));
    return expect(store.getActions()).toEqual(expectedActions);
  });
});