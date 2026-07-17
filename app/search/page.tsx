"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { Notification } from "@/components/Notification";
import { Calendar, Filter, Search, X, ChevronDown, ChevronUp } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  url: string;
  author?: string;
  views?: number;
}

const MOCK_RESULTS: SearchResult[] = [
  {
    id: "1",
    title: "Tin tức NovaCore tháng 3/2026 - Triển khai kế hoạch kinh doanh quý 2",
    excerpt: "Tập đoàn Công nghệ NovaCore vừa tổ chức cuộc họp đánh giá kết quả kinh doanh tháng 3 và triển khai kế hoạch quý 2/2026...",
    category: "Tin tức",
    date: "19/03/2026",
    url: "/",
    author: "Ban Truyền thông",
    views: 1250,
  },
  {
    id: "2",
    title: "Lịch sự kiện nội bộ quý 1/2026",
    excerpt: "Danh sách các sự kiện nội bộ dự kiến diễn ra trong quý 1 năm 2026...",
    category: "Sự kiện",
    date: "15/03/2026",
    url: "/",
    author: "Ban Tổ chức",
    views: 890,
  },
  {
    id: "3",
    title: "Tuyển dụng nhân sự năm 2026 - 50 vị trí các cấp",
    excerpt: "NovaCore thông báo tuyển dụng 50 vị trí việc làm các cấp tại chi nhánh và phòng giao dịch trên toàn quốc...",
    category: "Tuyển dụng",
    date: "10/03/2026",
    url: "/nguoi-novacore",
    author: "Ban Nhân sự",
    views: 2100,
  },
  {
    id: "4",
    title: "Văn hóa doanh nghiệp NovaCore - Đồng hành phát triển",
    excerpt: "NovaCore luôn coi trọng việc xây dựng văn hóa doanh nghiệp, tạo môi trường làm việc chuyên nghiệp và thân thiện...",
    category: "Văn hóa",
    date: "05/03/2026",
    url: "/nguoi-novacore",
    author: "Ban Văn hóa",
    views: 750,
  },
  {
    id: "5",
    title: "Thông báo lịch nghỉ lễ 30/4 và 1/5",
    excerpt: "Thông báo về việc nghỉ lễ kỷ niệm ngày 30/4 và 1/5 dành cho toàn thể CBNV...",
    category: "Thông báo",
    date: "01/03/2026",
    url: "/",
    author: "Ban Nhân sự",
    views: 1800,
  },
  {
    id: "6",
    title: "Hoạt động thiện nguyện mùa xuân 2026 - Trao yêu thương",
    excerpt: "Đoàn Thanh niên NovaCore tổ chức chương trình thiện nguyện mùa xuân tại các tỉnh miền Trung...",
    category: "Cộng đồng",
    date: "28/02/2026",
    url: "/",
    author: "Đoàn Thanh niên",
    views: 650,
  },
  {
    id: "7",
    title: "Chương trình đào tạo nhân viên 2026",
    excerpt: "Kế hoạch đào tạo và phát triển năng lực cho cán bộ nhân viên trong năm 2026...",
    category: "Đào tạo",
    date: "20/02/2026",
    url: "/",
    author: "Ban Đào tạo",
    views: 920,
  },
  {
    id: "9",
    title: "Chiến lược chuyển đổi số toàn diện 2026-2030",
    excerpt: "NovaCore đẩy mạnh ứng dụng công nghệ số trong tất cả hoạt động kinh doanh, cải thiện trải nghiệm khách hàng...",
    category: "Thông báo",
    date: "25/03/2026",
    url: "/",
    author: "Ban Công nghệ",
    views: 3200,
  },
  {
    id: "10",
    title: "Chương trình đào tạo kỹ năng mềm cho nhân viên",
    excerpt: "Khóa đào tạo kỹ năng giao tiếp, làm việc nhóm và quản lý thời gian dành cho cán bộ nhân viên...",
    category: "Đào tạo",
    date: "20/03/2026",
    url: "/",
    author: "Ban Đào tạo",
    views: 1450,
  },
  {
    id: "11",
    title: "Ứng dụng công nghệ AI trong dịch vụ công nghệ",
    excerpt: "NovaCore triển khai hệ thống AI để tối ưu hóa quy trình tư vấn và hỗ trợ khách hàng...",
    category: "Tin tức",
    date: "18/03/2026",
    url: "/",
    author: "Ban Công nghệ",
    views: 2800,
  },
  {
    id: "12",
    title: "Đào tạo chuyên môn nghiệp vụ cho cán bộ tín dụng",
    excerpt: "Chương trình đào tạo nâng cao kỹ năng đánh giá rủi ro tín dụng và quản lý danh mục cho vay...",
    category: "Đào tạo",
    date: "15/03/2026",
    url: "/",
    author: "Ban Tín dụng",
    views: 1200,
  },
  {
    id: "13",
    title: "Triển khai hệ thống công nghệ số thế hệ mới",
    excerpt: "NovaCore hoàn thành nâng cấp hệ thống core platform với công nghệ tiên tiến nhất...",
    category: "Tin tức",
    date: "12/03/2026",
    url: "/",
    author: "Ban Công nghệ",
    views: 3500,
  },
  {
    id: "14",
    title: "Chương trình đào tạo lãnh đạo trẻ",
    excerpt: "Đào tạo và phát triển đội ngũ lãnh đạo tương lai của NovaCore với chương trình mentoring...",
    category: "Đào tạo",
    date: "08/03/2026",
    url: "/",
    author: "Ban Nhân sự",
    views: 980,
  },
  {
    id: "15",
    title: "Công nghệ blockchain trong thanh toán điện tử",
    excerpt: "Nghiên cứu và thử nghiệm ứng dụng công nghệ blockchain để nâng cao bảo mật giao dịch...",
    category: "Tin tức",
    date: "05/03/2026",
    url: "/",
    author: "Ban Công nghệ",
    views: 2100,
  },
];

