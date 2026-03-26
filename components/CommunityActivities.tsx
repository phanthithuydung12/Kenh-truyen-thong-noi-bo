"use client";

import Link from "next/link";

interface Activity {
  title: string;
  imageUrl: string;
  category: string;
  categoryColor: string;
  time: string;
}

const activities: Activity[] = [
  {
    title: 'Chương trình "Vietbank và những bước chân thiện nguyện" tại vùng cao',
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ac4EOfWfBI4eco7SnIV9Ulx5wpFoFiAnToRFJ_Iu0Icq8im2oOetDc88I61212hGUxhwDjeh3LstG7HMBqJ5Yu_7FI8TDC2B3tPxTLk9OEMGvkD8erWGOg-6HPQx-wacabSnOYphtO5v8LqV1WV4fpb54aiGVX54ISokwgazwfBWYbfQwVEkIQvaoueX4Q8B7qD0sI1kZEp_dUzMDo3tzd1PHJDJkBCcMgQfcJ9PA-zwrrJ_dmQS3vcxXJ1oMoVk5HhXet2mliYt",
    category: "Từ thiện",
    categoryColor: "text-primary",
    time: "4 giờ trước",
  },
  {
    title: "CBNV Vietbank hưởng ứng phong trào Tết trồng cây vì môi trường xanh",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzFaksZyFkSxsPC8IGMXSW9JZ671Zpj9_6H-j4vqvd5y_isd5kjvOMzud7QGr050hXf5iYYFPiOAYpUirtZe88s7MSygyDCryPf0YnoA7aZJVZV-QtB7kmR1oREWME1X0XcpQQsb0d9hL6j8B64AL-B3X3IU6-thIPnvKrAE1x73kZ85dyIlVUQdr5FgGtMHiO7Hp6EtZG-O-pM5P-UcJbOHvMXADhsZ9wDgQmbpfz6ioMKuDyOiKcHo1gVhsB0tYROlqk2cvoMTcf",
    category: "Môi trường",
    categoryColor: "text-green-600 dark:text-green-400",
    time: "1 ngày trước",
  },
];

export function CommunityActivities() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 text-2xl font-extrabold">
          <span className="h-6 w-1.5 bg-primary rounded-full"></span>
          Hoạt động cộng đồng
        </h3>
        <Link href="#" className="text-sm font-semibold text-primary hover:underline">
          Xem tất cả
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors"
          >
            <div
              className="size-28 flex-shrink-0 overflow-hidden rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url('${activity.imageUrl}')` }}
            ></div>
            <div className="flex flex-col justify-center">
              <span className={`text-[10px] font-bold ${activity.categoryColor} uppercase tracking-widest mb-1`}>
                {activity.category}
              </span>
              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-base line-clamp-2 leading-tight mb-2">
                {activity.title}
              </h4>
              <p className="text-xs text-slate-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
