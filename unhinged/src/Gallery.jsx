import React from "react";
import { increment } from "./assets/gallerySlice";
import { useDispatch, useSelector } from "react-redux";

export default function Gallery() {
  const { images, currentIndex } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  const currentImageObj =
    images.length > 0 ? images[currentIndex % images.length] : null;
  const imageurl = new URL(currentImageObj.image, import.meta.url).href;
  return (
    <>
      {currentImageObj && (
        <>
          <p>¯\_(ツ)_/¯</p>
          <img src={imageurl} />
          <p>{currentImageObj.id}</p>
        </>
      )}
      <button onClick={() => dispatch(increment())}>
        Doom Click Me to 13!
      </button>
    </>
  );
}
