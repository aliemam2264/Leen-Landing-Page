import {
  BadgeCheck,
  CalendarCheck,
  Camera,
  HeartPulse,
  Instagram,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Syringe,
  Waves
} from "lucide-react";

export const siteConfig = {
  brand: "Leen",
  arabicName: "مجمع لين الشرق الطبي",
  tagline: "أسنان · جلدية · تجميل · ليزر",
  phoneDisplay: "+20 100 000 0000",
  whatsappNumber: "201119401445",
  address: "اكتبي عنوان العيادة هنا - مثال: القاهرة، مصر",
  mapEmbedUrl: "https://www.google.com/maps",
  workingHours: "يوميًا من 12 ظهرًا حتى 10 مساءً",
  socials: [
    { label: "Instagram", href: "https://instagram.com", icon: Instagram },
    { label: "WhatsApp", href: "https://wa.me/201000000000", icon: MessageCircle },
    { label: "Location", href: "https://www.google.com/maps", icon: MapPin }
  ]
};

export const heroStats = [
  { value: "+1200", label: "حالة تم التعامل معها" },
  { value: "4.9/5", label: "تقييم العملاء" },
  { value: "+15", label: "خدمة جلدية وليزر" }
];

export const trustItems = [
  { title: "تعقيم كامل", description: "بيئة آمنة ومريحة قبل وأثناء الجلسة", icon: ShieldCheck },
  { title: "خطة مخصصة", description: "اختيار الخدمة حسب الحالة واحتياج البشرة", icon: HeartPulse },
  { title: "حجز سريع", description: "العميل يحجز مباشرة من خلال واتساب", icon: CalendarCheck }
];

export type Service = {
  title: string;
  price: string;
  short: string;
  definition: string;
  benefits: string[];
  uses: string[];
  icon: "syringe" | "sparkles" | "waves" | "camera";
};

export type ServiceCategory = {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
  services: Service[];
};

