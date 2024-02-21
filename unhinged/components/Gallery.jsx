import React from "react";
import { increment } from "../src/assets/gallerySlice";
import { useDispatch, useSelector } from "react-redux";

export default function Gallery() {
  const { images, currentIndex } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  const currentImageObj =
    images.length > 0 ? images[currentIndex % images.length] : null;

  return (
    <>
      {currentImageObj && (
        <>
          <img src={currentImageObj.image} />
          <p>{currentImageObj.id}</p>
        </>
      )}
      <button onClick={() => dispatch(increment())}>
        Doom Click Me to 13!
      </button>
    </>
  );
}
