"use client";

interface CultureValue {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const cultureValues: CultureValue[] = [
  {
    id: 1,
    icon: "handshake",
    title: "Tôn trọng & Tin cậy",
    description: "Chúng tôi xây dựng môi trường làm việc dựa trên sự tôn trọng lẫn nhau và niềm tin vững chắc.",
    color: "bg-blue-500",
  },
  {
    id: 2,
    icon: "groups",
    title: "Đồng đội & Hợp tác",
    description: "Làm việc nhóm hiệu quả, cùng nhau đạt được mục tiêu chung và phát triển bền vững.",
    color: "bg-green-500",
  },
  {
    id: 3,
    icon: "trending_up",
    title: "Đổi mới & Sáng tạo",
    description: "Luôn tìm kiếm những giải pháp mới, cải tiến liên tục để dẫn đầu trong ngành.",
    color: "bg-purple-500",
  },
  {
    id: 4,
    icon: "verified",
    title: "Chính trực & Trách nhiệm",
    description: "Hành động với sự minh bạch, tuân thủ đạo đức nghề nghiệp và chịu trách nhiệm với mọi quyết định.",
    color: "bg-orange-500",
  },
];

export function VanHoaToChuc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Văn hóa tổ chức
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Những giá trị cốt lõi định hình nên văn hóa Vietbank
        </p>
      </div>

      {/* Culture Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cultureValues.map((value) => (
          <div
            key={value.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-lg transition-all"
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${value.color} text-white mb-4`}>
              <span className="material-symbols-outlined text-3xl">
                {value.icon}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              {value.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Content */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Môi trường làm việc
        </h2>
        <div className="space-y-3 text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
            <p className="text-sm">Không gian làm việc hiện đại, thoải mái với đầy đủ tiện nghi</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
            <p className="text-sm">Chế độ đào tạo và phát triển nghề nghiệp liên tục</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
            <p className="text-sm">Văn hóa work-life balance, quan tâm đến sức khỏe nhân viên</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
            <p className="text-sm">Cơ hội thăng tiến rõ ràng dựa trên năng lực và đóng góp</p>
          </div>
        </div>
      </div>
    </div>
  );
}
