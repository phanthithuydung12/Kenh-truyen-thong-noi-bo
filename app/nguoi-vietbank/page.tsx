import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { NguoiVietbankContent } from "@/components/NguoiVietbankContent";

export default function NguoiVietbankPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <NguoiVietbankContent />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
