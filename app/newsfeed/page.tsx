"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { Notification } from "@/components/Notification";
import { useState } from "react";
import { 
  Home, Building2, FileText, Calendar, Bell, 
  Heart, MessageCircle, Share2, MoreHorizontal, 
  Pin, TrendingUp, Search, Image as ImageIcon, Smile
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";

type Category = 'all' | 'company' | 'post' | 'event' | 'announcement';

interface Post {
  id: number;
  type: 'company' | 'post' | 'event' | 'announcement';
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  isPinned?: boolean;
  category?: string;
}

const categories: { id: Category; label: string; icon: React.ElementType }[] = [
  { id: 'all', label: 'Tất cả', icon: Home },
  { id: 'company', label: 'Tin công ty', icon: Building2 },
  { id: 'post', label: 'Bài viết', icon: FileText },
  { id: 'event', label: 'Sự kiện', icon: Calendar },
  { id: 'announcement', label: 'Thông báo', icon: Bell },
];

const posts: Post[] = [
  {
    id: 1,
    type: 'announcement',
    isPinned: true,
    author: {
      name: "Ban Truyền thông",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "Admin",
    },
    content: "📢 THÔNG BÁO QUAN TRỌNG\n\nKính gửi toàn thể CBNV,\n\nNgày 15/04/2026, Vietbank sẽ tổ chức Hội thảo chuyển đổi số với sự tham gia của các chuyên gia hàng đầu. Tất cả CBNV vui lòng đăng ký tham gia trước ngày 10/04/2026.\n\n📍 Địa điểm: Hội trường tầng 12, Tòa nhà Hội sở chính\n⏰ Thời gian: 14:00 - 17:00",
    timestamp: "2 giờ trước",
    likes: 156,
    comments: 42,
    category: "Thông báo",
  },
  {
    id: 2,
    type: 'company',
    author: {
      name: "Phòng Nhân sự",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      role: "Phòng NS",
    },
    content: "🎉 CHÚC MỪNG!\n\nChúng tôi vui mừng thông báo danh sách CBNV xuất sắc tháng 3/2026:\n\n🏆 Nhân viên xuất sắc: Nguyễn Văn A - Chi nhánh TP.HCM\n🥈 Gương sáng: Trần Thị B - Chi nhánh Hà Nội\n🥉 Tiến bộ vượt trội: Lê Văn C - Chi nhánh Đà Nẵng\n\nCảm ơn các bạn đã nỗ lực và đóng góp cho sự phát triển của Vietbank!",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    timestamp: "5 giờ trước",
    likes: 89,
    comments: 23,
    category: "Tin công ty",
  },
  {
    id: 3,
    type: 'post',
    author: {
      name: "Nguyễn Minh Tuấn",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "Chuyên viên - Khối IT",
    },
    content: "Hôm nay mình tham gia buổi training về AI trong ngân hàng, cảm thấy rất hữu ích! 🎓\n\nCảm ơn công ty đã tạo cơ hội để chúng mình học hỏi và phát triển. Ai quan tâm có thể xem lại tài liệu trong thư viện nội bộ nhé!\n\n#Vietbank #Learning #AI",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    timestamp: "8 giờ trước",
    likes: 67,
    comments: 15,
    category: "Bài viết",
  },
  {
    id: 4,
    type: 'event',
    author: {
      name: "Ban Công tác Cộng đồng",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      role: "BTC",
    },
    content: "🌿 MÙA HÈ XANH VIETBANK 2026\n\nChiến dịch mùa hè xanh sẽ diễn ra tại huyện đảo Phú Quý, Bình Thuận từ 01/06 - 30/06/2026.\n\n📌 Hoạt động chính:\n- Xây dựng 2 điểm trường tiểu học\n- Tổ chức các buổi sinh hoạt với học sinh\n- Thăm hỏi và tặng quà cho hộ gia đình khó khăn\n\n🙋‍♂️ Số lượng tình nguyện viên: 50 người\n📝 Đăng ký: Link trong bio\n\nHãy cùng Vietbank lan tỏa yêu thương! 💚",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=400&fit=crop",
    timestamp: "1 ngày trước",
    likes: 234,
    comments: 56,
    category: "Sự kiện",
  },
  {
    id: 5,
    type: 'post',
    author: {
      name: "Trần Thị Hương",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      role: "Trưởng phòng - Khối KHDN",
    },
    content: "Chia sẻ kinh nghiệm: 5 tips để chào khách hàng hiệu quả hơn\n\n1. Luôn mỉm cười 👋\n2. Lắng nghe nhu cầu 🎯\n3. Đưa ra giải pháp phù hợp 💡\n4. Follow up đúng thời điểm ⏰\n5. Xây dựng mối quan hệ lâu dài 🤝\n\nCả nhà cùng tham khảo nhé!",
    timestamp: "1 ngày trước",
    likes: 112,
    comments: 28,
    category: "Bài viết",
  },
  {
    id: 6,
    type: 'company',
    author: {
      name: "Ban Phát triển",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      role: "Ban Phát triển",
    },
    content: "📊 THÀNH TÍCH QUÝ I/2026\n\nVietbank đạt được những kết quả ấn tượng:\n\n✅ Tổng tài sản tăng 15% so với cùng kỳ\n✅ Lợi nhuận trước thuế đạt 2.500 tỷ đồng\n✅ Số lượng khách hàng mới tăng 20%\n✅ Chỉ số hài lòng khách hàng đạt 92%\n\nCảm ơn sự đóng góp của toàn thể CBNV! 💪",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    timestamp: "2 ngày trước",
    likes: 345,
    comments: 67,
    category: "Tin công ty",
  },
];

const trendingTopics = [
  { name: "#ChuyểnĐổiSố", posts: 45 },
  { name: "#MùaHèXanh2026", posts: 32 },
  { name: "#Vietbanker's Story", posts: 28 },
  { name: "#ThiĐuaThànhTích", posts: 21 },
];

export default function NewsfeedPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [showNotification, setShowNotification] = useState(false);

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.type === activeCategory);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header onNotificationClick={() => setShowNotification(true)} />

      <Notification
        show={showNotification}
        onClose={() => setShowNotification(false)}
        title="Newsfeed"
        message="Chào mừng đến với trang tin tức nội bộ!"
        type="info"
      />

      <main className="flex-1 bg-slate-50 dark:bg-background-dark/30">
        {/* Hero Banner */}
        {/* <section className="relative h-[200px] w-full overflow-hidden bg-gradient-to-r from-primary via-blue-600 to-blue-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          <div className="relative z-10 flex h-full max-w-[1200px] mx-auto px-4 items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-2">
                Newsfeed
              </h1>
              <p className="text-blue-100 text-lg">
                Tin tức nội bộ - Cập nhật hàng ngày
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl">
              <Search className="w-5 h-5 text-white" />
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="bg-transparent border-none outline-none text-white placeholder:text-blue-200 w-40"
              />
            </div>
          </div>
        </section> */}

        {/* Main Content */}
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Sidebar - Categories */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800">
                  <h3 className="font-black text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                    Danh mục
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          activeCategory === cat.id
                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <cat.icon className="w-5 h-5" />
                        <span className="font-semibold text-sm">{cat.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800">
                  <h3 className="font-black text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link href="/communication" className="block px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      📢 Truyền thông nội bộ
                    </Link>
                    <Link href="/community" className="block px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      ❤️ Hoạt động cộng đồng
                    </Link>
                    <Link href="/competition" className="block px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      🏆 Thi đua & Khen thưởng
                    </Link>
                    <Link href="/nguoi-vietbank" className="block px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      👥 Người Vietbank
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Feed */}
            <div className="lg:col-span-6 space-y-4">
              {/* Create Post */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold">
                    V
                  </div>
                  <button className="flex-1 text-left px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    Bạn đang nghĩ gì?
                  </button>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <ImageIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Ảnh/Video</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium">Sự kiện</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Smile className="w-5 h-5" />
                    <span className="text-sm font-medium">Cảm xúc</span>
                  </button>
                </div>
              </div>

              {/* Category Tabs - Mobile */}
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                      activeCategory === cat.id
                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Posts */}
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden"
                >
                  {/* Post Header */}
                  <div className="p-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={44}
                          height={44}
                          className="rounded-full object-cover"
                        />
                        {post.isPinned && (
                          <div className="absolute -top-1 -right-1 bg-primary rounded-full p-1">
                            <Pin className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 dark:text-white">
                            {post.author.name}
                          </span>
                          {post.isPinned && (
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-primary/10 text-primary">
                              Đã ghim
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span>{post.author.role}</span>
                          <span>•</span>
                          <span>{post.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-2">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Post Content */}
                  <div className="px-4 pb-3">
                    <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                      {post.content}
                    </p>
                  </div>

                  {/* Post Image */}
                  {post.image && (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={post.image}
                        alt="Post image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Post Stats */}
                  <div className="px-4 py-3 flex items-center justify-between text-sm text-slate-500 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </span>
                    </div>
                    <span className="text-xs">
                      {post.category}
                    </span>
                  </div>

                  {/* Post Actions */}
                  <div className="px-4 py-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-medium">Thích</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Bình luận</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span className="text-sm font-medium">Chia sẻ</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Sidebar - Featured & Trending */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-4">
                {/* Featured/Pinned */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-4">
                    <Pin className="w-4 h-4 text-primary" />
                    <h3 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-wider">
                      Tin nổi bật
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="group cursor-pointer">
                      <div className="text-xs text-primary font-bold mb-1">THÔNG BÁO</div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                        Hội thảo chuyển đổi số 2026 - Đăng ký ngay
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">15/04/2026</p>
                    </div>
                    <div className="group cursor-pointer">
                      <div className="text-xs text-primary font-bold mb-1">TIN CÔNG TY</div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                        CBNV xuất sắc tháng 3/2026 - Danh sách chính thức
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">26/03/2026</p>
                    </div>
                    <div className="group cursor-pointer">
                      <div className="text-xs text-primary font-bold mb-1">SỰ KIỆN</div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                        Mùa hè xanh Vietbank 2026 - Tình nguyện viên
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">01/06/2026</p>
                    </div>
                  </div>
                </div>

                {/* Trending Topics */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <h3 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-wider">
                      Xu hướng
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between group cursor-pointer">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                          {topic.name}
                        </span>
                        <span className="text-xs text-slate-400">{topic.posts} bài</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-4 text-white">
                  <h3 className="font-black text-sm uppercase tracking-wider mb-4">
                    Thống kê tuần
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-black">156</div>
                      <div className="text-xs opacity-80">Bài viết mới</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black">2.4k</div>
                      <div className="text-xs opacity-80">Lượt tương tác</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}