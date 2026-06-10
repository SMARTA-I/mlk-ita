import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Тоног төхөөрөмж | MLK-ITA",
  description: "Үйлдвэрийн тоног төхөөрөмжийн бүртгэл",
};

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-[#1E3A5F] mb-8">Тоног төхөөрөмж</h1>
      <p className="text-lg text-[#4A5568] mb-8">
        Бидний удирдлагын системд бүртгэгдсэн тоног төхөөрөмжүүдийг эндээс харах боломжтой.
        QR кодоор хянах, засварын түүх харах боломжтой.
      </p>
      <div className="bg-[#F7FAFC] rounded-xl p-8">
        <p className="text-[#4A5568]">Тоног төхөөрөмжийн жагсаалт энд харагдана...</p>
      </div>
    </div>
  );
}
