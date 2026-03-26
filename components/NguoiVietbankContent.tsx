"use client";

import { useState } from "react";
import { BanTin360 } from "./nguoi-vietbank/BanTin360";
import { VanHoaToChuc } from "./nguoi-vietbank/VanHoaToChuc";
import { SuKienNganHang } from "./nguoi-vietbank/SuKienNganHang";
import { TuyenDungNoiBo } from "./nguoi-vietbank/TuyenDungNoiBo";
import { GiaTriCotLoi } from "./nguoi-vietbank/GiaTriCotLoi";

type Section = 'ban-tin-360' | 'van-hoa-to-chuc' | 'su-kien-ngan-hang' | 'tuyen-dung-noi-bo' | 'gia-tri-cot-loi';

interface NavItem {
  id: Section;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: 'ban-tin-360', label: 'Bản tin 360', icon: 'newsmode' },
  { id: 'van-hoa-to-chuc', label: 'Văn hóa tổ chức', icon: 'groups' },
  { id: 'su-kien-ngan-hang', label: 'Sự kiện ngân hàng', icon: 'event' },
  { id: 'tuyen-dung-noi-bo', label: 'Tuyển dụng nội bộ', icon: 'work' },
  { id: 'gia-tri-cot-loi', label: 'Giá trị cốt lõi', icon: 'star' },
];

export function NguoiVietbankContent() {
  const [activeSection, setActiveSection] = useState<Section>('ban-tin-360');

  const renderContent = () => {
    switch (activeSection) {
      case 'ban-tin-360':
        return <BanTin360 />;
      case 'van-hoa-to-chuc':
        return <VanHoaToChuc />;
      case 'su-kien-ngan-hang':
        return <SuKienNganHang />;
      case 'tuyen-dung-noi-bo':
        return <TuyenDungNoiBo />;
      case 'gia-tri-cot-loi':
        return <GiaTriCotLoi />;
      default:
        return <BanTin360 />;
    }
  };

  return (
    <main className="max-w-[1200px] mx-auto w-full px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
              Người Vietbank
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
