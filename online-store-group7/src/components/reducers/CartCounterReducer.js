const initialState = {
  count: [
    {
      id: 0,
      value: 0,
    },
  ],
};
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(action.payload);
      let newInc = {
        id: action.payload.idPr,
        value: Math.min(state.count + 1, action.payload.quantity),
      };
      return {
        count: [...state.count, newInc],
      };
    case "DECREMENT":
      let newDec = {
        id: action.payload.idPr,
        value: Math.max(state.count - 1, 0),
      };
      return {
        count: [...state.count, newDec],
      };
    default:
      return state;
  }
};

export const increment = (payload) => {
  return {
    type: "INCREMENT",
    payload: payload,
  };
};

export const decrement = (payload) => {
  return {
    type: "DECREMENT",
    payload: payload,
  };
};
export default counter;
