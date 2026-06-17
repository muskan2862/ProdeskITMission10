import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cartSlice";
import filterReducer from "./features/filterSlice";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    theme: themeReducer,
  },
});