const CATEGORIES = [
  "Tất cả",
  "Tin tức",
  "Sự kiện",
  "Thông báo",
  "Tuyển dụng",
  "Văn hóa",
  "Cộng đồng",
  "Đào tạo",
  "Thi đua",
];

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [relatedResults, setRelatedResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (query) {
      setIsSearching(true);
      setTimeout(() => {
        const filtered = MOCK_RESULTS.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.excerpt.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setFilteredResults(filtered);
        setIsSearching(false);
      }, 500);
    } else if (selectedCategory !== "Tất cả") {
      // Show articles by category when no search query but category is selected
      const filtered = MOCK_RESULTS.filter(item => item.category === selectedCategory);
      setResults(filtered);
      setFilteredResults(filtered);
    } else {
      setResults([]);
      setFilteredResults([]);
    }
  }, [query, selectedCategory]);

  // Apply filters
  useEffect(() => {
    let filtered = [...results];

    // Category filter
    if (selectedCategory !== "Tất cả") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Date range filter
    if (dateFrom) {
      filtered = filtered.filter(item => new Date(item.date.split('/').reverse().join('-')) >= new Date(dateFrom));
    }
    if (dateTo) {
      filtered = filtered.filter(item => new Date(item.date.split('/').reverse().join('-')) <= new Date(dateTo));
    }

    // Sort
    switch (sortBy) {
      case "date_desc":
        filtered.sort((a, b) => new Date(b.date.split('/').reverse().join('-')).getTime() - new Date(a.date.split('/').reverse().join('-')).getTime());
        break;
      case "date_asc":
        filtered.sort((a, b) => new Date(a.date.split('/').reverse().join('-')).getTime() - new Date(b.date.split('/').reverse().join('-')).getTime());
        break;
      case "views":
        filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      default: // relevance - keep original order
        break;
    }

    // If no results found with current filters, show related articles
    if (filtered.length === 0 && results.length > 0) {
      // Find related articles by category or partial matches
      const related = MOCK_RESULTS.filter(item => {
        // Exclude already shown results
        if (results.some(r => r.id === item.id)) return false;

        // Find articles in same category
        if (selectedCategory !== "Tất cả" && item.category === selectedCategory) return true;

        // Find articles with partial keyword matches
        const keywords = query.toLowerCase().split(' ').filter(word => word.length > 2);
        return keywords.some(keyword =>
          item.title.toLowerCase().includes(keyword) ||
          item.excerpt.toLowerCase().includes(keyword) ||
          item.category.toLowerCase().includes(keyword)
        );
      }).slice(0, 5); // Limit to 5 related articles

      setRelatedResults(related);
    } else {
      setRelatedResults([]);
    }

    setFilteredResults(filtered);
  }, [results, selectedCategory, dateFrom, dateTo, sortBy, query]);

  const clearFilters = () => {
    setSelectedCategory("Tất cả");
    setDateFrom("");
    setDateTo("");
    setSortBy("relevance");
    setRelatedResults([]);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header onNotificationClick={() => setShowNotification(true)} />

      <Notification
        show={showNotification}
        onClose={() => setShowNotification(false)}
        title="Tìm kiếm nâng cao"
        message="Sử dụng bộ lọc để tìm kiếm chính xác hơn!"
        type="info"
      />

      {/* Search Header */}
      <div className="bg-primary py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-6 h-6 text-white" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Tìm kiếm nâng cao</h1>
          </div>
          <div className="max-w-2xl">
            {query && (
              <p className="text-white/80 mt-3 text-sm">
                Kết quả tìm kiếm cho &quot;<span className="font-semibold">{query}</span>&quot;
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full px-4 py-6 sm:px-6 lg:px-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Bộ lọc
                </h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {showFilters ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Danh mục
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    {CATEGORIES.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Date Range Filter */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Khoảng thời gian
                  </label>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Từ ngày</label>
                      <input
                        type="date"
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Đến ngày</label>
                      <input
                        type="date"
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Sắp xếp theo
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="relevance">Liên quan nhất</option>
                    <option value="date_desc">Mới nhất</option>
                    <option value="date_asc">Cũ nhất</option>
                    <option value="views">Xem nhiều nhất</option>
                  </select>
                </div>

                {/* Apply Filters Button */}
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full px-4 py-4 rounded-2xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Search className="w-5 h-5" />
                  Tìm kiếm theo bộ lọc
                </button>

                {/* Clear Filters */}
                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Xóa bộ lọc
                </button>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="lg:col-span-9">
            {isSearching ? (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Search className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                  <p className="text-slate-500 font-medium">Đang tìm kiếm...</p>
                </div>
              </div>
            ) : filteredResults.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Tìm thấy <span className="font-semibold text-primary">{filteredResults.length}</span> kết quả
                  </p>
                  <div className="text-xs text-slate-400">
                    Hiển thị 1-{filteredResults.length} của {results.length}
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredResults.map((result) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      className="block bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:border-primary/20 transition-all group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                              {result.category}
                            </span>
                            <span className="text-xs text-slate-400">{result.date}</span>
                            {result.author && (
                              <span className="text-xs text-slate-400">• {result.author}</span>
                            )}
                          </div>

                          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {result.title}
                          </h2>

                          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-4">
                            {result.excerpt}
                          </p>

                          <div className="flex items-center gap-4 text-xs text-slate-400">
                            {result.views && (
                              <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">visibility</span>
                                {result.views.toLocaleString()} lượt xem
                              </span>
                            )}
                            <span className="text-primary font-medium group-hover:underline">
                              Đọc thêm →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : query ? (
              <div className="space-y-8">
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full mb-6">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Không tìm thấy kết quả chính xác
                  </h3>
                  <p className="text-slate-500 mb-6 max-w-md mx-auto">
                    Không có bài viết nào phù hợp với từ khóa &quot;{query}&quot; và bộ lọc đã chọn.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Xóa bộ lọc và thử lại
                  </button>
                </div>

                {relatedResults.length > 0 && (
                  <div className="space-y-4">
                    <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">lightbulb</span>
                        Bài viết liên quan
                      </h4>
                      <p className="text-sm text-slate-500 mb-6">
                        Có thể bạn quan tâm đến những bài viết sau:
                      </p>
                    </div>

                    <div className="space-y-4">
                      {relatedResults.map((result) => (
                        <Link
                          key={result.id}
                          href={result.url}
                          className="block bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:border-primary/20 transition-all group"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                                  {result.category}
                                </span>
                                <span className="text-xs text-slate-400">{result.date}</span>
                                {result.author && (
                                  <span className="text-xs text-slate-400">• {result.author}</span>
                                )}
                              </div>

                              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {result.title}
                              </h2>

                              <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-4">
                                {result.excerpt}
                              </p>

                              <div className="flex items-center gap-4 text-xs text-slate-400">
                                {result.views && (
                                  <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">visibility</span>
                                    {result.views.toLocaleString()} lượt xem
                                  </span>
                                )}
                                <span className="text-primary font-medium group-hover:underline">
                                  Đọc thêm →
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full mb-6">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Bắt đầu tìm kiếm
                </h3>
                <p className="text-slate-500 max-w-md mx-auto">
                  Nhập từ khóa vào ô tìm kiếm ở trên hoặc sử dụng bộ lọc để tìm kiếm bài viết, thông báo và sự kiện.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined animate-spin text-primary text-4xl">
            sync
          </span>
          <p className="text-slate-500 mt-4">Đang tải...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}