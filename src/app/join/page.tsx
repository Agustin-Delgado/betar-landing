import Image from "next/legacy/image";
import Header from "../../components/header";
import JoinForm from "./components/join-form";
import Footer from "../../components/footer";

export default function JoinPage() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header className="text-foreground w-full" />

      <main className="w-full">
        <section className="flex-grow flex flex-col justify-center pt-24 md:pt-32 lg:pt-36 pb-8 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-tighter">
                Join the Movement
              </h1>
              <div className="max-w-full md:max-w-[700px] lg:ml-0 xl:ml-96">
                <p className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-base sm:text-lg md:text-xl font-medium leading-7">
                  It&apos;s time we all unite, rally, mobilize, and take action nationally and locally.
                  We are opening Betar Chapters throughout the USA and seeking leadership, membership and donors. Please complete the form below to get in touch and let&apos;s discuss the possibilities to make an impact in your community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full max-h-[600px] overflow-hidden">
          <Image
            src="/dda00f487f3afccabb5368fed7d367f3.webp"
            alt="Jews fight"
            width={1920}
            height={1080}
            className="object-cover w-full h-auto"
            priority
          />
        </section>

        <section className="overflow-hidden bg-white py-16 sm:py-20 md:py-24 w-full">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <JoinForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
