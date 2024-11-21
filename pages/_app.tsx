import "@/styles/globals.css";
import Footer from "@/components/ui/footer";
import type { AppProps } from "next/app";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import NextTopLoader from 'nextjs-toploader';

export default function App({ Component, pageProps }: AppProps) {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
 
    {
      title: "Competitions",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/competitions",
    },
    {
      title: "Events",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/events",
    },
    {
      title: "Projects",
      icon: (
        // <img
        //   src="https://assets.aceternity.com/logo-dark.png"
        //   width={20}
        //   height={20}
        //   alt="Aceternity Logo"
        // />
        <></>
      ),
      href: "/projects",
    },
    {
      title: "Team",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/team",
    },
 
    {
      title: "Services",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/services",
    },
    {
      title: "Member Login",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/member/login",
    },
  ];
  return (
    <>
    <NextTopLoader color="#0066ff" showSpinner={false}   showAtBottom={false}
 />
    <div className="flex fixed items-center justify-center bottom-1 w-full z-50 ">
      <FloatingDock
        
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