const pricePlaceholder = "يحدد بعد الاستشارة";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "derma",
    title: "الجلدية والتجميل",
    subtitle: "خدمات حقن، نضارة، تجديد البشرة، وتحسين المظهر الطبيعي.",
    accent: "منطقة النتائج الطبيعية",
    services: [
      {
        title: "فيلر",
        price: pricePlaceholder,
        short: "لتحسين الامتلاء وتحديد الملامح بشكل طبيعي.",
        definition: "جلسة حقن تجميلية تساعد على تعويض الحجم أو تحديد بعض المناطق مثل الشفاه، الخدود، أو خطوط الوجه حسب تقييم الطبيب.",
        benefits: ["تحسين تناسق الملامح", "نتيجة طبيعية عند اختيار الجرعة المناسبة", "جلسة سريعة نسبيًا"],
        uses: ["تحديد الشفاه", "امتلاء الخدود", "تحسين بعض خطوط الوجه"],
        icon: "syringe"
      },
      {
        title: "بوتكس",
        price: pricePlaceholder,
        short: "لتقليل مظهر التجاعيد التعبيرية بشكل ناعم.",
        definition: "إجراء تجميلي يستخدم بجرعات دقيقة لتخفيف نشاط بعض العضلات المسؤولة عن التجاعيد التعبيرية.",
        benefits: ["مظهر أكثر راحة", "تقليل خطوط الجبهة وحول العين", "لا يحتاج وقت تعافي طويل غالبًا"],
        uses: ["تجاعيد الجبهة", "خطوط العبوس", "خطوط حول العين"],
        icon: "syringe"
      },
      {
        title: "الريتش",
        price: pricePlaceholder,
        short: "بروتوكول نضارة وتجديد حسب حالة البشرة.",
        definition: "جلسة عناية وتجديد تساعد على دعم ترطيب البشرة وتحسين ملمسها ضمن خطة مناسبة لنوع البشرة.",
        benefits: ["نضارة أفضل", "ملمس أنعم", "مناسب كجلسات دورية للعناية"],
        uses: ["بهتان البشرة", "الإجهاد", "التحضير لمناسبة"],
        icon: "sparkles"
      },
      {
        title: "سالمون",
        price: pricePlaceholder,
        short: "جلسات مخصصة لدعم النضارة وتحسين جودة البشرة.",
        definition: "بروتوكول تجميلي يعتمد على تقييم الطبيب لاحتياج البشرة بهدف تحسين الترطيب والإشراقة.",
        benefits: ["إشراقة تدريجية", "تحسين حيوية البشرة", "مناسب للبشرة المجهدة"],
        uses: ["جفاف البشرة", "الملمس المرهق", "نقص النضارة"],
        icon: "sparkles"
      },
      {
        title: "إبرة العنبر",
        price: pricePlaceholder,
        short: "للنضارة والترطيب وتحسين ملمس البشرة.",
        definition: "جلسة تجميلية تستهدف دعم نضارة البشرة وترطيبها وتحسين مظهرها العام حسب الخطة المناسبة.",
        benefits: ["ترطيب أعمق", "تحسين الملمس", "مظهر أكثر حيوية"],
        uses: ["البشرة الباهتة", "الجفاف", "العناية قبل المناسبات"],
        icon: "syringe"
      },
      {
        title: "توريد الشفايف",
        price: pricePlaceholder,
        short: "لتحسين لون الشفاه ومظهرها بطريقة ناعمة.",
        definition: "جلسة تستهدف مظهر ولون الشفاه باستخدام بروتوكول مناسب حسب الحالة ودرجة التصبغ.",
        benefits: ["مظهر شفاه أفتح", "توحيد اللون", "نتيجة تدريجية حسب الحالة"],
        uses: ["تصبغ الشفاه", "عدم توحد اللون", "تحسين المظهر العام"],
        icon: "sparkles"
      },
      {
        title: "بلازما شعر",
        price: pricePlaceholder,
        short: "لدعم فروة الرأس وتحسين كثافة الشعر ضمن خطة علاجية.",
        definition: "جلسات تعتمد على تقييم حالة الشعر وفروة الرأس، وتستخدم ضمن برنامج لتحسين جودة الشعر وتقليل التساقط حسب الحالة.",
        benefits: ["دعم فروة الرأس", "تحسين جودة الشعر", "خطة متابعة تدريجية"],
        uses: ["تساقط الشعر", "ضعف الكثافة", "فروة الرأس المجهدة"],
        icon: "syringe"
      },
      {
        title: "فراكشنال ليزر",
        price: pricePlaceholder,
        short: "لتحسين آثار الحبوب والملمس والمسام حسب الحالة.",
        definition: "تقنية ليزر تستهدف تجديد سطح البشرة وتحفيز التحسن التدريجي في الملمس والمظهر العام.",
        benefits: ["تحسين آثار الحبوب", "تقليل مظهر المسام", "تجديد ملمس البشرة"],
        uses: ["آثار الحبوب", "ندبات سطحية", "ملمس غير منتظم"],
        icon: "waves"
      },
      {
        title: "ديرمابن",
        price: pricePlaceholder,
        short: "جلسة تحفيز وتجديد للبشرة بشكل تدريجي.",
        definition: "إجراء يستخدم لتحفيز البشرة وتحسين الملمس والنضارة ضمن برنامج علاجي مناسب.",
        benefits: ["نضارة تدريجية", "تحسين الملمس", "مناسب لبرامج العناية"],
        uses: ["آثار بسيطة", "بهتان", "تجديد البشرة"],
        icon: "sparkles"
      },
      {
        title: "بوتكس التعرق",
        price: pricePlaceholder,
        short: "للمساعدة في تقليل التعرق الزائد في مناطق محددة.",
        definition: "إجراء يستخدم بجرعات دقيقة في مناطق معينة للمساعدة في التحكم بالتعرق الزائد حسب تقييم الطبيب.",
        benefits: ["راحة يومية أكبر", "تقليل الإحراج", "إجراء سريع نسبيًا"],
        uses: ["تعرق الإبط", "تعرق اليدين", "التعرق الموضعي"],
        icon: "syringe"
      },
      {
        title: "بوتكس الابتسامة اللثوية",
        price: pricePlaceholder,
        short: "لتحسين مظهر الابتسامة عند ظهور اللثة بشكل زائد.",
        definition: "إجراء تجميلي دقيق يساعد على تقليل ظهور اللثة أثناء الابتسامة في بعض الحالات المناسبة.",
        benefits: ["ابتسامة أكثر اتزانًا", "إجراء غير جراحي", "نتيجة ناعمة عند اختيار الحالة المناسبة"],
        uses: ["Gummy Smile", "عدم تناسق الابتسامة", "تحسين مظهر الشفاه أثناء الابتسام"],
        icon: "syringe"
      }
    ]
  },
  {
    id: "cleaning",
    title: "تنظيف البشرة",
    subtitle: "جلسات تنظيف وترطيب للبشرة مع تجربة مريحة ومناسبة لنوع البشرة.",
    accent: "منطقة الإشراقة",
    services: [
      {
        title: "تنظيف عادي",
        price: pricePlaceholder,
        short: "تنظيف سريع ومنظم لاستعادة نضارة البشرة.",
        definition: "جلسة تنظيف مناسبة للعناية الدورية وإزالة الشوائب السطحية وتحسين الإحساس بالانتعاش.",
        benefits: ["إزالة شوائب سطحية", "إحساس بالانتعاش", "مناسب كروتين دوري"],
        uses: ["بشرة مرهقة", "قبل المناسبات", "عناية شهرية"],
        icon: "sparkles"
      },
      {
        title: "تنظيف عميق",
        price: pricePlaceholder,
        short: "جلسة أكثر تفصيلًا للبشرة التي تحتاج عناية مركزة.",
        definition: "تنظيف متعدد الخطوات يركز على الشوائب والدهون والمسام مع اختيار منتجات مناسبة للبشرة.",
        benefits: ["تنظيف أعمق", "تحسين مظهر المسام", "ترطيب وتهدئة"],
        uses: ["بشرة دهنية", "انسداد مسام", "ملمس غير ناعم"],
        icon: "sparkles"
      },
      {
        title: "تنظيف هيدروفيشال",
        price: pricePlaceholder,
        short: "تنظيف وترطيب وتجديد في جلسة واحدة مريحة.",
        definition: "جلسة تعتمد على خطوات تنظيف وترطيب تساعد على تحسين الإشراقة والنعومة بطريقة لطيفة.",
        benefits: ["ترطيب واضح", "نضارة فورية غالبًا", "مناسب لمعظم أنواع البشرة"],
        uses: ["جفاف", "بهتان", "تحضير قبل مناسبة"],
        icon: "waves"
      }
    ]
  },
  {
    id: "laser",
    title: "الليزر",
    subtitle: "حلول ليزر وتشقير باستخدام أجهزة متعددة حسب نوع البشرة والمنطقة.",
    accent: "منطقة النعومة",
    services: [
      {
        title: "تشقير حواجب",
        price: pricePlaceholder,
        short: "تحديد شكل الحواجب بمظهر ناعم وطبيعي.",
        definition: "خدمة تجميلية لتحسين مظهر الحواجب وتفتيح لون الشعر المحيط حسب الشكل المناسب للوجه.",
        benefits: ["مظهر مرتب", "شكل أكثر نعومة", "جلسة سريعة"],
        uses: ["تحديد الحاجب", "شعر فاتح حول الحاجب", "تحسين الإطار العام للعين"],
        icon: "sparkles"
      },
      {
        title: "تشقير وجه",
        price: pricePlaceholder,
        short: "لتفتيح مظهر الشعر الرفيع بالوجه بطريقة لطيفة.",
        definition: "جلسة تستهدف مظهر الشعر الرفيع في الوجه لتحسين توحد ونعومة شكل البشرة.",
        benefits: ["مظهر أنعم", "نتيجة لطيفة", "لا تحتاج وقت طويل"],
        uses: ["شعر الوجه الرفيع", "قبل المناسبات", "تحسين مظهر البشرة"],
        icon: "sparkles"
      },
      {
        title: "ليزر جسم",
        price: pricePlaceholder,
        short: "جلسات إزالة شعر بالليزر للجسم حسب المنطقة ونوع البشرة.",
        definition: "جلسات منظمة باستخدام جهاز مناسب للبشرة والمنطقة، مع متابعة للحصول على أفضل نتيجة ممكنة.",
        benefits: ["نعومة أطول", "تقليل كثافة الشعر تدريجيًا", "خطة جلسات واضحة"],
        uses: ["الذراعين", "الساقين", "الجسم الكامل أو مناطق محددة"],
        icon: "waves"
      }
    ]
  }
];

