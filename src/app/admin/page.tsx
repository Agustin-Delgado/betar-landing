'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form } from '@/components/ui/form'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit, Pencil, PlusCircle, Star, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import NewsForm from './components/news-form'
import { useNews } from "./context/news.context"
import { format } from "date-fns"
import { useRouter } from "next/navigation"

const newNewsFormSchema = z.object({
  title: z.string({ required_error: 'Title is required' }).min(1, { message: 'Title is required' }),
  description: z.string({ required_error: 'Description is required' }).min(1, { message: 'Description is required' }),
  date: z.string({ required_error: 'Date is required' }).min(1, { message: 'Date is required' }),
  newspaper: z.string({ required_error: 'Newspaper is required' }).min(1, { message: 'Newspaper is required' }),
  image_url: z.string({ required_error: 'Image URL is required' }).min(1, { message: 'Image URL is required' }),
  article_url: z.string({ required_error: 'Article URL is required' }).min(1, { message: 'Article URL is required' }),
  is_hero: z.boolean(),
  id: z.number().optional(),
  content: z.any().optional()
})

export default function AdminPanel() {
  const router = useRouter()

  const {
    news,
    setAsHero,
    deleteNews,
  } = useNews()

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const form = useForm<z.infer<typeof newNewsFormSchema>>({
    resolver: zodResolver(newNewsFormSchema),
    defaultValues: {
      title: '',
      description: '',
      date: '',
      newspaper: '',
      image_url: '',
      article_url: '',
      id: undefined,
      is_hero: news.length === 0 ? true : false,
    },
  })

  const onOpenChange = (open: boolean) => {
    setIsDialogOpen(open)
    form.reset({
      title: "",
      description: "",
      date: "",
      newspaper: "",
      image_url: "",
      article_url: "",
      id: undefined,
      is_hero: news.length === 0 ? true : false,
    })
  }

  return (
    <Form {...form}>
      <header className="h-16 border-b px-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">News Admin Panel</h1>
        <div className="flex gap-4">
          <Button
            variant="outline"
          >
            <Pencil className="h-4 w-4" />
            Create News
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
              <Button onClick={() => setIsEdit(false)}>
                <PlusCircle className="h-4 w-4" /> Add News
              </Button>
            </DialogTrigger>
            <DialogContent className='max-w-fit'>
              <DialogHeader>
                <DialogTitle>{isEdit ? 'Edit News' : 'Add News'}</DialogTitle>
              </DialogHeader>
              <NewsForm
                isEdit={isEdit}
                setDialogOpen={onOpenChange}
              />
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <div className="p-4 w-full max-w-7xl mx-auto">
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Newspaper</TableHead>
              <TableHead className='text-end'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {news.map((news) => (
              <TableRow key={news.id}>
                <TableCell>{news.title}</TableCell>
                <TableCell>
                  {format(new Date(news.date), "PPP")}
                </TableCell>
                <TableCell>{news.newspaper}</TableCell>
                <TableCell>
                  <div className="flex space-x-2 justify-end">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        if (news.content && news.content) {
                          router.push(`/admin/edit/${news.id}`)
                        } else {
                          form.reset(news)
                          setIsEdit(true)
                          setIsDialogOpen(true)
                        }
                      }}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => deleteNews(news.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={news.is_hero ? "default" : "outline"}
                      size="icon"
                      onClick={() => setAsHero(news.id)}
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Form>
  )
}