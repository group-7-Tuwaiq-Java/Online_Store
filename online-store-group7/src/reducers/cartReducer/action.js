export const AddToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const ClearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const DeleteFromCart = (newCart) => {
  return {
    type: "DELETE_FROM_CART",
    payload: newCart,
  };
};
