import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import pageRenderReducer from "../slices/pageRenderSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    pageRender: pageRenderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
