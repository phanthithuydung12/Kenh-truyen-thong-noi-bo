"use client";

interface Event {
  day: string;
  month: string;
  title: string;
  location: string;
  isActive: boolean;
}

const events: Event[] = [
  {
    day: "20",
    month: "Th10",
    title: "Kỷ niệm ngày Phụ nữ VN",
    location: "Hội trường Tầng 15",
    isActive: true,
  },
  {
    day: "25",
    month: "Th10",
    title: "Họp giao ban tháng 10",
    location: "Trực tuyến",
    isActive: false,
  },
];

export function EventsCalendar() {
  return (
    <section className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative">
      <div className="relative z-10">
        <h4 className="font-bold mb-4 text-xl font-extrabold">Sự kiện sắp tới</h4>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className={`flex gap-3 ${!event.isActive ? "opacity-60" : ""}`}>
              <div
                className={`rounded-lg p-2 flex flex-col items-center justify-center min-w-[50px] ${
                  event.isActive
                    ? "bg-primary/20 border border-primary/30"
                    : "bg-slate-700"
                }`}
              >
                <span className="text-lg font-bold leading-none">{event.day}</span>
                <span className={`text-[10px] uppercase font-bold ${event.isActive ? "text-primary" : "text-slate-400"}`}>
                  {event.month}
                </span>
              </div>
              <div>
                <p className="text-sm font-bold line-clamp-1">{event.title}</p>
                <p className="text-[10px] text-slate-400">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -right-8 -bottom-8 size-32 bg-primary/10 rounded-full blur-2xl"></div>
    </section>
  );
}
