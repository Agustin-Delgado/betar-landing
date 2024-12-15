'use client'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, RotateCw } from "lucide-react"
import { useFormContext } from "react-hook-form"
import { z } from "zod"
import { newNewsFormSchema } from "../page"
import { Switch } from "@/components/ui/switch"
import { newsFormSchema, useNews } from "../context/news.context"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function NewsForm({ isEdit, setDialogOpen }: { isEdit: boolean, setDialogOpen: (open: boolean) => void }) {
  const { toast } = useToast()
  const { handleSubmit, control, reset } = useFormContext<z.infer<typeof newNewsFormSchema>>()
  const {
    news,
    addNews,
    updateNews,
  } = useNews()

  const [loading, setLoading] = useState(false)

  async function onSubmit(values: z.infer<typeof newNewsFormSchema>) {
    setLoading(true)
    try {
      if (isEdit) {
        await updateNews(values as z.infer<typeof newsFormSchema>)
        toast({
          title: "News updated",
          description: "The news has been updated successfully",
        })
      } else {
        await addNews(values)
        toast({
          title: "News added",
          description: "The news has been added successfully",
        })
      }
      setDialogOpen(false)
      reset({
        title: "",
        description: "",
        date: "",
        newspaper: "",
        image_url: "",
        article_url: "",
        id: undefined,
        is_hero: news.length === 0 ? true : false,
      })
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: `Error ${isEdit ? "updating" : "adding"} news`,
        description: "An error occurred while trying to add the news",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input
                placeholder="News title"
                className="rounded-none shadow-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="News description"
                className="resize-none rounded-none shadow-none"
                {...field}
              />

            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="newspaper"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Newspaper</FormLabel>
            <FormControl>
              <Input
                placeholder="News newspaper name"
                className="rounded-none shadow-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="date"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>News date</FormLabel>
            <Popover modal>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(new Date(field.value), "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value ? new Date(field.value) : undefined}
                  onSelect={(date) =>
                    field.onChange(date ? date.toISOString() : "")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-4">
        <FormField
          control={control}
          name="article_url"
          render={({ field }) => (
            <FormItem className="w-full min-w-[300px]">
              <FormLabel>Article URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="News article URL"
                  className="rounded-none shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="image_url"
          render={({ field }) => (
            <FormItem className="w-full min-w-[300px]">
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="News image URL"
                  className="rounded-none shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name="is_hero"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-none border p-3 shadow-sm">
            <div className="space-y-0.5">
              <FormLabel>Set as hero?</FormLabel>
              <FormDescription>
                This news will be displayed as a hero news
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                disabled={isEdit || news.length === 0}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        className="mt-4"
        type="submit"
        disabled={loading}
      >
        {loading && <RotateCw className="animate-spin mr-2" />}
        Submit
      </Button>
    </form>
  )
}