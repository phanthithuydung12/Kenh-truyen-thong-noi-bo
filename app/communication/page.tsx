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
  title: "NovaCore vươn tầm khát vọng: Kỷ niệm 19 năm thành lập và phát triển rực rỡ",
  date: "27/03/2026",
  category: "Sự kiện tiêu điểm",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtgF_STXYl4S9nBxM2yaT91lES9dw_gqQO3SbFb6ny_3uGKNfhfSualjcsETr80yNqtxwl_yzXWQ556qyjbiPcJ65WktlOV6MGCu6OJy7iB7fzaghc8nO38GqwS_oSurvrpPGOZ7FIjMcYcOR-lnkNuKd4KitXP3qsStN86Q1ZwOdBIX61Xnl_oBPUqjXPlVZ7WrbUzbNzQ2s8Ip5OhhO2Yelnk4BikbHZGRXpwb63aIZjbalo3qiNHTMV4fMYo7TK2OCHQLwPet90",
  summary: "Hành trình 19 năm kiến tạo những giá trị bền vững và không ngừng đổi mới để phục vụ khách hàng tốt hơn mỗi ngày. NovaCore tự hào là người đồng hành tin cậy của hàng triệu khách hàng trên khắp cả nước.",
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
    title: "Định hướng chiến lược số hóa công nghệ giai đoạn 2024-2026",
    author: "Ban Lãnh đạo",
    time: "2 giờ trước",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ5ZWSNNu_Xw7p8xoAjjyHYTlbDO813s-swOrhM9EWXhX1GEsprrIXbYYXRIACJCCcVXciSP-AzVZ4rzZ3UsdllVDBBMDXfCBseX5zKsXHaKvddrG4NoFbLYi4HsC6hQvGBvOJe_dY1ERI2xkfuxcQWZoavv2Q_1h1kw2rluZiALP8DboRUoBwtfnXHFe6tG1EcePadmPz7wdEhg42mocENv9SWVTqucaxnvXMK0rWl-jDK_ZPOsZ_P6IWzlwrKgAn4hhLbDOtoj1f",
    quote: "Sáng tạo và đổi mới công nghệ là chìa khóa để NovaCore bứt phá trong kỷ nguyên số."
  },
  {
    id: 2,
    title: "Thư chúc mừng của Tổng Giám đốc nhân ngày Phụ nữ Việt Nam",
    author: "TGĐ NovaCore",
    time: "1 ngày trước",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW4j2ut9V5uZB4e4KgPtRpTQNrCJvYBBkgbVsGtm8xAgJ1Wwpg43BD-NXVKQkmM_NBsZj8aaZJ9nAJFDQt_RgWxa0DL_gnFwSEJDY9BYOt612GlIWwJsbZFX-0bGc5OLY7Xvi9CiwTQIKS-gGb_DfD7Lid121mOyRujWJnNUuieW1vLY9Q4c2gemF2lB4upMnKauscEc_fd4ybyGV4RjkCVfHJ7ddpJhFr8BTT12rjj2uogNqSUvaXKZYTEfpO5AriXwUA0TSNDuye",
    quote: "Phụ nữ NovaCore là những đóa hoa rực rỡ nhất, góp phần tạo nên bản sắc và sự thành công của công ty."
  }
];

const regularArticles = [
  {
    id: 1,
    title: "NovaCore ra mắt Trợ lý AI thế hệ mới hỗ trợ nghiệp vụ nội bộ",
    date: "28/03/2026",
    category: "Công nghệ",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    summary: "Hệ thống trợ lý ảo AI mới giúp rút ngắn thời gian xử lý hồ sơ nghiệp vụ và hỗ trợ tự động giải đáp thắc mắc cho nhân viên toàn hệ thống.",
    views: 840,
    comments: 12
  },
  {
    id: 2,
    title: "Cẩm nang bảo mật thông tin và phòng chống lừa đảo trên không gian mạng",
    date: "25/03/2026",
    category: "An toàn thông tin",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    summary: "Các hướng dẫn thiết thực giúp CBNV nhận biết các nguy cơ lừa đảo trực tuyến và bảo vệ tài nguyên thông tin của doanh nghiệp.",
    views: 1200,
    comments: 28
  },
  {
    id: 3,
    title: "Đoàn Thanh niên NovaCore tổ chức chuỗi sự kiện hiến máu tình nguyện",
    date: "20/03/2026",
    category: "Đoàn thể",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
    summary: "Chương trình hiến máu nhân đạo thu hút đông đảo CBNV tham gia, đóng góp hàng trăm đơn vị máu quý giá cho cộng đồng.",
    views: 450,
    comments: 6
  }
];

