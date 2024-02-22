import React from "react";
import { useState } from "react";
import { increment } from "./assets/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

export default function Gallery() {
  const { images, currentIndex } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const currentImageObj = images.length > 0 ? images[currentIndex] : null;
  const imageurl = currentImageObj
    ? new URL(currentImageObj.image, import.meta.url).href
    : "";

  const handleClick = async () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(increment());
      setIsLoading(false);
    }, 90);
  };

  return (
    <>
      {currentImageObj && (
        <>
          <p id="shrug">¯\_(ツ)_/¯</p>
          {isLoading ? <p id="load">💀</p> : <img id="images" src={imageurl} />}
          <p>{currentImageObj.id}</p>
        </>
      )}
      <button onClick={handleClick}>Doom Click Me to 13!</button>
    </>
  );
}
