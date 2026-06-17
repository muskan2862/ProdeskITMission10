import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "All",
  minPrice: 0,
  maxPrice: 1000,
};

const filterSlice = createSlice({
  name: "filter",

  initialState,

  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },

    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },

    resetFilters: (state) => {
      state.category = "All";
      state.minPrice = 0;
      state.maxPrice = 1000;
    },
  },
});

export const {
  setCategory,
  setMinPrice,
  setMaxPrice,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;