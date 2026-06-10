import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бидний тухай | MLK-ITA",
  description: "MLK-ITA компанийн танилцуулга",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-[#1E3A5F] mb-8">Бидний тухай</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-[#4A5568] mb-6">
          MLK-ITA нь үйлдвэрийн тоног төхөөрөмжийн засвар үйлчилгээний чиглэлээр мэргэшсэн компани юм. 
          Бид мэргэжлийн засварчид, инженерүүдийн багаар олон жилийн туршлагатайгаар үйлчилгээ үзүүлж байна.
        </p>
        <p className="text-lg text-[#4A5568] mb-6">
          Бидний зорилго нь үйлдвэрлэлийн тоног төхөөрөмжийн найдвартай ажиллагааг хангах, 
          засвар үйлчилгээний чанарыг сайжруулах, мөн хэрэглэгчдийн сэтгэл ханамжийг нэмэгдүүлэх юм.
        </p>
      </div>
    </div>
  );
}
