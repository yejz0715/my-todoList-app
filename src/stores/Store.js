import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../modules/Todo";
import userSlice from "../modules/User";

export default configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
  },
});
