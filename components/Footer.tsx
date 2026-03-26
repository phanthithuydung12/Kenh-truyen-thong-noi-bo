"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Về chúng tôi", href: "#" },
  { label: "Điều khoản", href: "#" },
  { label: "Liên hệ", href: "#" },
  { label: "Hỗ trợ", href: "#" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-16">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Vietbank Logo" 
              width={32} 
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-xs text-slate-500">
            © 2024 Ngân hàng Thương mại Cổ phần Việt Nam Thương Tín
          </p>
        </div>
        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-slate-500 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
