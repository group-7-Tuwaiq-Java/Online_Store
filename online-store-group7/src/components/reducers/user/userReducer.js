const initialState = {
  users: [
    {
      userName: "user1",
      password: "12345",
      email: "user1@gmail.com",
    },
  ],
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_USER":
      return {
        users: [...state.users, payload],
      };
    case "ADD_TO_CART":
      console.log(state.cart);
      return {
        users: state.users,
      };

    default:
      return state;
  }
};
export default UserReducer;
