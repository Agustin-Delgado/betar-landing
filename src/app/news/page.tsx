'use client'

import Image from "next/image";
import Header from "../components/header";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import NewsletterForm from "../components/newsletter-form";
import Footer from "../components/footer";

const newsItems = [
  {
    id: 1,
    title: "Zionist group accused of vandalism demands expulsion of NYU SJP",
    description: "\"This demand comes in response to repeated acts of heinous antisemitism\" at the private college in Manhattan, where \"students and faculty gathered to celebrate acts of jihad and praise terrorists.\"",
    date: "04.19.23",
    category: "Newspaper",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 2,
    title: "NYC halal restaurant's anti-Israel 'war criminal' sidewalk display sparks fury",
    description: "A halal restaurant in New York City has come under fire for displaying controversial messages on its sidewalk, leading to heated debates about free speech and political expression.",
    date: "04.19.23",
    category: "Newspaper",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 3,
    title: "Tech giant announces breakthrough in quantum computing",
    description: "A major technology company has revealed a significant advancement in quantum computing, potentially revolutionizing various fields including cryptography and drug discovery.",
    date: "04.20.23",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 4,
    title: "Global climate summit ends with new commitments",
    description: "World leaders have concluded a pivotal climate conference, agreeing on ambitious targets to reduce carbon emissions and increase renewable energy adoption.",
    date: "04.21.23",
    category: "Environment",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 5,
    title: "Breakthrough in Alzheimer's research offers new hope",
    description: "Scientists have identified a novel approach to treating Alzheimer's disease, potentially slowing or even reversing cognitive decline in early-stage patients.",
    date: "04.22.23",
    category: "Health",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 6,
    title: "Major cryptocurrency exchange files for bankruptcy",
    description: "One of the world's largest cryptocurrency exchanges has declared bankruptcy, sending shockwaves through the digital currency market and raising questions about regulation.",
    date: "04.23.23",
    category: "Finance",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 7,
    title: "Hollywood writers strike enters second week",
    description: "The ongoing strike by Hollywood writers continues to impact TV and film production, with negotiations between unions and studios showing little progress.",
    date: "04.24.23",
    category: "Entertainment",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 8,
    title: "New species of deep-sea creature discovered",
    description: "Marine biologists have identified a previously unknown species of bioluminescent fish living in the depths of the Pacific Ocean, shedding light on deep-sea ecosystems.",
    date: "04.25.23",
    category: "Science",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 9,
    title: "Major airline announces plans for supersonic passenger flights",
    description: "A leading airline has revealed plans to introduce supersonic passenger flights by 2029, potentially cutting long-haul travel times in half.",
    date: "04.26.23",
    category: "Travel",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 10,
    title: "Global food prices hit record high, UN warns of crisis",
    description: "The United Nations has issued a warning about rising global food prices, citing climate change and geopolitical tensions as major contributing factors.",
    date: "04.27.23",
    category: "Economy",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 11,
    title: "Artificial intelligence defeats world champion in strategy game",
    description: "An AI system has beaten the world champion in a complex strategy game, marking another milestone in the development of artificial intelligence.",
    date: "04.28.23",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 12,
    title: "Major art museum returns artifacts to country of origin",
    description: "A prominent museum has agreed to return a collection of ancient artifacts to their country of origin, fueling ongoing debates about cultural repatriation.",
    date: "04.29.23",
    category: "Culture",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 13,
    title: "New study links social media use to decreased mental health in teens",
    description: "Researchers have found a strong correlation between increased social media use and declining mental health among teenagers, calling for more awareness and regulation.",
    date: "04.30.23",
    category: "Health",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 14,
    title: "Space tourism company announces first civilian mission to Mars",
    description: "A private space exploration company has revealed plans for the first civilian mission to Mars, scheduled to take place within the next decade.",
    date: "05.01.23",
    category: "Space",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 15,
    title: "Global initiative launched to clean up ocean plastic",
    description: "A coalition of countries and organizations has announced a major effort to remove plastic waste from the world's oceans, aiming to tackle the growing environmental crisis.",
    date: "05.02.23",
    category: "Environment",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 16,
    title: "Renewable energy surpasses fossil fuels in electricity production",
    description: "For the first time, renewable energy sources have generated more electricity than fossil fuels on a global scale, marking a significant milestone in the fight against climate change.",
    date: "05.03.23",
    category: "Energy",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 17,
    title: "Major breakthrough in fusion energy announced",
    description: "Scientists have achieved a significant milestone in fusion energy research, bringing the possibility of limitless clean energy closer to reality.",
    date: "05.04.23",
    category: "Science",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 18,
    title: "Global agreement reached on digital currency regulation",
    description: "World leaders have agreed on a framework for regulating digital currencies, aiming to prevent financial crimes while fostering innovation in the sector.",
    date: "05.05.23",
    category: "Finance",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 19,
    title: "New AI-powered translation tool breaks language barriers",
    description: "A cutting-edge AI translation tool has been released, capable of providing near-instantaneous, highly accurate translations across hundreds of languages.",
    date: "05.06.23",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 20,
    title: "Historic peace agreement signed in long-standing conflict",
    description: "After decades of tension, two nations have signed a landmark peace agreement, bringing hope for stability and cooperation in the region.",
    date: "05.07.23",
    category: "Politics",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 21,
    title: "Revolutionary cancer treatment shows promising results in clinical trials",
    description: "A new immunotherapy approach has demonstrated remarkable success in treating various types of cancer, potentially changing the landscape of cancer treatment.",
    date: "05.08.23",
    category: "Health",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 22,
    title: "Major archaeological discovery sheds new light on ancient civilization",
    description: "Archaeologists have unearthed a vast ancient city, providing new insights into a previously little-known civilization and its advanced technologies.",
    date: "05.09.23",
    category: "History",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 23,
    title: "Global initiative launched to protect endangered species",
    description: "A worldwide coalition of governments and conservation groups has announced a comprehensive plan to protect critically endangered species and their habitats.",
    date: "05.10.23",
    category: "Environment",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 24,
    title: "Breakthrough in quantum encryption promises unhackable communications",
    description: "Researchers have developed a new quantum encryption method that could make digital communications completely secure from any form of hacking or interception.",
    date: "05.11.23",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  },
  {
    id: 25,
    title: "World's first 3D-printed community provides housing solution",
    description: "A pioneering project has successfully created an entire neighborhood using 3D printing technology, offering a potential solution to global housing shortages.",
    date: "05.12.23",
    category: "Innovation",
    image: "/placeholder.svg?height=200&width=300",
    url: "#"
  }
];

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(newsItems.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = newsItems.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const renderPaginationNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "ghost"}
            className="w-8 h-8 p-0"
            onClick={() => goToPage(i)}
          >
            {i}
          </Button>
        )
      }
    } else {
      pages.push(
        <Button
          key={1}
          variant={currentPage === 1 ? "default" : "ghost"}
          className="w-8 h-8 p-0"
          onClick={() => goToPage(1)}
        >
          1
        </Button>
      )

      if (currentPage > 3) {
        pages.push(
          <span key="ellipsis1" className="px-2">
            ...
          </span>
        )
      }

      const startPage = Math.max(2, currentPage - 1)
      const endPage = Math.min(totalPages - 1, currentPage + 1)

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "ghost"}
            className="w-8 h-8 p-0"
            onClick={() => goToPage(i)}
          >
            {i}
          </Button>
        )
      }

      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="ellipsis2" className="px-2">
            ...
          </span>
        )
      }

      if (currentPage !== totalPages) {
        pages.push(
          <Button
            key={totalPages}
            variant={currentPage === totalPages ? "default" : "ghost"}
            className="w-8 h-8 p-0"
            onClick={() => goToPage(totalPages)}
          >
            {totalPages}
          </Button>
        )
      }
    }

    return pages
  }

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header className="text-foreground w-full" />

      <div className="overflow-hidden bg-white py-24 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-tighter">
              News
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8">
            <div className="p-6 sm:p-8 md:p-12 flex flex-col bg-secondary">
              <div className="space-y-1 mb-4 sm:mb-6 md:mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>04.19.23</span>
                  <span>|</span>
                  <span>Newspaper</span>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6 max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Barnard College ripped for inviting &apos;antisemite&apos; to speak on campus.
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                  Barnard College is being called out for inviting a United Nations official who has likened Israeli Prime Minister... Benjamin Netanyahu to Adolf Hitler and Israel as the Nazi &quot;Third Reich&quot; to speak at the elite Manhattan school this week.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto">
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
                className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-primary border text-accent border-l-0 hover:text-primary absolute bottom-px left-px border-none"
                aria-label="Next article"
              >
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {currentItems.map((item) => (
            <article key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start border-b pb-6">
              <Image
                src={item.image}
                alt=""
                width={200}
                height={150}
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="flex-1 space-y-2">
                <Button
                  variant="link"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight p-0 h-auto text-wrap text-left text-foreground"
                  onClick={() => window.open(item.url, "_blank")}
                >
                  {item.title}
                </Button>
                <p className="text-base sm:text-lg">{item.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span>{item.date}</span>
                  <span>|</span>
                  <span>{item.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            className="w-6 h-6 sm:w-8 sm:h-8 p-0"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          {renderPaginationNumbers()}
          <Button
            variant="ghost"
            className="w-6 h-6 sm:w-8 sm:h-8 p-0"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>

      <NewsletterForm />

      <Footer />
    </div>
  )
}