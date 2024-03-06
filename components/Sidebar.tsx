"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { routes } from "@/constants";
import FreeCounter from "./FreeCounter";
import { FreeCounterProps } from "@/typings";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

function Sidebar({ apiLimitCount = 0, isPro = false }: FreeCounterProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-4 py-4 h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative mr-4">
            <Image src="/logo.png" alt="Logo" height={54} width={54} />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Brain
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
}

export default Sidebar;
