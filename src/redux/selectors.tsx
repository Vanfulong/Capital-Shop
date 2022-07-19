import { createSelector } from "@reduxjs/toolkit";
import { Cart } from "../@types/type";
export const cartSelector = (state: any) => state.Cart;
export const loginSuccess = (state: any) => state.Account;
export const quantityItem = createSelector(cartSelector, (state: Cart[]) => {
  if (state.length === 0) {
    return 0;
  } else {
    let result = 0;
    state.forEach((item) => {
      result += item.quantity;
    });
    return result;
  }
});
export const getAllItemFromCart = createSelector(
  cartSelector,
  (state: Cart[]) => {
    return state;
  }
);
export const getLoginSuccess = createSelector(loginSuccess, (state) => {
  return state;
});
