"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ArrowRightToLine, Menu, X } from "lucide-react";
import { useAuthStore } from "@/store/auth";

const events: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Global",
    href: "/events/global",
    description:
      "International events involving participants from multiple countries.",
  },
  {
    title: "Local",
    href: "/events/local",
    description:
      "Community-focused events aimed at local audiences and neighborhoods.",
  },
  {
    title: "Special",
    href: "/events/special",
    description:
      "Unique or themed events that highlight specific occasions or interests.",
  },
];

const navLinks = [
  { label: "Event Organizers", href: "/events/organizers" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const isLogged = useAuthStore((state) => state.isLogged);

  return (
    <header style={{ fontFamily: '"Geist", sans-serif' }}>
      <div className="mx-auto flex max-w-dvw items-center justify-between py-4 px-8">
        <Link className={"flex flex-row"} href="/" aria-label="Eventura logo">
          <Image
            src="/logo.png"
            alt="Eventura"
            className="size-8"
            width={1920}
            height={1080}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap pl-2">
            Eventura
          </span>
        </Link>

        <Button
          className="lg:hidden bg-slate-900"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-slate-200" />
          ) : (
            <Menu className="h-6 w-6 text-slate-200" />
          )}
        </Button>

        <NavigationMenu className="hidden lg:flex items-center gap-8">
          <NavigationMenuList className="flex flex-row flex-wrap list-none">
            <EventsMenu />
            {navLinks.map(({ label, href }) => (
              <NavigationMenuItem className="px-2" key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className="text-sm/6 font-semibold text-slate-700"
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>

          <NavigationMenuItem className="flex list-none">
            <NavigationMenuLink asChild>
              <Link
                href={isLogged ? "/account" : "/auth/login"}
                className="text-sm/6 font-semibold text-slate-700"
              >
                {isLogged ? "My Account" : "Sign in"}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenu>
      </div>

      {isMobileMenuOpen && <MobileMenu isLogged={isLogged} />}
    </header>
  );
}

function EventsMenu() {
  return (
    <NavigationMenuItem className="px-2">
      <NavigationMenuTrigger>Events</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-md flex flex-col gap-2">
          {events.map((event) => (
            <ListItem
              key={event.title}
              title={event.title}
              href={event.href}
              description={event.description}
            />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function MobileMenu({ isLogged }: { isLogged: boolean }) {
  return (
    <NavigationMenu className="lg:hidden px-6 space-y-4">
      <div>
        <details>
          <summary className="cursor-pointer text-slate-700 font-semibold">
            Events
          </summary>
          <NavigationMenuList className="flex flex-col items-start mt-2 space-y-2">
            {events.map((event) => (
              <li key={event.title}>
                <NavigationMenuLink asChild>
                  <Link
                    href={event.href}
                    className="px-4 py-1 text-sm font-medium text-slate-700 border hover:underline"
                  >
                    <h6 className="flex items-center">
                      <ArrowRightToLine className="size-4 text-slate-700 mr-2" />
                      {event.title}
                    </h6>
                    <p className="text-sm text-slate-400">
                      {event.description}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </NavigationMenuList>
        </details>

        <NavigationMenuList className="flex flex-col items-start">
          {navLinks.map(({ label, href }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild>
                <Link
                  href={href}
                  className="text-sm font-medium text-slate-700"
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href={isLogged ? "/account" : "/auth/login"}
                className="text-sm font-medium text-slate-700"
              >
                {isLogged ? "My Account" : "Sign in"}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}

function ListItem({
  description,
  title,
  href,
  ...props
}: ComponentPropsWithoutRef<"li"> & {
  description: string;
  title: string;
  href: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        asChild
        className={"w-full h-full bg-slate-50 rounded-lg shadow p-4"}
      >
        <Link href={href}>
          <h6 className="text-sm text-slate-700 font-medium leading-none mb-2">
            {title}
          </h6>
          <p className="text-slate-400 text-sm font-normal">{description}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
