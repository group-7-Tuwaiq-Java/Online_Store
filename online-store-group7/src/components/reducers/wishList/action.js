export const AddToWishList = (product) => {
  return {
    type: "ADD_TO_WISH_LIST",
    payload: product,
  };
};
