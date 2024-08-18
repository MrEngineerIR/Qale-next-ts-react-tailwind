"use client";
import React from "react";
const VideoPlayer = ({ url }: { url?: string }) => {
  return (
    <iframe
      className="aspect-video aprat rounded-br-2xl rounded-bl-2xl m-0 "
      src={url}
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