export const serviceIconMap = {
  syringe: Syringe,
  sparkles: Sparkles,
  waves: Waves,
  camera: Camera
};

export const devices = [
  {
    name: "سبلندر اكس المطور",
    note: "الجهاز الأسود",
    description: "جهاز ليزر حديث يستخدم ضمن بروتوكولات إزالة الشعر حسب نوع البشرة والمنطقة.",
    image: "/images/device-placeholder.svg"
  },
  {
    name: "جنتل برو",
    note: "Gentle Pro",
    description: "من الأجهزة المعروفة في جلسات الليزر، ويتم اختيار الإعدادات المناسبة بعد تقييم الحالة.",
    image: "/images/device-placeholder.svg"
  },
  {
    name: "جنتل ليزر",
    note: "Gentle Laser",
    description: "خيار مناسب لبعض أنواع البشرة والمناطق وفق تقييم الأخصائي.",
    image: "/images/device-placeholder.svg"
  },
  {
    name: "ديكا سنشيور",
    note: "DEKA / Cynosure",
    description: "جهاز ضمن مجموعة الأجهزة المتاحة لخدمات الليزر والعناية المتخصصة.",
    image: "/images/device-placeholder.svg"
  }
];

export const beforeAfterCases = [
  {
    title: "تحسين نضارة البشرة",
    service: "تنظيف عميق / هيدروفيشال",
    before: "/images/before-placeholder.svg",
    after: "/images/after-placeholder.svg"
  },
  {
    title: "تحسين آثار وملمس البشرة",
    service: "فراكشنال ليزر",
    before: "/images/before-placeholder.svg",
    after: "/images/after-placeholder.svg"
  },
  {
    title: "نتيجة طبيعية للملامح",
    service: "فيلر / بوتكس",
    before: "/images/before-placeholder.svg",
    after: "/images/after-placeholder.svg"
  }
];

export const gallery = [
  { title: "استقبال العيادة", src: "/images/clinic-placeholder-1.svg" },
  { title: "غرفة الجلسات", src: "/images/clinic-placeholder-2.svg" },
  { title: "أجهزة الليزر", src: "/images/clinic-placeholder-3.svg" },
  { title: "منطقة العناية", src: "/images/clinic-placeholder-4.svg" }
];

export const testimonials = [
  {
    name: "سارة م.",
    text: "تجربة مريحة جدًا، شرح واضح قبل الجلسة واهتمام بالتفاصيل.",
    rating: 5,
    icon: Star
  },
  {
    name: "ندى أ.",
    text: "المكان هادي ونضيف، والحجز عن طريق واتساب كان سريع وسهل.",
    rating: 5,
    icon: Star
  },
  {
    name: "ريم خ.",
    text: "الخدمة كانت مرتبة والنتيجة طبيعية ومريحة بالنسبة لي.",
    rating: 5,
    icon: Star
  }
];
