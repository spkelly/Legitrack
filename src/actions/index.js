import axios from 'axios';
import {FETCH_TEST, FETCH_BILL, FETCH_SEARCH} from './types';

const TEST_URL = 'http://localhost:8080/bill/1053030';
const ROOT_URL = 'http://localhost:8080'

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
export function fetchSearch(query){
  const result = axios.get(`${ROOT_URL}/search/${query}`);

  return{
    type: FETCH_SEARCH,
    payload: result
  }
}