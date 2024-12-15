import { NewsProvider } from "../admin/context/news.context";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <NewsProvider>
      {children}
    </NewsProvider>
  )
}