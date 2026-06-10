"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="bg-[#F0F4F8] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-5xl font-bold text-[#1E3A5F] leading-tight"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-[#4A5568] max-w-xl"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1E3A5F] hover:bg-[#2D5A8E] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                {t("cta")}
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1E3A5F] px-8 py-4 rounded-lg font-semibold border border-[#E2E8F0] transition-colors"
              >
                {t("learnMore")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative">
            <div className="aspect-[4/3] bg-[#D1D5DB] rounded-2xl flex items-center justify-center">
              <span className="text-[#6B7280] text-lg">[Тоног төхөөрөмжийн зураг]</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
