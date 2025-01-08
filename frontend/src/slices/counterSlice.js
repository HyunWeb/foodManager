// reducer 정의 : 상태 변화를 일으키는 함수

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { number: 50 },
  reducers: {
    plus: (state) => {
      state.number += 1;
    },
    minus: (state) => {
      state.number -= 1;
    },
  },
});

export const { plus, minus } = counterSlice.actions;
export default counterSlice.reducer;
