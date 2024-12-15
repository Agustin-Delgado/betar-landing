import Header from "@/components/header";
import Image from "next/legacy/image";
import CardCarousel from "../components/carousel";
import Footer from "@/components/footer";

const carousel_two = [
  {
    id: 1,
    title: "Ahavat Israel",
    subTitle: "Love of Israel",
    description: "",
    imageUrl: "",
    textColor: "!text-primary",
  },
  {
    id: 2,
    title: "Hadar",
    subTitle: "Dignity & Honor",
    description: "Hadar embodies dignity, respect, self-esteem, politeness, and an unwavering ethical standard. Hadar means standing up, acting with honor, and carrying ourselves with strength and integrity. It is the essence of Jewish pride, encouraging us to be good people, ethical, and resilient. As Jabotinsky said, `Human society is based on reciprocity,` and we must hold ourselves to high standards, both in our own lives and as a community.",
    imageUrl: "",
    textColor: "!text-primary",
  },
  {
    id: 3,
    title: "Barzel",
    subTitle: "Strength & Resilience",
    description: "",
    imageUrl: "",
    textColor: "!text-primary",
  }
]

export default function IdeologyPage() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header className="text-foreground w-full" />

      <section className="flex-grow flex flex-col justify-center pt-24 md:pt-32 lg:pt-36 pb-8 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-0 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-tighter">
                Ideology
              </h1>
              <p className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-base sm:text-lg md:text-xl font-medium leading-7">
                Betar is more than a movement; it is a legacy of pride, resilience, and unwavering commitment to the Jewish people. Inspired by the teachings and vision of Ze&apos;ev Jabotinsky, Betar instills values that empower our community to stand strong, united, and dignified. This is Betar — where history, honor, and responsibility converge to shape a future of pride and strength for the Jewish people.
              </p>
            </div>
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <Image
                alt="Jewish students"
                src="/92e9276fd5611ed60cc1069078241172.webp"
                className="w-full h-full object-cover"
                priority
                width={820}
                height={820}
              />
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
                Imagine Ze&apos;ev Jabotinsky urging Jews in Europe to leave before the Holocaust, foreseeing the dangers that lay ahead. Picture the Irgun&apos;s resistance against the British occupation in pre-state Israel. Remember the heroism of Joseph Trumpeldor, who defended Tel Hai with his last words, &quot;It is good to die for our country.&quot; Betar members formed Plugat Hakotel to guard Jews at the Western Wall when they needed protection. These are our heroes—our foundation.
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
                Reviving Jabotinsky&apos;s Ideals
              </h2>
              <p className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-base sm:text-lg md:text-xl font-medium leading-7">
                In the United States and around the world, Betar continues to uphold Jabotinsky&apos;s ideals, guiding members with his &quot;philosophy of life.&quot; He called on us to protect and honor the Jewish community, to be a proud and &quot;normal&quot; nation. After centuries in exile, we must cultivate resilience, unity, and the ability to defend ourselves. Betar fosters these qualities, embodying a vision for a healthy, dignified Jewish people who act with pride and purpose.
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

      <section className="overflow-hidden py-12 sm:py-16 md:py-24 lg:py-32 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mt-2 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 sm:mb-10 mx-auto">
            Core Principles of Betar
          </h2>
          <CardCarousel carouselData={carousel_two} />
        </div>
      </section>

      <section className="overflow-hidden bg-white py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
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
                Betar stands as a living tribute to Jabotinsky&apos;s teachings, with members who embody the principles of Ahavat Yisrael, Hadar, Barzel, Achdut, Bitachon, and Tzedek. Our movement celebrates the strength, dignity, and legacy of the Jewish people and is committed to ensuring that Jabotinsky&apos;s vision for a proud, resilient, and unified Jewish nation endures. As we look to the future, Betar remains steadfast in its mission to inspire, protect, and lead with honor, just as our heroes did before us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="text-primary flex flex-col gap-4 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            &quot;Silence is despicable&quot;
          </blockquote>
          <cite className="text-base sm:text-lg md:text-xl">— Ze&apos;ev Jabotinsky</cite>
        </div>

        <div className="relative">
          <div className="aspect-[16/9] w-full">
            <Image
              src="/fb65dabcc10a7f4bcea9085829df2a62.webp"
              alt="Historical black and white portrait"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-1/4 right-0 w-1/2 h-[100%] bg-primary -z-10 translate-x-[20%] translate-y-[10%] hidden lg:block" />
        </div>
        <p className="leading-relaxed font-medium text-base sm:text-lg md:text-xl lg:w-2/3 xl:w-1/2 mt-8 sm:mt-12 md:mt-16 lg:mt-0 lg:p-16 lg:pr-24">
          Today, Betar answers this call by standing boldly, loudly, and proudly for the Jewish people and the State of Israel.
        </p>
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