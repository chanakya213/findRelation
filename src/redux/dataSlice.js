import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addUserIn: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addUserIn } = dataSlice.actions;

export const selectData = (state) => state.data.data;

export default dataSlice.reducer;
