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
          <section id="shrugSec">
            <p id="shrug1end">¯\_(ツ)_/¯</p>
            <p id="shrug2">¯\_(ツ)_/¯</p>
            <p id="shrug1">¯\_(ツ)_/¯</p>
            <p id="shrug2end">¯\_(ツ)_/¯</p>
          </section>
          <section id="shrugSec">
            <p id="shrug2ended">¯\_(ツ)_/¯</p>
            <p id="shrug1">¯\_(ツ)_/¯</p>
            <p id="shrug2">¯\_(ツ)_/¯</p>
            <p id="shrug1ended">¯\_(ツ)_/¯</p>
          </section>
          <section id="pic">
            {isLoading ? (
              <p id="load">💀</p>
            ) : (
              <img id="images" src={imageurl} />
            )}
          </section>
          <section id="number">
            <p>{currentImageObj.id}</p>
          </section>
        </>
      )}
      <section id="click">
        <button id="button" onClick={handleClick}>
          Doom Click Me to 13!
        </button>
      </section>
      <section id="shrugSec">
        <p id="shrug1end">¯\_(ツ)_/¯</p>
        <p id="shrug2">¯\_(ツ)_/¯</p>
        <p id="shrug1">¯\_(ツ)_/¯</p>
        <p id="shrug2end">¯\_(ツ)_/¯</p>
      </section>
      <section id="shrugSec">
        <p id="shrug2ended">¯\_(ツ)_/¯</p>
        <p id="shrug1">¯\_(ツ)_/¯</p>
        <p id="shrug2">¯\_(ツ)_/¯</p>
        <p id="shrug1ended">¯\_(ツ)_/¯</p>
      </section>
    </>
  );
}
