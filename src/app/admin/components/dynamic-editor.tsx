"use client";
import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { DragHandleButton, SideMenu, SideMenuController, useCreateBlockNote } from "@blocknote/react";
import { Dispatch, SetStateAction } from "react";
import { RemoveBlockButton } from "../new/components/remove-block-button";

export default function Editor({ blocks, setBlocks, editable = true }: { blocks: Block[], setBlocks: Dispatch<SetStateAction<Block[]>>, editable?: boolean }) {
  const editor = useCreateBlockNote({
    initialContent: blocks.length ? blocks : undefined,
    uploadFile: async (file) => {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const { url } = await response.json();
      return url;
    },
  });

  return <BlockNoteView
    theme="light"
    editable={editable}
    editor={editor}
    sideMenu={false}
    onChange={() => {
      setBlocks(editor.document);
    }}
  >
    <SideMenuController
      sideMenu={(props) => (
        <SideMenu {...props}>
          <RemoveBlockButton {...props} />
          <DragHandleButton {...props} />
        </SideMenu>
      )}
    />
  </BlockNoteView>
}