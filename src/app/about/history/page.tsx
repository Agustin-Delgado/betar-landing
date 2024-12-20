import Image from "next/image";
import Timeline from "../components/timeline";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function OurHistoryPage() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header className="text-foreground w-full" />

      <div className="flex-grow flex flex-col justify-center pt-24 md:pt-32 lg:pt-36 pb-8 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mx-auto grid grid-cols-1 gap-y-8 lg:gap-x-16 lg:grid-cols-2 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-tighter">
                Our History
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium leading-7 mt-4 md:mt-8">
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

      <Footer />
    </div>
  )
}