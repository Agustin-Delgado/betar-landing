'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { DragHandleButton, SideMenu, SideMenuController, useCreateBlockNote } from "@blocknote/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RemoveBlockButton } from "./components/remove-block-button";
import { Form } from "@/components/ui/form";
import SaveNewsForm from "./components/save-news-form";
import { BlockNoteView } from "@blocknote/mantine";

const newNewsFormSchema = z.object({
  title: z.string({ required_error: 'Title is required' }).min(1, { message: 'Title is required' }),
  description: z.string({ required_error: 'Description is required' }).min(1, { message: 'Description is required' }),
  date: z.string({ required_error: 'Date is required' }).min(1, { message: 'Date is required' }),
  newspaper: z.string({ required_error: 'Newspaper is required' }).min(1, { message: 'Newspaper is required' }),
  image_url: z.string({ required_error: 'Image URL is required' }).min(1, { message: 'Image URL is required' }),
  is_hero: z.boolean(),
  id: z.number().optional(),
  content: z.any()
})

export default function NewNewsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [blocks, setBlocks] = useState<Block[]>([
    {
      "id": "6874951d-f928-4635-88d9-4d2ab8dde44e",
      "type": "heading",
      "props": {
        "textColor": "default",
        "backgroundColor": "default",
        "textAlignment": "left",
        "level": 1
      },
      "content": [
        {
          "type": "text",
          "text": "test1",
          "styles": {}
        }
      ],
      "children": []
    },
    {
      "id": "0bc3b050-df5e-4e31-b4aa-abdad60bafdc",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "default",
        "textAlignment": "left"
      },
      "content": [
        {
          "type": "text",
          "text": "test test ",
          "styles": {}
        },
        {
          "type": "link",
          "href": "https://www.jpost.com/israel-news/article-833463",
          "content": [
            {
              "type": "text",
              "text": "testlink",
              "styles": {}
            }
          ]
        }
      ],
      "children": []
    },
    {
      "id": "438618bf-e5d3-4f58-b299-ec7a41fa73c4",
      "type": "paragraph",
      "props": {
        "textColor": "default",
        "backgroundColor": "default",
        "textAlignment": "left"
      },
      "content": [],
      "children": []
    }
  ]);

  const form = useForm<z.infer<typeof newNewsFormSchema>>({
    resolver: zodResolver(newNewsFormSchema),
    defaultValues: {
      title: '',
      description: '',
      date: '',
      newspaper: '',
      image_url: '',
      id: undefined,
      is_hero: false,
      content: blocks,
    },
  })

  const editor = useCreateBlockNote({
    initialContent: blocks,
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

  const onOpenChange = (open: boolean) => {
    setIsDialogOpen(open);

    if (open) {
      const titleBlock = blocks.find((block) => block.type === "heading");
      const title = titleBlock?.content?.find(contentItem => contentItem.type === "text")?.text || "";

      const descriptionBlock = blocks.find(
        (block) => block.type === "paragraph" && block.content.length > 0
      );
      const description = (descriptionBlock?.content as any)
        ?.map((contentItem: any) => {
          if ("text" in contentItem) {
            return contentItem.text;
          }
          return "";
        })
        .join("")
        .trim() || "";

      form.reset({
        title,
        description,
        date: new Date().toISOString(),
        newspaper: "Betar",
        image_url: "",
        id: undefined,
        is_hero: false,
        content: blocks,
      });
    }
  };


  return (
    <Form {...form}>
      <header className="h-16 border-b px-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Create a new news</h1>
        <Dialog open={isDialogOpen} onOpenChange={onOpenChange}>
          <DialogTrigger asChild>
            <Button>
              <Save /> Save news
            </Button>
          </DialogTrigger>
          <DialogContent className='max-w-fit'>
            <DialogHeader>
              <DialogTitle>Save news</DialogTitle>
            </DialogHeader>
            <SaveNewsForm setDialogOpen={onOpenChange} />
          </DialogContent>
        </Dialog>
      </header>
      <div className="p-4 w-full max-w-7xl mx-auto">
        <div className="p-4 border rounded-md">
          <BlockNoteView
            theme="light"
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
        </div>
      </div>
    </Form>
  )
}