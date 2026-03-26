"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  title: string;
  category: string;
  url: string;
}

const MOCK_DATA: SearchResult[] = [
  { id: "1", title: "Tin tức Vietbank tháng 3/2026", category: "Tin tức", url: "/" },
  { id: "2", title: "Lịch sự kiện nội bộ quý 1", category: "Sự kiện", url: "/" },
  { id: "3", title: "Tuyển dụng nhân sự 2026", category: "Tuyển dụng", url: "/nguoi-vietbank" },
  { id: "4", title: "Văn hóa doanh nghiệp Vietbank", category: "Văn hóa", url: "/nguoi-vietbank" },
  { id: "5", title: "Thông báo lịch nghỉ lễ 30/4", category: "Thông báo", url: "/" },
  { id: "6", title: "Hoạt động thiện nguyện mùa xuân", category: "Cộng đồng", url: "/" },
  { id: "7", title: "Chương trình đào tạo nhân viên", category: "Đào tạo", url: "/" },
  { id: "8", title: "Kết quả thi đua tháng 2/2026", category: "Thi đua", url: "/" },
];

export function SearchInput({ className }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length >= 2) {
        setIsLoading(true);
        const filtered = MOCK_DATA.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsLoading(false);
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    setQuery("");
    setIsOpen(false);
    router.push(result.url);
  };

  const handleViewAll = () => {
    setIsOpen(false);
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          search
        </span>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="w-full rounded-xl border-none bg-slate-200/50 dark:bg-slate-800 py-2.5 pl-12 pr-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary transition-all"
          placeholder="Tìm kiếm..."
          type="text"
        />
        {isLoading && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <span className="material-symbols-outlined animate-spin text-slate-400">sync</span>
          </span>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
          {results.length > 0 ? (
            <>
              <div className="max-h-80 overflow-y-auto">
                {results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="w-full px-4 py-3 text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-3"
                  >
                    <span className="material-symbols-outlined text-slate-400 text-sm">
                      article
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-900 dark:text-slate-100 truncate">
                        {result.title}
                      </p>
                      <span className="text-xs text-slate-500">{result.category}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 p-3">
                <button
                  onClick={handleViewAll}
                  className="w-full text-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Xem tất cả kết quả
                </button>
              </div>
            </>
          ) : (
            <div className="p-4 text-center text-slate-500 text-sm">
              Không tìm thấy kết quả nào
            </div>
          )}
        </div>
      )}
    </div>
  );
}