import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    plus: (state, action) => {
      state.value += action.payload;
    },
    minus: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { plus, minus } = slice.actions;
export default slice.reducer;
