'use client'

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';
import Image from "next/legacy/image";
import Link from 'next/link';
import Footer from '../components/footer';
import Header from "../components/header";
import NewsletterForm from '../components/newsletter-form';
import CardCarousel from "./about/components/carousel";
import NumberTicker from "@/components/ui/number-ticker";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import { useNews } from "./admin/context/news.context";
import { format } from "date-fns";

const stats = [
  { id: 1, name: 'Surge in Antisemitic incidents in the U.S, after October 7, 2023', value: 500 },
  { id: 2, name: 'Antisemitic incidents on U.S college campuses from October 2023 to June 2024', value: 1826 },
  { id: 3, name: 'Antisemitic incidents across the U.S following October 7, 2023', value: 8873 },
  { id: 4, name: 'Bomb Threats targeting Jewish Institutions in 2023', value: 747 },
]

const posts = [
  {
    src: '/news1.webp',
  },
  {
    src: '/news2.webp',
  },
  {
    src: '/news3.webp',
  },
  {
    src: '/news4.webp',
  },
]

const carousel = [
  {
    id: 1,
    title: "Identity Assertion",
    subTitle: "",
    description: "Reinforcing the inseparability of Jewish identity and Zionism, affirming that pride in Jewish heritage includes unwavering support for the Jewish state.",
    imageUrl: "",
    textColor: "!text-primary",
  },
  {
    id: 2,
    title: "Educational Initiatives",
    subTitle: "",
    description: "Betar will provide educational resources and training to empower Jewish students to stand up against antisemitism and defend their identity.",
    imageUrl: "",
    textColor: "!text-primary",
  },
  {
    id: 3,
    title: "Defense Training",
    subTitle: "",
    description: "Betar will provide Jewish students with the tools and resources to defend themselves against antisemitism and hate.",
    imageUrl: "",
    textColor: "!text-primary",
  }
]

