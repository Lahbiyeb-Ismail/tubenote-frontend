"use client";

import React from "react";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function MenuBar() {
  const { editor } = useCurrentEditor();
  if (!editor) {
    return null;
  }
  return (
    <div className="mb-2 flex items-center space-x-2">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`rounded px-2 py-1 ${
          editor.isActive("bold") ? "bg-gray-200 text-black" : "text-gray-600"
        }`}
      >
        <strong>B</strong>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`rounded px-2 py-1 ${
          editor.isActive("italic") ? "bg-gray-200 text-black" : "text-gray-600"
        }`}
      >
        <em>I</em>
      </button>
    </div>
  );
}

function TextEditor() {
  const content = "";
  const extensions = [StarterKit];
  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
      >
        {/* <div className="prose max-w-none">
          <p>
            <br />
          </p>
        </div> */}
      </EditorProvider>
    </div>
  );
}

export default TextEditor;
