import Image from "next/image";
import CardCarousel from "../components/carousel";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

export default function WhatWeDoPage() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden h-full">
      <Header className="text-foreground w-full" />

      <div className="overflow-hidden mx-auto px-4 sm:px-8 py-24 sm:py-32 max-w-7xl">
        <div className="mx-auto grid grid-cols-1 gap-y-8 lg:gap-x-16 lg:grid-cols-2 items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-tighter">
              What We Do
            </h1>
            <div className="space-y-6 text-base sm:text-lg md:text-xl font-medium leading-7 mt-4 md:mt-8">
              <p>
                Betar empowers Jews to embrace their identity, take bold action, support Israel, and lead in their
                communities. Through impactful programs, grassroots events, and unapologetic activism, we are
                building a future where Jews everywhere are equipped to protect their communities, defend
                Israel, and act with unwavering commitment to Jewish values.
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-4">
                Taking Action Where Others Won&quot;t
              </h3>
              <p>
                In a world where many Jewish organizations remain passive, Betar stands out as a movement of
                action. We don&quot;t wait for others to step up—we lead.
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
            Betar&quot;s work goes beyond action—it&quot;s about inspiration. Our unapologetic, aggressive stance
            against antisemitism embodies Jabotinsky&quot;s vision of Betarim as &quot;proud, strong, and fierce.&quot;
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

      <div className="px-4 pb-24 sm:pb-32">
        <CardCarousel carouselData={carousel_one} />
      </div>

      <Footer />
    </div>
  )
}