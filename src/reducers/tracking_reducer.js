import * as types from '../actions/types';

const intialState = {
  savedBills: [],
  lastUpdated: null,
};

let trackingReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.ADD_BILL:
      let newBill = {
        title: action.payload.title,
        description: action.payload.description,
        changeHash: action.payload.changeHash,
        id: action.payload.id,
        isFetching: false,
      };
      return {
        ...state,
        savedBills: [...state.savedBills, newBill],
      };
    case types.REMOVE_BILL:
      return {
        ...state,
        savedBills: state.savedBills.filter(bill => bill.id != action.payload),
      };

    case types.REFRESH_BILLS:
      let markedForRefresh = state.savedBills.map(bill => ({
        ...bill,
        isFetching: true,
      }));
      return {
        ...state,
        savedBills: markedForRefresh,
      };
    case types.REFRESH_BILLS_SUCESS:
    case types.CHECK_FOR_CHANGES:
      let billUpdates = state.savedBills.map((bill, index) => {
        return {
          ...bill,
          isUpdated: bill.changeHash !== action.payload[index].changeHash,
        };
      });
    default:
      return state;
  }
};

export default trackingReducer;
