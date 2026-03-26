import { NextRequest, NextResponse } from "next/server";

const MOCK_DATA = [
  { id: "1", title: "Tin tức Vietbank tháng 3/2026", category: "Tin tức", url: "/" },
  { id: "2", title: "Lịch sự kiện nội bộ quý 1", category: "Sự kiện", url: "/" },
  { id: "3", title: "Tuyển dụng nhân sự 2026", category: "Tuyển dụng", url: "/nguoi-vietbank" },
  { id: "4", title: "Văn hóa doanh nghiệp Vietbank", category: "Văn hóa", url: "/nguoi-vietbank" },
  { id: "5", title: "Thông báo lịch nghỉ lễ 30/4", category: "Thông báo", url: "/" },
  { id: "6", title: "Hoạt động thiện nguyện mùa xuân", category: "Cộng đồng", url: "/" },
  { id: "7", title: "Chương trình đào tạo nhân viên", category: "Đào tạo", url: "/" },
  { id: "8", title: "Kết quả thi đua tháng 2/2026", category: "Thi đua", url: "/" },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q")?.toLowerCase() || "";

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results = MOCK_DATA.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  return NextResponse.json({ results });
}