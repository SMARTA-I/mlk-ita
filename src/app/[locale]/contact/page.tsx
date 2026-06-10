import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Холбоо барих | MLK-ITA",
  description: "MLK-ITA-тай холбоо барих",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-[#1E3A5F] mb-8">Холбоо барих</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-6">Холбоо барих мэдээлэл</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#1E3A5F]" />
              <span>+976 11 11 1111</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#1E3A5F]" />
              <span>info@mlk-ita.mn</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#1E3A5F]" />
              <span>Улаанбаатар, Монгол</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-6">Мессеж илгээх</h2>

          <form className="space-y-4" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#4A5568] mb-1">
                Нэр
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
                placeholder="Таны нэр"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#4A5568] mb-1">
                Имэйл
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
                placeholder="Таны имэйл"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#4A5568] mb-1">
                Мессеж
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
                placeholder="Таны мессеж"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E3A5F] hover:bg-[#2D5A8E] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Илгээх
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
