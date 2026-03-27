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
import { useState } from "react";

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header onNotificationClick={() => setShowNotification(true)} />

      <Notification
        show={showNotification}
        onClose={() => setShowNotification(false)}
        title="Thông báo mới"
        message="Bạn có 3 thông báo mới chưa đọc trong hệ thống VB Portal."
        type="info"
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Thông báo quan trọng"
      >
        <p className="text-slate-600 dark:text-slate-300">
          Chào mừng bạn đến với hệ thống cổng thông tin nội bộ của Vietbank. Đây là ví dụ về một popup Modal dùng để hiển thị các thông báo quan trọng hoặc yêu cầu xác nhận từ người dùng.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-slate-500">
          <li>Thiết kế hiện đại, tinh tế.</li>
          <li>Tự động thích ứng giao diện tối (Dark Mode).</li>
          <li>Hỗ trợ các hành động xác nhận.</li>
        </ul>
      </Modal>

      {/* Main Content Container */}
      <main className="max-w-[1200px] mx-auto w-full px-4 py-8">
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
