"use client";

import Link from "next/link";

interface Message {
  title: string;
  imageUrl: string;
  time: string;
  author: string;
}

const messages: Message[] = [
  {
    title: "Định hướng chiến lược số hóa ngân hàng giai đoạn 2024-2026",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ5ZWSNNu_Xw7p8xoAjjyHYTlbDO813s-swOrhM9EWXhX1GEsprrIXbYYXRIACJCCcVXciSP-AzVZ4rzZ3UsdllVDBBMDXfCBseX5zKsXHaKvddrG4NoFbLYi4HsC6hQvGBvOJe_dY1ERI2xkfuxcQWZoavv2Q_1h1kw2rluZiALP8DboRUoBwtfnXHFe6tG1EcePadmPz7wdEhg42mocENv9SWVTqucaxnvXMK0rWl-jDK_ZPOsZ_P6IWzlwrKgAn4hhLbDOtoj1f",
    time: "2 giờ trước",
    author: "Ban Lãnh đạo",
  },
  {
    title: "Thư chúc mừng của Tổng Giám đốc nhân ngày Phụ nữ Việt Nam",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW4j2ut9V5uZB4e4KgPtRpTQNrCJvYBBkgbVsGtm8xAgJ1Wwpg43BD-NXVKQkmM_NBsZj8aaZJ9nAJFDQt_RgWxa0DL_gnFwSEJDY9BYOt612GlIWwJsbZFX-0bGc5OLY7Xvi9CiwTQIKS-gGb_DfD7Lid121mOyRujWJnNUuieW1vLY9Q4c2gemF2lB4upMnKauscEc_fd4ybyGV4RjkCVfHJ7ddpJhFr8BTT12rjj2uogNqSUvaXKZYTEfpO5AriXwUA0TSNDuye",
    time: "1 ngày trước",
    author: "TGĐ Vietbank",
  },
];

export function LeadershipMessages() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 text-2xl font-extrabold">
          <span className="h-6 w-1.5 bg-primary rounded-full"></span>
          Thông điệp Lãnh đạo
        </h3>
        <Link href="#" className="text-sm font-semibold text-primary hover:underline">
          Xem tất cả
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700"
          >
            <div className="h-48 overflow-hidden">
              <div
                className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${message.imageUrl}')` }}
              ></div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                {message.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span>{message.time}</span>
                <span className="mx-1">•</span>
                <span>{message.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
