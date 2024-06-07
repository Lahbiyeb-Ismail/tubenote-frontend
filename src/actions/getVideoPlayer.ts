type ResponseData = {
  message: string;
  videoPlayer: string;
};

async function getVideoPlayer(videoId: string | null) {
  let err;
  let iframePlayer = "";

  if (!videoId) {
    return {
      err: new Error("Please enter a valid youtube URL."),
      iframePlayer,
    };
  }

  try {
    const res = await fetch(
      `http://localhost:5500/api/v1/videos/${videoId}/player`
    );
    const statusCode = res.status;
    if (statusCode === 200) {
      const videoData: ResponseData = await res.json();

      iframePlayer = videoData.videoPlayer;
    }
    if (statusCode === 404) {
      throw new Error("Video not found. Please enter a valid youtube URL.");
    }
  } catch (error: any) {
    err = error;
  }

  return { err, iframePlayer };
}

export default getVideoPlayer;
