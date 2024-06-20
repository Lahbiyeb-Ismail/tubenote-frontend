export function extarctVideoId(videoUrl: string) {
  const url = new URL(videoUrl);
  const videoId = url.searchParams.get("v");

  return videoId as string;
}

export function parseStringtoHtml(iframePlayer: string) {
  const width = "100%";
  const height = "100%";

  const parser = new DOMParser();
  const parsedIframe = parser.parseFromString(iframePlayer, "text/html").body
    .firstChild as HTMLIFrameElement;

  if (width && height) {
    parsedIframe?.setAttribute("width", width);
    parsedIframe?.setAttribute("height", height);
  }

  return parsedIframe?.outerHTML;
}
