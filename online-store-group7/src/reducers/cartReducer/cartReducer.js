const initialState = {
  cart: [],
};

const CartReducer = (state = initialState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case "DELETE_FROM_CART":
      return {
        cart: payload,
      };
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, payload],
      };
    case "CLEAR_CART":
      return {
        cart: [],
      };

    case "INCREMENT":
      const index = state.cart.findIndex(
        (element) => element.idPr == payload.idPr
      );
      const newArr = [...state.cart];
      if (payload.quantity > payload.count) {
        newArr[index] = {
          ...newArr[index],
          count: newArr[index].count + 1,
        };
      }

      return {
        cart: newArr,
      };
    case "DECREMENT":
      const index1 = state.cart.findIndex(
        (element) => element.idPr == payload.idPr
      );
      const newArr1 = [...state.cart];
      if (payload.count > 0) {
        newArr1[index1] = {
          ...newArr1[index1],
          count: newArr1[index1].count - 1,
        };
      }

      return {
        cart: newArr1,
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
export default CartReducer;
