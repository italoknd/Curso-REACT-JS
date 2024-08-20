import { createSlice } from "@reduxjs/toolkit";
import { IProfile } from "../interfaces/basicos-interface/profiles";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: new Object() as IProfile,
  },
  reducers: {
    sendProfileData(state, action) {
      state.profile = action.payload;
    },
  },
});

export const { sendProfileData } = profileSlice.actions;
export default profileSlice.reducer;
