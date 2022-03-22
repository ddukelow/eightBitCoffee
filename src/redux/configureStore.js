import { createStore, combineReducers } from "redux";
import { Shop } from "./shopReducer";
import { Menu } from "./menuReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      shop: Shop,
      menu: Menu,
    })
  );

  return store;
};
