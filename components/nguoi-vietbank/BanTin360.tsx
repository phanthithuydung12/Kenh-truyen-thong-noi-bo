"use client";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  image?: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Vietbank đạt top 10 ngân hàng uy tín nhất Việt Nam 2024",
    summary: "Với những nỗ lực không ngừng trong việc nâng cao chất lượng dịch vụ và đổi mới công nghệ, Vietbank vinh dự được xếp hạng trong top 10 ngân hàng uy tín nhất.",
    date: "16/03/2026",
    category: "Thành tích",
  },
  {
    id: 2,
    title: "Chương trình đào tạo kỹ năng lãnh đạo cho cán bộ quản lý",
    summary: "Vietbank tổ chức khóa đào tạo kỹ năng lãnh đạo và quản lý cho 100+ cán bộ quản lý cấp trung tại resort 5 sao Đà Nẵng.",
    date: "14/03/2026",
    category: "Đào tạo",
  },
  {
    id: 3,
    title: "Triển khai hệ thống Core Banking mới thế hệ",
    summary: "Dự án nâng cấp hệ thống Core Banking với công nghệ hiện đại nhất, nâng cao trải nghiệm khách hàng và hiệu suất vận hành.",
    date: "10/03/2026",
    category: "Công nghệ",
  },
  {
    id: 4,
    title: "Khai trương chi nhánh Vietbank tại TP. Cần Thơ",
    summary: "Chi nhánh Cần Thơ chính thức đi vào hoạt động, mở rộng mạng lưới phục vụ khách hàng khu vực miền Tây Nam Bộ.",
    date: "05/03/2026",
    category: "Mở rộng",
  },
];

export function BanTin360() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Bản tin 360°
        </h1>
        <span className="text-sm text-slate-500">Cập nhật mới nhất</span>
      </div>

      {/* News List */}
      <div className="space-y-4">
        {newsData.map((item) => (
          <article
            key={item.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {item.summary}
                </p>
                <button className="mt-4 text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                  Đọc thêm
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center pt-4">
        <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors">
          Xem thêm tin tức
        </button>
      </div>
    </div>
  );
}
