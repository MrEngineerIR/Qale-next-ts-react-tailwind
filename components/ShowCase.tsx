"use client";
import React, { useState } from "react";
import { FaArrowRight, FaImage } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";
import { Case } from "@/types";

const ShowCase = ({ rootStyle, Case }: { rootStyle: string; Case: Case }) => {
  const [isImage, setIsImage] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [currentVideo, setCurrentVideo] = useState<number>(0);

  function handleArrowClick(direction: string) {
    if (direction === "right") {
      if (isImage) {
        if (currentImage + 1 >= Case.images.length) return;
        setCurrentImage((prev) => ++prev);
        return;
      }
      if (currentVideo + 1 >= Case.videos.length) return;
      setCurrentVideo((prev) => ++prev);
      return;
    }
    if (isImage) {
      if (currentImage - 1 < 0) return;
      setCurrentImage((prev) => --prev);
      return;
    }
    if (currentVideo - 1 < 0) return;
    setCurrentVideo((prev) => --prev);
  }
  return (
    <div className={rootStyle}>
      <header className="h-20 w-full flex justify-around content-center items-center">
        <button
          onClick={() => setIsImage((prev) => (prev ? prev : !prev))}
          className={`${
            isImage ? "bg-black/30 rounded-full h-fit p-1" : undefined
          } text-white w-full justify-center flex items-center hover:blur-none ml-2 `}
        >
          <FaImage className="w-5 h-5" />
        </button>
        <hr />
        <button
          onClick={() => setIsImage((prev) => (prev ? !prev : prev))}
          className={`${
            isImage ? undefined : "bg-black/30 rounded-full h-fit p-1"
          } text-white w-full  justify-center flex items-center  hover:blur-none ml-2`}
        >
          <FaVideo className="w-5 h-5" />
        </button>
      </header>
      <main className="relative h-6/12 bg-transparent   ">
        <button
          onClick={() => handleArrowClick("left")}
          className="absolute top-80 end-0 z-30  text-white animate-MoveLeft  bg-white/50 rounded-full p-1 "
        >
          <FaArrowRight className=" rotate-180" />
        </button>
        {isImage ? (
          <div className="w-[960px] h-[540px]">
            <Image
              fill
              src={Case.images[currentImage]}
              alt={Case.name}
              className="rounded-2xl"
            />
          </div>
        ) : (
          <VideoPlayer url={Case.videos[currentVideo]} />
        )}
        <button
          onClick={() => handleArrowClick("right")}
          className="absolute top-80 z-30 text-white animate-MoveRight bg-white/50 rounded-full p-1 "
        >
          <FaArrowRight />
        </button>
      </main>
    </div>
  );
};

export default ShowCase;
