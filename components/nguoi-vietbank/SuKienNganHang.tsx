"use client";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  attendees: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

const events: Event[] = [
  {
    id: 1,
    title: "Đại hội cổ đông thường niên 2026",
    date: "25/03/2026",
    location: "Trung tâm Hội nghị Quốc gia, Hà Nội",
    description: "Tổng kết hoạt động năm 2025 và định hướng chiến lược phát triển năm 2026",
    attendees: 500,
    status: 'upcoming',
  },
  {
    id: 2,
    title: "Chương trình Team Building Q1/2026",
    date: "20/03/2026",
    location: "Khu du lịch sinh thái Sóc Sơn",
    description: "Hoạt động gắn kết tập thể, rèn luyện tinh thần đồng đội và kỹ năng làm việc nhóm",
    attendees: 200,
    status: 'ongoing',
  },
  {
    id: 3,
    title: "Hội thảo chuyển đổi số trong ngân hàng",
    date: "10/03/2026",
    location: "Khách sạn Lotte, TP.HCM",
    description: "Chia sẻ kinh nghiệm và xu hướng công nghệ trong chuyển đổi số ngành ngân hàng",
    attendees: 150,
    status: 'completed',
  },
  {
    id: 4,
    title: "Lễ vinh danh nhân viên xuất sắc 2025",
    date: "28/02/2026",
    location: "Auditorium Vietbank Tower",
    description: "Tôn vinh những cá nhân, tập thể có thành tích xuất sắc trong năm 2025",
    attendees: 300,
    status: 'completed',
  },
];

export function SuKienNganHang() {
  const getStatusBadge = (status: Event['status']) => {
    switch (status) {
      case 'upcoming':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">Sắp diễn ra</span>;
      case 'ongoing':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">Đang diễn ra</span>;
      case 'completed':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700">Đã kết thúc</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Sự kiện ngân hàng
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Các sự kiện và hoạt động nội bộ của Vietbank
        </p>
      </div>

      {/* Events Timeline */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {getStatusBadge(event.status)}
                  <span className="flex items-center gap-1 text-sm text-slate-500">
                    <span className="material-symbols-outlined text-base">calendar_today</span>
                    {event.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {event.title}
                </h3>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-base mt-0.5">location_on</span>
                <span>{event.location}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-base mt-0.5">group</span>
                <span>{event.attendees} người tham dự</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {event.description}
            </p>

            {event.status === 'upcoming' && (
              <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                Đăng ký tham gia
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
