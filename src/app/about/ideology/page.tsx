'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/legacy/image";
import { useState } from "react";
import CardCarousel from "../components/carousel";
import { HoverCard } from "./components/hover-card";

const carousel_two = [
  {
    id: 1,
    title: "Ahavat Israel",
    subTitle: "Love of Israel and the Jewish People",
    description: `
    - Stand with fellow Jews in unity and pride, both in action and spirit.
    - Embrace Jewish identity and heritage, celebrating the legacy of kings and prophets.
    - Advocate for the Jewish people and the Jewish State with passion and courage.
    - Jabotinsky emphasized that Jewish pride requires unwavering action, not just theory,
    stating, “Love the Jewish people in practice, not just in words.”  
    `,
    imageUrl: "",
    textColor: "!text-primary",
  },
  {
    id: 2,
    title: "Hadar",
    subTitle: "Dignity & Honor",
    description: `
    - Hadar encompasses personal integrity, moral values, and respect for oneself and others.
    - Betar members are called to live impeccably, with dignity in speech, thought, and
action.
    - Hadar represents the essence of Jewish pride—standing strong while upholding ethical
values and carrying oneself with dignity.
    - Jabotinsky described Hadar as “splendor, glory, and overall impeccability.”
    `,
    imageUrl: "",
    textColor: "!text-primary",
  },
  {
    id: 3,
    title: "Barzel",
    subTitle: "Iron - Strength and Resilience",
    description: `
    - Strength is the foundation of respect—both as individuals and as a nation.
    - Betar teaches self-defense and the importance of standing firm against those who harm
    the Jewish people.

    - Inspired by Jabotinsky's belief in the necessity of a Jewish army, Betar emphasizes that
    strength is key to achieving peace and security.
    - As Jabotinsky said, “We do not want the world's love; we demand its respect.”
    `,
    imageUrl: "",
    textColor: "!text-primary",
  },
  {
    id: 4,
    title: "Achdut",
    subTitle: "Unity",
    description: `
    - True unity stems from confidence in one's values and convictions, even when standing
    alone.
    - Betar believes in uniting the Jewish people under the common goal of building a strong
    and thriving Jewish future.
    - Jabotinsky's words, “There is but one truth, and it is ours,” remind us that unity requires
    unwavering commitment to our ideals.
    `,
    imageUrl: "",
    textColor: "!text-primary",
  },
  {
    id: 5,
    title: "Bitachon",
    subTitle: "Faith and Confidence",
    description: `
    - Bitachon reflects faith in the indestructibility of the Jewish people and the belief in a
    strong, free Jewish nation.
    - Jabotinsky emphasized the importance of freedom, individual liberty, and a competitive
    free-market economy for the Jewish state.
    - Faith in G-d and the strength of the IDF remain cornerstones
    `,
    imageUrl: "",
    textColor: "!text-primary",
  }
]

