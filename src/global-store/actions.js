import actionTypes from "./types";

// Action Creator
export const addToCart = item => {
  //Action - object
  return { type: actionTypes.ADD_TO_CART, payload: item };
};

export const removeFromCart = item => {
  return { type: actionTypes.REMOVE_FROM_CART, payload: item };
};
