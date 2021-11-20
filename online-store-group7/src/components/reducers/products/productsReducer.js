import { Products } from "../../objectsOfProducts";

const initialState = {
  products: Products,
};

const ProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DELETE_PRODUCT":
      return {
        products: payload,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
