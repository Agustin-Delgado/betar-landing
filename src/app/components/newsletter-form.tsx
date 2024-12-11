'use client'

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from 'lucide-react';
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  first_name: z.string({ required_error: 'First name is required' }).min(1, { message: 'First name is required' }),
  last_name: z.string({ required_error: 'Last name is required' }).min(1, { message: 'Last name is required' }),
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid email address' }),
  phone: z.string({ required_error: 'Phone number is required' }).min(10, { message: 'Phone number is required' }),
  state: z.string({ required_error: 'State is required' }).min(1, { message: 'State is required' }),
  city: z.string({ required_error: 'City is required' }).min(1, { message: 'City is required' }),
})

export default function NewsletterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      state: '',
      city: '',
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <div className="overflow-hidden bg-primary p-4 py-24 sm:p-6 md:p-8 lg:p-12 max-w-7xl xl:p-24 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 mx-auto">
      <div className="mx-auto max-w-7xl text-left">
        <h2 className="mt-2 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
          Get alerts and receive the latest news, events, and updates from Betar.
        </h2>
      </div>
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 !pb-0">
        <div className="mx-auto max-w-7xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-between items-start w-full">
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          className='w-full rounded-none border-t-0 border-x-0 text-accent shadow-none placeholder:text-accent focus-visible:ring-accent'
                          placeholder='First Name'
                        />
                      </FormControl>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          className='w-full rounded-none border-t-0 border-x-0 text-accent shadow-none placeholder:text-accent focus-visible:ring-accent'
                          placeholder='Last Name'
                        />
                      </FormControl>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          className='w-full rounded-none border-t-0 border-x-0 text-accent shadow-none placeholder:text-accent focus-visible:ring-accent'
                          placeholder='Email'
                        />
                      </FormControl>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          className='w-full rounded-none border-t-0 border-x-0 text-accent shadow-none placeholder:text-accent focus-visible:ring-accent'
                          placeholder='Phone Number'
                        />
                      </FormControl>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          className='w-full rounded-none border-t-0 border-x-0 text-accent shadow-none placeholder:text-accent focus-visible:ring-accent'
                          placeholder='State'
                        />
                      </FormControl>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          className='w-full rounded-none border-t-0 border-x-0 text-accent shadow-none placeholder:text-accent focus-visible:ring-accent'
                          placeholder='City'
                        />
                      </FormControl>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
              </dl>
              <Button
                className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 bg-accent border text-foreground font-bold h-10 sm:h-12 md:h-14 lg:h-16 px-4 sm:px-6 md:px-8 lg:px-10 py-0 text-base sm:text-lg md:text-xl hover:bg-primary hover:text-accent group"
              >
                Submit
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 text-primary transition-transform group-hover:translate-x-2 group-hover:text-accent" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

