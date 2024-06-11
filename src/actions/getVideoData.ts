import type { VideoDataResponseType } from "@/types";

async function getVideoData(videoId: string) {
  if (!videoId) {
    throw new Error("Please enter a valid youtube URL.");
  }

  const res = await fetch(`http://localhost:5500/api/v1/videos/${videoId}`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const videoData: VideoDataResponseType = await res.json();

  return videoData;
}

export default getVideoData;
