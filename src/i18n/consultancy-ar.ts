import type { ConsultancyDetail } from "@/lib/consultancy";

export const arabicMenu: Record<string, { label: string; description: string }> = {
  "blockchain-development": { label: "البلوك تشين", description: "منتجات لامركزية موثوقة." },
  "ui-ux-product-design": { label: "تصميم المنتجات", description: "تجارب رقمية واضحة وسهلة." },
  "custom-web-mobile-app-development": { label: "التطوير والتطبيقات", description: "منتجات ويب وجوال مصممة لاحتياجك." },
  "digital-transformation": { label: "التحول الرقمي", description: "ربط الأنظمة وسير العمل." },
  "internet-of-things": { label: "إنترنت الأشياء", description: "منصات للأجهزة المتصلة." },
  "it-project-management": { label: "إدارة المشاريع التقنية", description: "تنفيذ تقني منظم وواضح." },
  "prompt-engineering": { label: "هندسة الأوامر", description: "تفاعلات أكثر موثوقية مع الذكاء الاصطناعي." },
  "quality-assurance": { label: "ضمان الجودة", description: "اختبارات دقيقة للمنتجات." },
  "staff-augmentation": { label: "تعزيز فرق العمل", description: "خبرات إضافية حسب حاجة فريقك." },
  "vibe-code": { label: "التطوير السريع للأفكار", description: "اختبار الأفكار وتحويلها إلى نماذج." },
  "mvp-saas-product-development": { label: "المنتجات الأولية وSaaS", description: "إطلاق أسرع ونمو مدروس." },
  "internal-business-systems": { label: "أنظمة الأعمال الداخلية", description: "تبسيط العمليات المعقدة." },
  "cloud-devops-maintenance": { label: "السحابة وDevOps", description: "بنية تحتية موثوقة وقابلة للتوسع." },
  "it-consultation": { label: "استشارات تقنية المعلومات", description: "توجيه تقني مستقل." },
  "it-outsourcing": { label: "استشارات التعهيد التقني", description: "خطة عملية للشراكة في التنفيذ." },
  "managed-it": { label: "استشارات خدمات تقنية المعلومات المدارة", description: "تشغيل تقني مستمر وموثوق." },
  "design-consultancy": { label: "استشارات التصميم", description: "توجيه لتصميم المنتج وتجربته." },
  "ai-data-strategy": { label: "استشارات الذكاء الاصطناعي والبيانات", description: "أولويات واقعية للبيانات والذكاء الاصطناعي." },
  "product-strategy": { label: "استشارات استراتيجية المنتج", description: "قرارات أوضح لتطوير المنتج." },
  "tech-strategy": { label: "استشارات الاستراتيجية التقنية", description: "خيارات تقنية تناسب أهدافك." },
  "devops-consulting": { label: "استشارات DevOps", description: "تطوير أقوى وتشغيل أكثر استقرارًا." },
  "microservices-consulting": { label: "استشارات الخدمات المصغرة", description: "توجيه عملي لبنية الخدمات." },
  "iot-consultancy": { label: "استشارات إنترنت الأشياء", description: "تخطيط منصات الأجهزة المتصلة." },
  "business-intelligence": { label: "استشارات ذكاء الأعمال", description: "تقارير موثوقة تدعم القرار." },
};

export function localizeMenuItem<T extends { href: string; label: string; description: string }>(item: T, locale: string): T {
  if (locale !== "ar") return item;
  const slug = item.href.split("/").pop() ?? "";
  const translation = arabicMenu[slug];
  if (!translation) return item;
  if (item.href.startsWith("/services/") && slug === "digital-transformation") {
    return { ...item, label: "التحول الرقمي", description: "ربط الأنظمة وسير العمل." };
  }
  if (item.href.startsWith("/services/") && slug === "ui-ux-product-design" && item.label === "Design") {
    return { ...item, label: "التصميم", description: "تجارب منتجات واضحة." };
  }
  if (item.href.startsWith("/services/") && slug === "custom-web-mobile-app-development" && item.label === "Development") {
    return { ...item, label: "التطوير", description: "منتجات ويب وجوال." };
  }
  return { ...item, ...translation };
}

