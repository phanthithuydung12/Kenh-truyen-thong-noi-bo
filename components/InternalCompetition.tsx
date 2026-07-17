"use client";

import Link from "next/link";

export function InternalCompetition() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 text-xl font-extrabold">
          <span className="h-5 w-1.5 bg-primary rounded-full"></span>
          Thi đua nội bộ
        </h3>
        <Link href="#" className="text-xs font-semibold text-primary flex items-center">
          Xếp hạng
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </Link>
      </div>
      <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 border border-primary/20">
        <div className="flex items-center gap-4 mb-5">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-white font-bold text-2xl shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-3xl">emoji_events</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
              Đang diễn ra
            </p>
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg leading-tight">
              Chiến dịch &quot;Bứt phá doanh số Q4&quot;
            </h4>
          </div>
        </div>
        <div className="space-y-3">
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[65%] rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-500">Còn lại 12 ngày</span>
            <span className="text-primary">65% Hoàn thành</span>
          </div>
        </div>
        <button className="w-full mt-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-md">
          Tham gia ngay
        </button>
      </div>
    </section>
  );
}
