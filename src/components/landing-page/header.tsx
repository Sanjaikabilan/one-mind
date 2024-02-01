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
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/dark-mode";
import { useTheme } from "next-themes";
import { y_n } from "@/lib/data/constants";

const routes = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#Projects" },
  { title: "Journey", href: "#journey" },
  { title: "Blog", href: "#blog" },
];

const useGetTheme = () => {
  const { resolvedTheme } = useTheme();
  if (resolvedTheme === "dark") {
    return LogoDark;
  } else {
    return Logo;
  }
};

const Header = () => {
  const [path, setPath] = useState("#about");
  return (
    <header className=" p-4 flex justify-center items-center">
      <Link href="/" className=" w-full justify-left items-center flex gap-2 ">
        <Image src={useGetTheme()} alt="Atom Logo" width={25} height={25} />
        <span className=" font-semibold dark:text-brand-sunglow ">
          {y_n}
        </span>
      </Link>

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <Link href="#about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#projects" legacyBehavior passHref>
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
        <Link href={"/signup"}>
          <Button variant={"default"} className={navigationMenuTriggerStyle()}>
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
