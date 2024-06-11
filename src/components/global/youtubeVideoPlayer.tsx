"use client";

import React from "react";
import { parseStringtoHtml } from "@/helper";
import useVideoDataStore from "@/store/videoDataStore";

function YoutubeVideoPlayer() {
  const { videoData } = useVideoDataStore();

  const videoIframe = parseStringtoHtml(videoData.videoPlayer);

  return (
    <div dangerouslySetInnerHTML={{ __html: videoIframe }} className="mb-6" />
  );
}

export default YoutubeVideoPlayer;
