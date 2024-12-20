'use client'

import Image from "next/legacy/image";
import Header from "../../components/header";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "../../components/footer";
import NewsletterForm from "../../components/newsletter-form";
import CardCarousel from "./components/carousel";
import Timeline from "./components/timeline";

const carousel_two = [
  {
    id: 1,
    title: "A Life",
    description: "A well-written, passionate survey of Jabotinsky's life and contributions to political Zionism.",
    imageUrl: "/2c745b84e5c46dd1a90c05b0fb67035a.webp"
  },
  {
    id: 2,
    title: "Terror Out of Zion",
    description: "This is the definitive story of desperate, dedicated revolutionaries who were driven to conclude that lives must be taken if Israel were to live",
    imageUrl: "/4b1268f26ee918436ad29319fc28f99e.webp"
  },
  {
    id: 3,
    title: "The Battle for Israel's Soul",
    description: "Reviled as a fascist by his great rival Ben-Gurion, venerated by Israel's underclass, the first Israeli to win the Nobel Peace Prize, a proud Jew but not a conventionally religious one, Menachem Begin was both complex and controversial",
    imageUrl: "/3f6bb944f8f0742663326e860cba149e.webp"
  },
  {
    id: 4,
    title: "Story of the Irgun",
    description: "Russian-Israeli politician Menachem Begin from 1943 led Irgun, the Zionist underground movement in Palestine, until the establishment in 1948 and afterward, known for his hard-line views on the Arabs, as prime minister from 1977 to 1983 strove to resolve the conflict and shared the Nobel Prize for peace of 1978 with Muhammad Anwar el-Sadat of Egypt.",
    imageUrl: "/879802f937b77f64470ddfd61c7ede21.webp"
  },
]

const accordion = [
  {
    id: 1,
    title: "What does Betar stand for?",
    description: "Betar is a Zionist educational organization dedicated to fostering Jewish pride, resilience, and leadership.",
  },
  {
    id: 2,
    title: "Who can join Betar?",
    description: "Betar is open to all Jewish youth who are committed to our mission and values.",
  },
  {
    id: 3,
    title: "How can I get involved?",
    description: "You can get involved by attending events, joining a chapter, or supporting our programs.",
  },
  {
    id: 4,
    title: "How can I support Betar's mission?",
    description: "You can support Betar by donating, volunteering, or spreading the word about our work.",
  }
]

export default function AboutPage() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header className="text-foreground w-full" />

      <div className="flex-grow flex flex-col justify-center pt-24 md:pt-32 lg:pt-36 pb-8 sm:pb-12">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-start gap-4 md:gap-8 mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-tighter">
              About Us
            </h1>
            <div>
              <p className="text-base sm:text-lg md:text-xl font-medium leading-7">
                Betar is more than a movement—it&apos;s a mission. Founded in 1923 by Zionist visionary
                Ze&apos;ev Jabotinsky, Betar is a global organization dedicated to empowering Jews to embrace their
                identity, defend their heritage, and build a thriving future for the Jewish people.
              </p>
              <br />
              <p className="text-base sm:text-lg md:text-xl font-medium leading-7">
                As one of the oldest and most impactful Zionist youth movements, Betar has a proud history of
                action, leadership, and resilience. Rooted in the principles of liberty, democracy, and unwavering
                commitment to the land of Israel, Betar inspires its members to stand strong against antisemitism
                and advocate boldly for Zionism.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-h-[500px] overflow-hidden">
        <Image
          src="/about-banner.webp"
          alt="Jews fight"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          objectFit="cover"
          priority
        />
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="625" viewBox="0 0 1280 625" fill="none" className='transform rotate-180'>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 103.733L48.0298 523.618L1280 624.549V0.496582L0 103.733Z" fill="#134CDD" />
            </svg>
            <div className='absolute inset-0 flex items-center justify-center flex-col'>
              <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-accent">
                #JewsFightBack
              </h2>
              <div className='flex gap-4'>
                <Button
                  className="border border-foreground hover:border-primary mt-6 sm:mt-8 md:mt-10 lg:mt-12 bg-background text-foreground font-bold h-10 sm:h-12 md:h-14 lg:h-16 px-4 sm:px-6 md:px-8 lg:px-10 py-0 text-base sm:text-lg md:text-xl hover:text-primary hover:bg-background group"
                  asChild
                >
                  <Link href="/join">
                    Join Us
                    <ArrowRight className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6 ml-2 group-hover:text-primary" />
                  </Link>
                </Button>
                <Button
                  className="border border-foreground hover:border-primary mt-6 sm:mt-8 md:mt-10 lg:mt-12 bg-background text-foreground font-bold h-10 sm:h-12 md:h-14 lg:h-16 px-4 sm:px-6 md:px-8 lg:px-10 py-0 text-base sm:text-lg md:text-xl hover:text-primary hover:bg-background group"
                  onClick={() => window.open('https://www.gofundme.com/f/betar-fund')}
                >
                  Donate
                  <ArrowRight className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6 ml-2 group-hover:text-primary" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mx-auto grid grid-cols-1 gap-y-8 lg:gap-x-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mb-6">
                Leadership Team
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-medium leading-7 mb-6">
                Meet the leaders who uphold Betar&apos;s mission and embody our values. Our leadership team is dedicated to inspiring, guiding, and empowering the next generation of Jewish leaders to carry forward Jabotinsky&apos;s legacy.
              </p>
            </div>
            <div className="aspect-[5/4] lg:aspect-[16/16] bg-gray-100 overflow-hidden relative">
              <Image
                alt="Jewish students"
                src="/e8c7d01f50f9f635b49b17627fc1d245.webp"
                className="w-full h-full object-cover"
                objectFit="cover"
                width={1020}
                height={1020}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full px-4 sm:px-8 pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Reading Materials
          </h2>
        </div>
        <p className="mx-auto mt-6 text-base sm:text-lg md:text-xl font-medium max-w-7xl mb-10 text-center">
          Explore Betar&apos;s recommended reading list to deepen your understanding of Jewish resilience, Zionist history, and the legacy of Ze&apos;ev Jabotinsky:
        </p>
        <CardCarousel carouselData={carousel_two} />
      </div>

      <div id="faq" className="overflow-hidden py-24 sm:py-32 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex items-center justify-between border-t border-foreground pt-4 mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Frequently asked questions</h2>
          </div>
          <Accordion type="single" collapsible>
            {accordion.map((item) => (
              <AccordionItem className="py-4 sm:py-6 md:py-8" key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold hover:text-primary [&[data-state=open]]:text-primary">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-base sm:text-lg md:text-xl">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <NewsletterForm />

      <Footer />
    </div>
  )
}