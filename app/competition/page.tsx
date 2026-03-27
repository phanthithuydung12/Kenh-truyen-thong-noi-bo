"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { Notification } from "@/components/Notification";
import { useState } from "react";
import { Trophy, Award, TrendingUp, Users, Calendar, ArrowRight, Medal, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const competitionPrograms = [
  {
    id: 1,
    title: "Bứt phá doanh số Q4/2026",
    status: "Đang diễn ra",
    deadline: "31/12/2026",
    progress: 65,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    category: "Kinh doanh",
    description: "Chiến dịch thi đua đẩy mạnh các sản phẩm tín dụng và huy động cuối năm dành cho toàn hệ thống."
  },
  {
    id: 2,
    title: "Sáng kiến đổi mới Vietbank 2026",
    status: "Sắp diễn ra",
    deadline: "01/01/2027",
    progress: 0,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    category: "Đổi mới",
    description: "Tìm kiếm các giải pháp công nghệ và cải tiến quy trình vận hành giúp nâng cao trải nghiệm khách hàng."
  },
  {
    id: 3,
    title: "Đại sứ văn hóa Vietbank",
    status: "Đang diễn ra",
    deadline: "15/11/2026",
    progress: 40,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    category: "Văn hóa",
    description: "Chương trình bình chọn những cá nhân tiêu biểu lan tỏa giá trị cốt lõi của ngân hàng."
  }
];

const honorees = [
  {
    id: 1,
    name: "Trần Thị Thu Thảo",
    role: "Giao dịch viên xuất sắc - CN HCM",
    achievement: "Đạt 200% kế hoạch huy động tháng 10",
    avatar: "https://i.pravatar.cc/150?u=thao",
    rank: 1,
    points: 2450
  },
  {
    id: 2,
    name: "Lê Minh Hoàng",
    role: "Chuyên viên QHKH - CN Hà Nội",
    achievement: "Dẫn đầu chiến dịch 'Bứt phá Q4'",
    avatar: "https://i.pravatar.cc/150?u=hoang",
    rank: 2,
    points: 2120
  },
  {
    id: 3,
    name: "Nguyễn Bảo Ngọc",
    role: "Chuyên viên Phân tích - Hội sở",
    achievement: "Giải nhất 'Sáng kiến số 2025'",
    avatar: "https://i.pravatar.cc/150?u=ngoc",
    rank: 3,
    points: 1980
  }
];

export default function CompetitionPage() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header onNotificationClick={() => setShowNotification(true)} />

      <Notification
        show={showNotification}
        onClose={() => setShowNotification(false)}
        title="Thông báo thi đua"
        message="Bảng xếp hạng tháng 10 đã được cập nhật. Kiểm tra ngay vị trí của bạn!"
        type="success"
      />

      <main className="flex-1 bg-slate-50 dark:bg-background-dark/50">
        {/* Banner Section */}
        <section className="bg-primary py-16 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 border-8 border-white rounded-full"></div>
          </div>
          <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
                <Trophy className="w-4 h-4" />
                Đường Đua Rực Lửa 2026
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Thi Đua Nội Bộ & <br /><span className="text-yellow-400">Vinh Danh Cá Nhân</span>
              </h1>
              <p className="text-lg text-slate-100 mb-8 max-w-xl">
                Nơi ghi nhận những nỗ lực, tôn vinh những thành tựu và khơi dậy tinh thần bứt phá của tập thể Người Vietbank.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95">
                  Bảng xếp hạng tổng
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm">
                  Quy chế thi đua
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="bg-white/10 p-4 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl rotate-3">
                <div className="bg-white rounded-2xl p-6 text-slate-900 w-80">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Star className="w-6 h-6 text-primary fill-primary" />
                    </div>
                    <span className="font-bold text-lg">Top 1 Tháng 10</span>
                  </div>
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full border-4 border-yellow-400 p-1 mb-4">
                      <Image src={honorees[0].avatar} alt="Winner" width={96} height={96} className="rounded-full" />
                    </div>
                    <h3 className="font-extrabold text-xl">{honorees[0].name}</h3>
                    <p className="text-sm text-slate-500">{honorees[0].role}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 text-center">
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Thành tích</p>
                    <p className="font-bold text-primary">{honorees[0].achievement}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-4 py-16 space-y-20">
          {/* Competition Programs Section */}
          <section id="programs">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Racing Line</h2>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
                  Chương trình thi đua
                </h2>
              </div>
              <div className="flex gap-2">
                <button className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 text-primary">Tất cả</button>
                <button className="bg-transparent px-4 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-primary transition-colors">Đang diễn ra</button>
                <button className="bg-transparent px-4 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-primary transition-colors">Kết thúc</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitionPrograms.map((program) => (
                <div key={program.id} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative h-52">
                    <Image src={program.image} alt={program.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary shadow-sm">
                      {program.category}
                    </div>
                    <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                      program.status === "Đang diễn ra" ? "bg-green-500" : "bg-blue-500"
                    }`}>
                      {program.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold mb-3 group-hover:text-primary transition-colors line-clamp-1">
                      {program.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
                      {program.description}
                    </p>
                    <div className="space-y-4">
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-primary h-full rounded-full transition-all duration-1000 ease-out shadow-sm shadow-primary/30" 
                          style={{ width: `${program.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-xs font-bold">
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          Hạn chót: {program.deadline}
                        </div>
                        <span className="text-primary">{program.progress}% Hoàn thành</span>
                      </div>
                      <button className="w-full mt-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
                        Chi tiết <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Honoring Section */}
          <section id="honoring">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-yellow-400/10 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest">Honoring Hall</h2>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
                  Vinh danh người Vietbank
                </h2>
              </div>
              <Link href="#" className="flex items-center gap-2 text-primary font-bold hover:underline">
                Xem tất cả gương mặt tiêu biểu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Leaderboard */}
              <div className="lg:col-span-8 space-y-4">
                {honorees.map((person, index) => (
                  <div key={person.id} className="flex items-center gap-4 bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex-shrink-0 w-12 text-center">
                      {index === 0 ? (
                        <Medal className="w-8 h-8 text-yellow-400 mx-auto" />
                      ) : index === 1 ? (
                        <Medal className="w-8 h-8 text-slate-400 mx-auto" />
                      ) : index === 2 ? (
                        <Medal className="w-8 h-8 text-orange-400 mx-auto" />
                      ) : (
                        <span className="text-xl font-extrabold text-slate-300">{index + 1}</span>
                      )}
                    </div>
                    <div className="relative">
                      <Image src={person.avatar} alt={person.name} width={64} height={64} className="rounded-2xl border-2 border-slate-100 dark:border-slate-800" />
                      {index < 3 && (
                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md shadow-sm">
                          TOP {index + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-extrabold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">
                        {person.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{person.role}</p>
                      <p className="text-xs font-bold text-primary mt-1">{person.achievement}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xl font-black text-slate-900 dark:text-white">{person.points.toLocaleString()}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Điểm thi đua</div>
                    </div>
                  </div>
                ))}
                
                <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 border border-dashed border-primary/30 text-center">
                  <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 text-primary shadow-sm mb-4">
                    <Users className="w-7 h-7" />
                  </div>
                  <h4 className="font-extrabold text-xl mb-2">Đường đua vẫn còn đó!</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-6">
                    Nỗ lực không ngừng để tên của bạn xuất hiện trên bảng vàng vinh danh của Vietbank.
                  </p>
                  <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                    Xem thứ hạng của tôi
                  </button>
                </div>
              </div>

              {/* Sidebar Stats/Awards */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                  <h3 className="text-xl font-extrabold mb-6 relative z-10">Giải thưởng năm 2026</h3>
                  <div className="space-y-6 relative z-10">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 size-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Người Vietbank của năm</p>
                        <p className="text-xs text-slate-400">Giải thưởng 50.000.000đ & Du lịch Châu Âu</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 size-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Medal className="w-6 h-6 text-slate-300" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Best Sales 2026</p>
                        <p className="text-xs text-slate-400">Giải thưởng 30.000.000đ & Kỷ niệm chương</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 size-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Star className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Sáng kiến số tiêu biểu</p>
                        <p className="text-xs text-slate-400">Giải thưởng 20.000.000đ & Macbook Pro</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <h3 className="text-lg font-extrabold mb-6">Thành tích gần đây</h3>
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-3">
                        <div className="size-2 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                        <p className="text-xs leading-relaxed">
                          <span className="font-bold text-slate-900 dark:text-white">Chi nhánh Đà Nẵng</span> vừa hoàn thành 100% chỉ tiêu huy động năm 2026.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
