import { createSlice } from "@reduxjs/toolkit";

const initState = {
  users: [],
};
const userSlice = createSlice({
  name: "userReducer",
  initialState: initState,
  reducers: {
    signUp: (state, { payload }) => {
      state.users.push({
        userId: payload.userId,
        userPassword: payload.userPassword,
      });
    },
    logIn: (state, { payload }) => {
      state.users = state.users.filter((user) => user.userId === payload);
    },
  },
});
export const { logIn, signUp } = userSlice.actions;
export default userSlice.reducer;
