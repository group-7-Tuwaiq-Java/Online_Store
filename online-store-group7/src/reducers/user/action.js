export const addUser = (newUser) => {
  return {
    type: "ADD_USER",
    payload: newUser,
  };
};

export const AddToCart = (item) => {
  // console.log(item)
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};
