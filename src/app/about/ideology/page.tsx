import Header from "@/app/components/header";
import Image from "next/image";
import CardCarousel from "../components/carousel";
import Footer from "@/app/components/footer";

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
      <Header className="text-foreground" />

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl">
                Ideology
              </h2>
              <p className="mt-16 text-xl font-medium leading-7">
                Betar is more than a movement; it is a legacy of pride, resilience, and unwavering commitment to the Jewish people. Inspired by the teachings and vision of Ze'ev Jabotinsky, Betar instills values that empower our community to stand strong, united, and dignified. This is Betar — where history, honor, and responsibility converge to shape a future of pride and strength for the Jewish people.
              </p>
            </div>
            <div className="aspect-[1/1] bg-gray-100 overflow-hidden">
              <Image
                alt="Jewish students"
                src="/92e9276fd5611ed60cc1069078241172.png"
                className="w-full h-full object-cover"
                width={820}
                height={547}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-40 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="aspect-[1/1] bg-primary z-20">
              <Image
                alt="Jewish students"
                src="/dd85a526884b343cd34605b4c25d6740.jpeg"
                className="w-full h-full object-cover relative top-20 left-20"
                width={658}
                height={440}
              />
            </div>
            <div>
              <h2 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl">
                Our Heritage of Strength and Sacrifice
              </h2>
              <p className="mt-16 text-xl font-medium leading-7">
                Imagine Ze'ev Jabotinsky urging Jews in Europe to leave before the Holocaust, foreseeing the dangers that lay ahead. Picture the Irgun&apos;s resistance against the British occupation in pre-state Israel. Remember the heroism of Joseph Trumpeldor, who defended Tel Hai with his last words, "It is good to die for our country." Betar members formed Plugat Hakotel to guard Jews at the Western Wall when they needed protection. These are our heroes—our foundation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl">
                Reviving Jabotinsky&apos;s Ideals
              </h2>
              <p className="mt-16 text-xl font-medium leading-7">
                In the United States and around the world, Betar continues to uphold Jabotinsky&apos;s ideals, guiding members with his "philosophy of life." He called on us to protect and honor the Jewish community, to be a proud and "normal" nation. After centuries in exile, we must cultivate resilience, unity, and the ability to defend ourselves. Betar fosters these qualities, embodying a vision for a healthy, dignified Jewish people who act with pride and purpose.
              </p>
            </div>
            <div className="aspect-[1/1] bg-gray-100 overflow-hidden">
              <Image
                alt="Jewish students"
                src="/95a7c0cc1fcc1bc2f9c9b2699eb977fe.jpeg"
                className="w-full h-full object-cover"
                width={820}
                height={547}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden pt-24 sm:pt-32 w-full">
        <div className="mx-auto max-w-7xl">
          <h2 className="mt-2 text-center text-5xl font-bold sm:text-7xl mb-10 mx-auto text-pretty">
            Core Principles of Betar
          </h2>
          <CardCarousel carouselData={carousel_two} />
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="aspect-[1/1] bg-gray-100 overflow-hidden">
              <Image
                alt="Jewish students"
                src="/6aa8e3dc7dc614eb8c2d4fa42127f97f.png"
                className="w-full h-full object-cover"
                width={820}
                height={547}
              />
            </div>
            <div>
              <h2 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl">
                The Legacy Continues
              </h2>
              <p className="mt-16 text-xl font-medium leading-7">
                Betar stands as a living tribute to Jabotinsky&apos;s teachings, with members who embody the principles of Ahavat Yisrael, Hadar, Barzel, Achdut, Bitachon, and Tzedek. Our movement celebrates the strength, dignity, and legacy of the Jewish people and is committed to ensuring that Jabotinsky&apos;s vision for a proud, resilient, and unified Jewish nation endures.As we look to the future, Betar remains steadfast in its mission to inspire, protect, and lead with honor, just as our heroes did before us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl pb-32 relative">
        <div className="text-primary flex flex-col gap-4 mb-20">
          <blockquote className="text-7xl font-bold leading-tight">
            "Silence is despicable"
          </blockquote>
          <cite className="text-xl">— Ze'ev Jabotinsky</cite>
        </div>

        <div className="h-[560px] aspect-[16/9]">
          <Image
            src="/fb65dabcc10a7f4bcea9085829df2a62.jpeg"
            alt="Historical black and white portrait"
            width={1200}
            height={800}
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute top-20 right-32 w-1/2 h-[700px] bg-primary -z-10 translate-x-[20%] translate-y-[10%]" />
        </div>
        <p className="leading-relaxed font-medium text-xl w-[650px] p-16 pr-24 pt-0">
          Today, Betar answers this call by standing boldly, loudly, and proudly for the Jewish people and the State of Israel.
        </p>
      </div>

      <div className="overflow-hidden bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="aspect-[1/1] bg-gray-100 overflow-hidden">
              <Image
                alt="Jewish students"
                src="/2f17debf72fd27bef80ed4f37ebbaee9.jpeg"
                className="w-full h-full object-cover"
                width={820}
                height={547}
              />
            </div>
            <div>
              <h2 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl">
                Betar Song
              </h2>
              <p className="mt-16 text-xl font-medium leading-7">
                Discover the spirit of Betar through our anthem. This song captures our passion, strength, and unwavering dedication to Israel and Jewish pride.

                Shir Betar is a poem written by the Zionist leader Zeev Jabotinsky in Paris in 1932. The poem was adopted as the song of the Zionist youth movement Betar. Through the song, Jabotinsky made a call to all Jews to recover their self-esteem and to actively participate in the fight for the creation of Israel.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}