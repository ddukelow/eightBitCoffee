import { MENU } from "../shared/menu";
import { SHOP } from "../shared/shop";

export const initialState = {
  menu: MENU,
  shop: SHOP,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
