# Business Requirements Document — MLK-ITA

> **Version:** 1.0
> **Date:** 2026-06-10
> **Author:** Business Analyst (AI)
> **Status:** Draft

---

## 1. Executive Summary

MLK-ITA нь үйлдвэрийн тоног төхөөрөмж болон автомашины засвар үйлчилгээний удирдлагын систем (CMMS) юм. Энэ сайт нь засварчин, инженерүүдэд зориулсан бөгөөд тоног төхөөрөмжийн бүртгэл, засвар үйлчилгээний дуудлага, QR кодоор хянах, санхүүгийн тайлан гаргах боломжтой.

## 2. Business Objectives & Success Metrics

| # | Objective | Success Metric | Target |
|---|-----------|---------------|--------|
| 1 | Тоног төхөөрөмжийн бүртгэлийг цахимжуулах | Бүртгэгдсэн тоног төхөөрөмжийн тоо | 100+ эхний сард |
| 2 | Засвар дуудлагыг хурдан шийдвэрлэх | Дуудлагын шийдвэрлэх хугацаа | < 4 цаг |
| 3 | Тайлан гаргах чадварыг сайжруулах | Тайлан гаргах хугацаа | < 1 минут |

## 3. Stakeholder Analysis

| Role | Name/Department | Responsibility |
|------|----------------|---------------|
| Admin | Систем админ | Хэрэглэгчид, эрх удирдах |
| Engineer | Инженер | Тоног төхөөрөмжийн засвар, тайлан |
| Mechanic | Засварчин | Тоног төхөөрөмж засварлах, дуудлага хүлээн авах |
| Finance | Санхүү | Зарлагын тайлан, төсөв |

## 4. Scope

### 4.1 In-scope
- Үйлдвэрүүд бүртгэх
- Шугам тоног төхөөрөмжүүд бүртгэх
- Тоног төхөөрөмж бүрт QR код олгох
- Эд анги, сэлбэг бүртгэх
- Засвар дуудлага үүсгэх, удирдах
- Засварын дугаар үүсгэх
- Санхүү рүү зарлага илгээх
- Тайлан хэсэг (бүх засвар үйлчилгээ)
- Автопарк удирдлага
- Монгол хэл дэмжих

### 4.2 Out-of-scope
- Олон хэл дэмжих (зөвхөн монгол)
- Mobile app
- Real-time chat
- Онлайн төлбөр

## 5. Target Audience & User Personas

### Primary Persona — Засварчин/Инженер
- **Demographics:** 25-50 нас, Монгол, техникийн мэргэжилтэн
- **Goals:** Тоног төхөөрөмжийг хурдан засварлах, дуудлага хүлээн авах
- **Pain Points:** Гар бичиг баримт, хайхад хэцүү, тайлан гаргах удаан
- **Tech Proficiency:** Дунд (компьютер, гар утас ашигладаг)

### Secondary Persona — Санхүүч
- **Demographics:** 30-45 нас, Монгол
- **Goals:** Зарлагын тайлан хянах, төсөв төлөвлөх
- **Pain Points:** Мэдээлэл хоцордог, тайлан бүрэн биш
- **Tech Proficiency:** Дунд

## 6. Site Information Architecture & Sitemap

### 6.1 Page Hierarchy
```text
Home
├── About (Бидний тухай)
├── Services (Үйлчилгээ)
├── Product (Бүтээгдэхүүн/Тоног төхөөрөмж)
│   ├── Equipment List
│   ├── QR Code Scanner
│   └── Parts Inventory
├── Contact (Холбоо барих)
└── Emergency (Дуудлага өгөх)
```

### 6.2 Navigation Structure
- **Header:** Home, About, Services, Product, Contact
- **Footer:** Холбоо барих, Нууцлалын бодлого, Бидний тухай
- **Mobile:** Hamburger menu

## 7. Functional Requirements

### 7.1 Section-specific Requirements

#### About (Бидний тухай)
- **Purpose:** Компанийн танилцуулга
- **Content:** Компанийн түүх, үнэт зүйлс, баг
- **CTA:** Бидэнтэй холбоо барих
- **Interactions:** Галерей, багийн гишүүдийн мэдээлэл

