"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import MaxWidthWrapper from "@/components/global/maxWidthWrapper";

const formSchema = z.object({
  videoUrl: z.string().url(),
});

type FormData = z.infer<typeof formSchema>;

type ResponseData = {
  message: string;
  videoPlayer: string;
};

function VideoSearchSection() {
  const [videoPlayer, setVideoPlayer] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const { videoUrl } = data;

    // Extract video ID from the URL
    const url = new URL(videoUrl);
    const videoId = url.searchParams.get("v");
    const width = "100%";
    const height = "100%";

    try {
      const res = await fetch(
        `http://localhost:5500/api/v1/videos/${videoId}/player`
      );
      const videoData: ResponseData = await res.json();

      const parser = new DOMParser();
      const parsedIframe = parser.parseFromString(
        videoData.videoPlayer,
        "text/html"
      ).body.firstChild as HTMLIFrameElement;

      if (width && height) {
        parsedIframe?.setAttribute("width", width);
        parsedIframe?.setAttribute("height", height);
      }

      setVideoPlayer(parsedIframe?.outerHTML || "");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex items-center justify-center p-12">
      <MaxWidthWrapper>
        <h3 className="mb-8 text-center font-mono text-3xl leading-[1.2] tracking-[-0.01em] md:text-[2.75rem] md:leading-[1.1]">
          Unleash the power of TubeNote by entering a YouTube video link below
        </h3>
        <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Paste a YouTube video link here"
            className="w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-2 text-lg leading-6 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400"
            {...register("videoUrl")}
          />
          <button
            type="submit"
            className="ml-4 rounded-md bg-slate-500 px-6 py-2 text-lg font-semibold text-white hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
          >
            Search
          </button>
        </form>
        {errors.videoUrl && (
          <p className="mt-4 text-sm text-red-600">
            Please enter a valid YouTube video link
          </p>
        )}
      </MaxWidthWrapper>
    </section>
  );
}

export default VideoSearchSection;
