import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import reducer from "./sidebarSlice";
import { BASE_URL } from "../utils/apiURL";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoriesProducts: [],
  categoriesProductsStatus: STATUS.IDLE,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCategories.pending, (state, action) => {
        state.categoriesStatus = STATUS.LOADING;
      })

      .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchAsyncCategories.rejected, (state, action) => {
        state.categoriesStatus = STATUS.FAILED;
      });
  },
});

export const fetchAsyncCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category-list"
    );
    const data = await response.json();
    return data;
  }
);

export const getAllCategories = (state) => state.category.categories;
export default categorySlice.reducer;
