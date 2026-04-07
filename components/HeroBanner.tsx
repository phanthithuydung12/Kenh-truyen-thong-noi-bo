"use client";

export function HeroBanner() {
  return (
    <section>
      <div className="relative overflow-hidden rounded-2xl aspect-[21/9] lg:aspect-[2.4/1] group shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtgF_STXYl4S9nBxM2yaT91lES9dw_gqQO3SbFb6ny_3uGKNfhfSualjcsETr80yNqtxwl_yzXWQ556qyjbiPcJ65WktlOV6MGCu6OJy7iB7fzaghc8nO38GqwS_oSurvrpPGOZ7FIjMcYcOR-lnkNuKd4KitXP3qsStN86Q1ZwOdBIX61Xnl_oBPUqjXPlVZ7WrbUzbNzQ2s8Ip5OhhO2Yelnk4BikbHZGRXpwb63aIZjbalo3qiNHTMV4fMYo7TK2OCHQLwPet90')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-6 left-8 right-8">
          <span className="mb-3 inline-block rounded bg-primary px-3 py-1 text-xs font-bold uppercase text-white">
            Tiêu điểm
          </span>
          <h2 className="font-bold text-white leading-tight max-w-2xl text-3xl lg:text-4xl font-extrabold">
            Vietbank vươn tầm khát vọng: Kỷ niệm 19 năm thành lập và phát triển rực rỡ
          </h2>
          <p className="mt-2 text-slate-200 hidden lg:block line-clamp-2 max-w-xl">
            Hành trình 19 năm kiến tạo những giá trị bền vững và không ngừng đổi mới để phục vụ khách hàng tốt hơn mỗi ngày.
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <div className="h-1.5 w-8 rounded-full bg-white"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/40"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/40"></div>
        </div>
      </div>
    </section>
  );
}
