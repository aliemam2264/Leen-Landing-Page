# Leen Clinic Landing Page

Landing page جاهزة لعيادة تجميل / جلدية / ليزر مبنية بـ:

- Next.js
- Tailwind CSS
- shadcn-style UI components
- WhatsApp booking بدون Backend
- RTL Arabic layout
- ألوان مبنية على اللوجو: النبيتي + البرتقالي

## تشغيل المشروع

```bash
npm install
npm run dev
```

افتح:

```bash
http://localhost:3000
```

## تعديل البيانات الأساسية

كل البيانات المهمة موجودة هنا:

```bash
lib/data.ts
```

منه تقدر تغير:

- رقم واتساب
- اسم العيادة
- العنوان
- مواعيد العمل
- روابط السوشيال
- الخدمات
- الأسعار
- تعريف كل خدمة
- الفوائد
- حالات الاستخدام
- أجهزة الليزر
- آراء العملاء

## تغيير رقم واتساب

افتح `lib/data.ts` وعدل:

```ts
whatsappNumber: "201000000000"
```

اكتب الرقم بصيغة دولية بدون `+`.

مثال مصر:

```ts
whatsappNumber: "201012345678"
```

## تغيير الصور

الصور كلها Placeholder في:

```bash
public/images
```

استبدل الملفات بنفس الأسماء أو عدل المسارات من `lib/data.ts`.

أهم الصور:

- `hero-placeholder.svg`
- `before-placeholder.svg`
- `after-placeholder.svg`
- `device-placeholder.svg`
- `clinic-placeholder-1.svg`
- `clinic-placeholder-2.svg`
- `clinic-placeholder-3.svg`
- `clinic-placeholder-4.svg`

## أماكن مهمة في الكود

```bash
app/page.tsx                 الصفحة الرئيسية
app/layout.tsx               SEO Metadata
app/globals.css              ألوان وثيم الموقع
components/Logo.tsx          اللوجو SVG شفاف
components/ServiceExplorer.tsx الخدمات والأقسام
components/BeforeAfterSlider.tsx مقارنة قبل وبعد
components/BookingForm.tsx   فورم واتساب
```

## Deploy على Vercel

1. ارفع المشروع على GitHub.
2. افتح Vercel.
3. اختار New Project.
4. اختار الريبو.
5. Deploy.
6. اربط الدومين من Settings > Domains.

## لو عايز Static Export للـ cPanel

افتح `next.config.mjs` وفعل السطر:

```js
output: 'export'
```

ثم شغل:

```bash
npm run build
```

هيطلع فولدر `out` تقدر ترفعه على الاستضافة كملفات Static.

## ملاحظة طبية مهمة

النصوص مكتوبة بصيغة تسويقية آمنة بدون وعود طبية قاطعة. يفضل مراجعة الطبيب/العيادة قبل النشر النهائي.


## Troubleshooting

لو ظهر خطأ `Cannot find module 'autoprefixer'` شغّل:

```bash
npm install
# أو
npm install -D autoprefixer
```

تمت إضافة `autoprefixer` داخل `devDependencies` في `package.json`.
