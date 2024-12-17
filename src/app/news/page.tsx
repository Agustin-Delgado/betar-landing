'use client'

import Image from "next/legacy/image";
import Header from "../../components/header";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import NewsletterForm from "../../components/newsletter-form";
import Footer from "../../components/footer";
import { useNews } from "../admin/context/news.context";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

export default function NewsPage() {
  const router = useRouter()

  const { news, loading } = useNews()

  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 10
  const totalPages = Math.ceil(news.length / itemsPerPage)
  const heroNews = news.find((item) => item.is_hero)

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
              {loading ? (
                <div className="space-y-4 flex flex-col gap-4">
                  <Skeleton className="h-4 w-1/2" />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="space-y-1 mb-4 sm:mb-6 md:mb-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{heroNews?.date && format(heroNews.date, "MM.dd.yy")}</span>
                      <span>|</span>
                      <span>{heroNews?.newspaper}</span>
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-6 max-w-xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                      {heroNews?.title}
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      {heroNews?.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto">
              {loading ? (
                <Skeleton className="h-full w-full" />
              ) : (
                <Image
                  src={heroNews!.image_url}
                  alt={heroNews?.title}
                  className="object-cover border"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  layout="fill"
                  unoptimized
                />
              )}
              {!loading && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(heroNews?.article_url, "_blank")}
                  className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-primary border text-accent border-l-0 hover:text-primary absolute bottom-px left-px border-none"
                >
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start border-b pb-6">
                <Skeleton className="h-40 w-48 rounded-lg" />
                <div className="flex flex-col gap-4 w-full h-full">
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
            ))
            : news.map((item) => (
              <article key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start border-b pb-6">
                <Image
                  src={item.image_url}
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
                    onClick={() => {
                      if (item.content && item.content.length) {
                        router.push(`/news/${item.id}`)
                      } else {
                        window.open(item.article_url, "_blank")
                      }
                    }}
                  >
                    {item.title}
                  </Button>
                  <p className="text-base sm:text-lg">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span>{format(item.date, "MM.dd.yy")}</span>
                    <span>|</span>
                    <span>{item.newspaper}</span>
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