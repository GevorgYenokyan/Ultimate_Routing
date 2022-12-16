import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<any>) => {
      state.listData = action.payload;
    },
  },
});

export const { addList } = userListSlice.actions;

const userListReducer = userListSlice.reducer;

export default userListReducer;
