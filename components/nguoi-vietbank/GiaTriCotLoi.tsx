"use client";

interface CoreValue {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
}

const coreValues: CoreValue[] = [
  {
    id: 1,
    icon: "favorite",
    title: "TÂM",
    subtitle: "Tâm huyết - Tận tâm",
    description: "Làm việc với sự tận tâm, hết lòng vì sự phát triển của khách hàng và ngân hàng. Mỗi hành động đều xuất phát từ trái tim và trách nhiệm.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: 2,
    icon: "bolt",
    title: "TỐC",
    subtitle: "Nhanh nhạy - Linh hoạt",
    description: "Phản ứng nhanh với thị trường, linh hoạt thích ứng với thay đổi. Luôn sẵn sàng đổi mới để đáp ứng nhu cầu khách hàng kịp thời.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    icon: "workspace_premium",
    title: "TÍN",
    subtitle: "Uy tín - Đáng tin cậy",
    description: "Xây dựng niềm tin thông qua hành động minh bạch, chính trực. Cam kết thực hiện đúng những gì đã hứa với khách hàng và đối tác.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    icon: "psychology",
    title: "TRÍ",
    subtitle: "Sáng tạo - Đổi mới",
    description: "Không ngừng học hỏi, sáng tạo và đổi mới. Áp dụng công nghệ và giải pháp thông minh để tạo ra giá trị vượt trội.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 5,
    icon: "eco",
    title: "TRÁCH NHIỆM",
    subtitle: "Với cộng đồng & xã hội",
    description: "Đóng góp tích cực cho sự phát triển bền vững của cộng đồng và xã hội. Kinh doanh gắn liền với trách nhiệm xã hội.",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function GiaTriCotLoi() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Giá trị cốt lõi Vietbank
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Những giá trị định hướng mọi hoạt động và quyết định của chúng tôi, 
          là nền tảng cho sự phát triển bền vững và thành công lâu dài.
        </p>
      </div>

      {/* Core Values Cards */}
      <div className="grid grid-cols-1 gap-6">
        {coreValues.map((value, index) => (
          <div
            key={value.id}
            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Icon Section */}
              <div className={`flex items-center justify-center p-8 md:w-48 bg-gradient-to-br ${value.gradient}`}>
                <div className="text-center">
                  <span className="material-symbols-outlined text-white text-6xl mb-2 block">
                    {value.icon}
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-wider">
                    {value.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8">
                <div className="flex items-start gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {value.subtitle}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">Sống với giá trị - Thành công bền vững</h3>
        <p className="text-white/90 max-w-2xl mx-auto">
          Những giá trị cốt lõi này không chỉ là khẩu hiệu mà là kim chỉ nam cho mọi hành động 
          của mỗi người Vietbank. Cùng nhau, chúng ta xây dựng một ngân hàng hiện đại, nhân văn và phát triển bền vững.
        </p>
      </div>
    </div>
  );
}
