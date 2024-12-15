import { NewsProvider } from "./context/news.context";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <NewsProvider>
      {children}
    </NewsProvider>
  )
}