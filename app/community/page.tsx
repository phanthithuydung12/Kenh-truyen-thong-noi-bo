"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { Notification } from "@/components/Notification";
import { useState } from "react";
import { Heart, Users, Calendar, ArrowRight, Share2 } from "lucide-react";
import Image from "next/image";

const upcomingCampaigns = [
  {
    id: 1,
    title: "Vietbank - Chặng đường 0đ 2026",
    date: "15/04/2026 - 20/04/2026",
    location: "Các tỉnh miền Tây Nam Bộ",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    participants: 120,
    target: "Hỗ trợ 500 hộ gia đình khó khăn",
  },
  {
    id: 2,
    title: "Mùa hè xanh Vietbank: Ươm mầm tương lai",
    date: "01/06/2026 - 30/06/2026",
    location: "Huyện Đảo Phú Quý, Bình Thuận",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop",
    participants: 50,
    target: "Xây dựng 2 điểm trường tiểu học",
  }
];

const pastActivities = [
  {
    id: 1,
    title: "Xuân gắn kết - Tết yêu thương 2025",
    summary: "Hơn 1.000 phần quà Tết đã được cán bộ nhân viên Vietbank trao tận tay các hộ nghèo tại các tỉnh vùng cao phía Bắc.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?q=80&w=800&auto=format&fit=crop",
    likes: 450,
    comments: 24,
  },
  {
    id: 2,
    title: "Hiến máu nhân đạo: Giọt hồng Vietbank",
    summary: "Sự kiện thường niên thu hút hơn 300 đơn vị máu từ tập thể CBNV, góp phần cứu sống hàng trăm bệnh nhân.",
    image: "https://images.unsplash.com/photo-1615461066870-431143f0da39?q=80&w=800&auto=format&fit=crop",
    likes: 320,
    comments: 15,
  },
  {
    id: 3,
    title: "Trồng cây xanh - Cho đời thêm xanh",
    summary: "Hoạt động hưởng ứng ngày môi trường thế giới, Vietbank đã góp hơn 2.000 cây xanh tại khu vực rừng phòng hộ.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    likes: 280,
    comments: 18,
  }
];

export default function CommunityPage() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header onNotificationClick={() => setShowNotification(true)} />

      <Notification
        show={showNotification}
        onClose={() => setShowNotification(false)}
        title="Thông báo"
        message="Cảm ơn bạn đã quan tâm đến hoạt động cộng đồng của Vietbank!"
        type="info"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] w-full overflow-hidden bg-slate-900">
          <Image
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1600&auto=format&fit=crop"
            alt="Community Hero"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="bg-primary/20 p-3 rounded-full mb-4 backdrop-blur-md">
              <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Hoạt Động Cộng Đồng
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Cùng Vietbank lan tỏa yêu thương, kiến tạo giá trị bền vững cho xã hội 
              thông qua những hành động thiết thực.
            </p>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-4 py-12 space-y-16">
          {/* Upcoming Campaigns */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Chiến dịch sắp diễn ra
                </h2>
                <div className="mt-2 h-1 w-20 bg-primary rounded-full" />
              </div>
              <button className="flex items-center gap-2 text-primary font-semibold hover:underline">
                Xem tất cả <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingCampaigns.map((campaign) => (
                <div key={campaign.id} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row">
                  <div className="relative w-full lg:w-48 h-48 lg:h-auto overflow-hidden">
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {campaign.date}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {campaign.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                      <Users className="inline-block w-3.5 h-3.5 mr-1" /> Mục tiêu: {campaign.target}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <div className="text-xs text-slate-400">
                        📍 {campaign.location}
                      </div>
                      <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-all active:scale-95">
                        Tham gia ngay
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Past Activities Grid */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Hành trình lan tỏa
              </h2>
              <p className="mt-2 text-slate-500">Những dấu chân thiện nguyện của tập thể Người Vietbank.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastActivities.map((activity) => (
                <div key={activity.id} className="flex flex-col rounded-2xl bg-white dark:bg-slate-900 shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {activity.summary}
                    </p>
                  </div>
                  <div className="px-6 py-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between text-slate-400 text-sm">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        ❤️ {activity.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        💬 {activity.comments}
                      </button>
                    </div>
                    <button className="hover:text-primary">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to action */}
          <section className="rounded-3xl bg-primary px-8 py-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <h2 className="text-3xl font-bold mb-4">Bạn muốn đồng hành cùng Vietbank?</h2>
            <p className="max-w-xl mx-auto mb-8 opacity-90">
              Mọi sự đóng góp, ý tưởng hoặc mong muốn tham gia tình nguyện đều được chúng tôi 
              trân trọng và chào đón. Hãy để lại lời nhắn cho Vietbank nhé!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-xl bg-white px-8 py-3 font-bold text-primary shadow-lg hover:bg-slate-50 transition-all active:scale-95">
                Gửi ý tưởng của bạn
              </button>
              <button className="rounded-xl border-2 border-white/30 px-8 py-3 font-bold text-white hover:bg-white/10 transition-all active:scale-95">
                Liên hệ Ban Công tác Xã hội
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
