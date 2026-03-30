"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { SearchInput } from "./SearchInput";
import { Eye, Heart } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  onNotificationClick?: () => void;
}

const navLinks: NavLink[] = [
  { label: "Truyền thông Vietbank", href: "/communication" },
  { label: "Người Vietbank", href: "/nguoi-vietbank" },
  { label: "Hoạt động cộng đồng", href: "/community" },
  { label: "Thi đua nội bộ", href: "/competition" },
];

const notifications = [
  {
    id: 1,
    category: "Lãnh đạo",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Thông điệp Tổng Giám đốc nhân dịp kỷ niệm 20 năm thành lập",
    time: "5 phút trước",
    liked: false,
  },
  {
    id: 2,
    category: "Sự kiện",
    categoryColor: "bg-yellow-100 text-yellow-700",
    title: "Kết quả cuộc thi 'Ý tưởng sáng tạo Vietbank 2026' đã được công bố",
    time: "1 giờ trước",
    liked: false,
  },
  {
    id: 3,
    category: "Bản tin",
    categoryColor: "bg-green-100 text-green-700",
    title: "Bản tin nội bộ tháng 3/2026 - Khối Kinh doanh Bán lẻ",
    time: "3 giờ trước",
    liked: false,
  },
  {
    id: 4,
    category: "Sự kiện",
    categoryColor: "bg-yellow-100 text-yellow-700",
    title: "Hội nghị Ban điều hành Q1/2026 – Tổng kết và định hướng Q2",
    time: "Hôm qua",
    liked: true,
  },
  {
    id: 5,
    category: "Tuyển dụng",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "Tuyển dụng nội bộ: Chuyên viên Quản lý Rủi ro – Khối Tín dụng",
    time: "2 ngày trước",
    liked: false,
  },
];

export function Header({ onNotificationClick }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-primary/10 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Top Row: Logo, Search, Notifications */}
        <div className="flex items-center justify-between py-6 gap-8">
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-primary flex size-10 items-center justify-center rounded-lg bg-primary/10 lg:hidden">
              <span className="material-symbols-outlined">menu</span>
            </div>
            <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
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

          <div className="flex items-center gap-4 shrink-0" ref={dropdownRef}>
            <div className="relative">
              <button 
                onClick={toggleNotifications}
                className="relative flex size-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all active:scale-90 hover:bg-slate-300 dark:hover:bg-slate-700"
              >
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  3
                </span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
                    <span className="text-sm font-semibold text-gray-800">Thông báo</span>
                    <span className="text-xs text-[#1B4FBB] cursor-pointer hover:underline">Đánh dấu tất cả đã đọc</span>
                  </div>
                  <div className="max-h-96 overflow-y-auto divide-y divide-gray-50">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${notification.categoryColor}`}>
                                {notification.category}
                              </span>
                            </div>
                            <p className="text-sm text-gray-800 leading-snug line-clamp-2">{notification.title}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                          </div>
                          <div className="flex flex-col gap-1 flex-shrink-0">
                            <button title="Đánh dấu đã đọc" className="p-1 rounded-full transition-colors text-[#1B4FBB]">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button title="Thả tim" className={`p-1 rounded-full transition-colors ${notification.liked ? 'text-[#D41F26]' : 'text-gray-300 hover:text-[#D41F26]'}`}>
                              <Heart className={`w-4 h-4 ${notification.liked ? 'fill-current' : ''}`} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 text-center">
                    <button className="text-xs text-[#1B4FBB] hover:underline">Xem tất cả thông báo</button>
                  </div>
                </div>
              )}
            </div>
            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-700">
              <button 
                onClick={() => router.push('/profile')}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">account_circle</span>
                </div>
                <span className="text-sm font-semibold">Nguyễn Văn A</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Desktop Full */}
        <div className="flex items-center justify-between">
          <div className="flex overflow-x-auto hide-scrollbar space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex flex-col items-center justify-center border-b-2 py-3 whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-slate-500 dark:text-slate-400 hover:text-primary hover:border-primary/30"
                  }`}
                >
                  <span className={`text-sm ${isActive ? "font-bold" : "font-semibold"}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
