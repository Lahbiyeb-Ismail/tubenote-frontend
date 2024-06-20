import React from "react";

import Sidebar from "@/components/global/sideBar";
import TextEditor from "@/components/global/textEditor";
import YoutubeVideoPlayer from "@/components/global/youtubeVideoPlayer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function VideoPage() {
  return (
    <section className="height_viewport">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex w-full border"
      >
        <ResizablePanel defaultSize={35} className="p-2">
          <TextEditor />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65} className="p-2">
          <YoutubeVideoPlayer />
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  );
}

export default VideoPage;
