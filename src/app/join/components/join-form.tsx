"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useWatch } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, RotateCw } from 'lucide-react'
import { useState } from "react"

const contributions = [
  {
    id: "Become a Chapter Leader in your City",
    label: "Become a Chapter Leader in your City"
  },
  {
    id: "Become a Community Leader",
    label: "Become a Community Leader"
  },
  {
    id: "Become a Member",
    label: "Become a Member"
  },
  {
    id: "Recruit Members",
    label: "Recruit Members"
  },
  {
    id: "Volunteer",
    label: "Volunteer"
  },
  {
    id: "Donate Money",
    label: "Donate Money"
  },
  {
    id: "Offer Professional Services",
    label: "Offer Professional Services"
  },
  {
    id: "Host or Organize Events",
    label: "Host or Organize Events"
  },
  {
    id: "Sponsor Programs or Initiatives",
    label: "Sponsor Programs or Initiatives"
  },
  {
    id: "Provide Venue or Space",
    label: "Provide Venue or Space"
  },
  {
    id: "Promote Betar's Mission",
    label: "Promote Betar's Mission"
  },
  {
    id: "Other",
    label: "Other"
  },
] as const;

const is_zionist = [
  {
    id: "Yes",
    label: "Yes"
  },
  {
    id: "No",
    label: "No"
  },
] as const

const is_student = [
  {
    id: "Yes",
    label: "Yes"
  },
  {
    id: "No",
    label: "No"
  },
  {
    id: "N/A",
    label: "N/A"
  },
] as const

const available_to_protest = [
  {
    id: "Yes",
    label: "Yes"
  },
  {
    id: "No",
    label: "No"
  },
] as const

const FormSchema = z.object({
  email: z.string({ required_error: "Please select an email to display.", }).email(),
  honorific: z.enum(["Mr.", "Mrs.", "Ms.", "Dr."], { required_error: "Please select an honorific." }),
  first_name: z.string({ required_error: "Please enter your first name." }).min(1, { message: "Please enter your first name." }),
  last_name: z.string({ required_error: "Please enter your last name." }).min(1, { message: "Please enter your last name." }),
  address: z.string({ required_error: "Please enter your address." }).min(1, { message: "Please enter your address." }),
  city: z.string({ required_error: "Please enter your city." }).min(1, { message: "Please enter your city." }),
  state: z.string({ required_error: "Please enter your state." }).min(1, { message: "Please enter your state." }),
  zip: z.string({ required_error: "Please enter your zip code." }).min(1, { message: "Please enter your zip code." }),
  home_phone: z.string(),
  cell_phone: z.string({ required_error: "Please enter your cell phone number." }).min(1, { message: "Please enter your cell phone number." }),
  is_zionist: z.enum(["Yes", "No"]),
  contributions: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  other_contribution: z.string().optional(),
  is_student: z.enum(["Yes", "No", "N/A"]),
  university_name: z.string().optional(),
  available_to_protest: z.enum(["Yes", "No"]),
  message: z.string().optional(),
  newsletter: z.boolean().optional(),
})