export default function IdeologyPage() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header className="text-foreground w-full" />
      <section className="flex-grow flex flex-col justify-center pt-24 md:pt-32 lg:pt-36 pb-8 sm:pb-12 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="mx-auto gap-x-8 gap-y-16 lg:mt-0 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center w-full">
            <div className="flex flex-col gap-10 items-start w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-tighter">
                Ideology
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium leading-7">
                Betar is more than a movement; it is a legacy of pride, resilience, and unwavering commitment
                to the Jewish people. Rooted in the teachings and vision of Ze&apos;ev Jabotinsky, Betar instills
                values that empower individuals to stand strong, united, and dignified. This is where history,
                honor, and responsibility converge to shape a future of pride and strength for the Jewish people.
                <br />
                <br />
                Betar&apos;s ideology reflects the enduring mission of its founder, Ze&apos;ev Jabotinsky: to create a
                “normal” and “healthy” Jew who is proud, self-reliant, and strong. Guided by principles of love
                for the Jewish people, personal honor, strength, unity, and faith, Betar inspires its members to
                live with purpose, resilience, and pride. These values are not just theoretical but practical,
                shaping our actions and guiding us in building a thriving and united Jewish community.
              </p>
              <Button
                className="border border-foreground hover:border-primary bg-background text-foreground font-bold h-10 sm:h-12 md:h-14 lg:h-16 px-4 sm:px-6 md:px-8 lg:px-10 py-0 text-base sm:text-lg md:text-xl hover:text-primary hover:bg-background group"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Show Less' : 'Learn More'}
                {isExpanded ? (
                  <ArrowUp className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6 ml-2 group-hover:text-primary" />
                ) : (
                  <ArrowDown className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6 ml-2 group-hover:text-primary" />
                )}
              </Button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    className="w-full overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <section className="py-12 sm:py-16 md:py-24 lg:py-32 w-full max-w-full">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="mt-2 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 sm:mb-10">
                          Core Principles of Betar
                        </h2>
                        <CardCarousel carouselData={carousel_two} CustomHoverCard={HoverCard} />
                      </div>
                    </section>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>


      <section className="overflow-hidden bg-white py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24 items-center">
            <div className="relative aspect-square bg-primary z-20 order-2 lg:order-1 lg:mr-12 xl:mr-0">
              <div className="absolute inset-0 lg:inset-x-8 lg:inset-y-12">
                <Image
                  alt="Jewish students"
                  src="/dd85a526884b343cd34605b4c25d6740.webp"
                  className="w-full h-full object-cover"
                  objectFit="cover"
                  layout="fill"
                  sizes="(min-width: 1024px) 820px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl">
                Our Heritage of Strength and Sacrifice
              </h2>
              <p className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-base sm:text-lg md:text-xl font-medium leading-7">
                Betar&apos;s roots lie in the resilience, courage, and sacrifice of heroes who shaped the Jewish
                people&apos;s destiny. Imagine Ze&apos;ev Jabotinsky urging Jews in Europe to leave before the Holocaust,
                foreseeing the dangers that lay ahead. Picture Joseph Trumpeldor at Tel Hai, standing defiantly
                in defense of his people with his final words: <cite>“It is good to die for our country.”</cite>{" "} Recall the
                Irgun&apos;s bold resistance against British rule in pre-state Israel and the Betar members who formed{" "}
                <cite>Plugat Hakotel</cite>{" "}to protect Jews praying at the Western Wall.
                <br />
                These moments are more than history—they are our foundation. They remind us that strength
                and sacrifice are essential to preserving Jewish sovereignty and identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl">
                A Living Legacy
              </h2>
              <p className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-base sm:text-lg md:text-xl font-medium leading-7">
                Betar&apos;s ideals are more than history—they are a call to action. From its earliest days, Betar has
                been at the forefront of Jewish resilience, courage, and pride. Through the legacy of its leaders
                and members, Betar has consistently embodied the enduring spirit of Jewish strength.
                <br />
                <br />
                Today, Betar continues to honor this legacy through education, activism, and community
                building. Members are taught to embrace their heritage, defend the Jewish people, and uphold
                the principles of pride, unity, and self-reliance that have guided the movement for nearly a
                century.
                <br />
                <br />
                In the United States and worldwide, Betar carries forward the vision of Ze&apos;ev Jabotinsky, who
                called on Jews to protect and honor their community, to be proud, and to strive for normalcy as a
                dignified and self-reliant nation. After centuries of exile, Betar fosters resilience, unity, and the
                ability to defend ourselves—qualities essential for a thriving Jewish future.
                <br />
                <br />
                As Jabotinsky wrote in <strong><cite>Shir Betar</cite></strong> (The Song of Betar): <strong><cite>“Silence is despicable!”</cite></strong>
                <br />
                <br />
                Betar remains a beacon of strength, resilience, and unwavering commitment to the Jewish
                people, ensuring that this proud legacy inspires and empowers future generations to act with
                pride and purpose.
              </p>
            </div>
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <Image
                alt="Jewish students"
                src="/95a7c0cc1fcc1bc2f9c9b2699eb977fe.webp"
                className="w-full h-full object-cover"
                width={820}
                height={820}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center mb-16">
            <div className="aspect-square bg-gray-100 overflow-hidden order-2 lg:order-1">
              <Image
                alt="Jewish students"
                src="/6aa8e3dc7dc614eb8c2d4fa42127f97f.webp"
                className="w-full h-full object-cover"
                width={820}
                height={820}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl">
                The Legacy Continues
              </h2>
              <p className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-base sm:text-lg md:text-xl font-medium leading-7">
                Betar is a living testament to the teachings of Ze&apos;ev Jabotinsky, embodying the principles of{" "}
                <strong>Ahavat Yisrael, Hadar, Barzel, Achdut, Bitachon, and Tzedek</strong>. Our movement celebrates the
                strength, dignity, and resilience of the Jewish people, ensuring that Jabotinsky&apos;s vision for a
                proud, united, and self-reliant Jewish nation endures.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Reclaiming the Narrative</h2>
            <p className="text-base sm:text-lg mb-8">
              In an era of rising antisemitism and growing attempts to delegitimize Israel, Betar stands at the
              forefront, reclaiming the narrative and asserting the right to define Jewish identity. We are
              unapologetically Zionist, proactive, and assertive in defending our people and heritage.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-base sm:text-lg">
                <strong>Identity Assertion:</strong> Reinforcing the inseparability of Jewish identity and Zionism, Betar
                fosters pride in Jewish heritage while affirming unwavering support for the Jewish state.
              </li>
              <li className="text-base sm:text-lg">
                <strong>Educational Initiatives:</strong> Through programs and resources, Betar promotes a deep
                understanding of Jewish history and Zionism, countering misinformation, prejudice, and ignorance.
              </li>
              <li className="text-base sm:text-lg">
                <strong>Defense and Advocacy:</strong> Betar equips members with the tools to fight back—whether
                against physical threats, social media misinformation, or doxing campaigns. We train our
                members to stand strong on campuses, in communities, and online, ensuring they are
                prepared to confront challenges with confidence and strength.
              </li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Inspiring a New Generation</h2>
            <p className="text-base sm:text-lg mb-8">
              Betar USA is reigniting Jabotinsky&apos;s vision by developing leaders who embrace their identity,
              act with purpose, and defend the Jewish community. Our members are educated, supported, and
              empowered to fight back on all fronts—whether in the public square, on social media, or within
              their local communities.
            </p>
            <p className="text-base sm:text-lg">
              Guided by Jabotinsky&apos;s timeless philosophy, Betar continues to shine as a beacon of honor and
              resilience. We are more than a movement; we are a call to action, ensuring that the legacy of our
              heroes inspires and protects future generations.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">As our motto declares: #JewsFightBack</h3>
            <p className="text-base sm:text-lg">
              Betar remains steadfast in its mission to lead with courage, protect with strength, and inspire
              with dignity, carrying the Jewish people&apos;s proud legacy into the future.
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="aspect-square bg-gray-100 overflow-hidden order-2 lg:order-1">
              <Image
                alt="Jewish students"
                src="/2f17debf72fd27bef80ed4f37ebbaee9.webp"
                className="w-full h-full object-cover"
                width={820}
                height={820}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl">
                Betar Song
              </h2>
              <p className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-base sm:text-lg md:text-xl font-medium leading-7">
                Discover the spirit of Betar through our anthem. This song captures our passion, strength, and unwavering dedication to Israel and Jewish pride.
                <br />
                <br />
                Shir Betar is a poem written by the Zionist leader Zeev Jabotinsky in Paris in 1932. The poem was adopted as the song of the Zionist youth movement Betar. Through the song, Jabotinsky made a call to all Jews to recover their self-esteem and to actively participate in the fight for the creation of Israel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}