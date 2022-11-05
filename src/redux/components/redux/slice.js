import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "countries",
  initialState: {
    location: ["Uzbekistan", "Kazakhstan", "Russia"],
  },
  reducers: {
    add: (state, action) => {
      state.location = [...state.location, action.payload];
    },
  },
});

export const { add } = slice.actions;
export default slice.reducer;