export default function JoinForm() {
  const { toast } = useToast()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      newsletter: true,
      first_name: "",
      email: "",
      last_name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      home_phone: "",
      cell_phone: "",
      message: "",
      university_name: "",
      contributions: [],
      other_contribution: "",
    },
  })

  const isStudent = useWatch({
    control: form.control,
    name: "is_student",
  })

  const selectedContributions = useWatch({
    control: form.control,
    name: "contributions",
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true)

    fetch("https://script.google.com/macros/s/AKfycbzWTOzLealBb7yt8sdKV2VxY7vXKIieRepZag8CbTQwTczXlVbMX-dNOhR5wAuLqv7L/exec", {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        toast({
          title: "Success",
          description: "Your data has been submitted successfully.",
        })
        form.reset()
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <FormField
            control={form.control}
            name="honorific"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/4">
                <FormLabel className="text-base sm:text-lg">Mr.</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-foreground rounded-none shadow-none">
                    <SelectItem className="text-base sm:text-lg" value="Mr.">Mr.</SelectItem>
                    <SelectItem className="text-base sm:text-lg" value="Mrs.">Mrs.</SelectItem>
                    <SelectItem className="text-base sm:text-lg" value="Ms.">Ms.</SelectItem>
                    <SelectItem className="text-base sm:text-lg" value="Dr.">Dr.</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="w-full sm:w-3/8">
                <FormLabel className="text-base sm:text-lg">First name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your first name"
                    className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="w-full sm:w-3/8">
                <FormLabel className="text-base sm:text-lg">Last name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your last name"
                    className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base sm:text-lg">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your email"
                    className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base sm:text-lg">Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your address"
                    className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/3">
                <FormLabel className="text-base sm:text-lg">City</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your city"
                    className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/3">
                <FormLabel className="text-base sm:text-lg">State</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your state"
                    className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/3">
                <FormLabel className="text-base sm:text-lg">Zip</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your zip"
                    className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <FormField
            control={form.control}
            name="home_phone"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className="text-base sm:text-lg">Home phone</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your home phone"
                    className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cell_phone"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className="text-base sm:text-lg">Cell phone</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your cell phone"
                    className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="is_zionist"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-base sm:text-lg">Are you a Zionist?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                  >
                    {is_zionist.map((item) => (
                      <FormItem
                        key={item.id}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={item.id} className="text-base sm:text-lg" />
                        </FormControl>
                        <FormLabel className="text-base sm:text-lg font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="contributions"
            render={() => (
              <FormItem>
                <FormLabel className="text-base sm:text-lg">How Would you like to Contribute? (check all that apply)</FormLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  {contributions.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="contributions"
                      render={({ field }) => {
                        return (
                          <FormItem
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                className="mt-1 shadow-none rounded-none"
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-base sm:text-lg font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          {selectedContributions.includes("Other") && (
            <FormField
              control={form.control}
              name="other_contribution"
              render={({ field }) => (
                <FormItem className="w-full mt-4">
                  <FormLabel className="text-base sm:text-lg">Other Contribution</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your other contribution"
                      className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <div>
          <FormField
            control={form.control}
            name="is_student"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-base sm:text-lg">Are you a student? If so, which University?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                  >
                    {is_student.map((item) => (
                      <FormItem
                        key={item.id}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={item.id} className="text-base sm:text-lg" />
                        </FormControl>
                        <FormLabel className="text-base sm:text-lg font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {isStudent === "Yes" && (
            <FormField
              control={form.control}
              name="university_name"
              render={({ field }) => (
                <FormItem className="w-full mt-4">
                  <FormLabel className="text-base sm:text-lg">University Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your university name"
                      className="border-foreground rounded-none shadow-none h-12 sm:h-16 text-base sm:text-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <div>
          <FormField
            control={form.control}
            name="available_to_protest"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-base sm:text-lg">Will you show up to protest and counter protest if notified?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                  >
                    {available_to_protest.map((item) => (
                      <FormItem
                        key={item.id}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={item.id} className="text-base sm:text-lg" />
                        </FormControl>
                        <FormLabel className="text-base sm:text-lg font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base sm:text-lg">Tell us what you believe are the most pressing Antizionist, Anti-Semitic issues to take on?</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter your message"
                    className="border-foreground rounded-none shadow-none h-24 sm:h-32 text-base sm:text-lg resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="shadow-none"
                  />
                </FormControl>
                <FormLabel className="text-base sm:text-lg font-normal !m-0">
                  Receive Betar&apos;s newsletter and updates to stay informed about news and events.
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
        <Button
          className="border border-foreground hover:border-primary mt-6 sm:mt-8 md:mt-10 lg:mt-12 bg-background text-foreground font-bold h-10 sm:h-12 md:h-14 lg:h-16 px-4 sm:px-6 md:px-8 lg:px-10 py-0 text-base sm:text-lg md:text-xl hover:text-primary hover:bg-background group"
        >
          Submit
          {isSubmitting ?
            <RotateCw className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6 ml-2 group-hover:text-primary" />
            :
            <ArrowRight className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6 ml-2 group-hover:text-primary" />
          }
        </Button>
      </form>
    </Form>
  )
}