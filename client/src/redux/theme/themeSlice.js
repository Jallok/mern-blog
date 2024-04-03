import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return produce(state, (draftState) => {
        draftState.theme = draftState.theme === "light" ? "dark" : "light";
      });
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
