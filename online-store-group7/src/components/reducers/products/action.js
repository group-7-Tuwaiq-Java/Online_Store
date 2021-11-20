export const DleteProduct = (product) => {
  return {
    type: "DELETE_PRODUCT",
    payload: product,
  };
};
