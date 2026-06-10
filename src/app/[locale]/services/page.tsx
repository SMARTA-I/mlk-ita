import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Үйлчилгээ | MLK-ITA",
  description: "MLK-ITA-ийн үзүүлж буй үйлчилгээ",
};

const services = [
  {
    title: "Үйлдвэрийн засвар",
    description: "Тоног төхөөрөмжийн бүрэн засвар, шинэчлэлт",
  },
  {
    title: "Автомашины засвар",
    description: "Бүх төрлийн авто засвар, үйлчилгээ",
  },
  {
    title: "Урьдчилан сэргийлэх засвар",
    description: "Тогтмол үзлэг, засвар, хэвийн ажиллагааг хангах",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-[#1E3A5F] mb-8">Үйлчилгээ</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-[#F7FAFC] rounded-xl p-8 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
              {service.title}
            </h3>
            <p className="text-[#4A5568]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