export default function CommunicationPage() {
  const [showNotification, setShowNotification] = useState(false);
  const [activeSection, setActiveSection] = useState("news");

  const menuItems = [
    { id: "news", label: "Tin tức & Sự kiện", icon: FileText },
    { id: "announcements", label: "Thông báo nội bộ", icon: Calendar },
    { id: "leadership", label: "Thông điệp Lãnh đạo", icon: Quote },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
  };

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

      <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 lg:sticky lg:top-24">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all min-h-[56px] ${
                      activeSection === item.id
                        ? 'bg-primary text-white font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-8 lg:col-span-9 space-y-16 md:space-y-20">
            {activeSection === 'news' && (
              <div className="space-y-12">
                <section id="news" className="relative min-h-[420px] sm:min-h-[460px] lg:h-[550px] w-full overflow-hidden rounded-[32px] shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-900">
                  <Image
                    src={featuredNews.image}
                    alt="Communication Hero"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-12 left-0 right-0 px-4 sm:px-6 lg:px-8">
                    <span className="mb-4 inline-block rounded-full bg-primary px-3 py-2 text-[11px] font-black uppercase tracking-widest text-white shadow-xl">
                      {featuredNews.category}
                    </span>
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-4 leading-tight max-w-4xl">
                      {featuredNews.title}
                    </h1>
                    <p className="max-w-2xl text-base sm:text-lg text-slate-200 mb-8 line-clamp-2">
                      {featuredNews.summary}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                      <Link href="/communication/bai-viet" className="w-full sm:w-auto rounded-2xl bg-white px-6 py-4 text-sm sm:text-base font-bold text-slate-900 shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                        Đọc toàn văn bài viết <ArrowRight className="w-5 h-5" />
                      </Link>
                      <div className="flex flex-wrap items-center gap-4 text-white/85 text-sm font-semibold">
                        <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" /> 1.5k lượt xem</span>
                        <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> 52 bình luận</span>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="space-y-6">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                    Bài viết mới nhất
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularArticles.map((article) => (
                      <div key={article.id} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
                        <div className="relative h-48 w-full">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <span className="text-[10px] font-black uppercase text-primary mb-2 tracking-wider">
                            {article.category}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            <Link href="/communication/bai-viet">{article.title}</Link>
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                            {article.summary}
                          </p>
                          <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                            <span>{article.date}</span>
                            <div className="flex items-center gap-2.5">
                              <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {article.views}</span>
                              <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {article.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'announcements' && (
              <section id="announcements">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end justify-between mb-10">
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                      Thông báo nội bộ
                    </h2>
                    <p className="mt-2 text-slate-500">Văn bản quy định, quyết định và thông báo quan trọng chính thức.</p>
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all">
                    Xem kho văn bản số <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {internalAnnouncements.map((ann) => (
                    <div key={ann.id} className="group flex flex-col h-full bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[28px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="flex-shrink-0 h-14 w-14 rounded-3xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                        <FileText className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1 mb-6">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
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
            )}

            {activeSection === 'leadership' && (
              <section id="leadership">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                      Thông điệp Lãnh đạo
                    </h2>
                    <p className="mt-2 text-slate-500">Định hướng chiến lược và những lời chia sẻ tâm huyết từ Ban Điều hành.</p>
                  </div>
                </div>

                <div className="space-y-10">
                  {leadershipMessages.map((msg, index) => (
                    <div key={msg.id} className={`relative flex flex-col gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center bg-white dark:bg-slate-900/50 p-6 md:p-8 lg:p-10 rounded-[36px] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group`}>
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary/20">
                        <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700"></div>
                      </div>
                      
                      <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl">
                        <Image
                          src={msg.image}
                          alt={msg.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-3">
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
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                          {msg.title}
                        </h3>
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 italic font-medium leading-relaxed">
                          &quot;{msg.quote}&quot;
                        </p>
                        <div className="pt-4">
                          <Link href="/communication/bai-viet" className="inline-flex items-center gap-2 text-primary font-black text-sm sm:text-base group-hover:gap-3 transition-all">
                            Đọc toàn bộ thông điệp <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
