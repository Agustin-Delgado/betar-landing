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

const carousel_one = [
  {
    id: 1,
    title: "Advocacy & Activism",
    description: "Betar is a Zionist educational organization dedicated to fostering Jewish pride, resilience, and leadership.",
    imageUrl: "/c98c70e1d0c1f48fcdf3da25d2c7ab9a.webp"
  },
  {
    id: 2,
    title: "Educational Programs",
    description: "Betar offers a range of educational programs, including leadership training, Hebrew language courses, and cultural events.",
    imageUrl: "/4eea75d089fe14bc91584c7b5531954d.webp"
  },
  {
    id: 3,
    title: "Comunity Defense",
    description: "Graffiti Removal: We take swift action to remove antisemitic graffiti and hateful symbols, restoring pride and safety to public spaces. Doxing and Threat Response: Betar provides immediate support to Jews facing doxing, threats, and online harassment, mobilizing resources to protect them.",
    imageUrl: "/c98c70e1d0c1f48fcdf3da25d2c7ab9a.webp"
  },
]

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

      <div className="container mx-auto px-4 sm:px-8 pt-24 sm:pt-32 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold mb-6 tracking-tight md:mb-12">
          Our Mission
        </h2>
        <div className="flex flex-col lg:flex-row justify-between relative gap-8 lg:gap-16">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Betar USA is driven by the vision of our founder, Ze'ev Jabotinsky, to empower Jews to stand
              strong, speak out, and defend their heritage and Israel against all threats. Guided by the motto
              &quot;Jews Fight Back,&quot; we are a movement dedicated to fostering pride, resilience, and leadership in
              the Jewish community.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Our mission is clear: to create a new generation of Jewish leaders who are unapologetic, proud,
              and prepared to defend the Jewish community on every front—on campuses, in communities, in
              the media, and beyond. Through education, activism, and community-building, Betar strengthens
              Jewish identity and ignites the passion for a united, empowered Jewish future.
            </p>
            <div className="relative w-full aspect-[12/11]">
              <Image
                src="/8492adf31a79aeaf6bacb0a1b6174daf.webp"
                alt="Israeli flag waving in daylight"
                className="object-cover border"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
                layout="fill"
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Join us and be part of a century-old legacy that continues to change the Jewish world. Betar isn't
              just an organization—it's a movement for those ready to lead, defend, and transform the future
              of the Jewish people and to ignite a spirit of active resistance against antisemitism and anti-Israel
              sentiments through education, advocacy, and unapologetic action.
            </p>
            <div className="relative w-full aspect-[2/1] lg:aspect-[16/11]">
              <Image
                src="/7df5457cdfcf6e74ba3c34057c68eac8.webp"
                alt="Rally with Israeli flags"
                className="object-cover border"
                sizes="(max-width: 1023px) 100vw, 50vw"
                layout="fill"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold mt-8">Core Values:</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-base sm:text-lg md:text-xl">
                <strong>Strength and Empowerment:</strong> Instilling pride and confidence in Jewish identity and
                Zionist values.
              </li>
              <li className="text-base sm:text-lg md:text-xl">
                <strong>Unity and Support:</strong> Building a unified community equipped to confront antisemitism
                and defend Israel.
              </li>
              <li className="text-base sm:text-lg md:text-xl">
                <strong>Education and Leadership:</strong> Cultivating informed leaders who champion the truth about
                Jewish heritage and the State of Israel.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 space-y-6">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Betar USA is committed to launching chapters cities across the USA, empowering Jewish
            American activists to take action on behalf of Jews and Israel, lead in their local communities,
            and defend Zionism with clarity and courage.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Inspired by Jabotinsky's words, "Silence is despicable," Betar exists to inspire action, foster
            unity, and ensure that Jews everywhere embrace their identity with pride and strength. Together,
            we will secure a resilient and thriving Jewish future.
          </p>
        </div>
      </div>

      <div className="overflow-hidden bg-foreground my-24 py-24 sm:py-32 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 flex flex-col items-center justify-center">
          <div className="relative flex flex-col items-left justify-center text-center w-fit">
            <span className="text-red-600 absolute text-6xl left-[-30px] sm:text-8xl top-0 sm:top-[-5px] sm:left-[-45px] leading-none">&ldquo;</span>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-left">
              SILENCE IS
              <br />
              DESPICABLE.
            </p>
            <div className="bg-red-600 p-1">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-left text-white pl-16">
                - Ze&apos;ev Jabotinsky
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full pb-24 sm:pb-32 max-w-7xl px-4 sm:px-8">
        <div className="mx-auto grid grid-cols-1 gap-y-8 lg:gap-x-16 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mb-6">
              What We Do
            </h2>
            <div className="space-y-6 text-base sm:text-lg md:text-xl font-medium leading-7">
              <p>
                Betar empowers Jews to embrace their identity, take bold action, support Israel, and lead in their
                communities. Through impactful programs, grassroots events, and unapologetic activism, we are
                building a future where Jews everywhere are equipped to protect their communities, defend
                Israel, and act with unwavering commitment to Jewish values.
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-4">
                Taking Action Where Others Won't
              </h3>
              <p>
                In a world where many Jewish organizations remain passive, Betar stands out as a movement of
                action. We don't wait for others to step up—we lead.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Rallies and Protests:</strong> Betar organizes on-the-ground rallies and grassroots Zionist
                  protests across the nation, filling a critical gap in loud, visible advocacy for Israel and the
                  Jewish community.
                </li>
                <li>
                  <strong>Graffiti and Hate Cleanup:</strong> While others document antisemitic vandalism, we take
                  immediate action. Betar members nationwide mobilize to erase hate and restore dignity to
                  affected communities.
                </li>
                <li>
                  <strong>Support for Israeli Government Events:</strong> Betar ensures strong turnout and security for
                  Israeli government events in local cities, providing critical support to prevent
                  cancellations and counter threats from organized opposition.
                </li>
                <li>
                  <strong>Doxing Defense:</strong> We stand with Jews who face doxing attacks for their Zionist advocacy.
                  Betar provides tangible support, from public letters of defense to strategic
                  countermeasures, ensuring those targeted are not alone.
                </li>
                <li>
                  <strong>Rapid Response to Antisemitism:</strong> When antisemitic acts occur, Betar is the first to
                  respond. We raise awareness through press, campus advocacy, and social media, refusing
                  to let hate be swept under the rug.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div className="relative w-full aspect-[2/1] lg:aspect-[16/17] overflow-hidden">
              <Image
                alt="Jewish students"
                src="/4362ea3e0dce40ae4d9cdab400153186.webp"
                layout="fill"
                className="object-cover object-center scale-125"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6 text-base sm:text-lg md:text-xl font-medium leading-7">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Building Community Through Chapters
              </h3>
              <p>
                Betar is establishing chapters across cities in the United States, creating hubs of Jewish pride,
                education, and action. These local chapters serve as vital centers for:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Educational Programs:</strong> Offering workshops and seminars that deepen understanding of
                  Jewish history, Zionism, and effective advocacy.
                </li>
                <li>
                  <strong>Inspiring Speakers:</strong> Hosting influential voices to educate and inspire Jewish
                  communities to stand strong and united.
                </li>
                <li>
                  <strong>Local Support Networks:</strong> Providing resources, mentorship, and encouragement for Jews
                  to take leadership roles in their communities and beyond.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-4">
            Building a Strong, Proud Jewish Future
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Betar's work goes beyond action—it's about inspiration. Our unapologetic, aggressive stance
            against antisemitism embodies Jabotinsky's vision of Betarim as "proud, strong, and fierce."
            Each rally, cleanup, or response inspires others to stand up, speak out, and embrace their identity
            with confidence and pride.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            By addressing the gaps left by local authorities and passive organizations, Betar shines a bright,
            unyielding light on antisemitism and empowers the Jewish community to take back the narrative.
            We are not just a movement—we are a force for action, resilience, and change. Together,
            through our chapters and initiatives, we are shaping a united and empowered Jewish future.
          </p>
        </div>
      </div>

      <div className="px-4">
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
                Our History
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-medium leading-7">
                Founded in 1923 by Ze&#39;ev Jabotinsky, Betar began as a youth movement dedicated to
                strengthening Jewish identity, fostering pride, and promoting self-defense. Over the last century,
                it has grown into a global community that continues to empower generations of Jews to embrace
                their heritage with courage and resilience.
              </p>
            </div>
            <div className="aspect-[1/1] lg:aspect-[16/17] bg-gray-100 overflow-hidden">
              <Image
                alt="Jewish students"
                src="/fd2971d4352ba17cb23047d0f140e03f.webp"
                className="w-full h-full object-cover"
                objectFit="cover"
                width={1000}
                height={1100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 sm:pt-32 w-full">
        <Timeline />
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