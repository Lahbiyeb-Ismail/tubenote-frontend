import { create } from "zustand";

interface VideoPlayerState {
  videoPlayer: string;
  setVideoPlayer: (player: string) => void;
}

const getInitialVideoPlayer = () => localStorage.getItem("videoPlayer") || "";

const useVideoPlayerStore = create<VideoPlayerState>((set) => ({
  videoPlayer: getInitialVideoPlayer(),
  setVideoPlayer: (player) =>
    set(() => {
      localStorage.setItem("videoPlayer", player);
      return { videoPlayer: player };
    }),
}));

export default useVideoPlayerStore;
