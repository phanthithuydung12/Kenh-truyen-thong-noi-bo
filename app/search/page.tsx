"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { SearchInput } from "@/components/SearchInput";

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  url: string;
}

const MOCK_RESULTS: SearchResult[] = [
  {
    id: "1",
    title: "Tin tức Vietbank tháng 3/2026 - Triển khai kế hoạch kinh doanh quý 2",
    excerpt: "Ngân hàng TMCP Vietbank vừa tổ chức cuộc họp đánh giá kết quả kinh doanh tháng 3 và triển khai kế hoạch quý 2/2026...",
    category: "Tin tức",
    date: "19/03/2026",
    url: "/",
  },
  {
    id: "2",
    title: "Lịch sự kiện nội bộ quý 1/2026",
    excerpt: "Danh sách các sự kiện nội bộ dự kiến diễn ra trong quý 1 năm 2026...",
    category: "Sự kiện",
    date: "15/03/2026",
    url: "/",
  },
  {
    id: "3",
    title: "Tuyển dụng nhân sự năm 2026 - 50 vị trí các cấp",
    excerpt: "Vietbank thông báo tuyển dụng 50 vị trí việc làm các cấp tại chi nhánh và phòng giao dịch trên toàn quốc...",
    category: "Tuyển dụng",
    date: "10/03/2026",
    url: "/nguoi-vietbank",
  },
  {
    id: "4",
    title: "Văn hóa doanh nghiệp Vietbank - Đồng hành phát triển",
    excerpt: "Vietbank luôn coi trọng việc xây dựng văn hóa doanh nghiệp, tạo môi trường làm việc chuyên nghiệp và thân thiện...",
    category: "Văn hóa",
    date: "05/03/2026",
    url: "/nguoi-vietbank",
  },
  {
    id: "5",
    title: "Thông báo lịch nghỉ lễ 30/4 và 1/5",
    excerpt: "Thông báo về việc nghỉ lễ kỷ niệm ngày 30/4 và 1/5 dành cho toàn thể CBNV...",
    category: "Thông báo",
    date: "01/03/2026",
    url: "/",
  },
  {
    id: "6",
    title: "Hoạt động thiện nguyện mùa xuân 2026 - Trao yêu thương",
    excerpt: "Đoàn Thanh niên Vietbank tổ chức chương trình thiện nguyện mùa xuân tại các tỉnh miền Trung...",
    category: "Cộng đồng",
    date: "28/02/2026",
    url: "/",
  },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

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
        setIsSearching(false);
      }, 500);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="bg-primary py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-white mb-6">Tìm kiếm</h1>
          <SearchInput className="bg-white rounded-xl" />
          {query && (
            <p className="text-white/80 mt-4 text-sm">
              Kết quả tìm kiếm cho &quot;<span className="font-semibold">{query}</span>&quot;
            </p>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {isSearching ? (
          <div className="text-center py-12">
            <span className="material-symbols-outlined animate-spin text-primary text-4xl">
              sync
            </span>
            <p className="text-slate-500 mt-4">Đang tìm kiếm...</p>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-4">
            <p className="text-slate-500 text-sm mb-6">
              Tìm thấy {results.length} kết quả
            </p>
            {results.map((result) => (
              <Link
                key={result.id}
                href={result.url}
                className="block bg-white dark:bg-slate-800 rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                    {result.category}
                  </span>
                  <span className="text-xs text-slate-400">{result.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 hover:text-primary transition-colors">
                  {result.title}
                </h2>
                <p className="text-sm text-slate-500 line-clamp-2">{result.excerpt}</p>
              </Link>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-slate-300 text-5xl mb-4">
              search_off
            </span>
            <p className="text-slate-500">Không tìm thấy kết quả nào</p>
            <p className="text-sm text-slate-400 mt-1">
              Thử từ khóa khác hoặc kiểm tra chính tả
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-slate-300 text-5xl mb-4">
              search
            </span>
            <p className="text-slate-500">Nhập từ khóa để tìm kiếm</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <span className="material-symbols-outlined animate-spin text-primary text-4xl">
          sync
        </span>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}