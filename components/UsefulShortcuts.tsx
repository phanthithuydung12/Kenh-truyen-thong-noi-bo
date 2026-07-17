"use client";

import Link from "next/link";

interface Shortcut {
  icon: string;
  label: string;
  href: string;
}

const shortcuts: Shortcut[] = [
  { icon: "description", label: "Biểu mẫu", href: "#" },
  { icon: "contact_page", label: "Danh bạ", href: "#" },
  { icon: "event_available", label: "Đặt phòng", href: "#" },
  { icon: "help", label: "Hỗ trợ IT", href: "#" },
];

export function UsefulShortcuts() {
  return (
    <section>
      <div className="mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 text-xl font-extrabold">
          <span className="h-5 w-1.5 bg-primary rounded-full"></span>
          Tiện ích nhanh
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {shortcuts.map((shortcut, index) => (
          <Link
            key={index}
            href={shortcut.href}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:bg-primary/5 hover:border-primary/30 transition-all"
          >
            <span className="material-symbols-outlined text-primary mb-2">{shortcut.icon}</span>
            <span className="text-xs font-semibold">{shortcut.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