export default function HomePage() {
  const { news } = useNews()

  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const heroNews = news.filter((n) => n.is_hero)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.webp')] flex flex-col">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 flex flex-col h-full">
          <Header />
          <div className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-accent font-bold max-w-5xl">
              WE ARE BETAR
              <br />
              ZIONIST STAND STRONG
              <br />
              LEAD PROUD
              <br />
              FIGHT ANTI SEMITISM
            </h1>
            <Button
              className="border border-foreground hover:border-primary mt-6 sm:mt-8 md:mt-10 lg:mt-28 bg-accent text-foreground font-bold h-10 sm:h-12 md:h-14 lg:h-16 px-4 sm:px-6 md:px-8 lg:px-10 py-0 text-base sm:text-lg md:text-xl hover:text-primary hover:bg-accent group"
              asChild
            >
              <Link href="/join">
                Join Us
                <ArrowRight className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6 ml-2 group-hover:text-primary" />
              </Link>
            </Button>
          </div>
          <div className="bg-[#EC1B24] flex items-center justify-center py-3 sm:py-4 md:py-5 lg:py-6 px-4 sm:px-6 lg:px-8">
            <Button
              onClick={() => window.open('https://www.change.org/p/ban-sjp-students-for-justice-in-palestine-from-pitt-campus')}
              variant="link"
              className="text-muted text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold flex items-center flex-wrap justify-center text-center"
            >
              Sign Petition to Ban SJP from College Campuses
              <ArrowRight className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white px-4 sm:px-8 pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-20 items-center lg:mx-0 lg:max-w-none">
            <div className="lg:order-1 order-2">
              <h2 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl">
                Empowering Jewish Students
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium leading-7">
                Betar USA is a Zionist youth movement dedicated to empowering Jewish students to defend and embrace their identity, heritage, and community in the face of rising antisemitism, particularly on college campuses.
              </p>
              <Button
                className="border border-foreground hover:border-primary mt-6 sm:mt-8 md:mt-10 lg:mt-12 bg-background text-foreground font-bold h-10 sm:h-12 md:h-14 lg:h-16 px-4 sm:px-6 md:px-8 lg:px-10 py-0 text-base sm:text-lg md:text-xl hover:text-primary hover:bg-background group"
                asChild
              >
                <Link href="/about/ideology">
                  Learn More
                  <ArrowRight className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6 ml-2 group-hover:text-primary" />
                </Link>
              </Button>
            </div>

            <div className="lg:order-2 order-1">
              <Image
                alt="Jewish students"
                src="/dims.webp"
                width={820}
                height={547}
                className="w-full h-auto"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-8 grid gap-8 flex-1 flex-grow pt-24 sm:pt-32 relative z-0">
        <div className="text-primary flex flex-col gap-4">
          <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            &quot;There is no mightier weapon than indifference, you will never conquer it.&quot;
          </blockquote>
          <cite className="text-lg sm:text-xl">— Ze&apos;ev Jabotinsky</cite>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-16 lg:gap-0">
          <div className="relative flex flex-col z-20 items-center">
            <div className="bg-primary w-full aspect-[3/4] max-h-[600px] max-w-[500px] mt-20 lg:mt-40 lg:ml-24" />
            <div className="z-10 mt-10 lg:mt-20 w-full max-w-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/131de7f55f1806eebfca97668a247826.webp"
                alt="Historical group photo"
                width={600}
                height={400}
                objectFit="cover"
                className="w-full object-cover"
              />
            </div>
            <Button
              className="border border-foreground hover:border-primary mt-6 sm:mt-10 md:mt-16 lg:mt-24 bg-background text-foreground font-bold h-10 sm:h-12 md:h-14 lg:h-16 px-4 sm:px-6 md:px-8 lg:px-10 py-0 text-base sm:text-lg md:text-xl hover:text-primary hover:bg-background group"
              asChild
            >
              <Link href="/about/ideology">
                Learn More
                <ArrowRight className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6 ml-2 group-hover:text-primary" />
              </Link>
            </Button>
          </div>

          <div className="space-y-6 flex flex-col items-center gap-8 lg:transform lg:translate-x-[5rem] lg:-translate-y-[5rem]">
            <div className="aspect-[5/3] w-full max-w-[900px]">
              <Image
                src="/fb65dabcc10a7f4bcea9085829df2a62.webp"
                alt="Portrait photo"
                width={900}
                height={540}
                objectFit="cover"
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

      <div className="overflow-hidden bg-white px-4 sm:px-8 pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 mx-auto">
            Our Guiding Compass
          </h2>
          <p className="mx-auto mb-8 sm:mb-10 md:mb-12 text-center text-base sm:text-lg md:text-xl font-medium max-w-4xl">
            Betar is a Zionist movement and is standing against any attempts to delegitimize Israel&apos;s existence or a Jew&apos;s connection to Israel. Betarim will be educated and supported to fight back on campus, in social media, and in their communities.
          </p>
          <CardCarousel carouselData={carousel} />
        </div>
      </div>

      <div className="overflow-x-hidden bg-white pt-24 sm:pt-32">
        <div className="mx-auto max-w-[90rem] bg-primary">
          <div className="relative" ref={statsRef}>
            <div className="inset-0 flex items-center justify-center flex-col px-4 sm:px-8 py-24 sm:py-32">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="mt-2 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
                  The Problem
                </h2>
              </div>
              <p className="mx-auto mt-4 sm:mt-6 max-w-7xl text-pretty text-center text-base sm:text-lg md:text-xl font-medium text-accent">
                The Jewish community, especially young people on college campuses, are facing a rise in
                antisemitism that fuels isolation and vulnerability. Fragmented support systems and a
                growing disconnect from Jewish heritage weaken their sense of unity, pride, and
                resilience, threatening the strength of the Jewish community.
              </p>
              <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8 lg:gap-y-16">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="flex flex-col items-center text-center justify-between"
                      >
                        <dt className="text-xs sm:text-sm md:text-base text-accent mb-2">{stat.name}</dt>
                        <dd className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-accent">
                          {statsVisible ? (
                            <>
                              <NumberTicker className="text-inherit font-sans" value={stat.value} />
                              {stat.id === 1 && "%"}
                            </>
                          ) : (
                            0
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-background px-4 sm:px-8 pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <span className='text-base sm:text-lg md:text-xl font-medium'>
                {heroNews[0]?.date && format(new Date(heroNews[0]?.date), 'MMMM dd, yyyy')} | {heroNews[0]?.newspaper}
              </span>
              <h2 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-5xl mt-2 sm:mt-4">
                {heroNews[0]?.title}
              </h2>
              <Button
                className="border border-foreground hover:border-primary mt-4 sm:mt-6 md:mt-8 bg-background text-foreground font-bold h-10 sm:h-12 md:h-14 lg:h-16 px-4 sm:px-6 md:px-8 lg:px-10 py-0 text-base sm:text-lg md:text-xl hover:text-primary hover:bg-background group"
                asChild
              >
                <Link href="/news">
                  More News
                  <ArrowRight className="!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6 ml-2 group-hover:text-primary" />
                </Link>
              </Button>
            </div>
            <img
              alt="Jewish students"
              src={heroNews[0]?.image_url}
              width={820}
              height={547}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="pt-24 sm:pt-32">
        <NewsletterForm />
      </div>

      <div className="bg-secondary w-full py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-balance text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Follow us on social media
          </h2>
          <div className='flex items-center justify-center gap-28 mt-10'>
            <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-primary transition cursor-pointer" width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
              <mask id="mask0_1_379" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0H39.067V39.0523H0V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_379)">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.7863 5.75326C4.4043 7.12426 3.8343 9.06826 3.6753 10.9703C3.9063 16.5343 3.3663 22.3463 3.6713 27.8813C3.9273 32.5263 6.5373 35.1173 11.1763 35.3783C16.5983 35.6823 22.2913 35.1493 27.7413 35.3823C32.1673 35.1493 35.1463 32.6533 35.4973 28.1373C35.2463 22.5293 35.8343 16.6263 35.5023 11.0523C35.2583 6.96126 32.6763 4.02626 28.5173 3.72926C22.7043 3.98226 16.6033 3.39026 10.8243 3.72426C9.0623 3.82626 7.0573 4.49326 5.7863 5.75326ZM10.8543 0.112257C16.4473 -0.218743 22.2953 0.310257 27.9143 0.0832566C33.4733 0.221257 37.9863 3.84026 38.7793 9.42226C38.9203 15.4423 39.2213 21.5903 38.9713 27.6223C38.7113 33.8873 35.1113 38.5223 28.6043 38.9333C22.6743 39.3073 16.3653 38.6553 10.3963 38.9333C4.7633 38.5193 0.468301 34.3503 0.116301 28.6623C-0.253699 22.6993 0.403301 16.3603 0.116301 10.3583C0.629301 4.22926 4.7853 0.471257 10.8543 0.112257Z" />
              </g>
              <path fillRule="evenodd" clipRule="evenodd" d="M19.1787 13.0333C14.3727 13.2903 11.5457 18.5963 14.0107 22.7453C16.5137 26.9603 22.7167 26.8773 25.1077 22.6033C27.5667 18.2093 24.1947 12.7653 19.1787 13.0333ZM18.4857 9.47728C26.7457 8.74628 32.4727 17.7103 27.9907 24.7923C24.1777 30.8173 15.4467 31.0933 11.3217 25.2603C6.9317 19.0533 10.9107 10.1483 18.4857 9.47728Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M29.4928 6.95801C32.9528 6.40501 33.1208 11.858 29.5678 11.436C27.0948 11.142 27.0498 7.34801 29.4928 6.95801Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-primary transition cursor-pointer"
              width="22"
              height="39"
              viewBox="0 0 22 39"
              fill="currentColor"
            >
              <mask id="mask0_1_371" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="40">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H21.0554V39.003H0V0Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1_371)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.5364 39.003C6.3774 38.938 5.9274 38.589 5.9274 38.432V22.029H0.637397C0.475397 22.029 0.029397 21.613 0.063397 21.386C0.223397 19.257 -0.137603 16.849 0.061397 14.755C0.091397 14.442 0.389397 14.037 0.713397 14.037H5.9274C5.9724 10.228 5.4044 6.45803 7.9084 3.26903C11.0064 -0.675971 15.7984 0.0720289 20.2754 0.0320289C20.5794 0.0670289 20.9004 0.201029 21.0314 0.491029L21.0554 7.05403C20.9264 7.35903 20.6834 7.53003 20.3534 7.56903C18.9094 7.74103 15.6624 7.12203 14.6474 8.25703C14.4324 8.49703 14.1484 9.20103 14.1484 9.50803V14.037H20.1994C20.5294 14.037 20.8204 14.515 20.8494 14.833C21.0384 16.886 20.7004 19.224 20.8484 21.308C20.8814 21.564 20.4914 22.029 20.2754 22.029H14.1484V38.28C14.1484 38.564 13.7694 38.875 13.5394 39.003H6.5364Z"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-primary transition cursor-pointer"
              width="41"
              height="39"
              viewBox="0 0 41 39"
              fill="currentColor"
            >
              <mask id="mask0_1_374" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="39">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H40.9557V38.3527H0V0Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1_374)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.6317 35.7598L10.8537 2.59276H5.46069C5.44169 2.86176 5.67769 3.04976 5.8187 3.25876C7.88669 6.31276 10.4167 9.42076 12.6427 12.4058C18.4697 20.2178 24.2927 28.0378 30.2387 35.7598H35.6317ZM12.2867 -0.000244141L22.5987 13.7848L35.3587 -0.000244141H39.0447L24.3197 16.0138L40.9557 38.3528H28.6687L17.4077 23.3378L3.76369 38.2268L-0.000305176 38.3528V38.2168L15.8167 21.1108L0.136695 -0.000244141H12.2867Z"
                />
              </g>
            </svg>
          </div>
          <Carousel className="mt-10 sm:mt-14">
            <CarouselContent>
              {posts.map((post, index) => (
                <CarouselItem
                  className="md:basis-1/2 lg:basis-1/3 w-full sm:w-[400px] h-[300px] sm:h-[400px] overflow-hidden flex justify-center"
                  key={index}
                >
                  <Image
                    alt="News"
                    src={post.src}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
}