import React from "react";
import { increment } from "../src/assets/gallerySlice";
import { useDispatch, useSelector } from "react-redux";

export default function Gallery() {
  const { images, currentIndex } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  const currentImage =
    images.length > 0 ? images[currentIndex % images.length].image : null;

  return (
    <>
      {currentImage && <img src={currentImage} />}
      <button onClick={() => dispatch(increment())}>Click Me!</button>
    </>
  );
}
