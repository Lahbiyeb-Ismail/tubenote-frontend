import React from "react";

import Sidebar from "@/components/global/sideBar";
import TextEditor from "@/components/global/textEditor";
import YoutubeVideoPlayer from "@/components/global/youtubeVideoPlayer";

function VideoPage() {
  return (
    <main className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 p-6">
        <div>
          <YoutubeVideoPlayer />
          <TextEditor />
        </div>
      </div>
    </main>
  );
}

export default VideoPage;
