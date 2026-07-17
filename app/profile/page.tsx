"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Bookmark,
  Briefcase,
  Calendar,
  Camera,
  ChevronRight,
  Edit,
  FileText,
  Heart,
  LogOut,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Settings,
  User
} from "lucide-react";
import Link from "next/link";
import { useState, Suspense } from "react";

const userData = {
  name: "Nguyễn Văn A",
  email: "nguyenvana@NovaCore.com.vn",
  phone: "0912 345 678",
  department: "Khối Kinh doanh Bán lẻ",
  position: "Chuyên viên Kinh doanh",
  location: "Hội sở chính - TP. Hồ Chí Minh",
  joinDate: "01/03/2020",
  employeeId: "VB01234",
  avatar: "",
  birthday: "15/06/1992",
  gender: "Nam"
};

const stats = {
  articlesLiked: 24,
  articlesSaved: 12,
  comments: 45,
  documents: 8
};

const activities = [
  { type: "like", title: "Đã thích bài viết 'NovaCore đạt top 10 công ty công nghệ uy tín'", time: "2 giờ trước" },
  { type: "comment", title: "Bình luận trong 'Bản tin 360° Kỳ 21'", time: "5 giờ trước" },
  { type: "save", title: "Lưu bài viết 'Thư chúc mừng TGD nhân ngày Phụ nữ'", time: "1 ngày trước" },
  { type: "document", title: "Tải xuống 'Hướng dẫn sử dụng Core Platform'", time: "2 ngày trước" },
];

const myComments = [
  {
    id: 1,
    articleTitle: "NovaCore đạt top 10 công ty công nghệ uy tín nhất Việt Nam 2024",
    content: "Rất tự hào là thành viên NovaCore! Thành quả xứng đáng với những nỗ lực của tất cả mọi người.",
    date: "2 giờ trước",
    likes: 15,
    replies: 1
  },
  {
    id: 2,
    articleTitle: "Bản tin 360° Kỳ 21",
    content: "Chúc mừng NovaCore! Mong công ty ngày càng phát triển hơn nữa.",
    date: "5 giờ trước",
    likes: 8,
    replies: 0
  },
  {
    id: 3,
    articleTitle: "Thư chúc mừng Tổng Giám đốc nhân ngày Phụ nữ Việt Nam",
    content: "Cảm ơn anh chị em trong công ty đã luôn quan tâm đến chị em phụ nữ!",
    date: "1 ngày trước",
    likes: 23,
    replies: 2
  },
  {
    id: 4,
    articleTitle: "Định hướng chiến lược số hóa công nghệ giai đoạn 2024-2026",
    content: "Em rất ủng hộ chiến lược số hóa của công ty. Đây là hướng đi đúng đắn!",
    date: "3 ngày trước",
    likes: 12,
    replies: 0
  },
];

function ProfileContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || "activity");
  const [notificationPage, setNotificationPage] = useState(1);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1 bg-slate-50 dark:bg-background-dark/30">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 px-4">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center border-4 border-white/30">
                  <User className="w-16 h-16 text-white" />
                </div>
                <button className="absolute bottom-0 right-0 bg-white text-primary p-2 rounded-full shadow-lg hover:bg-slate-100 transition-colors">
                  <Camera className="w-5 h-5" />
                </button>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
                <p className="text-white/80 mb-4">{userData.position} - {userData.department}</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    {userData.employeeId}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Tham gia: {userData.joinDate}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                  <span className="font-medium">Chỉnh sửa</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar - User Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Thông tin cá nhân</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500">Email</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{userData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500">Điện thoại</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{userData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500">Địa chỉ</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{userData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500">Ngày sinh</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{userData.birthday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Hoạt động của bạn</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <Heart className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.articlesLiked}</p>
                    <p className="text-xs text-slate-500">Đã thích</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <Bookmark className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.articlesSaved}</p>
                    <p className="text-xs text-slate-500">Đã lưu</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Truy cập nhanh</h3>
                <div className="space-y-2">
                  <Link href="/communication/bai-viet" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Bài viết đã lưu</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link href="/communication/bai-viet" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Bài viết đã thích</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                 
                </div>
              </div>

              {/* Logout */}
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Đăng xuất</span>
              </button>
            </div>

            {/* Main Content - Activity & Comments */}
            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-10 shadow-sm">
                {/* Tabs */}
                <div className="flex gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
                  <button
                    onClick={() => setActiveTab("activity")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === "activity"
                        ? "bg-primary text-white"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    Hoạt động
                  </button>
                  <button
                    onClick={() => setActiveTab("notifications")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === "notifications"
                        ? "bg-primary text-white"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    Thông báo
                  </button>
                </div>

                {/* Activity Tab */}
                {activeTab === "activity" && (
                  <div className="space-y-4">
                    {activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activity.type === 'like' ? 'bg-red-100 text-red-500' :
                          activity.type === 'comment' ? 'bg-blue-100 text-blue-500' :
                          activity.type === 'save' ? 'bg-primary/10 text-primary' :
                          'bg-orange-100 text-orange-500'
                        }`}>
                          {activity.type === 'like' && <Heart className="w-5 h-5" />}
                          {activity.type === 'comment' && <MessageCircle className="w-5 h-5" />}
                          {activity.type === 'save' && <Bookmark className="w-5 h-5" />}
                          {activity.type === 'document' && <FileText className="w-5 h-5" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900 dark:text-white">
                            {activity.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400" />
                      </div>
                    ))}
                    <button className="w-full mt-6 py-3 text-center text-primary font-medium hover:underline">
                      Xem tất cả hoạt động
                    </button>
                  </div>
                )}

                {/* Notifications Tab */}
                {activeTab === "notifications" && (
                  <div>
                    <div className="space-y-4 mb-6">
                      {[
                        {
                          id: 1,
                          category: "Lãnh đạo",
                          title: "Thông điệp Tổng Giám đốc nhân dịp kỷ niệm 19 năm thành lập",
                          time: "5 phút trước",
                          read: false
                        },
                        {
                          id: 2,
                          category: "Sự kiện",
                          title: "Kết quả cuộc thi 'Ý tưởng sáng tạo NovaCore 2026' đã được công bố",
                          time: "1 giờ trước",
                          read: false
                        },
                        {
                          id: 3,
                          category: "Bản tin",
                          title: "Bản tin nội bộ tháng 3/2026 - Khối Kinh doanh Bán lẻ",
                          time: "3 giờ trước",
                          read: true
                        },
                      ].map((notif) => (
                        <div key={notif.id} className={`p-4 rounded-xl border transition-colors ${
                          notif.read 
                            ? "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                            : "border-primary/30 bg-primary/5 dark:bg-primary/10"
                        }`}>
                          <div className="flex items-start gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                                  {notif.category}
                                </span>
                                {!notif.read && <span className="w-2 h-2 rounded-full bg-primary"></span>}
                              </div>
                              <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                                {notif.title}
                              </p>
                              <p className="text-xs text-slate-500">{notif.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                      <button 
                        onClick={() => setNotificationPage(Math.max(1, notificationPage - 1))}
                        disabled={notificationPage === 1}
                        className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        ← Trước
                      </button>
                      
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((page) => (
                          <button
                            key={page}
                            onClick={() => setNotificationPage(page)}
                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                              notificationPage === page
                                ? "bg-primary text-white"
                                : "border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </div>

                      <button 
                        onClick={() => setNotificationPage(notificationPage + 1)}
                        className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        Sau →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <span className="material-symbols-outlined animate-spin text-primary text-4xl">
          sync
        </span>
      </div>
    }>
      <ProfileContent />
    </Suspense>
  );
}
