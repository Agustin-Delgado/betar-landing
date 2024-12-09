"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useWatch } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

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
    id: "Promote Betar’s Mission",
    label: "Promote Betar’s Mission"
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
  home_phone: z.string({ required_error: "Please enter your home phone number." }).min(1, { message: "Please enter your home phone number." }),
  cell_phone: z.string({ required_error: "Please enter your cell phone number." }).min(1, { message: "Please enter your cell phone number." }),
  is_zionist: z.enum(["Yes", "No"]),
  contributions: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  other_contribution: z.string().optional(),
  is_student: z.enum(["Yes", "No"]),
  university_name: z.string().optional(),
  available_to_protest: z.enum(["Yes", "No"]),
  message: z.string().optional(),
  newsletter: z.boolean().optional(),
})

export default function JoinForm() {
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
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-4 w-full">
          <FormField
            control={form.control}
            name="honorific"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">Mr.</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className="border-foreground rounded-none shadow-none h-16 text-lg"
                    >
                      <SelectValue placeholder="Select an honorific" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-foreground rounded-none shadow-none">
                    <SelectItem className="text-lg" value="Mr.">Mr.</SelectItem>
                    <SelectItem className="text-lg" value="Mrs.">Mrs.</SelectItem>
                    <SelectItem className="text-lg" value="Ms.">Ms.</SelectItem>
                    <SelectItem className="text-lg" value="Dr.">Dr.</SelectItem>
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
              <FormItem className="w-full">
                <FormLabel className="text-lg">First name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your first name"
                    className="border-foreground rounded-none shadow-none h-16 !text-lg"
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
              <FormItem className="w-full">
                <FormLabel className="text-lg">Last name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your last name"
                    className="border-foreground rounded-none shadow-none h-16 !text-lg"
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
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your email"
                    className="border-foreground rounded-none shadow-none h-16 !text-lg"
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
                <FormLabel className="text-lg">Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your address"
                    className="border-foreground rounded-none shadow-none h-16 !text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4 w-full">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">City</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your city"
                    className="border-foreground rounded-none shadow-none h-16 !text-lg"
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
              <FormItem className="w-full">
                <FormLabel className="text-lg">State</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your state"
                    className="border-foreground rounded-none shadow-none h-16 !text-lg"
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
              <FormItem className="w-full">
                <FormLabel className="text-lg">Zip</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your zip"
                    className="border-foreground rounded-none shadow-none h-16 !text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4 w-full">
          <FormField
            control={form.control}
            name="home_phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg">Home phone</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your home phone"
                    className="border-foreground rounded-none shadow-none h-16 !text-lg"
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
              <FormItem className="w-full">
                <FormLabel className="text-lg">Cell phone</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your cell phone"
                    className="border-foreground rounded-none shadow-none h-16 !text-lg"
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
                <FormLabel className="text-lg">Are you a Zionist?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    {is_zionist.map((item) => (
                      <FormItem
                        key={item.id}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={item.id} className="text-lg" />
                        </FormControl>
                        <FormLabel className="text-lg font-normal">
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
                <FormLabel className="text-lg">How Would you like to Contribute? (check all that apply)</FormLabel>
                {contributions.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="contributions"
                    render={({ field }) => {
                      return (
                        <FormItem
                          className="flex flex-row items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              className="shadow-none"
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
                          <FormLabel className="text-lg font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
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
                  <FormLabel className="text-lg">Other Contribution</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your other contribution"
                      className="border-foreground rounded-none shadow-none h-16 !text-lg"
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
                <FormLabel className="text-lg">Are you a student? If so, which University?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    {is_student.map((item) => (
                      <FormItem
                        key={item.id}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={item.id} className="text-lg" />
                        </FormControl>
                        <FormLabel className="text-lg font-normal">
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
                  <FormLabel className="text-lg">University Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your university name"
                      className="border-foreground rounded-none shadow-none h-16 !text-lg"
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
                <FormLabel className="text-lg">Will you show up to protest and counter protest if notified?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    {available_to_protest.map((item) => (
                      <FormItem
                        key={item.id}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={item.id} className="text-lg" />
                        </FormControl>
                        <FormLabel className="text-lg font-normal">
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
                <FormLabel className="text-lg">Tell us what you believe are the most pressing Antizionist, Anti-Semitic issues to take on?</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter your message"
                    className="border-foreground rounded-none shadow-none h-32 !text-lg resize-none"
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
                <FormLabel className="text-lg font-normal !m-0">
                  Receive Betar’s newsletter and updates to stay informed about news and events.
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
        <Button
          className="bg-primary text-white font-bold h-12 sm:h-16 px-6 sm:px-10 py-0 border text-lg sm:text-xl hover:bg-accent hover:text-foreground group hover:border-primary"
        >
          Submit
          <ArrowRight className="!w-6 !h-6 sm:w-6 sm:h-6 ml-2 text-accent transition-transform group-hover:translate-x-2 group-hover:text-primary" />
        </Button>
      </form>
    </Form>
  )
}