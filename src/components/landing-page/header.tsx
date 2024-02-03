"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useState } from "react";
import Logo from "@/../public/atom_logo.svg";
import LogoDark from "@/../public/atom_logo_dark.svg";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/dark-mode";
import { useTheme } from "next-themes";
import { y_n } from "@/lib/data/constants";
import { short_y_n  } from "@/lib/data/constants";

const routes = [
  { title: "About", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Journey", href: "#journey" },
  { title: "Blog", href: "#blog" },
];

const useGetTheme = () => {
  const { resolvedTheme } = useTheme();
  if (resolvedTheme === "light") {
    return Logo;
  } else {
    return LogoDark;
  }
};

const SHEET_SIDES = ["left"] as const;

const Header = () => {
  const [path, setPath] = useState("/");
  return (
    <header className=" p-4 flex justify-center items-center">
      <a className=" mr-2 md:hidden">
        <div className="">
          {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <svg
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M3 5H11"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3 12H16"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3 19H21"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>{y_n}</SheetTitle>
                  <SheetDescription>
                      Welcome Explore, Play Around, Get Connected
                  </SheetDescription>
                </SheetHeader>
                <div>
                  <Button variant={"btn-sidebar"}>
                    <Link className="" href="/" legacyBehavior passHref>
                      About
                    </Link>
                  </Button>
                </div>

                <div>
                  <Button variant={"btn-sidebar"}>
                    <Link className="" href="/projects" legacyBehavior passHref>
                      Projects
                    </Link>
                  </Button>
                </div>
                <div>
                  <Button variant={"btn-sidebar"}>
                    <Link className="" href="/blog" legacyBehavior passHref>
                      Blog
                    </Link>
                  </Button>
                </div>
                <div>
                  <Button variant={"btn-sidebar"}>
                    <Link className="" href="/journey" legacyBehavior passHref>
                      Journey
                    </Link>
                  </Button>
                </div>

                <SheetFooter>
                  <Button className=" mt-3 bg-brand-sunglow hover:bg-white ">
                    <Link className="" href="/contact" legacyBehavior passHref>
                      Get in Touch
                    </Link>
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </a>

      <Link href="/" className=" w-full justify-left items-center flex gap-2 ">
        <Image src={useGetTheme()} alt="Atom Logo" width={25} height={25} />
        <span className=" hidden sm:block font-semibold dark:text-brand-sunglow ">{y_n} .</span>
        <span className=" sm:hidden font-semibold dark:text-brand-sunglow ">{short_y_n}.</span>
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/journey" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Journey
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <aside className=" flex w-full gap-2 justify-end ">
        <Link href={"/contact"}>
          <Button variant={"default"} className=" bg-transparent border-spacing-2 border border-brand-sunglow dark:text-brand-sunglow hover:dark:text-accent hover:bg-brand-sunglow">
            Get In Touch
          </Button>
        </Link>
        <ModeToggle />
      </aside>
    </header>
  );
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 font-medium leading-none"
          )}
          {...props}
        >
          <div className="text-white text-sm font-medium leading-none ">
            {title}
          </div>
          <p className=" group-hover:text-white/70 line-clamp-2 text-sm leading-snug text-white/40 ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
