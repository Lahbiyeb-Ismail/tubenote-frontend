import React from "react";

import Sidebar from "@/components/global/sideBar";

function VideoPage() {
  return (
    <main className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 p-10">
        <div>
          <div>video player</div>
          <div>Text editor</div>
        </div>
      </div>
    </main>
  );
}

export default VideoPage;
