import { data } from "./../data";
import { combineReducers } from "redux";
import actionTypes from "./types";

const products = (state = data.rows, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const featureProducts = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const cartItems = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Check if item arleady added on cart
      const inCart = state.find(
        product => product.product_id === action.payload.product_id
      );
      const currentCartItems = inCart ? state : [...state, action.payload];
      return [...currentCartItems];

    case actionTypes.REMOVE_FROM_CART:
      const itemsInCart = state.filter(
        product => product.product_id !== action.payload.product_id
      );
      return [...itemsInCart];
    default:
      return state;
  }
};

const rootReducer = combineReducers({ products, cartItems, featureProducts });

export default rootReducer;
