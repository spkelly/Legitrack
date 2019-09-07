import axios from 'axios';

import {
  FETCH_BILL,
  RECEIVED_SEARCH,
  REQUEST_SEARCH,
  RECIEVE_BILL,
  REQUEST_BILL,
  FETCH_TEST,
  HANDLE_ERROR,
} from './types';
import { types } from '@babel/core';

//TODO: Reorder functions in file
//TODO: Write new fetchBill function
// const ROOT_URL = 'http://localhost:3000/bill/1053030';
const ROOT_URL = 'https://legitrack-api.herokuapp.com';

export function requestBill(id) {
  return {
    type: REQUEST_BILL,
    payload: {
      id: id,
    },
  };
}

export const recieveBill = (id, { bill }) => {
  return {
    type: RECIEVE_BILL,
    payload: {
      bill,
      id,
    },
  };
};

export const requestSearch = query => {
  return {
    type: REQUEST_SEARCH,
    payload: {
      query,
    },
  };
};

export const recieveSearch = (query, json) => {
  return {
    type: RECEIVED_SEARCH,
    payload: {
      query: query,
      data: json,
    },
  };
};

// TODO: clean up response object
export function fetchSearch(query) {
  return dispatch => {
    dispatch(requestSearch(query));
    return axios
      .get(ROOT_URL + `/search?q=${query}`)
      .then(response => {
        if(response.status == 500 || response.status == 404){
          dispatch(handleError('an error has occured retrieving search'));
        }
        else{
          dispatch(recieveSearch(query, response.data.results));
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function handleError(errorMessage){
  return {
    type:HANDLE_ERROR,
    payload:{
      errorMessage:errorMessage
    }
  }
}

export function fetchBill(id) {
  return dispatch => {
    dispatch(requestBill(id));
    return axios
      .get(ROOT_URL + `/bill/${id}`)
      .then(response => {
        if(response.status == 500 || response.status == 404){
          dispatch(handleError('an error has occured retrieving bill'));
        }
        else{
          dispatch(recieveBill(id, response.data));
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
}
