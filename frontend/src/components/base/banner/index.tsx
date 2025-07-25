"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, DotIcon, XIcon } from "lucide-react";

export default function Banner() {
  const [visible, setVisible] = useState<boolean>(true);
  if (!visible) return null;

  return (
    <div
      style={{ fontFamily: '"Geist", sans-serif' }}
      className="relative isolate flex items-center gap-x-6 overflow-hidden bg-slate-100 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 max-sm:flex-col max-sm:items-start max-sm:pb-10"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-577/310 w-144.25 bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-577/310 w-144.25 bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 max-sm:flex-col max-sm:items-start">
        <p className="text-sm/6 text-slate-900 max-sm:flex max-sm:flex-col max-sm:text-base/6">
          <span className="font-semibold">Eventura 2025</span>
          <DotIcon
            aria-hidden={"true"}
            className={
              "size-4 text-slate-900 cursor-pointer mx-2 inline max-sm:hidden"
            }
          />
          Join us in Denver from August 7 – 9 to see what’s coming next.
        </p>
        <Link
          href={"/auth/register"}
          className={
            "flex justify-center items-center flex-none rounded-full bg-slate-900 px-3.5 py-1.5 text-sm font-semibold text-slate-200 shadow-xs hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          }
        >
          Register now
          <ArrowRight aria-hidden={"true"} className={"size-4 ml-1"} />
        </Link>
      </div>

      <div className="flex flex-1 justify-end">
        <Button
          onClick={() => setVisible(false)}
          type={"button"}
          variant={"ghost"}
          className={"-m-3 p-3 focus-visible:-outline-offset-4 cursor-pointer"}
        >
          <span className="bg-red-600 text-slate-200 font-semibold rounded-full sr-only max-sm:not-sr-only max-sm:px-3.5 max-sm:py-1.5 max-sm:mt-8">
            Dismiss
          </span>
          <XIcon
            aria-hidden={"true"}
            className={"size-5 text-slate-900 cursor-pointer max-sm:hidden"}
          />
        </Button>
      </div>
    </div>
  );
}
