import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { icon: Facebook, label: "Facebook", href: "www.facebook.com" },
  { icon: Twitter, label: "Twitter", href: "www.x.com" },
  { icon: Instagram, label: "Instagram", href: "www.instagram.com" },
];

const FooterLinkSection = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h2 className="mb-2 text-sm font-semibold text-slate-900 capitalize">
      {title}
    </h2>
    <ul className="text-sm text-slate-400 font-medium">
      {links.map((link) => (
        <li key={link.label} className="mb-2 last:mb-0">
          <NavigationMenuLink asChild>
            <Link href={link.href} className="hover:underline">
              {link.label}
            </Link>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{ fontFamily: '"Geist", sans-serif' }}
      className="bg-slate-50 dark:bg-slate-900"
    >
      <div className="mx-auto w-full px-8 py-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                width={1920}
                height={1080}
                alt="Eventura"
                className="size-8 me-3"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Eventura
              </span>
            </Link>
          </div>

          <NavigationMenu>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6">
              <FooterLinkSection
                title="Events"
                links={[
                  { label: "Global", href: "#" },
                  { label: "Local", href: "#" },
                  { label: "Special", href: "#" },
                ]}
              />
              <FooterLinkSection
                title="Support"
                links={[
                  { label: "FAQ", href: "#" },
                  { label: "Contact", href: "#" },
                  { label: "Report an issue", href: "#" },
                ]}
              />
              <FooterLinkSection
                title="Legal"
                links={[
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms & Conditions", href: "#" },
                ]}
              />
            </div>
          </NavigationMenu>
        </div>

        <hr className="my-6 border-slate-200 sm:mx-auto dark:border-slate-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-slate-400 sm:text-center">
            © {currentYear}&nbsp;
            <Link href="/" className="hover:underline">
              Eventura™
            </Link>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:mt-0 sm:justify-center">
            {navLinks.map(({ icon: Icon, label, href }) => (
              <Link key={label} href={href} className="text-slate-400 ms-5">
                <Icon className="size-5 text-slate-400 hover:text-slate-900" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
