'use client'

import Image from "next/image";
import Header from "../components/header";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CardCarousel from "./components/carousel";
import Timeline from "./components/timeline";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import Footer from "../components/footer";
import Link from "next/link";
import NewsletterForm from "../components/newsletter-form";

const carousel_one = [
  {
    id: 1,
    title: "Advocacy & Activism",
    description: "Betar is a Zionist educational organization dedicated to fostering Jewish pride, resilience, and leadership.",
    imageUrl: "/c98c70e1d0c1f48fcdf3da25d2c7ab9a.jpg"
  },
  {
    id: 2,
    title: "Educational Programs",
    description: "Betar offers a range of educational programs, including leadership training, Hebrew language courses, and cultural events.",
    imageUrl: "/4eea75d089fe14bc91584c7b5531954d.png"
  },
  {
    id: 3,
    title: "Comunity Defense",
    description: "Graffiti Removal: We take swift action to remove antisemitic graffiti and hateful symbols, restoring pride and safety to public spaces. Doxing and Threat Response: Betar provides immediate support to Jews facing doxing, threats, and online harassment, mobilizing resources to protect them.",
    imageUrl: "/c98c70e1d0c1f48fcdf3da25d2c7ab9a.jpg"
  },
]

const carousel_two = [
  {
    id: 1,
    title: "A Life",
    description: "A well-written, passionate survey of Jabotinsky's life and contributions to political Zionism.",
    imageUrl: "/2c745b84e5c46dd1a90c05b0fb67035a.jpeg"
  },
  {
    id: 2,
    title: "Terror Out of Zion",
    description: "This is the definitive story of desperate, dedicated revolutionaries who were driven to conclude that lives must be taken if Israel were to live",
    imageUrl: "/4b1268f26ee918436ad29319fc28f99e.jpeg"
  },
  {
    id: 3,
    title: "The Battle for Israel's Soul",
    description: "Reviled as a fascist by his great rival Ben-Gurion, venerated by Israel's underclass, the first Israeli to win the Nobel Peace Prize, a proud Jew but not a conventionally religious one, Menachem Begin was both complex and controversial",
    imageUrl: "/3f6bb944f8f0742663326e860cba149e.jpeg"
  },
  {
    id: 4,
    title: "Story of the Irgun",
    description: "Russian-Israeli politician Menachem Begin from 1943 led Irgun, the Zionist underground movement in Palestine, until the establishment in 1948 and afterward, known for his hard-line views on the Arabs, as prime minister from 1977 to 1983 strove to resolve the conflict and shared the Nobel Prize for peace of 1978 with Muhammad Anwar el-Sadat of Egypt.",
    imageUrl: "/879802f937b77f64470ddfd61c7ede21.jpeg"
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
            <div className="max-w-[700px] md:ml-0 lg:ml-96">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                Betar is a Zionist educational organization dedicated to fostering Jewish pride, resilience, and leadership.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-h-[500px] overflow-hidden">
        <Image
          src="/about-banner.jpg"
          alt="Jews fight"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-8 py-24 sm:py-32 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold mb-6 tracking-tight">
          Our Mission
        </h2>
        <div className="flex flex-col lg:flex-row justify-between relative gap-8 lg:gap-16">
          <div className="relative w-full lg:w-[60%] aspect-[16/11] hidden lg:block">
            <Image
              src="/8492adf31a79aeaf6bacb0a1b6174daf.png"
              alt="Israeli flag waving in daylight"
              className="object-cover border"
              fill
              priority
            />
          </div>
          <div className="space-y-8 flex flex-col items-start lg:items-end w-full lg:w-[40%] lg:relative lg:top-[-118px]">
            <div className="relative w-full aspect-[2/1] lg:aspect-[16/17]">
              <Image
                src="/7df5457cdfcf6e74ba3c34057c68eac8.png"
                alt="Rally with Israeli flags"
                className="object-cover border"
                fill
              />
            </div>
            <div className="space-y-6 font-medium">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Inspired by the vision of our founder, Ze&apos;ev Jabotinsky, Betar empowers Jews
                to stand strong, speak out, and defend their heritage and Israel against all threats.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                With the motto &quot;Jews Fight Back,&quot; we are committed to active resistance against
                antisemitism and anti-Israel sentiments through bold, unapologetic action.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-primary lg:bg-background py-24 sm:py-32 w-full">
        <div className="mx-auto">
          <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 614" fill="none" className="w-full h-auto invisible lg:visible">
              <path fillRule="evenodd" clipRule="evenodd" d="M1549.73 614L1569.79 0.225403L-49.4822 73.7413L-80.7817 583.726L1549.73 614Z" fill="#134CDD" />
            </svg>
            <div className='absolute inset-0 flex items-center justify-center flex-col px-4 sm:px-8'>
              <p className="text-center text-lg sm:text-4xl font-semibold text-accent max-w-3xl">
                Betar exists to lead Jews and inspire action. Our mission is simple: Jews Fight Back! Guided by the words of our founder, Ze&apos;ev Jabotinsky, &quot;Silence is Despicable,&quot; we are a movement dedicated to instilling pride, strength, and resilience in Jews everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full py-24 sm:py-32 max-w-7xl px-4 sm:px-8">
        <div className="mx-auto grid grid-cols-1 gap-y-8 lg:gap-x-16 lg:grid-cols-2 items-center">
          <div className="relative w-full aspect-[2/1] lg:aspect-[16/17] overflow-hidden">
            <Image
              alt="Jewish students"
              src="/4362ea3e0dce40ae4d9cdab400153186.jpg"
              fill
              className="object-cover object-center scale-125"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mb-6">
              What we do
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-medium leading-7">
              We empower and encourage Jews to embrace their identity, take action, support Israel and take active roles in their communities through programs and events. We envision a world where Jews everywhere feel empowered to protect their communities, defend Israel, and act with unwavering commitment to Jewish values. Betar fosters this future by developing strong, active voices that inspire and create lasting impact.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32 px-4">
        <CardCarousel carouselData={carousel_one} />
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
                  className="mt-8 sm:mt-12 bg-accent text-foreground font-bold h-12 sm:h-16 px-6 sm:px-10 py-0 text-lg sm:text-xl hover:bg-primary hover:text-accent group hover:border"
                  asChild
                >
                  <Link href="/join">
                    Join Us
                    <ArrowRight className="!w-6 !h-6 sm:w-6 sm:h-6 ml-2 text-primary transition-transform group-hover:translate-x-2 group-hover:text-accent" />
                  </Link>
                </Button>
                <Button
                  className="mt-8 sm:mt-12 bg-accent text-foreground font-bold h-12 sm:h-16 px-6 sm:px-10 py-0 text-lg sm:text-xl hover:bg-primary hover:text-accent group hover:border"
                  onClick={() => window.open('https://www.gofundme.com/f/betar-fund')}
                >
                  Donate
                  <ArrowRight className="!w-6 !h-6 sm:w-6 sm:h-6 ml-2 text-primary transition-transform group-hover:translate-x-2 group-hover:text-accent" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mx-auto grid grid-cols-1 gap-y-8 lg:gap-x-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mb-6">
                Our History
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-medium leading-7">
                Betar was founded in 1923 by Ze&apos;ev Jabotinsky, as a movement dedicated to strengthening Jewish identity and self-defense. Over nearly a century, Betar has grown into a global community, empowering generations to embrace their heritage with pride and courage. Our story is one of resilience, commitment, and unity, spanning from our earliest days in Europe to our present-day international reach.
              </p>
            </div>
            <div className="aspect-[2/1] lg:aspect-[16/17] bg-gray-100 overflow-hidden">
              <Image
                alt="Jewish students"
                src="/fd2971d4352ba17cb23047d0f140e03f.jpeg"
                className="w-full h-full object-cover"
                width={820}
                height={820}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <Timeline />
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-8 grid gap-8 flex-1 flex-grow py-24 sm:py-32">
        <div className="text-primary flex flex-col gap-4">
          <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            &quot;There is no mightier weapon than indifference, you will never conquer it.&quot;
          </blockquote>
          <cite className="text-lg sm:text-xl">— Ze&apos;ev Jabotinsky</cite>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-16 lg:gap-0">
          <div className="relative flex flex-col z-20 items-center">
            <div className="bg-primary w-full aspect-[3/4] max-h-[600px] max-w-[500px] mt-20 lg:mt-40 lg:ml-24" />
            <div className="z-10 mt-10 lg:mt-20 w-full max-w-[400px]">
              <Image
                src="/131de7f55f1806eebfca97668a247826.jpeg"
                alt="Historical group photo"
                width={400}
                height={300}
                className="w-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <Button
              className="mt-8 border-black bg-white border text-foreground font-bold h-12 sm:h-16 px-6 sm:px-10 py-0 text-base sm:text-lg md:text-xl hover:bg-primary hover:text-accent group"
              asChild
            >
              <Link href="/about/ideology">
                Learn More
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 text-primary transition-transform group-hover:translate-x-2 group-hover:text-accent" />
              </Link>
            </Button>
          </div>

          <div className="space-y-6 flex flex-col items-center gap-8 lg:transform lg:translate-x-[5rem] lg:-translate-y-[5rem]">
            <div className="aspect-[5/3] w-full max-w-[900px]">
              <Image
                src="/fb65dabcc10a7f4bcea9085829df2a62.jpeg"
                alt="Portrait photo"
                width={900}
                height={540}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 max-w-[500px] flex flex-col gap-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Ideology</h2>
              <p className="leading-relaxed font-medium text-base sm:text-lg md:text-xl">
                Betar&apos;s ideology is rooted in core principles that guide every action and inspire our members:
                <br />
                <strong>Ahavat Yisrael{" "}</strong> Love of Israel
                <br />
                <strong>Hadar{" "}</strong> Dignity & Pride
                <br />
                <strong>Barzel{" "}</strong> Strength & Resilience
                <br />
                <strong>Achdut{" "}</strong> Unity & Solidarity
                <br />
                <strong>Bitachon{" "}</strong> Faith & Security
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mx-auto grid grid-cols-1 gap-y-8 lg:gap-x-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mb-6">
                Leadership Team
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-medium leading-7 mb-6">
                Meet the leaders who uphold Betar&apos;s mission and embody our values. Our leadership team is dedicated to inspiring, guiding, and empowering the next generation of Jewish leaders to carry forward Jabotinsky&apos;s legacy.
              </p>
              <Button
                className="border-black bg-white border text-foreground font-bold h-12 sm:h-16 px-6 sm:px-10 py-0 text-base sm:text-lg md:text-xl hover:bg-primary hover:text-accent group"
              >
                Meet the Team
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 text-primary transition-transform group-hover:translate-x-2 group-hover:text-accent" />
              </Button>
            </div>
            <div className="aspect-[2/1] lg:aspect-[16/17] bg-gray-100 overflow-hidden">
              <Image
                alt="Jewish students"
                src="/e8c7d01f50f9f635b49b17627fc1d245.jpeg"
                className="w-full h-full object-cover"
                width={820}
                height={820}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full px-4 sm:px-8 py-24 sm:py-32">
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

      <div className="overflow-hidden py-24 sm:py-32 w-full">
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

      <div className="py-24 sm:py-32">
        <NewsletterForm />
      </div>

      <Footer />
    </div>
  )
}