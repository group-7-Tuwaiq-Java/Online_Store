const initialState = {
  wishList: [],
};

const WishListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISH_LIST":
      return {
        wishList: [...state.wishList, payload],
      };
    default:
      return state;
  }
};

export default WishListReducer;
