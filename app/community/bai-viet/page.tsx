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
  MapPin,
  Users,
  Home
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const articleData = {
  id: 1,
  title: "Xuân gắn kết - Tết yêu thương 2025",
  category: "Hoạt động thiện nguyện",
  date: "15/01/2025",
  author: "Ban Công tác Xã hội",
  location: "Các tỉnh vùng cao phía Bắc",
  views: 1523,
  likes: 450,
  comments: 24,
  participants: 120,
  image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?q=80&w=1600&auto=format&fit=crop",
  content: `
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Hơn 1.000 phần quà Tết đã được cán bộ nhân viên Vietbank trao tận tay các hộ nghèo tại các tỉnh vùng cao phía Bắc. Đây là hoạt động thường niên nhằm mang đến một cái Tết ấm áp cho những hoàn cảnh khó khăn.
    </p>
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Với tinh thần "Tết là để sẻ chia", đoàn thiện nguyện Vietbank đã vượt qua những con đường núi hiểm trở để đến từng hộ gia đình, trao gửi không chỉ những phần quà vật chất mà còn là sự quan tâm, yêu thương của tập thể Người Vietbank.
    </p>
    <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Những khoảnh khắc đáng nhớ</h2>
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Trong suốt hành trình 5 ngày, đoàn đã đến với hơn 500 hộ gia đình tại các huyện vùng cao của tỉnh Lào Cai, Yên Bái và Hà Giang. Mỗi phần quà gồm gạo, dầu ăn, mì tôm và tiền mặt để các gia đình có thể tự chuẩn bị cho ngày Tết.
    </p>
    <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Ý nghĩa của hoạt động</h2>
    <p class="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Hoạt động này không chỉ giúp đỡ những hoàn cảnh khó khăn mà còn thể hiện truyền thống tương thân, tương ái của dân tộc Việt Nam. Đây cũng là dịp để CBNV Vietbank thể hiện lòng nhân ái và trách nhiệm xã hội của mình đối với cộng đồng.
    </p>
  `
};

const comments = [
  {
    id: 1,
    author: "Nguyễn Thị Lan",
    avatar: "",
    date: "2 giờ trước",
    content: "Rất xúc động với hoạt động ý nghĩa này. Năm sau em xin được tham gia cùng đoàn!",
    likes: 45,
    replies: [
      {
        id: 11,
        author: "Ban Công tác Xã hội",
        date: "1 giờ trước",
        content: "Cảm ơn bạn Lan! Chúng tôi luôn chào đón sự tham gia của tất cả CBNV."
      }
    ]
  },
  {
    id: 2,
    author: "Trần Văn Minh",
    avatar: "",
    date: "5 giờ trước",
    content: "Một hoạt động rất nhân văn của Vietbank. Chúc các anh chị em trong đoàn luôn khỏe mạnh!",
    likes: 32,
    replies: []
  },
  {
    id: 3,
    author: "Lê Thị Hương",
    avatar: "",
    date: "1 ngày trước",
    content: "Em rất tự hào là thành viên của Vietbank. Cảm ơn công ty đã tạo cơ hội để chúng em được sẻ chia.",
    likes: 28,
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
              <Link href="/community" className="text-slate-500 hover:text-primary transition-colors">
                Hoạt động cộng đồng
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
                  <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-bold rounded-full">
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
                    <MapPin className="w-4 h-4" />
                    <span>{articleData.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>{articleData.participants} người tham gia</span>
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
              {/* Related Activities */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary rounded-full"></span>
                  Hoạt động liên quan
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Hiến máu nhân đạo: Giọt hồng Vietbank", date: "15/02/2025", likes: 320 },
                    { title: "Trồng cây xanh - Cho đời thêm xanh", date: "05/06/2024", likes: 280 },
                    { title: "Vietbank - Chặng đường 0đ 2025", date: "15/04/2025", likes: 156 },
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
                          <Heart className="w-3 h-3" /> {item.likes}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Upcoming Campaigns */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary rounded-full"></span>
                  Chiến dịch sắp diễn ra
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Vietbank - Chặng đường 0đ 2026", date: "15/04/2026", location: "Miền Tây" },
                    { title: "Mùa hè xanh Vietbank", date: "01/06/2026", location: "Phú Quý" },
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {item.location}
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
