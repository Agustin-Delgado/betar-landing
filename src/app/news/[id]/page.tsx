'use client'

import Header from "@/components/header";
import { createClient } from "@/lib/supabase/client";
import { Block } from "@blocknote/core";
import { format } from "date-fns";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";

const Editor = dynamic(() => import("../../admin/components/dynamic-editor"), { ssr: false });

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

export default function NewsPage() {
  const { id } = useParams<{ id: string }>();

  const [news, setNews] = useState<z.infer<typeof newNewsFormSchema>>()
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    (async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("news").select("*").eq("id", id).single();
      if (error) {
        console.error("Error fetching news:", error);
        return;
      }

      setBlocks(data.content);
      setNews(data);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header className="text-foreground w-full" />

      <div className="overflow-hidden bg-white py-24 w-full flex flex-col mx-auto max-w-7xl">
        <span className="text-muted-foreground">
          {format(new Date(news?.date || new Date()), "MM.dd.yy")} | {news?.newspaper}
        </span>
        <Editor
          key={blocks.length}
          blocks={blocks}
          setBlocks={setBlocks}
          editable={false}
        />
      </div>
    </div>
  );
}