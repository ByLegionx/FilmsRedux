import { createSlice } from "@reduxjs/toolkit";

export const filmSlice = createSlice({
  name: "film",
  initialState: {
    status: "no-logged",
    email: null,
    password: null,
    icon: null,
  },
  reducers: {
    loggedAction: (state, { payload }) => {
      (state.status = "logged"),
        (state.email = payload.email),
        (state.password = payload.password),
        (state.icon = payload.icon);
    },
    logout: (state) => {
      (state.status = "no-logged"),
        (state.email = null),
        (state.password = null),
        (state.icon = null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { loggedAction, logout } = filmSlice.actions;
