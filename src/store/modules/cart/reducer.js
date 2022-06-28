import { CART_ADD, CART_REMOVE } from "./actionTypes";

const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  switch (action.type) {
    case CART_ADD:
      const { product } = action;

      return [...state, product];

    case CART_REMOVE:
      const { list } = action;

      return list;

    default:
      return state;
  }
};

export default cartReducer;
