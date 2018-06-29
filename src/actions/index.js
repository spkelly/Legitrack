import axios from 'axios';
import {FETCH_TEST, FETCH_BILL, FETCH_SEARCH, RECEIVED_SEARCH, REQUEST_SEARCH} from './types';

const TEST_URL = 'http://localhost:3000/bill/1053030';
const ROOT_URL = 'http://localhost:3000'

export function fetchTest(){
  const testBill = axios.get(TEST_URL);
  
  return{
    type: FETCH_TEST,
    payload: testBill
  };
}

export function fetchBill(id){
  const bill = axios.get(`${ROOT_URL}/bill/${id}`);

  return{
    type: FETCH_BILL,
    payload: bill
  }
}

export const requestSearch = (query)=>{
  return{
    type:REQUEST_SEARCH,
    query
  }
}

export const recieveSearch = (query, json)=>{
  return {
    type: RECEIVED_SEARCH,
    payload: {
      query:query,
      data:json
    }
  }
}

// export function fetchSearch(query){
//   const result = axios.get(`${ROOT_URL}/search?q=${query}`);

//   return{
//     type: FETCH_SEARCH,
//     payload: result
//   }
// }

export function fetchSearch(query){
  return dispatch =>{
    dispatch(requestSearch(query));
    axios.get(`${ROOT_URL}/search?q=${query}`).then((response)=>{
    console.log(response);
    dispatch(recieveSearch(query,response.data.results))
  });
  }
  
}