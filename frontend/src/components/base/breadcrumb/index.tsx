"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export default function AppBreadcrumb() {
  const pathname: string = usePathname();
  const segments: string[] = pathname
    .split("/")
    .filter((segment) => segment !== "");
  const isStart: boolean = segments.length > 0;

  const breadcrumbs = segments.map((segment: string, index: number) => {
    const href: string = "/" + segments.slice(0, index + 1).join("/");
    const label: string = decodeURIComponent(segment).replace(/-/g, " ");
    const isLast: boolean = index < segments.length - 1;

    return (
      <Fragment key={href}>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href={href}
              className={`first-letter:capitalize ${index === segments.length - 1 ? "text-slate-700" : "text-muted-foreground hover:text-slate-700"}`}
            >
              {label}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {isLast && <BreadcrumbSeparator />}
      </Fragment>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-slate-700"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {isStart && <BreadcrumbSeparator />}
        {breadcrumbs && breadcrumbs}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
