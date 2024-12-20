import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";


export default function MissionPage() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header className="text-foreground w-full" />

      <div className="container mx-auto px-4 sm:px-8 pt-24 sm:pt-32 max-w-7xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-tighter">
          Our Mission
        </h1>
        <div className="flex flex-col lg:flex-row justify-between relative gap-8 lg:gap-16 mt-4 md:mt-8">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Betar USA is driven by the vision of our founder, Ze&quot;ev Jabotinsky, to empower Jews to stand
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
              Join us and be part of a century-old legacy that continues to change the Jewish world. Betar isn&quot;t
              just an organization—it&quot;s a movement for those ready to lead, defend, and transform the future
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
            Inspired by Jabotinsky&quot;s words, &quot;Silence is despicable,&quot; Betar exists to inspire action, foster
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

      <Footer />
    </div>
  )
}