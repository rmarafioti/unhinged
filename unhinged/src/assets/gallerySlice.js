import { createSlice } from "@reduxjs/toolkit";
import { galleryPics } from "./data";

const initialState = {
  images: galleryPics,
  currentIndex: 0,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,

  reducers: {
    increment: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.images.length;
    },
  },
});

export const { increment } = gallerySlice.actions;

export default gallerySlice.reducer;
