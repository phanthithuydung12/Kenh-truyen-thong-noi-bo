"use client";

import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./SearchInput";

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Truyền thông Vietbank", href: "/", active: true },
  { label: "Người Vietbank", href: "/nguoi-vietbank" },
  { label: "Hoạt động cộng đồng", href: "#" },
  { label: "Thi đua nội bộ", href: "#" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-primary/10 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Top Row: Logo, Search, Notifications */}
        <div className="flex items-center justify-between py-6 gap-8">
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-primary flex size-10 items-center justify-center rounded-lg bg-primary/10 lg:hidden">
              <span className="material-symbols-outlined">menu</span>
            </div>
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="Vietbank Logo" 
                width={40} 
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Search Bar - Fixed Position Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl relative items-center">
            <SearchInput />
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button className="relative flex size-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-700">
              <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">account_circle</span>
              </div>
              <span className="text-sm font-semibold">Nguyễn Văn A</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Desktop Full */}
        <div className="flex items-center justify-between">
          <div className="flex overflow-x-auto hide-scrollbar space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex flex-col items-center justify-center border-b-2 py-3 whitespace-nowrap ${
                  link.active
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-500 dark:text-slate-400 hover:text-primary"
                } transition-colors`}
              >
                <span className={`text-sm ${link.active ? "font-bold" : "font-semibold"}`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
