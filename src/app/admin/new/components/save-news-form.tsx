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
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, RotateCw } from "lucide-react"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { z } from "zod"
import { useNews } from "../../context/news.context"
import { useRouter } from "next/navigation"

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

export default function SaveNewsForm({ setDialogOpen }: { setDialogOpen: (open: boolean) => void }) {
  const router = useRouter()

  const { toast } = useToast()
  const { addNews } = useNews()
  const { handleSubmit, control, reset } = useFormContext<z.infer<typeof newNewsFormSchema>>()

  const [loading, setLoading] = useState(false)

  async function onSubmit(values: z.infer<typeof newNewsFormSchema>) {
    setLoading(true)
    try {
      await addNews(values)
      toast({
        title: "News added",
        description: "The news has been added successfully",
      })
      setDialogOpen(false)
      reset({
        title: "",
        description: "",
        date: "",
        newspaper: "",
        image_url: "",
        id: undefined,
        is_hero: false
      })

      router.push("/admin")
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: `Error`,
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
      <div className="flex gap-4 items-center">
        <FormField
          control={control}
          name="newspaper"
          render={({ field }) => (
            <FormItem className="w-full min-w-[250px]">
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
          name="image_url"
          render={({ field }) => (
            <FormItem className="w-full min-w-[250px]">
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
        name="date"
        render={({ field }) => (
          <FormItem className="w-full min-w-[250px] flex flex-col justify-between">
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