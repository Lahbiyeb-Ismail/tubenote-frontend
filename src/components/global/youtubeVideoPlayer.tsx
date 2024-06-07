"use client";

import React from "react";
import useVideoPlayerStore from "@/store/videoPlayerStore";

function YoutubeVideoPlayer() {
  const { videoPlayer } = useVideoPlayerStore();

  return (
    <div dangerouslySetInnerHTML={{ __html: videoPlayer }} className="mb-6" />
  );
}

export default YoutubeVideoPlayer;
