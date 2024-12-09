import Image from "next/image";
import Header from "../components/header";
import JoinForm from "./components/join-form";
import Footer from "../components/footer";


export default function JoinPage() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header className="text-foreground" />

      <div className="flex-grow flex flex-col justify-center pt-24 sm:pt-36 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:gap-8 mb-12">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-9xl">
              Join the Movement
            </h1>
            <div className="max-w-[700px] md:ml-96">
              <p className="text-xl md:text-2xl font-semibold">
                It's time we all unite, rally, mobilize, and take action nationally and locally.
                We are opening Betar Chapters throughout the USA and seeking leadership, membership and donors. Please complete the form below to get in touch and let's discuss the possibilities to make an impact in your community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-h-[600px] w-[1920px] h-auto overflow-hidden">
        <Image
          src="/dda00f487f3afccabb5368fed7d367f3.jpeg"
          alt="Jews fight"
          width={1920}
          height={1080}
          className="object-cover"
          priority
        />
      </div>

      <div className="overflow-hidden bg-white py-24 w-full">
        <div className="mx-auto max-w-5xl">
          <JoinForm />
        </div>
      </div>

      <Footer />
    </div>
  )
}