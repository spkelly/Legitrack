import axios from 'axios';
import {
  FETCH_BILL,
  RECEIVED_SEARCH,
  REQUEST_SEARCH,
  RECIEVE_BILL,
  REQUEST_BILL,
  FETCH_TEST,
} from './types';


//TODO: Reorder functions in file
//TODO: Write new fetchBill function
const TEST_URL = 'http://localhost:3000/bill/1053030';
const ROOT_URL = 'http://legitrack-api.herokuapp.com';

export function fetchTest(){
  const testBill = axios.get(TEST_URL);
  
  return{
    type: FETCH_TEST,
    payload: testBill
  };
}
//TODO: (Sean) Remove this when new fetchbill is working
// export function fetchBill(id){
//   const bill = axios.get(`${ROOT_URL}/bill/${id}`);

//   return{
//     type: FETCH_BILL,
//     payload: bill
//   }
// }

export function requestBill(id){
  return{
    type:REQUEST_BILL,
    id
  };
} 

export const recieveBill = (id, payload) => {
  return{
    type:RECIEVE_BILL,
    payload,
    id
  };
};

export const requestSearch = (query) => {
  return{
    type:REQUEST_SEARCH,
    query
  };
};

export const recieveSearch = (query, json)=>{
  return {
    type: RECEIVED_SEARCH,
    payload: {
      query:query,
      data:json
    }
  };
};



// TODO: clean up response object
export function fetchSearch(query){
  return dispatch =>{
    dispatch(requestSearch(query));
    axios.get(`${ROOT_URL}/search?q=${query}`).then((response)=>{
      dispatch(recieveSearch(query,response.data.results));
    });
  };
  
}

export function fetchBill(id){
  return dispatch =>{
    dispatch(requestBill(id));
    axios.get(`${ROOT_URL}/bill/${id}`).then((response) =>{
      dispatch(recieveBill(id, response));
    });
  };
}