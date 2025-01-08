// src/redux/pageRenderSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecipeProps {
  id: number;
  title: string;
  img: string;
  alt?: string;
}

interface PageRenderState {
  pageRender: boolean;
  mainPageRender: boolean;
  feedPageRender: boolean;
  groceryPageRender: boolean;
  CommentPageRender: boolean;
  startDate: string;
  recipes: RecipeProps[];
  loading: boolean;
  isLogin: boolean;
  FilterPageRender: boolean;
}

const initialState: PageRenderState = {
  pageRender: true,
  mainPageRender: true,
  feedPageRender: true,
  groceryPageRender: true,
  CommentPageRender: true,
  startDate: new Date().toISOString(),
  recipes: [],
  loading: false,
  isLogin: false,
  FilterPageRender: false,
};

const pageRenderSlice = createSlice({
  name: "pageRender",
  initialState,
  reducers: {
    setPageRender: (state, action: PayloadAction<boolean>) => {
      state.pageRender = action.payload;
    },
    setMainPageRender: (state, action: PayloadAction<boolean>) => {
      state.mainPageRender = action.payload;
    },
    setFeedPageRender: (state, action: PayloadAction<boolean>) => {
      state.feedPageRender = action.payload;
    },
    setGroceryPageRender: (state, action: PayloadAction<boolean>) => {
      state.groceryPageRender = action.payload;
    },
    setCommentPageRender: (state, action: PayloadAction<boolean>) => {
      state.CommentPageRender = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setRecipes: (state, action: PayloadAction<RecipeProps[]>) => {
      state.recipes = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setFilterPageRender: (state, action: PayloadAction<boolean>) => {
      state.FilterPageRender = action.payload;
    },
  },
});

export const {
  setPageRender,
  setMainPageRender,
  setFeedPageRender,
  setGroceryPageRender,
  setCommentPageRender,
  setStartDate,
  setRecipes,
  setLoading,
  setIsLogin,
  setFilterPageRender,
} = pageRenderSlice.actions;

export default pageRenderSlice.reducer;
