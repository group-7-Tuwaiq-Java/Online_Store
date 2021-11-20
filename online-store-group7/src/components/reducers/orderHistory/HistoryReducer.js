const initialState = {
  orderHistory: [],
};

const HistoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_HISTORY":
      return {
        orderHistory: [...state.orderHistory, payload],
      };
    default:
      return state;
  }
};

export default HistoryReducer;
