import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  return (
    <div className="w-full h-full">
      <div className="bg-primary py-24 sm:py-40 relative">
        <img src="/footer-banner.png" alt="footer-banner" className="absolute inset-0 w-full h-full object-cover mix-blend-plus-lighter z-0" />
        <div className="text-center flex flex-col gap-2 relative z-10">
          <span className="text-balance text-5xl font-semibold tracking-tight text-accent sm:text-8xl">
            BETAR
          </span>
          <span className="text-balance text-6xl tracking-tight text-accent">
            IS HERE TO LEAD
          </span>
        </div>
        <div className="mt-12 flex items-center justify-center gap-x-6 relative z-10">
          <Button
            className="bg-accent text-foreground font-bold h-12 sm:h-16 px-6 sm:px-10 py-0 text-lg sm:text-xl hover:bg-transparent hover:text-accent group hover:border"
          >
            Donate
            <ArrowRight className="!w-6 !h-6 sm:w-6 sm:h-6 ml-2 text-primary transition-transform group-hover:translate-x-2 group-hover:text-accent" />
          </Button>
        </div>
      </div>
      <div className="bg-foreground py-24 w-full h-full relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div className="text-accent flex flex-col gap-10">
              <Image src="/header-logo.svg" alt="logo" width={136} height={36} />
              <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-primary transition cursor-pointer" width="22" height="22" viewBox="0 0 40 40" fill="currentColor">
                  <mask id="mask0_1_379" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H39.067V39.0523H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1_379)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.7863 5.75326C4.4043 7.12426 3.8343 9.06826 3.6753 10.9703C3.9063 16.5343 3.3663 22.3463 3.6713 27.8813C3.9273 32.5263 6.5373 35.1173 11.1763 35.3783C16.5983 35.6823 22.2913 35.1493 27.7413 35.3823C32.1673 35.1493 35.1463 32.6533 35.4973 28.1373C35.2463 22.5293 35.8343 16.6263 35.5023 11.0523C35.2583 6.96126 32.6763 4.02626 28.5173 3.72926C22.7043 3.98226 16.6033 3.39026 10.8243 3.72426C9.0623 3.82626 7.0573 4.49326 5.7863 5.75326ZM10.8543 0.112257C16.4473 -0.218743 22.2953 0.310257 27.9143 0.0832566C33.4733 0.221257 37.9863 3.84026 38.7793 9.42226C38.9203 15.4423 39.2213 21.5903 38.9713 27.6223C38.7113 33.8873 35.1113 38.5223 28.6043 38.9333C22.6743 39.3073 16.3653 38.6553 10.3963 38.9333C4.7633 38.5193 0.468301 34.3503 0.116301 28.6623C-0.253699 22.6993 0.403301 16.3603 0.116301 10.3583C0.629301 4.22926 4.7853 0.471257 10.8543 0.112257Z" />
                  </g>
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.1787 13.0333C14.3727 13.2903 11.5457 18.5963 14.0107 22.7453C16.5137 26.9603 22.7167 26.8773 25.1077 22.6033C27.5667 18.2093 24.1947 12.7653 19.1787 13.0333ZM18.4857 9.47728C26.7457 8.74628 32.4727 17.7103 27.9907 24.7923C24.1777 30.8173 15.4467 31.0933 11.3217 25.2603C6.9317 19.0533 10.9107 10.1483 18.4857 9.47728Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M29.4928 6.95801C32.9528 6.40501 33.1208 11.858 29.5678 11.436C27.0948 11.142 27.0498 7.34801 29.4928 6.95801Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:text-primary transition cursor-pointer"
                  width="22"
                  height="22"
                  viewBox="0 0 22 39"
                  fill="currentColor"
                >
                  <mask id="mask0_1_371" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="40">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0H21.0554V39.003H0V0Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1_371)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.5364 39.003C6.3774 38.938 5.9274 38.589 5.9274 38.432V22.029H0.637397C0.475397 22.029 0.029397 21.613 0.063397 21.386C0.223397 19.257 -0.137603 16.849 0.061397 14.755C0.091397 14.442 0.389397 14.037 0.713397 14.037H5.9274C5.9724 10.228 5.4044 6.45803 7.9084 3.26903C11.0064 -0.675971 15.7984 0.0720289 20.2754 0.0320289C20.5794 0.0670289 20.9004 0.201029 21.0314 0.491029L21.0554 7.05403C20.9264 7.35903 20.6834 7.53003 20.3534 7.56903C18.9094 7.74103 15.6624 7.12203 14.6474 8.25703C14.4324 8.49703 14.1484 9.20103 14.1484 9.50803V14.037H20.1994C20.5294 14.037 20.8204 14.515 20.8494 14.833C21.0384 16.886 20.7004 19.224 20.8484 21.308C20.8814 21.564 20.4914 22.029 20.2754 22.029H14.1484V38.28C14.1484 38.564 13.7694 38.875 13.5394 39.003H6.5364Z"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:text-primary transition cursor-pointer"
                  width="22"
                  height="22"
                  viewBox="0 0 41 39"
                  fill="currentColor"
                >
                  <mask id="mask0_1_374" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="39">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0H40.9557V38.3527H0V0Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1_374)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M35.6317 35.7598L10.8537 2.59276H5.46069C5.44169 2.86176 5.67769 3.04976 5.8187 3.25876C7.88669 6.31276 10.4167 9.42076 12.6427 12.4058C18.4697 20.2178 24.2927 28.0378 30.2387 35.7598H35.6317ZM12.2867 -0.000244141L22.5987 13.7848L35.3587 -0.000244141H39.0447L24.3197 16.0138L40.9557 38.3528H28.6687L17.4077 23.3378L3.76369 38.2268L-0.000305176 38.3528V38.2168L15.8167 21.1108L0.136695 -0.000244141H12.2867Z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="text-accent">
              <ul>
                <li className="text-left">
                  <Button variant="link" className="text-accent text-base" asChild>
                    <Link href="#">FAQ</Link>
                  </Button>
                </li>
                <li className="text-left">
                  <Button variant="link" className="text-accent text-base" asChild>
                    <Link href="#">Careers</Link>
                  </Button>
                </li>
                <li className="text-left">
                  <Button variant="link" className="text-accent text-base" asChild>
                    <Link href="#">Join Us</Link>
                  </Button>
                </li>
              </ul>
            </div>
            <div className="text-accent text-left">
              <Label>Stay in Touch</Label>
              <div className="mt-1 mb-2 flex">
                <Input
                  className='w-full rounded-none border-r-0 text-accent shadow-none placeholder:text-accent focus-visible:ring-accent'
                  placeholder='E-mail adress'
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 shrink-0 bg-primary border border-l-0 hover:text-primary"
                >
                  <ChevronRight className="!w-6 !h-6" />
                </Button>
              </div>
              <span>
                Join our mailing list to get the latest news, events & updates
              </span>
            </div>
            <div className="text-accent">
              <ul>
                <li className="text-left">
                  <Button variant="link" className="text-accent text-base" asChild>
                    <Link href="#">info@betarus.org</Link>
                  </Button>
                </li>
                <li className="text-left">
                  <Button variant="link" className="text-accent text-base" asChild>
                    <Link href="#">Legal Policies</Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
