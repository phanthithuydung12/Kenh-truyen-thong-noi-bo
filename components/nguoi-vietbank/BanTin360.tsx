"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
}

interface Edition {
  id: number;
  editionNumber: number;
  startDate: string;
  endDate: string;
  news: NewsItem[];
}

const editions: Edition[] = [
  {
    id: 1,
    editionNumber: 21,
    startDate: "03/03/2026",
    endDate: "17/03/2026",
    news: [
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
    ],
  },
  {
    id: 2,
    editionNumber: 20,
    startDate: "17/02/2026",
    endDate: "02/03/2026",
    news: [
      {
        id: 5,
        title: "Vietbank ra mắt tính năng QR Pay siêu tốc",
        summary: "Khách hàng Vietbank giờ đây có thể thanh toán bằng QR chỉ trong 3 giây với tính năng mới.",
        date: "28/02/2026",
        category: "Sản phẩm",
      },
      {
        id: 6,
        title: "Hội nghị tổng kết hoạt động kinh doanh năm 2025",
        summary: "Vietbank tổ chức hội nghị tổng kết năm 2025 và đề ra phương hướng năm 2026.",
        date: "25/02/2026",
        category: "Sự kiện",
      },
    ],
  },
  {
    id: 3,
    editionNumber: 19,
    startDate: "03/02/2026",
    endDate: "16/02/2026",
    news: [
      {
        id: 7,
        title: "Lễ phát động thi đua cao điểm đầu năm 2026",
        summary: "Vietbank phát động thi đua cao điểm đầu năm mới với nhiều phần thưởng hấp dẫn cho CBNV.",
        date: "10/02/2026",
        category: "Thi đua",
      },
    ],
  },
];

export function BanTin360() {
  const [selectedEdition, setSelectedEdition] = useState<Edition>(editions[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Bản tin 360°
        </h1>
        
        {/* Edition Selector */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-900 dark:text-slate-100 hover:shadow-md transition-all"
          >
            <span className="text-primary font-black">Kỳ {selectedEdition.editionNumber}</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-600 dark:text-slate-400">
              {selectedEdition.startDate} - {selectedEdition.endDate}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-20 overflow-hidden">
              {editions.map((edition: Edition) => (
                <button
                  key={edition.id}
                  onClick={() => {
                    setSelectedEdition(edition);
                    setShowDropdown(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                    selectedEdition.id === edition.id ? 'bg-primary/5' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      Kỳ {edition.editionNumber}
                    </span>
                    {selectedEdition.id === edition.id && (
                      <span className="text-xs text-primary font-semibold">Đang xem</span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500">
                    {edition.startDate} - {edition.endDate}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Edition Title */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-6 text-white">
        <h2 className="text-xl font-black">
          Bản tin Vietbank 360° Kỳ {selectedEdition.editionNumber}
        </h2>
        <p className="text-sm opacity-90 mt-1">
          Từ ngày {selectedEdition.startDate} đến ngày {selectedEdition.endDate}
        </p>
      </div>

      {/* News List */}
      <div className="space-y-4">
        {selectedEdition.news.map((item) => (
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
                <Link href="/nguoi-vietbank/ban-tin" className="mt-4 text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                  Đọc thêm
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
