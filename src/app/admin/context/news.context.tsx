'use client'

import { createClient } from "@/lib/supabase/client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { z } from "zod";
import { newNewsFormSchema } from "../page";

export const newsFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  id: z.number(),
  newspaper: z.string(),
  image_url: z.string(),
  article_url: z.string(),
  is_hero: z.boolean(),
});

const NewsContext = createContext({
  news: [] as z.infer<typeof newsFormSchema>[],
  setAsHero: (id: number) => { },
  deleteNews: (id: number) => { },
  addNews: async (news: z.infer<typeof newNewsFormSchema>) => { },
  updateNews: async (news: z.infer<typeof newsFormSchema>) => { },
  loading: true,
});

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();

  const [news, setNews] = useState<z.infer<typeof newsFormSchema>[]>([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    setLoading(true);

    try {
      const { data, error } = await supabase.from("news").select("*").order("date", { ascending: false });
      if (error) throw error;

      setNews(data as z.infer<typeof newsFormSchema>[]);
    } catch (err) {
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  const setAsHero = async (id: number) => {
    try {
      await supabase
        .from("news")
        .update({ is_hero: false })
        .neq("id", id);

      await supabase
        .from("news")
        .update({ is_hero: true })
        .eq("id", id);

      setNews((prev) =>
        prev.map((news) => ({
          ...news,
          is_hero: news.id === id,
        }))
      );
    } catch (err) {
      console.error("Error setting news as hero:", err);
    }
  };

  const deleteNews = async (id: number) => {
    try {
      const isHero = news.find((news) => news.id === id)?.is_hero;

      const { error } = await supabase
        .from("news")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setNews((prev) => prev.filter((news) => news.id !== id));

      if (isHero) {
        const newestNews = news.find((news) => news.id !== id);
        console.log(newestNews);
        if (newestNews) {
          setAsHero(newestNews.id);
        }
      }
    } catch (err) {
      console.error("Error deleting news:", err);
    }
  };

  const addNews = async (news: z.infer<typeof newNewsFormSchema>) => {
    try {
      const { data, error } = await supabase.from("news").insert(news).select();
      if (error) throw error;

      if (news.is_hero) {
        await setAsHero(data[0].id);
      }

      setNews((prev) => {
        const updatedNews = [...prev, data[0]];

        return updatedNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      });
    } catch (err) {
      console.error("Error adding news:", err);
    }
  };

  const updateNews = async (news: z.infer<typeof newsFormSchema>) => {
    try {
      const { data, error } = await supabase.from("news").update(news).eq("id", news.id).select();
      if (error) throw error;

      setNews((prev) => {
        const updatedNews = prev.map((news) => {
          if (news.id === data[0].id) {
            return data[0];
          }

          return news;
        });

        return updatedNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      });
    } catch (err) {
      console.error("Error updating news:", err);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news, loading, setAsHero, deleteNews, addNews, updateNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
};
