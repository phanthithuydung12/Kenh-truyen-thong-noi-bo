"use client";

import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { LeadershipMessages } from "@/components/LeadershipMessages";
import { CommunityActivities } from "@/components/CommunityActivities";
import { InternalCompetition } from "@/components/InternalCompetition";
import { UsefulShortcuts } from "@/components/UsefulShortcuts";
import { EventsCalendar } from "@/components/EventsCalendar";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { Notification } from "@/components/Notification";
import { Modal } from "@/components/Modal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = window.localStorage.getItem("isAuthenticated");
      if (auth !== "true") {
        router.replace("/login");
        return;
      }

      const shouldShow = window.localStorage.getItem("showUrgentNewsPopup") === "true";
      if (shouldShow) {
        setIsModalOpen(true);
        window.localStorage.removeItem("showUrgentNewsPopup");
      }
      setIsCheckingAuth(false);
    }
  }, [router]);

  if (isCheckingAuth) {
    return null;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header onNotificationClick={() => setShowNotification(true)} />

      {/* <Notification
        show={showNotification}
        onClose={() => setShowNotification(false)}
        title="Thông báo mới"
        message="Bạn có 3 thông báo mới chưa đọc trong hệ thống NovaCore Portal."
        type="info"
      /> */}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Tin khẩn"
        maxWidth="xl"
      >
        <div className="rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800">
          <div className="relative h-56">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Tin khẩn"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            <span className="absolute top-4 left-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold uppercase text-white">
              Khẩn
            </span>
          </div>
          <div className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-3">
              19/03/2025 · Thông điệp Lãnh đạo
            </p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Thông điệp của Chủ tịch HĐQT về định hướng chiến lược 2025-2030
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Hội đồng Quản trị NovaCore gửi thông điệp quan trọng về tầm nhìn chiến lược giai đoạn 2025-2030, các mục tiêu ưu tiên và chuyển đổi số toàn diện. Tất cả CBNV cần nắm bắt và triển khai.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Đóng
              </button>
              <Link
                href="/communication/bai-viet"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-dark"
                onClick={() => setIsModalOpen(false)}
              >
                Xem bài viết
              </Link>
            </div>
          </div>
        </div>
      </Modal>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8">
        {/* Mobile Search (Hidden on Desktop) */}
        <div className="lg:hidden mb-6">
          <div className="relative flex w-full items-center">
            <span className="material-symbols-outlined absolute left-4 text-slate-400">
              search
            </span>
            <input
              className="w-full rounded-xl border-none bg-slate-200 dark:bg-slate-800 py-3 pl-12 pr-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary"
              placeholder="Tìm kiếm..."
              type="text"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left/Main Column (8 units) */}
          <div className="lg:col-span-8 space-y-8">
            <HeroBanner />
            <LeadershipMessages />
            <CommunityActivities />
          </div>

          {/* Right/Sidebar Column (4 units) */}
          <div className="lg:col-span-4 space-y-8">
            <InternalCompetition />
            <UsefulShortcuts />
            <EventsCalendar />
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
