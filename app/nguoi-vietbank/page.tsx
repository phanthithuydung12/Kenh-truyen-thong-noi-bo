"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { NguoiVietbankContent } from "@/components/NguoiVietbankContent";
import { Notification } from "@/components/Notification";
import { useState } from "react";

export default function NguoiVietbankPage() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header onNotificationClick={() => setShowNotification(true)} />
      
      <Notification
        show={showNotification}
        onClose={() => setShowNotification(false)}
        title="Thông báo"
        message="Chào mừng bạn đến với chuyên mục Người Vietbank!"
        type="info"
      />

      <NguoiVietbankContent />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
