"use client";

import "@blocknote/core/fonts/inter.css";

import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

import "@blocknote/mantine/style.css";
import "@/app/globals.css";

function TextEditor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();

  // Renders the editor instance using a React component.
  return (
    <div className="h-[200px]">
      <BlockNoteView editor={editor} theme="light" className="h-full" />
    </div>
  );
}

export default TextEditor;
