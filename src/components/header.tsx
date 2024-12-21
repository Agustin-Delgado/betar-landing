'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DonationButton from "./donation-button";

const nav_items = [
  {
    label: "About",
    href: "/about",
    submenu: [
      { label: "Our Mission", href: "/about/mission" },
      { label: "What We Do", href: "/about/what-we-do" },
      { label: "Our History", href: "/about/history" },
    ]
  },
  { label: "Ideology", href: "/about/ideology" },
  { label: "Join", href: "/join" },
  { label: "In The News", href: "/news" },
];

export default function Header({
  className,
}: {
  className?: string
}) {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true)
  const [donationData, setDonationData] = useState({
    title: '',
    amountRaised: '',
    goal: 0,
    donations: '',
    donationUrl: ''
  })
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    setIsScrolled(window.scrollY > 10);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    (async () => {
      await fetch('/api/fund-data', {
        method: 'GET',
        cache: 'no-store'
      })
        .then(res => res.json())
        .then(data => {
          setDonationData(data)
          setLoading(false)
        })
    })()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-16 sm:h-20 md:h-[76px] transition-colors',
        isScrolled ? 'bg-background w-full border-b' : 'bg-transparent text-background',
        mobileMenuOpen && 'text-foreground bg-background',
        className
      )}
    >
      <div
        className={cn(
          'h-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-colors max-w-7xl',
          !isScrolled && "border-b",
        )}
      >
        <Link href="/" className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="136" height="36" viewBox="0 0 136 36" fill="none"> <path fillRule="evenodd" clipRule="evenodd" d="M62.7953 26.9595C63.1323 26.9595 63.4283 27.0665 63.6813 27.2805C63.9283 27.4825 64.0523 27.7355 64.0523 28.0405C64.0583 28.5535 64.0743 29.8815 64.1013 32.0245C64.0943 33.6485 64.0783 34.9735 64.0523 35.9985H61.0813V29.4335C61.0873 28.9405 60.8703 28.6935 60.4283 28.6935C59.9223 28.6935 59.1423 28.7065 58.0903 28.7325C57.2203 28.7325 56.4413 28.7195 55.7523 28.6935L55.5383 26.9595H62.7953Z" fill="currentColor" /> <path fillRule="evenodd" clipRule="evenodd" d="M69.8412 28.392C69.8732 27.782 69.9032 27.431 69.9292 27.34C69.9932 27.087 70.1332 26.96 70.3472 26.96H72.0822C72.3212 26.96 72.4742 27.087 72.5392 27.34C72.5652 27.431 72.5852 27.782 72.5982 28.392V30.272H69.8412V28.392ZM65.9352 28.392C65.9612 27.782 65.9872 27.431 66.0132 27.34C66.0782 27.087 66.2172 26.96 66.4322 26.96H68.1662C68.4062 26.96 68.5582 27.087 68.6232 27.34C68.6492 27.418 68.6622 27.769 68.6622 28.392V30.272H65.9352V28.392Z" fill="currentColor" /> <path fillRule="evenodd" clipRule="evenodd" d="M74.4756 34.3235H75.9076V28.7325L74.6906 28.6935L74.4756 26.9595H83.0376C83.6876 27.0825 84.0116 27.4755 84.0116 28.1385V35.9985H81.0406V29.3945C81.0346 28.9275 80.8466 28.6935 80.4766 28.6935H78.7036V35.9985H74.4756V34.3235Z" fill="currentColor" /> <path fillRule="evenodd" clipRule="evenodd" d="M86.1813 26.9595H89.0543V30.4565C89.0293 31.5665 88.9893 32.2165 88.9383 32.4045C88.8083 32.8725 88.5283 33.1065 88.1003 33.1065H86.1813V26.9595Z" fill="currentColor" /> <path fillRule="evenodd" clipRule="evenodd" d="M90.6418 34.3235H96.2618V29.3945C96.2618 28.9275 96.0778 28.6935 95.7068 28.6935H90.8558L90.6418 26.9595H98.2588C98.9148 27.0825 99.2428 27.4755 99.2428 28.1385C99.2428 28.5665 99.2298 30.6285 99.2038 34.3235H100.88V35.9985H90.6418V34.3235Z" fill="currentColor" /> <g mask="url(#mask0_1_494)"> <path fillRule="evenodd" clipRule="evenodd" d="M22.4691 2.254C22.4691 1.625 23.5151 0 23.5151 0C23.5151 0 24.5611 1.625 24.5611 2.254C24.5611 2.88 24.0921 3.389 23.5151 3.389C22.9351 3.389 22.4691 2.88 22.4691 2.254" fill="currentColor" /> </g> <g mask="url(#mask1_1_494)"> <path fillRule="evenodd" clipRule="evenodd" d="M30.0439 2.254C30.0439 1.625 31.0899 0 31.0899 0C31.0899 0 32.1359 1.625 32.1359 2.254C32.1359 2.88 31.6669 3.389 31.0899 3.389C30.5099 3.389 30.0439 2.88 30.0439 2.254" fill="currentColor" /> </g> <g mask="url(#mask2_1_494)"> <path fillRule="evenodd" clipRule="evenodd" d="M36.8758 2.254C36.8758 1.625 37.9218 0 37.9218 0C37.9218 0 38.9678 1.625 38.9678 2.254C38.9678 2.88 38.4988 3.389 37.9218 3.389C37.3418 3.389 36.8758 2.88 36.8758 2.254" fill="currentColor" /> </g> <g mask="url(#mask3_1_494)"> <path fillRule="evenodd" clipRule="evenodd" d="M43.7005 2.254C43.7005 1.625 44.7465 0 44.7465 0C44.7465 0 45.7925 1.625 45.7925 2.254C45.7925 2.88 45.3235 3.389 44.7465 3.389C44.1665 3.389 43.7005 2.88 43.7005 2.254" fill="currentColor" /> </g> <g mask="url(#mask4_1_494)"> <path fillRule="evenodd" clipRule="evenodd" d="M14.8486 2.254C14.8486 1.625 15.8946 0 15.8946 0C15.8946 0 16.9406 1.625 16.9406 2.254C16.9406 2.88 16.4716 3.389 15.8946 3.389C15.3146 3.389 14.8486 2.88 14.8486 2.254" fill="currentColor" /> </g> <g mask="url(#mask5_1_494)"> <path fillRule="evenodd" clipRule="evenodd" d="M8.03091 2.254C8.03091 1.625 9.07691 0 9.07691 0C9.07691 0 10.1229 1.625 10.1229 2.254C10.1229 2.88 9.65391 3.389 9.07691 3.389C8.49691 3.389 8.03091 2.88 8.03091 2.254" fill="currentColor" /> </g> <g mask="url(#mask6_1_494)"> <path fillRule="evenodd" clipRule="evenodd" d="M1.237 2.254C1.237 1.625 2.283 0 2.283 0C2.283 0 3.329 1.625 3.329 2.254C3.329 2.88 2.86 3.389 2.283 3.389C1.703 3.389 1.237 2.88 1.237 2.254" fill="currentColor" /> </g> <g mask="url(#mask7_1_494)"> <path fillRule="evenodd" clipRule="evenodd" d="M23.515 4.33547H25.783V6.37047H25.167V11.8815C27.574 11.1725 29.355 8.99047 29.415 6.37047H28.866V4.33547H33.403V6.37047H32.722C32.721 6.37047 32.721 6.37247 32.721 6.37247C32.654 10.8305 29.418 14.5165 25.167 15.2935V17.5865C30.972 16.8345 35.571 12.1955 36.251 6.36947H35.673V4.33447H40.232V6.36947H39.581C38.875 14.0275 32.803 20.1545 25.167 20.9355V23.2255C34.352 22.4585 41.772 15.3935 43.07 6.36947H42.464V4.33447H47.03V6.36947H46.414C45.081 17.2215 36.179 25.7505 25.168 26.5385V29.2305V32.7045H35.673V35.9995H23.515H11.357V32.7045H21.862V29.2305V26.5385C10.851 25.7505 1.949 17.2215 0.616 6.36947H0V4.33447H4.566V6.36947H3.96C5.258 15.3935 12.678 22.4585 21.863 23.2255V20.9355C14.227 20.1545 8.155 14.0275 7.449 6.36947H6.798V4.33447H11.357V6.36947H10.779C11.459 12.1955 16.058 16.8345 21.863 17.5865V15.2935C17.612 14.5165 14.376 10.8305 14.309 6.37247C14.309 6.37247 14.309 6.37047 14.308 6.37047H13.627V4.33547H18.164V6.37047H17.615C17.675 8.99047 19.456 11.1725 21.863 11.8815V6.37047H21.247V4.33547H23.515Z" fill="currentColor" /> </g> <path fillRule="evenodd" clipRule="evenodd" d="M59.9837 14.2186V18.1686H63.8497C65.4477 18.1686 66.1747 17.3846 66.1747 16.1796C66.1747 14.8906 65.6157 14.2186 63.7387 14.2186H59.9837ZM59.9837 7.41059V11.4736H63.2067C64.7747 11.4736 65.6427 10.9126 65.6427 9.37159C65.6427 8.02759 64.9997 7.41059 63.3177 7.41059H59.9837ZM55.9497 4.32959H63.2907C67.6037 4.32959 69.4817 5.70159 69.4817 8.61559C69.4817 10.8286 68.2207 12.0616 65.9517 12.5656V12.8176C69.0337 13.1256 70.1817 14.1626 70.1817 16.5436C70.1817 19.2896 68.4167 21.1386 63.9907 21.1386H55.9497V4.32959Z" fill="currentColor" /> <path fillRule="evenodd" clipRule="evenodd" d="M73.2064 4.3291H85.9254V7.8311H77.2684V11.0811H85.2254V14.2181H77.2684V17.6361H85.8964V21.1381H73.2064V4.3291Z" fill="currentColor" /> <path fillRule="evenodd" clipRule="evenodd" d="M88.2572 4.3291H101.985V8.0271H97.1382V21.1381H93.1042V8.0271H88.2572V4.3291Z" fill="currentColor" /> <path fillRule="evenodd" clipRule="evenodd" d="M107.582 14.4706H112.232L111.589 12.3976C111.112 10.8846 110.664 9.31559 110.271 7.80259H109.6C109.18 9.31559 108.703 10.8846 108.227 12.3976L107.582 14.4706ZM113.157 17.4126H106.658L105.509 21.1386H101.335L107.218 4.32959H112.766L118.62 21.1386H114.306L113.157 17.4126Z" fill="currentColor" /> <path fillRule="evenodd" clipRule="evenodd" d="M124.867 7.7191V12.2011H127.893C129.854 12.2011 130.694 11.5011 130.694 9.9321C130.694 8.3631 129.91 7.7191 127.893 7.7191H124.867ZM127.417 15.3391H124.867V21.1381H120.805V4.3291H128.174C132.487 4.3291 134.701 6.1501 134.701 9.7921C134.701 12.3701 133.496 14.0501 131.367 14.8351L135.681 20.8301V21.1381H130.974L127.417 15.3391Z" fill="currentColor" /> </svg>
        </Link>
        <nav className="hidden md:flex gap-12 h-full items-center">
          {nav_items.map((item, index) => (
            <div key={index} className="relative group h-full flex items-center">
              <Button
                variant="link"
                className={cn(
                  "text-inherit !text-sm !font-bold h-[inherit] relative hover:no-underline px-0 flex items-center gap-1"
                )}
                asChild
              >
                <Link href={item.href} className="relative group">
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                  {pathname === item.href && <span className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-primary" />}
                </Link>
              </Button>
              {item.submenu && (
                <div className="absolute text-foreground top-full left-0 bg-background border shadow-lg rounded-none py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.submenu.map((subItem, subIndex) => (
                    <Button
                      key={subIndex}
                      variant="ghost"
                      className="w-full justify-start text-sm font-semibold"
                      asChild
                    >
                      <Link href={subItem.href}>{subItem.label}</Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden md:block">
          {loading ? <Button
            className="hidden md:inline-flex h-10 md:h-[47px] border border-primary px-4 md:px-6 text-sm lg:text-base hover:bg-background hover:text-primary hover:border-primary"
            onClick={() => window.open('https://www.gofundme.com/f/betar-fund')}
          >
            Donate
          </Button> : (
            <DonationButton
              {...donationData}
            />
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4">
              {nav_items.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      className="justify-start text-inherit py-2 !text-sm !font-bold"
                      asChild
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                    {item.submenu && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 w-7 h-7"
                        onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            openSubmenu === item.label ? "rotate-180" : ""
                          )}
                        />
                      </Button>
                    )}
                  </div>
                  {item.submenu && openSubmenu === item.label && (
                    <div className="pl-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <Button
                          key={subIndex}
                          variant="ghost"
                          className="justify-start text-inherit py-2 !text-xs !font-semibold w-full"
                          asChild
                        >
                          <Link href={subItem.href}>{subItem.label}</Link>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-2 w-full">
                {loading ? (
                  <Button
                    className="h-10 border border-primary px-4 text-sm hover:bg-background hover:text-primary hover:border-primary"
                    onClick={() => window.open('https://www.gofundme.com/f/betar-fund')}
                  >
                    Donate
                  </Button>
                ) : (
                  <DonationButton {...donationData} />
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