const descriptions: Record<string, { accent: string; overview: string }> = {
  "it-consultation": { accent: "بثقة ووضوح", overview: "توجيه تقني مستقل قبل أن يلتزم فريقك بالوقت والميزانية والموارد." },
  "it-outsourcing": { accent: "مع شريك التنفيذ المناسب", overview: "خطة واضحة للعمل مع شريك تقني خارجي مع بقاء القرار والرقابة بيد فريقك." },
  "managed-it": { accent: "بدعم تقني يمكن الاعتماد عليه", overview: "نموذج عملي لدعم الأنظمة الأساسية وحمايتها وتحديد المسؤوليات عنها." },
  "design-consultancy": { accent: "برؤية واضحة للمنتج", overview: "توجيه للتصميم يساعد فريقك على تحديد ما ينبغي بناؤه ولماذا." },
  "ai-data-strategy": { accent: "بخطة واقعية للذكاء الاصطناعي", overview: "نحدد أين تحقق البيانات والذكاء الاصطناعي قيمة فعلية، وما الذي يجب تأسيسه أولًا." },
  "digital-transformation": { accent: "من دون تعطيل العمل", overview: "خطة تحول مرحلية تربط الموظفين والعمليات والأنظمة بالأولويات الفعلية." },
  "product-strategy": { accent: "بأولويات أدق للمنتج", overview: "اتجاه واضح يوازن بين احتياجات المستخدمين والأهداف التجارية والقيود التقنية." },
  "tech-strategy": { accent: "بتقنيات تناسب عملك", overview: "استراتيجية تقنية تنطلق من نتائج العمل المطلوبة، لا من الأدوات الرائجة." },
  "devops-consulting": { accent: "بعمليات تطوير وتشغيل أقوى", overview: "طريق عملي لإصدارات أكثر أمانًا ومسؤوليات أوضح وتشغيل أكثر موثوقية." },
  "microservices-consulting": { accent: "ببنية قابلة للنمو", overview: "نساعدك على تقرير ما إذا كان تقسيم النظام إلى خدمات مناسبًا، وكيفية تنفيذه عند الحاجة." },
  "iot-consultancy": { accent: "بخطة للأجهزة المتصلة", overview: "استراتيجية تجمع المستخدمين والأجهزة والبيانات والاعتمادية والتشغيل." },
  "business-intelligence": { accent: "ببيانات يستفيد منها فريقك", overview: "أساس موثوق للتقارير يقدم إجابات قابلة للاستخدام، لا لوحة معلومات إضافية فحسب." },
};

export function localizeConsultancy(detail: ConsultancyDetail): ConsultancyDetail {
  const specific = descriptions[detail.slug];
  const title = arabicMenu[detail.slug].label;
  return {
    ...detail,
    metaTitle: `${title} | باراكود تكنولوجيز`,
    metaDescription: `${title} من باراكود تكنولوجيز: أولويات واضحة وتوجيه عملي وخطة قابلة للتنفيذ.`,
    hero: { heading: "اتخذ قرارك التالي", accent: specific.accent, body: specific.overview },
    overview: specific.overview,
    challenge: "نراجع الأشخاص المعنيين والأنظمة القائمة والقيود والنتيجة التي تسعى إليها. ثم نحدد مع فريقك خطوة تالية واضحة يمكنه تنفيذها.",
    outcomes: ["فهم مشترك للوضع الحالي", "أولويات مرتبطة بالنتيجة المطلوبة", "توصية توضح الخيارات وتبعاتها", "خطة عملية للخطوات التالية"],
    signals: ["قرار مهم تعرقله الضبابية", "سير عمل قائم يسبب تعطيلًا", "حاجة الفرق إلى توجه تقني مشترك"],
    audience: ["قادة الأعمال والتقنية", "فرق المنتجات والعمليات", "الفرق التي تستعد لتغيير مهم"],
    steps: [
      { title: "الفهم", detail: "نراجع الوضع والقرار المطلوب والقيود والأطراف المعنية." },
      { title: "رسم الصورة", detail: "نوضح الحالة الحالية والاعتماديات والمخاطر." },
      { title: "تحديد الأولويات", detail: "نركز على الإجراءات التي تحقق تقدمًا مفيدًا الآن." },
      { title: "التوصية", detail: "نوثق مسارًا واضحًا للمضي قدمًا وطريقة تطبيقه." },
    ],
    faqs: [
      { q: `ماذا تشمل ${title}؟`, a: "نحدد نطاق العمل بحسب القرار المطروح، ونتفق على الأطراف المعنية ونقاط المراجعة والمخرجات قبل البدء." },
      { q: "هل يمكنكم العمل مع فريقنا الداخلي أو مزود الخدمة الحالي؟", a: "نعم. نعمل مع فريقك وشركائك الحاليين، ونقدم تنظيمًا وتوجيهًا مستقلين حيث تكون فائدتهما أكبر." },
      { q: "ماذا يحدث بعد انتهاء العمل الاستشاري؟", a: "تتسلم توجهًا موثقًا وخطة للخطوات التالية. ويمكن لباراكود دعم التنفيذ عند الحاجة أو تسليم الخطة لفريقك الداخلي." },
    ],
  };
}
