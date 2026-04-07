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
  Home
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const articleData = {
  id: 1,
  title: "Vietbank vươn tầm khát vọng: Kỷ niệm 19 năm thành lập và phát triển rực rỡ",
  category: "Sự kiện tiêu điểm",
  date: "27/03/2026",
  author: "Ban Truyền thông",
  views: 1523,
  likes: 89,
  comments: 52,
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtgF_STXYl4S9nBxM2yaT91lES9dw_gqQO3SbFb6ny_3uGKNfhfSualjcsETr80yNqtxwl_yzXWQ556qyjbiPcJ65WktlOV6MGCu6OJy7iB7fzaghc8nO38GqwS_oSurvrpPGOZ7FIjMcYcOR-lnkNuKd4KitXP3qsStN86Q1ZwOdBIX61Xnl_oBPUqjXPlVZ7WrbUzbNzQ2s8Ip5OhhO2Yelnk4BikbHZGRXpwb63aIZjbalo3qiNHTMV4fMYo7TK2OCHQLwPet90",
  content: `
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Hành trình 19 năm kiến tạo những giá trị bền vững và không ngừng đổi mới để phục vụ khách hàng tốt hơn mỗi ngày. Vietbank tự hào là người đồng hành tin cậy của hàng triệu khách hàng trên khắp cả nước.
    </p>
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Trong suốt 19 năm qua, Vietbank đã không ngừng phát triển và hoàn thiện, từ một ngân hàng nhỏ với tầm nhìn lớn đã trở thành một trong những ngân hàng thương mại cổ phần hàng đầu Việt Nam. Chúng tôi luôn đặt khách hàng làm trung tâm của mọi quyết định và hoạt động kinh doanh.
    </p>
    <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Những dấu mốc quan trọng</h2>
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Từ ngày thành lập đến nay, Vietbank đã đạt được nhiều thành tựu đáng kể: hệ thống chi nhánh mở rộng khắp cả nước, dịch vụ ngân hàng số hiện đại, và nhiều giải thưởng uy tín trong ngành tài chính.
    </p>
    <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Định hướng tương lai</h2>
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Hướng tới tương lai, Vietbank tiếp tục đẩy mạnh chuyển đổi số, mang đến những trải nghiệm ngân hàng hiện đại và tiện lợi nhất cho khách hàng. Chúng tôi cam kết duy trì vị thế là ngân hàng đáng tin cậy, luôn đồng hành cùng sự phát triển của khách hàng và cộng đồng.
    </p>
  `
};

const comments = [
  {
    id: 1,
    author: "Nguyễn Thị Lan",
    avatar: "",
    date: "2 giờ trước",
    content: "Rất tự hào là một thành viên Vietbank! Chúc ngân hàng ngày càng phát triển.",
    likes: 12,
    replies: [
      {
        id: 11,
        author: "Ban Truyền thông",
        date: "1 giờ trước",
        content: "Cảm ơn chị Lan! Sự đồng hành của chị chính là động lực để chúng tôi phát triển hơn nữa."
      }
    ]
  },
  {
    id: 2,
    author: "Trần Văn Minh",
    avatar: "",
    date: "5 giờ trước",
    content: "19 năm là một hành trình dài với nhiều thử thách. Chúc Vietbank tiếp tục thành công!",
    likes: 8,
    replies: []
  },
  {
    id: 3,
    author: "Lê Thị Hương",
    avatar: "",
    date: "1 ngày trước",
    content: "Nhân dịp kỷ niệm 19 năm, mong ngân hàng có thêm nhiều chương trình ưu đãi cho khách hàng.",
    likes: 15,
    replies: []
  }
];

export default function ArticlePage() {
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
              <Link href="/communication" className="text-slate-500 hover:text-primary transition-colors">
                Truyền thông
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <span className="text-primary font-medium truncate">{articleData.category}</span>
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                    {articleData.category}
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
                    <Eye className="w-4 h-4" />
                    <span>{articleData.views.toLocaleString()} lượt xem</span>
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

                        {/* Replies */}
                        {comment.replies.length > 0 && (
                          <div className="ml-6 mt-3 space-y-3">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="flex gap-3">
                                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                  <User className="w-4 h-4 text-primary" />
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-3 flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold text-slate-900 dark:text-white text-sm">{reply.author}</span>
                                    <span className="text-xs text-slate-400">{reply.date}</span>
                                  </div>
                                  <p className="text-slate-700 dark:text-slate-300 text-sm">{reply.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Related Articles */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary rounded-full"></span>
                  Bài viết liên quan
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Định hướng chiến lược số hóa ngân hàng giai đoạn 2024-2026", date: "26/03/2026", views: 856 },
                    { title: "Thư chúc mừng của Tổng Giám đốc nhân ngày Phụ nữ Việt Nam", date: "25/03/2026", views: 1243 },
                    { title: "Kết quả cuộc thi 'Ý tưởng sáng tạo Vietbank 2026'", date: "24/03/2026", views: 967 },
                  ].map((item, index) => (
                    <Link 
                      key={index} 
                      href="#"
                      className="block group"
                    >
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors line-clamp-2 mb-1">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span>{item.date}</span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" /> {item.views}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary rounded-full"></span>
                  Tin nổi bật
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Vietbank đạt lợi nhuận kỷ lục năm 2025", views: 2341 },
                    { title: "Ra mắt ứng dụng Vietbank Smart Banking phiên bản mới", views: 1892 },
                    { title: "Vietbank tài trợ 5 tỷ đồng cho quỹ vắc-xin COVID-19", views: 1567 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-2xl font-black text-primary/20">0{index + 1}</span>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer">
                          {item.title}
                        </h4>
                        <span className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                          <Eye className="w-3 h-3" /> {item.views} lượt xem
                        </span>
                      </div>
                    </div>
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
