"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { useState } from "react";
import { 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Clock, 
  User,
  ChevronRight,
  Send,
  Calendar,
  Home
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const articleData = {
  id: 1,
  editionNumber: 21,
  editionDate: "03/03/2026 - 17/03/2026",
  title: "Vietbank đạt top 10 ngân hàng uy tín nhất Việt Nam 2024",
  category: "Thành tích",
  date: "16/03/2026",
  author: "Ban Truyền thông",
  views: 856,
  likes: 45,
  comments: 12,
  image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1600&auto=format&fit=crop",
  content: `
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Với những nỗ lực không ngừng trong việc nâng cao chất lượng dịch vụ và đổi mới công nghệ, Vietbank vinh dự được xếp hạng trong top 10 ngân hàng uy tín nhất Việt Nam năm 2024. Đây là sự công nhận xứng đáng cho những đóng góp và cam kết của ngân hàng trong suốt thời gian qua.
    </p>
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Theo công bố của Vietnam Report, Vietbank đã có bước tiến đáng kể trong các tiêu chí đánh giá bao gồm: chất lượng dịch vụ, năng lực tài chính, hoạt động truyền thông và trách nhiệm xã hội. Việc lọt vào top 10 khẳng định vị thế của Vietbank trong ngành ngân hàng Việt Nam.
    </p>
    <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Những yếu tố dẫn đến thành công</h2>
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Thành tích này đến từ sự nỗ lực của toàn thể CBNV Vietbank trong việc mang đến những sản phẩm, dịch vụ tốt nhất cho khách hàng. Đồng thời, ngân hàng đã không ngừng đổi mới công nghệ, cải tiến quy trình để nâng cao trải nghiệm dịch vụ.
    </p>
    <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Định hướng phát triển</h2>
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Hướng tới, Vietbank sẽ tiếp tục duy trì và phát huy những thành tựu đã đạt được, đồng thời phát triển thêm nhiều sản phẩm, dịch vụ mới để đáp ứng tốt hơn nhu cầu của khách hàng. Ngân hàng cam kết sẽ luôn đồng hành cùng sự phát triển của đất nước và đóng góp vào sự thịnh vượng của ngành tài chính Việt Nam.
    </p>
  `
};

const comments = [
  {
    id: 1,
    author: "Nguyễn Thị Lan",
    date: "2 giờ trước",
    content: "Rất tự hào là thành viên Vietbank! Thành quả xứng đáng với những nỗ lực của tất cả mọi người.",
    likes: 15,
    replies: []
  },
  {
    id: 2,
    author: "Trần Văn Minh",
    date: "5 giờ trước",
    content: "Chúc mừng Vietbank! Hy vọng sẽ tiếp tục giữ vững vị thế này trong những năm tới.",
    likes: 8,
    replies: []
  }
];

export default function BanTinDetailPage() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(articleData.likes);
  const [showCommentInput, setShowCommentInput] = useState(true);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: articleData.title,
        text: articleData.content.replace(/<[^>]*>/g, '').substring(0, 100),
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Đã sao chép link bài viết!");
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      alert("Bình luận đã được gửi!");
      setNewComment("");
      setShowCommentInput(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1 bg-slate-50 dark:bg-background-dark/30">
        {/* Breadcrumb */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-[1200px] mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-slate-500 hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <Link href="/nguoi-vietbank" className="text-slate-500 hover:text-primary transition-colors">
                Người Vietbank
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <Link href="/nguoi-vietbank?tab=ban-tin-360" className="text-slate-500 hover:text-primary transition-colors">
                Bản tin 360°
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <span className="text-primary font-medium truncate">Kỳ {articleData.editionNumber}</span>
            </nav>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-[1200px] mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Article Header */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-10 shadow-sm mb-6">
                {/* Edition Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-blue-600 text-white text-sm font-bold rounded-full">
                    Bản tin 360° - Kỳ {articleData.editionNumber}
                  </span>
                </div>
                
                <h1 className="text-2xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                  {articleData.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-slate-500 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{articleData.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{articleData.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>Kỳ {articleData.editionNumber} ({articleData.editionDate})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    <span>{articleData.views} lượt xem</span>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mt-6 mb-8">
                  <Image
                    src={articleData.image}
                    alt={articleData.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Article Body */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: articleData.content }}
                />

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-8 mt-8 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleLike}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                        liked 
                          ? 'bg-red-50 text-red-500 border border-red-200' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                      <span className="font-medium">{likeCount}</span>
                    </button>
                    <button 
                      onClick={() => setShowCommentInput(!showCommentInput)}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">{articleData.comments}</span>
                    </button>
                    <button 
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    >
                      <Share2 className="w-5 h-5" />
                      <span className="font-medium">Chia sẻ</span>
                    </button>
                  </div>
                  <button 
                    onClick={handleSave}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      saved 
                        ? 'bg-primary text-white' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
                    <span className="font-medium">{saved ? 'Đã lưu' : 'Lưu bài'}</span>
                  </button>
                </div>
              </div>

              {/* Comment Section */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-10 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Bình luận ({comments.length})
                </h3>

                {/* Comment Input */}
                {showCommentInput && (
                  <form onSubmit={handleSubmitComment} className="mb-8">
                    <div className="flex gap-3">
                      <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <textarea
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="Viết bình luận của bạn..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          rows={3}
                        />
                        <div className="flex justify-end gap-2 mt-2">
                          <button
                            type="button"
                            onClick={() => setShowCommentInput(false)}
                            className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
                          >
                            Hủy
                          </button>
                          <button
                            type="submit"
                            className="px-4 py-2 bg-primary text-white rounded-xl font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
                          >
                            Gửi <Send className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-slate-500" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-slate-900 dark:text-white">{comment.author}</span>
                            <span className="text-xs text-slate-400">{comment.date}</span>
                          </div>
                          <p className="text-slate-700 dark:text-slate-300">{comment.content}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <button className="flex items-center gap-1 text-sm text-slate-500 hover:text-red-500 transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>{comment.likes}</span>
                            </button>
                            <button className="text-sm text-slate-500 hover:text-primary transition-colors font-medium">
                              Trả lời
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Other Articles in Edition */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary rounded-full"></span>
                  Tin khác trong Kỳ {articleData.editionNumber}
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Chương trình đào tạo kỹ năng lãnh đạo cho CBNV", category: "Đào tạo" },
                    { title: "Triển khai hệ thống Core Banking mới", category: "Công nghệ" },
                    { title: "Khai trương chi nhánh Vietbank tại Cần Thơ", category: "Mở rộng" },
                  ].map((item, index) => (
                    <Link 
                      key={index} 
                      href="#"
                      className="block group p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <span className="text-xs text-primary font-semibold">{item.category}</span>
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors line-clamp-2 mt-1">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Editions */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary rounded-full"></span>
                  Các kỳ khác
                </h3>
                <div className="space-y-3">
                  {[
                    { edition: 20, date: "17/02 - 02/03/2026" },
                    { edition: 19, date: "03/02 - 16/02/2026" },
                    { edition: 18, date: "20/01 - 02/02/2026" },
                  ].map((item, index) => (
                    <Link 
                      key={index} 
                      href="#"
                      className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <span className="font-bold text-slate-900 dark:text-white">Kỳ {item.edition}</span>
                      <span className="text-xs text-slate-500">{item.date}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
