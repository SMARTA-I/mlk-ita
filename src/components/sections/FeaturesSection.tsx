"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { QrCode, FileText, Phone } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "qrTracking",
    description: "qrDesc",
  },
  {
    icon: FileText,
    title: "fullReports",
    description: "reportsDesc",
  },
  {
    icon: Phone,
    title: "emergencyCall",
    description: "emergencyDesc",
  },
];

export default function FeaturesSection() {
  const t = useTranslations("features");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-bold text-[#1E3A5F] text-center mb-12"
        >
          {t("title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F7FAFC] rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
                {t(feature.title)}
              </h3>

              <p className="text-[#4A5568]">
                {t(feature.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
