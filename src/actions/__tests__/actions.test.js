import * as actions from '../index';
import * as types from '../types';
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