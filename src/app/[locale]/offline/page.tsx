import { Link } from "@/i18n/routing";
import { WifiOff, RefreshCw } from "lucide-react";

export default function OfflinePage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center mx-auto">
          <WifiOff className="w-10 h-10 text-[#1E3A5F]" />
        </div>
        <h1 className="text-2xl font-bold text-[#1E3A5F]">
          Интернет холболтоо шалгана уу
        </h1>
        <p className="text-[#4A5568] max-w-md mx-auto">
          Та одоогоор офлайн байна. Интернет холболтоо шалгаад дахин оролдоно уу.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white px-6 py-3 rounded-lg font-semibold"
        >
          <RefreshCw className="w-4 h-4" />
          Дахин оролдох
        </Link>
      </div>
    </div>
  );
}
