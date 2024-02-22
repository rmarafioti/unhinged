import { createSlice } from "@reduxjs/toolkit";
import { galleryPics } from "./data";

const initialState = {
  images: galleryPics,
  currentIndex: 0,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,

  /*
   *increment checks if the current image index is less than the length of the object of images
   *update the current image to the next image until the last image
   */
  reducers: {
    increment: (state) => {
      if (state.currentIndex < state.images.length - 1) {
        state.currentIndex += 1;
      }
    },
  },
});

export const { increment } = gallerySlice.actions;

export default gallerySlice.reducer;
