import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userListReducer from "../features/usersList/usersListSlise";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userList: userListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
