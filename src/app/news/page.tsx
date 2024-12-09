import Image from "next/image";
import Header from "../components/header";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function NewsPage() {

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header className="text-foreground" />

      <div className="overflow-hidden bg-white py-24 sm:py-32 w-full">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-9xl">
              News
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
            <div className="p-8 md:p-12 flex flex-col bg-secondary">
              <div className="space-y-1 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>04.19.23</span>
                  <span>|</span>
                  <span>Newspaper</span>
                </div>
              </div>
              <div className="space-y-6 max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Barnard College ripped for inviting &apos;antisemite&apos; to speak on campus.
                </h1>
                <p className="text-lg leading-relaxed">
                  Barnard College is being called out for inviting a United Nations official who has likened Israeli Prime Minister... Benjamin Netanyahu to Adolf Hitler and Israel as the Nazi &quot;Third Reich&quot; to speak at the elite Manhattan school this week.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/b6b5179eb7dd6e981791dd1bcce55ace.png"
                alt="News article featured image"
                className="object-cover border"
                fill
                priority
              />
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 shrink-0 bg-primary border text-accent border-l-0 hover:text-primary absolute bottom-px left-px border-none"
                aria-label="Next article"
              >
                <ArrowRight className="!w-6 !h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}