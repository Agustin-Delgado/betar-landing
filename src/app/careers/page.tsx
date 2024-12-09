'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Header from "../components/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "../components/footer";

const careers = [
  {
    id: 1,
    title: "Graphic Designer",
    description: "We are looking for a talented graphic designer to create visual concepts to communicate ideas that inspire, inform, or captivate consumers. You will develop the overall layout and production design for advertisements, brochures, magazines, and corporate reports.",
    url: "#",
  },
  {
    id: 2,
    title: "Software Engineer",
    description: "We are looking for a software engineer to join our team. You will be responsible for developing and maintaining high-quality software that meets the needs of our clients. You will also be responsible for testing and debugging software to ensure that it meets the needs of our clients.",
    url: "#",
  },
  {
    id: 3,
    title: "Product Manager",
    description: "We are looking for a product manager to join our team. You will be responsible for developing and maintaining high-quality products that meet the needs of our clients. You will also be responsible for testing and debugging products to ensure that they meet the needs of our clients.",
    url: "#",
  },
  {
    id: 4,
    title: "Marketing Manager",
    description: "We are looking for a marketing manager to join our team. You will be responsible for developing and maintaining high-quality marketing campaigns that meet the needs of our clients. You will also be responsible for testing and debugging marketing campaigns to ensure that they meet the needs of our clients.",
    url: "#",
  },
]

export default function CareersPage() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header className="text-foreground" />

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-9xl">
                Careers
              </h1>
              <p className="mt-16 text-xl font-medium leading-7">
                If you think you might be a good fit for our team, we would love to hear from you! If you don’t finda suitable position, you can still send us an e-mail to
                {" "}
                <Button
                  onClick={() => window.open("mailto:careers@betarus.org", "_blank")}
                  className="h-auto p-0 text-xl text-primary"
                  variant="link"
                >
                  careers@betarus.org
                </Button>
                {" "}
                with your experience or portfolio and tell us why you’d like to collaborate.
              </p>
            </div>
            <div className="aspect-[3/2] bg-gray-100 overflow-hidden">
              <Image
                alt="Jewish students"
                src="/007ba4a9d60b7be54332c14703d52980.jpeg"
                className="w-full h-full object-cover"
                width={820}
                height={547}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden pb-24 sm:pb-32 w-full">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-t border-foreground pt-4 mb-10">
            <h1 className="text-2xl font-bold">Job Openings</h1>
          </div>
          <Accordion type="single" collapsible>
            {careers.map((item) => (
              <AccordionItem className="py-8" key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="text-5xl font-bold hover:text-primary [&[data-state=open]]:text-primary">{item.title}</AccordionTrigger>
                <AccordionContent className="text-xl flex flex-col gap-8 items-start">
                  {item.description}
                  <Button
                    onClick={() => window.open(item.url, "_blank")}
                    className="bg-primary text-white font-bold h-12 sm:h-16 px-6 sm:px-10 py-0 border text-lg sm:text-xl hover:bg-accent hover:text-foreground group hover:border-primary"
                  >
                    Apply Now
                    <ArrowRight className="!w-6 !h-6 sm:w-6 sm:h-6 ml-2 text-accent transition-transform group-hover:translate-x-2 group-hover:text-primary" />
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <Footer />
    </div>
  )
}