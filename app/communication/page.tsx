"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { Notification } from "@/components/Notification";
import { useState } from "react";
import { FileText, Calendar, ArrowRight, Eye, MessageCircle, Quote, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredNews = {
  title: "Vietbank vươn tầm cao mới: Kỷ niệm 15 năm thành lập và phát triển rực rỡ",
  date: "27/03/2026",
  category: "Sự kiện tiêu điểm",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtgF_STXYl4S9nBxM2yaT91lES9dw_gqQO3SbFb6ny_3uGKNfhfSualjcsETr80yNqtxwl_yzXWQ556qyjbiPcJ65WktlOV6MGCu6OJy7iB7fzaghc8nO38GqwS_oSurvrpPGOZ7FIjMcYcOR-lnkNuKd4KitXP3qsStN86Q1ZwOdBIX61Xnl_oBPUqjXPlVZ7WrbUzbNzQ2s8Ip5OhhO2Yelnk4BikbHZGRXpwb63aIZjbalo3qiNHTMV4fMYo7TK2OCHQLwPet90",
  summary: "Hành trình 15 năm kiến tạo những giá trị bền vững và không ngừng đổi mới để phục vụ khách hàng tốt hơn mỗi ngày. Vietbank tự hào là người đồng hành tin cậy của hàng triệu khách hàng trên khắp cả nước.",
};

const internalAnnouncements = [
  {
    id: 1,
    title: "Thông báo về việc thay đổi giờ làm việc hè 2026",
    date: "26/03/2026",
    urgency: "Quan trọng",
    file: "TB_GioLamViec_2026.pdf",
    department: "Ban Nhân sự"
  },
  {
    id: 2,
    title: "Quyết định bổ nhiệm cán bộ quản lý cấp cao tại Hội sở",
    date: "24/03/2026",
    urgency: "Thường",
    file: "QD_BoNhiem_045.pdf",
    department: "Văn phòng Hội đồng Quản trị"
  },
  {
    id: 3,
    title: "Hướng dẫn tham gia kỳ thi sát hạch nghiệp vụ định kỳ",
    date: "22/03/2026",
    urgency: "Cần chú ý",
    file: "HD_SatHach_2026.pdf",
    department: "Ban Đào tạo"
  }
];

const leadershipMessages = [
  {
    id: 1,
    title: "Định hướng chiến lược số hóa ngân hàng giai đoạn 2024-2026",
    author: "Ban Lãnh đạo",
    time: "2 giờ trước",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ5ZWSNNu_Xw7p8xoAjjyHYTlbDO813s-swOrhM9EWXhX1GEsprrIXbYYXRIACJCCcVXciSP-AzVZ4rzZ3UsdllVDBBMDXfCBseX5zKsXHaKvddrG4NoFbLYi4HsC6hQvGBvOJe_dY1ERI2xkfuxcQWZoavv2Q_1h1kw2rluZiALP8DboRUoBwtfnXHFe6tG1EcePadmPz7wdEhg42mocENv9SWVTqucaxnvXMK0rWl-jDK_ZPOsZ_P6IWzlwrKgAn4hhLbDOtoj1f",
    quote: "Sáng tạo và đổi mới công nghệ là chìa khóa để Vietbank bứt phá trong kỷ nguyên số."
  },
  {
    id: 2,
    title: "Thư chúc mừng của Tổng Giám đốc nhân ngày Phụ nữ Việt Nam",
    author: "TGĐ Vietbank",
    time: "1 ngày trước",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW4j2ut9V5uZB4e4KgPtRpTQNrCJvYBBkgbVsGtm8xAgJ1Wwpg43BD-NXVKQkmM_NBsZj8aaZJ9nAJFDQt_RgWxa0DL_gnFwSEJDY9BYOt612GlIWwJsbZFX-0bGc5OLY7Xvi9CiwTQIKS-gGb_DfD7Lid121mOyRujWJnNUuieW1vLY9Q4c2gemF2lB4upMnKauscEc_fd4ybyGV4RjkCVfHJ7ddpJhFr8BTT12rjj2uogNqSUvaXKZYTEfpO5AriXwUA0TSNDuye",
    quote: "Phụ nữ Vietbank là những đóa hoa rực rỡ nhất, góp phần tạo nên bản sắc và sự thành công của ngân hàng."
  }
];

export default function CommunicationPage() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header onNotificationClick={() => setShowNotification(true)} />

      <Notification
        show={showNotification}
        onClose={() => setShowNotification(false)}
        title="Truyền thông nội bộ"
        message="Bản tin tuần mới nhất đã được phát hành. Xem ngay tại mục Thông báo nội bộ!"
        type="info"
      />

      <main className="flex-1 bg-slate-50 dark:bg-background-dark/30">
        {/* Section 1: Tin tức & Sự kiện (Banner Style) */}
        <section className="relative h-[450px] lg:h-[550px] w-full overflow-hidden">
          <Image
            src={featuredNews.image}
            alt="Communication Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          <div className="absolute bottom-16 left-0 right-0">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
              <span className="mb-4 inline-block rounded bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-xl">
                {featuredNews.category}
              </span>
              <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight max-w-4xl">
                {featuredNews.title}
              </h1>
              <p className="max-w-2xl text-lg text-slate-200 mb-8 line-clamp-2">
                {featuredNews.summary}
              </p>
              <div className="flex items-center gap-6">
                <Link href="/communication/bai-viet" className="rounded-xl bg-white px-8 py-3.5 font-bold text-slate-900 shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                  Đọc toàn văn bài viết <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-4 text-white/80 text-sm font-bold">
                  <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" /> 1.5k lượt xem</span>
                  <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> 52 bình luận</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-4 py-20 space-y-24">
          
          {/* Section 2: Thông báo nội bộ */}
          <section id="announcements">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="h-8 w-2 bg-primary rounded-full shadow-[0_0_10px_rgba(19,127,236,0.5)]"></span>
                  Thông báo nội bộ
                </h2>
                <p className="mt-2 text-slate-500">Văn bản quy định, quyết định và thông báo quan trọng chính thức.</p>
              </div>
              <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline transition-all">
                Xem kho văn bản số <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {internalAnnouncements.map((ann) => (
                <div key={ann.id} className="group flex flex-col bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex-shrink-0 size-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <FileText className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm ${
                        ann.urgency === 'Quan trọng' ? 'bg-red-500 text-white' : 
                        ann.urgency === 'Cần chú ý' ? 'bg-yellow-400 text-slate-900' : 
                        'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {ann.urgency}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{ann.date}</span>
                    </div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-primary transition-colors">
                      {ann.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-bold italic">
                      Đơn vị ban hành: {ann.department}
                    </p>
                  </div>
                  <button className="mt-auto w-full py-3.5 rounded-xl border-2 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-2">
                    Tải về {ann.file.split('_').pop()} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Thông điểm Lãnh đạo */}
          <section id="leadership">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="h-8 w-2 bg-primary rounded-full shadow-[0_0_10px_rgba(19,127,236,0.5)]"></span>
                  Thông điệp Lãnh đạo
                </h2>
                <p className="mt-2 text-slate-500">Định hướng chiến lược và những lời chia sẻ tâm huyết từ Ban Điều hành.</p>
              </div>
            </div>

            <div className="space-y-12">
              {leadershipMessages.map((msg, index) => (
                <div key={msg.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white dark:bg-slate-900/50 p-8 lg:p-12 rounded-[48px] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden relative group`}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary/20">
                    <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
                    <Image
                      src={msg.image}
                      alt={msg.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 flex items-center gap-3">
                      <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white border-4 border-white/20">
                        <UserCheck className="w-6 h-6" />
                      </div>
                      <div className="text-white">
                        <p className="font-black leading-none">{msg.author}</p>
                        <p className="text-[10px] font-bold opacity-70 mt-1 uppercase tracking-widest">{msg.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="bg-primary/5 dark:bg-primary/10 size-12 rounded-2xl flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                      {msg.title}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 italic font-medium leading-relaxed">
                      &quot;{msg.quote}&quot;
                    </p>
                    <div className="pt-4">
                      <Link href="/communication/bai-viet" className="flex items-center gap-3 text-primary font-black group-hover:gap-5 transition-all">
                        Đọc toàn bộ thông điệp <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feedback Section */}
          <section className="bg-slate-900 rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-6">Bạn có ý tưởng cho bản tin tiếp theo?</h2>
              <p className="text-slate-400 mb-10 text-lg">
                Vietbank luôn lắng nghe những đóng góp và câu chuyện từ chính các bạn để làm phong phú thêm nội dung truyền thông nội bộ.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-black transition-all shadow-2xl shadow-primary/40 active:scale-95">
                Gửi bài viết/ý tưởng cho Ban Truyền thông
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
