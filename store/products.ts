import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
import Api from "./api";
import { RootState } from "./index";

const initialState = {
  products: [],
  page: 1,
  perPage: 30,
  total: null as number | null,
  loading: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetch-products",
  async ({ page, perPage }: { page: number; perPage: number }) => {
    const response = await Api.fetchProducts({ page, perPage });
    return response.data;
  }
);

export const getProducts = ({ products: { products } }: RootState) => products;

export const getPage = ({ products: { page } }: RootState) => page;

export const getPerPage = ({ products: { perPage } }: RootState) => perPage;

export const getTotal = ({ products: { total } }: RootState) => total;

export const productsSlice: Slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.pending,
      (state: typeof initialState, action) => {
        state.page = action.meta.arg.page;
        state.perPage = action.meta.arg.perPage;
      }
    ),
      builder.addCase(
        fetchProducts.fulfilled,
        (state: typeof initialState, action) => {
          state.products = action.payload.products;
          state.page = action.payload.query.page;
          state.perPage = action.payload.query.perPage;
          state.total = action.payload.total;
        }
      );
  },
});
