"use client";

import Link from "next/link";

interface NavItem {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
  filled?: boolean;
}

const navItems: NavItem[] = [
  { icon: "home", label: "Trang chủ", href: "#", active: true, filled: true },
  { icon: "newspaper", label: "Tin tức", href: "#" },
  { icon: "groups", label: "Người Vietbank", href: "#" },
  { icon: "grid_view", label: "Tiện ích", href: "#" },
  { icon: "account_circle", label: "Cá nhân", href: "#" },
];

export function MobileBottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2 pb-6 pt-2">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`flex flex-col items-center gap-1 ${
            item.active ? "text-primary" : "text-slate-500 dark:text-slate-400"
          }`}
        >
          <span className={`material-symbols-outlined ${item.filled ? "fill-1" : ""}`}>
            {item.icon}
          </span>
          <span className={`text-[10px] ${item.active ? "font-bold" : "font-medium"}`}>
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
