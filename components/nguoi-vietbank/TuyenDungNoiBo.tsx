"use client";

interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  level: string;
  deadline: string;
  description: string;
}

const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: "Chuyên viên phân tích tín dụng",
    department: "Phòng Quản lý Rủi ro",
    location: "Hà Nội",
    type: 'full-time',
    level: "Nhân viên",
    deadline: "30/03/2026",
    description: "Phân tích hồ sơ tín dụng, đánh giá rủi ro và đề xuất phương án cho vay phù hợp.",
  },
  {
    id: 2,
    title: "Trưởng phòng Kinh doanh",
    department: "Chi nhánh Cần Thơ",
    location: "TP. Cần Thơ",
    type: 'full-time',
    level: "Quản lý",
    deadline: "25/03/2026",
    description: "Quản lý và điều hành hoạt động kinh doanh chi nhánh, phát triển mạng lưới khách hàng.",
  },
  {
    id: 3,
    title: "Kỹ sư phần mềm Backend",
    department: "Phòng Công nghệ Thông tin",
    location: "TP. Hồ Chí Minh",
    type: 'full-time',
    level: "Nhân viên - Chuyên viên",
    deadline: "31/03/2026",
    description: "Phát triển và bảo trì hệ thống Core Banking, API services và các ứng dụng nội bộ.",
  },
  {
    id: 4,
    title: "Chuyên viên Digital Marketing",
    department: "Phòng Marketing",
    location: "Hà Nội / TP.HCM",
    type: 'full-time',
    level: "Nhân viên",
    deadline: "28/03/2026",
    description: "Triển khai các chiến dịch marketing online, quản lý social media và tối ưu SEO/SEM.",
  },
];

export function TuyenDungNoiBo() {
  const getTypeLabel = (type: JobPosting['type']) => {
    switch (type) {
      case 'full-time':
        return 'Toàn thời gian';
      case 'part-time':
        return 'Bán thời gian';
      case 'contract':
        return 'Hợp đồng';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Tuyển dụng nội bộ
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Cơ hội phát triển nghề nghiệp tại Vietbank
          </p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-base">add</span>
          Đăng tin tuyển dụng
        </button>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobPostings.map((job) => (
          <div
            key={job.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {getTypeLabel(job.type)}
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {job.level}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500 mb-1">Hạn nộp</div>
                <div className="text-sm font-semibold text-red-600">{job.deadline}</div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-base mt-0.5">business</span>
                <span>{job.department}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-base mt-0.5">location_on</span>
                <span>{job.location}</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {job.description}
            </p>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                Ứng tuyển ngay
              </button>
              <button className="px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
          Chính sách tuyển dụng nội bộ
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Nhân viên hiện tại được ưu tiên xét tuyển các vị trí phù hợp với năng lực và mong muốn phát triển. 
          Hãy nắm bắt cơ hội để thăng tiến trong sự nghiệp của bạn!
        </p>
      </div>
    </div>
  );
}
