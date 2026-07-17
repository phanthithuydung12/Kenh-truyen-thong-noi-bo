"use client";

import { useState } from "react";
import { BanTin360 } from "./nguoi-novacore/BanTin360";
import { VanHoaToChuc } from "./nguoi-novacore/VanHoaToChuc";
import { SuKienCongNghe } from "./nguoi-novacore/SuKienCongNghe";
import { GiaTriCotLoi } from "./nguoi-novacore/GiaTriCotLoi";

type Section = 'ban-tin-360' | 'van-hoa-to-chuc' | 'su-kien-cong-nghe' | 'gia-tri-cot-loi';

interface NavItem {
  id: Section;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: 'ban-tin-360', label: 'Bản tin 360', icon: 'newsmode' },
  { id: 'van-hoa-to-chuc', label: 'Văn hóa tổ chức', icon: 'groups' },
  { id: 'su-kien-cong-nghe', label: 'Sự kiện công nghệ', icon: 'event' },
  { id: 'gia-tri-cot-loi', label: 'Giá trị cốt lõi', icon: 'star' },
];

export function NguoiNovaCoreContent() {
  const [activeSection, setActiveSection] = useState<Section>('ban-tin-360');

  const renderContent = () => {
    switch (activeSection) {
      case 'ban-tin-360':
        return <BanTin360 />;
      case 'van-hoa-to-chuc':
        return <VanHoaToChuc />;
      case 'su-kien-cong-nghe':
        return <SuKienCongNghe />;
      case 'gia-tri-cot-loi':
        return <GiaTriCotLoi />;
      default:
        return <BanTin360 />;
    }
  };

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
              Người NovaCore
            </h2>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}
