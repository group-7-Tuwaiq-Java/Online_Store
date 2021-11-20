export const ChangeLogged = (userInfo) => {
  return {
    type: "LOG_IN",
    payload: userInfo,
  };
};