#### Services (Үйлчилгээ)
- **Purpose:** Үзүүлж буй үйлчилгээнүүдийг танилцуулах
- **Content:** Үйлдвэрийн засвар, автомашины засвар, урьдчилан сэргийлэх засвар
- **CTA:** Дуудлага өгөх
- **Interactions:** Үйлчилгээний дэлгэрэнгүй харах

#### Product (Тоног төхөөрөмж)
- **Purpose:** Тоног төхөөрөмжийн бүртгэл, хянах
- **Content:** Тоног төхөөрөмжийн жагсаалт, QR код, эд анги, сэлбэг
- **CTA:** Тоног төхөөрөмж нэмэх
- **Interactions:** QR код унших, шүүлтүүр, хайлт

#### Contact (Холбоо барих)
- **Purpose:** Холбоо барих мэдээлэл
- **Content:** Хаяг, утас, имэйл, байршил
- **CTA:** Дуудлага өгөх
- **Interactions:** Холбоо барих маягт

### 7.2 Content Management Requirements
- erxes CMS ашиглах
- Монгол хэл дэмжих
- Хуудас, пост, цэс удирдах

### 7.3 Multi-language Requirements
- Зөвхөн монгол хэл (mn)

### 7.4 User Account & Authentication
- erxes Client Portal ашиглан нэвтрэх
- Role-based access (Admin, Engineer, Mechanic, Finance)

## 8. Non-functional Requirements

### 8.1 Performance
- Page load time: < 3 seconds
- Time to First Byte (TTFB): < 200ms
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s

### 8.2 SEO
- Meta tags бүрэн
- Semantic HTML
- Sitemap

### 8.3 Accessibility
- WCAG 2.1 Level AA
- Keyboard navigation
- Screen reader дэмжих

### 8.4 Security
- HTTPS
- JWT authentication
- Input validation

### 8.5 Browser & Device Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Responsive design (mobile, tablet, desktop)

## 9. Design Direction

### 9.1 Visual Style
- Албан ёсны, цэвэрхэн
- KFC Mongolia сайтын загварыг хуулбарлах

### 9.2 Color Palette
- Primary: Тодорхойгүй (KFC Mongolia-оос олж авна)
- Secondary: Тодорхойгүй
- Accent: Тодорхойгүй
- Neutral: Тодорхойгүй

### 9.3 Typography
- Монгол кирилл үсэг дэмжих
- Албан ёсны, уншихад хялбар

### 9.4 Imagery & Photography
- Үйлдвэрийн тоног төхөөрөмжийн зураг
- Засварчин ажиллаж буй зураг
- QR кодын жишээ

## 10. CTA Strategy & Conversion Goals

| Location | CTA Text | Destination | Goal |
|----------|----------|------------|------|
| Hero | Дуудлага өгөх | /emergency | Дуудлага үүсгэх |
| Services | Дэлгэрэнгүй | /services | Үйлчилгээ үзэх |
| Product | Тоног төхөөрөмж нэмэх | /product | Бүртгэл хийх |
| Contact | Бидэнтэй холбогдох | /contact | Холбоо барих |

## 11. Success Metrics & Acceptance Criteria

### 11.1 Quantitative Metrics
- Тоног төхөөрөмж бүртгэл: 100+ эхний сард
- Дуудлагын шийдвэрлэлт: 90%+ эхний долоо хоногт
- Хэрэглэгчийн сэтгэл ханамж: 4.5/5

### 11.2 Qualitative Criteria
- Хэрэглэхэд хялбар
- Мэдээлэл олоход хурдан
- Тайлан гаргахад хялбар

## 12. Assumptions & Constraints

### Assumptions
- Хэрэглэгчид интернеттэй
- erxes SaaS ашиглах
- QR код сканнер ашиглах боломжтой

### Constraints
- Зөвхөн монгол хэл
- GitHub deploy л хийх
- KFC Mongolia сайтын загварыг хуулбарлах

## 13. References & Appendices

### 13.1 Reference Documents
- site.config.json
- KFC Mongolia: https://www.kfcmongolia.com/index

### 13.2 Glossary

| Term | Definition |
|------|-----------|
| CMMS | Computerized Maintenance Management System |
| QR Code | Quick Response Code |
| TTFB | Time to First Byte |
| LCP | Largest Contentful Paint |
