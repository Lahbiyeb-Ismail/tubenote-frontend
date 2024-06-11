"use client";

import React from "react";
import { useRouter } from "next/navigation";
import getVideoData from "@/actions/getVideoData";
import { extarctVideoId, parseStringtoHtml } from "@/helper";
import useVideoDataStore from "@/store/videoDataStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  videoUrl: z.string().url(),
});

type FormData = z.infer<typeof formSchema>;

function VideoSearchForm() {
  // const [videoPlayer, setVideoPlayer] = useState<string>("");
  const { setVideoData } = useVideoDataStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const { videoUrl } = data;

    // Extract video ID from the URL
    const videoId = extarctVideoId(videoUrl);

    try {
      const videoData = await getVideoData(videoId);

      setVideoData(videoData);
      router.push(`/videos/${videoId}`);
    } catch (error: any) {
      setError("videoUrl", {
        type: "manual",
        message: error.message || "An unexpected error occurred.",
      });
    }
  };
  return (
    <div>
      {" "}
      <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Paste a YouTube video link here"
          className="w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-2 text-lg leading-6 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400"
          {...register("videoUrl")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="ml-4 rounded-md bg-slate-500 px-6 py-2 text-lg font-semibold text-white hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
        >
          {isSubmitting ? <>Loading..</> : <>Search</>}
        </button>
      </form>
      {errors.videoUrl && (
        <p className="mt-4 text-sm text-red-600">{errors.videoUrl.message}</p>
      )}
    </div>
  );
}

export default VideoSearchForm;
