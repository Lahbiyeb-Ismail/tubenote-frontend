"use client";

import "@blocknote/core/fonts/inter.css";

import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

import "@blocknote/mantine/style.css";
import "@/app/globals.css";

import useVideoDataStore from "@/store/videoDataStore";

// import { Button } from "../ui/button";

type Note = {
  title: string;
  videoId: string;
  content?: string;
};

function TextEditor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();

  const { id } = useVideoDataStore((state) => state.videoData);

  const createNewNote = async (videoId: string, noteContent?: string) => {
    try {
      const note: Note = {
        title: "Note",
        videoId,
        content: noteContent,
      };
      const apiUrl = `http://localhost:5500/api/v1/videos/${videoId}/notes`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[200px]">
      {/* <Button
        className="mb-6"
        type="button"
        onClick={() =>
          createNewNote(id, JSON.stringify(editor.document, null, 2))
        }
      >
        save
      </Button> */}
      <BlockNoteView
        editor={editor}
        theme="light"
        className="h-full border-2 border-gray-300"
      />
    </div>
  );
}

export default TextEditor;
